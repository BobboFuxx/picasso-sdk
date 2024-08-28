import EventEmitter from 'eventemitter3';
import { WalletApiEvents } from './types';
import Big from 'big.js';
import {
  keplrChains,
  networks,
  tokensPerChannel,
  TransferType,
} from '../../config';
import { fromBech32, fromHex, toBech32 } from '@cosmjs/encoding';
import { decodeAddress, encodeAddress } from '@polkadot/util-crypto';
import { TIMEOUT_IBC_MAX } from '../cosmos';
export const emitter = new EventEmitter<WalletApiEvents>();

export const memoBuilder = ({
  destChannel,
  destAddress,
}: {
  destChannel: number;
  destAddress: string;
}) => {
  return JSON.stringify({
    forward: {
      receiver: destAddress,
      port: 'transfer',
      channel: `channel-${destChannel}`,
      timeout: TIMEOUT_IBC_MAX,
      retries: 0,
    },
  });
};

/**@description Plus mininutes. Default : 10  */
export const getTimeOut = (plusMin: number = 30) => {
  const now = new Date();
  const minutesLater = new Date(now.getTime() + plusMin * 60 * 1000);
  return new Big(minutesLater.getTime()).mul(1000000).toFixed();
};

export const findSourceChannelId = (
  sourceChainId: string,
  destChainId: string
) => {
  return Object.keys(networks[sourceChainId]).find(
    (key) => key === destChainId
  ) as string | undefined;
};

interface TokenPerChannel {
  chainId: string;
  destinationId: number;
  tokens: string[];
}
interface Hop {
  chainId: string;
  channelId: number;
  receiver?: string;
}

export const getForbiddenChains = (fromChainId: string, toChainId: string) => {
  if (
    fromChainId === toChainId ||
    (fromChainId === 'solana' &&
      networks[toChainId].chainType === 'polkadot') ||
    (fromChainId === 'ethereum' && networks[toChainId].chainType === 'polkadot')
  )
    return true;
  return false;
};
// Function to find the shortest path with channel information
export const buildIbcPath = (fromChainId: string, toChainId: string): Hop[] => {
  if (getForbiddenChains(fromChainId, toChainId)) return null;
  // Set to keep track of visited chains
  const visited = new Set<string>();

  // Initialize the queue for BFS traversal
  // The queue stores [current chain, path] where path includes both chain and channel
  const queue: [string, Hop[]][] = [[fromChainId, []]];

  // Start BFS
  while (queue.length > 0) {
    // Get the first element from the queue
    const [currentChainId, path] = queue.shift()!;

    // If we reach the target chain, return the path
    if (currentChainId === toChainId) {
      return path;
    }

    // Mark the current chain as visited
    visited.add(currentChainId);

    // Iterate through all the connected chains of the current chain
    const connections = tokensPerChannel[currentChainId];
    if (connections) {
      for (const destinationId in connections) {
        const nextChainId = connections[destinationId].chainId;

        // Ensure that the chain has not been visited yet
        if (!visited.has(nextChainId)) {
          // Add the next hop (with chain and channel info) to the path
          const newPath: Hop[] = [
            ...path,
            { chainId: currentChainId, channelId: Number(destinationId) },
          ];

          // Add the next chain and the updated path to the queue
          queue.push([nextChainId, newPath]);
        }
      }
    }
  }

  // If we do not find a path to the target chain, return null
  return null;
};

// Example usage

/**@description If it returns undefined, that means it is not supported */
export const getSupportedType = (
  fromChainId: string,
  toChainId: string
): TransferType | undefined => {
  if (fromChainId === toChainId || !fromChainId || !toChainId) return;
  if (
    tokensPerChannel?.[fromChainId] &&
    Object.values(tokensPerChannel?.[fromChainId]).find(
      (item) => item?.chainId === toChainId
    )
  )
    return 'channel';

  //XCM tx
  if (
    networks[fromChainId].polkadot &&
    networks[toChainId].polkadot &&
    networks[fromChainId].polkadot?.relayChain ===
      networks[toChainId].polkadot?.relayChain
  )
    return 'xcm';
  if (buildIbcPath(fromChainId, toChainId)) {
    if (fromChainId === 'solana') return 'pfm';

    return 'multihop';
  }
  return;
};

export const getPolkadotAddressStr = (
  accountId: string,
  prefix?: number
): string => {
  try {
    return encodeAddress(accountId, prefix || 0);
  } catch (e) {
    return accountId;
  }
};

export const convertCosmosAddress = (
  address: string,
  newPrefix: string
): string => {
  try {
    // Bech32 주소를 디코딩하여 5바이트 접두사 제거
    const { data } = fromBech32(address);
    // 새로운 접두사로 다시 Bech32 주소 생성

    return toBech32(newPrefix, data);
  } catch (e) {
    throw new Error('유효하지 않은 Bech32 주소입니다.');
  }
};

/**@description When it comes to Cosmos network, coinType should be 114 to use this converter*/
export const convertAddressToStr = (
  address: string,
  fromChainId: string
): string => {
  if (address.startsWith('0x')) {
    // 2004: moonbeam, 2023:moonriver
    if (['ethereum', 'solana', '2004', '2023'].some((v) => v === fromChainId)) {
      return address;
    } else if (
      networks[origin].chainType === 'polkadot' &&
      networks[origin].polkadot?.ss58Format
    ) {
      return getPolkadotAddressStr(
        address,
        Number(networks[origin].polkadot.ss58Format)
      );
    } else if (
      networks[origin].chainType === 'cosmos' &&
      networks[origin].cosmos.bech32Config.bech32PrefixAccAddr
    ) {
      return convertCosmosAddress(
        address,
        networks[origin].cosmos.bech32Config.bech32PrefixAccAddr
      );
    } else {
      return address;
    }
  }
  return address;
};

export const createForwardPathRecursive = (
  ibcPath: Hop[],
  index = 0,
  timeout = TIMEOUT_IBC_MAX
) => {
  if (index === ibcPath.length - 1) {
    return {
      receiver: ibcPath[index].receiver,
      port: 'transfer',
      channel: `channel-${ibcPath[index].channelId}`,
      timeout,
      retries: 0,
    };
  }

  return {
    receiver: ibcPath[index].receiver,
    port: 'transfer',
    channel: `channel-${ibcPath[index].channelId}`,
    timeout,
    retries: 0,
    next: {
      forward: createForwardPathRecursive(ibcPath, index + 1),
    },
  };
};

// 예시 데이터
const ibcPath = [
  { chainId: 'osmosis-1', channelId: 1279 },
  { chainId: 'centauri-1', channelId: 52 },
];

// 실행 예시
const result = createForwardPathRecursive(ibcPath, 0);
console.log(JSON.stringify({ forward: result }, null, 2));
