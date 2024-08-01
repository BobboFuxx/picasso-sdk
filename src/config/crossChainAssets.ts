// [FAST TRACK] Add asset info to a network here to enable the asset on that network (add to at least 2 networks)
import ethereumAssets from './ethereumAssets';
import solanaAssets from './solanaAssets';
import { CrosschainAsset } from './types';

const crossChainAssets = {
  cosmos: {
    //  weird exception for ppica due to double origin in Picasso and Centauri
    ppica: {
      chainId: 'centauri-1',
      network: 'CENTAURI',
      decimals: 12,
      minimalDenom: 'ppica',
      denom: 'PICA',
    },
    uhuahua: {
      chainId: 'chihuahua-1',
      network: 'CHIHUAHUA',
      decimals: 6,
      minimalDenom: 'uhuahua',
      denom: 'HUAHUA',
    },
    uosmo: {
      chainId: 'osmosis-1',
      network: 'OSMOSIS',
      decimals: 6,
      minimalDenom: 'uosmo',
      denom: 'OSMO',
    },

    stutia: {
      chainId: 'stride-1',
      network: 'STRIDE',
      decimals: 6,
      minimalDenom: 'stutia',
      denom: 'stTIA',
    },
    'factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/umilkTIA':
      {
        chainId: 'osmosis-1',
        network: 'OSMOSIS',
        decimals: 6,
        minimalDenom:
          'factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/umilkTIA',
        denom: 'milkTIA',
      },
    'factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro':
      {
        chainId: 'neutron-1',
        network: 'NEUTRON',
        decimals: 6,
        minimalDenom:
          'factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro',
        denom: 'ASTRO',
      },
    'drop-core1zhs909jp9yktml6qqx9f0ptcq2xnhhj99cja03j3lfcsp2pgm86studdrz': {
      chainId: 'coreum-mainnet-1',
      network: 'COREUM',
      decimals: 6,
      minimalDenom:
        'drop-core1zhs909jp9yktml6qqx9f0ptcq2xnhhj99cja03j3lfcsp2pgm86studdrz',
      denom: 'XRP',
    },

    uatom: {
      chainId: 'cosmoshub-4',
      network: 'COSMOS',
      decimals: 6,
      minimalDenom: 'uatom',
      denom: 'ATOM',
    },
    ustrd: {
      chainId: 'stride-1',
      network: 'STRIDE',
      decimals: 6,
      minimalDenom: 'ustrd',
      denom: 'STRD',
    },
    stuatom: {
      chainId: 'stride-1',
      network: 'COSMOS',
      decimals: 6,
      minimalDenom: 'stuatom',
      denom: 'stATOM',
    },
    ustars: {
      chainId: 'stargaze-1',
      network: 'STARGAZE',
      decimals: 6,
      minimalDenom: 'ustars',
      denom: 'STARS',
    },
    ucre: {
      chainId: 'crescent-1',
      network: 'CRESCENT',
      decimals: 6,
      minimalDenom: 'ucre',
      denom: 'CRE',
    },
    uscrt: {
      chainId: 'secret-4',
      network: 'SECRET',
      decimals: 6,
      minimalDenom: 'uscrt',
      denom: 'SCRT',
    },
    untrn: {
      chainId: 'neutron-1',
      network: 'NEUTRON',
      decimals: 6,
      minimalDenom: 'untrn',
      denom: 'NTRN',
    },
    uumee: {
      chainId: 'umee-1',
      network: 'UMEE',
      decimals: 6,
      minimalDenom: 'uumee',
      denom: 'UMEE',
    },
    ubld: {
      chainId: 'agoric-3',
      network: 'AGORIC',
      decimals: 6,
      minimalDenom: 'ubld',
      denom: 'BLD',
    },
    ubcre: {
      chainId: 'crescent-1',
      network: 'CRESCENT',
      decimals: 6,
      minimalDenom: 'ubcre',
      denom: 'bCRE',
    },
    uist: {
      chainId: 'agoric-3',
      network: 'AGORIC',
      decimals: 6,
      minimalDenom: 'uist',
      denom: 'IST',
    },
    usei: {
      chainId: 'pacific-1',
      network: 'SEI',
      decimals: 6,
      minimalDenom: 'usei',
      denom: 'SEI',
    },
    'cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd': {
      chainId: 'secret-4',
      network: 'SECRET',
      decimals: 6,
      minimalDenom: 'usilk',
      denom: 'SILK',
    },
    'cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm': {
      chainId: 'secret-4',
      network: 'SECRET',
      decimals: 8,
      minimalDenom: 'ushd',
      denom: 'SHD',
    },

    utia: {
      chainId: 'celestia',
      network: 'CELESTIA',
      decimals: 6,
      minimalDenom: 'utia',
      denom: 'TIA',
    },
    ukuji: {
      chainId: 'kaiyo-1',
      network: 'KUJIRA',
      decimals: 6,
      minimalDenom: 'ukuji',
      denom: 'KUJI',
    },
    uqck: {
      chainId: 'quicksilver-2',
      network: 'QUICKSILVER',
      decimals: 6,
      minimalDenom: 'uqck',
      denom: 'QCK',
    },
    inj: {
      chainId: 'injective-1',
      network: 'INJECTIVE',
      decimals: 18,
      minimalDenom: 'inj',
      denom: 'INJ',
    },
    ucore: {
      chainId: 'coreum-mainnet-1',
      network: 'COREUM',
      decimals: 6,
      minimalDenom: 'ucore',
      denom: 'COREUM',
    },

    // ubedrock: {
    // 	chainId:  "injective-1",
    // 	network: 'INJECTIVE',
    // 	decimals: 18,
    // 	minimalDenom: 'inj',
    // 	denom: 'INJ',
    // },
    aarch: {
      chainId: 'archway-1',
      network: 'ARCHWAY',
      decimals: 18,
      minimalDenom: 'aarch',
      denom: 'ARCH',
    },
    [ethereumAssets['DAI'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'CENTAURI', // This asset is from ethereum, but exist at centauri since is is hub
      decimals: 18,
      minimalDenom: ethereumAssets['DAI'].erc20Address,
      denom: 'DAI',
    },
    wei: {
      chainId: 'ethereum-mainnet',
      network: 'CENTAURI', // This asset is from ethereum, but exist at centauri since is is hub
      decimals: 18,
      minimalDenom: 'wei',
      denom: 'ETH',
    },
    [ethereumAssets['FXS'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'CENTAURI', // This asset is from ethereum, but exist at centauri since is is hub
      decimals: 18,
      minimalDenom: ethereumAssets['FXS'].erc20Address,
      denom: 'FXS',
    },
    [ethereumAssets['sFRAX'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'CENTAURI', // This asset is from ethereum, but exist at centauri since is is hub
      decimals: 18,
      minimalDenom: ethereumAssets['sFRAX'].erc20Address,
      denom: 'sFRAX',
    },
    [ethereumAssets['sfrxETH'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'CENTAURI', // This asset is from ethereum, but exist at centauri since is is hub
      decimals: 18,
      minimalDenom: ethereumAssets['sfrxETH'].erc20Address,
      denom: 'sfrxETH',
    },
    [ethereumAssets['ENA'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'CENTAURI',
      decimals: 18,
      minimalDenom: ethereumAssets['ENA'].erc20Address,
      denom: 'ENA',
    },
    [ethereumAssets['FRAX'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'CENTAURI',
      decimals: 18,
      minimalDenom: ethereumAssets['FRAX'].erc20Address,
      denom: 'FRAX',
    },
    [ethereumAssets['frxETH'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'CENTAURI',
      decimals: 18,
      minimalDenom: ethereumAssets['frxETH'].erc20Address,
      denom: 'frxETH',
    },
    [ethereumAssets['wBTC'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'CENTAURI',
      decimals: 8,
      minimalDenom: ethereumAssets['wBTC'].erc20Address,
      denom: 'wBTC',
    },
    [ethereumAssets['stETH'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'CENTAURI',
      decimals: 18,
      minimalDenom: ethereumAssets['stETH'].erc20Address,
      denom: 'stETH',
    },
    [ethereumAssets['rETH'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'CENTAURI',
      decimals: 18,
      minimalDenom: ethereumAssets['rETH'].erc20Address,
      denom: 'rETH',
    },
    [ethereumAssets['crvUSD'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'CENTAURI',
      decimals: 18,
      minimalDenom: ethereumAssets['crvUSD'].erc20Address,
      denom: 'crvUSD',
    },
    [ethereumAssets['pxETH'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'CENTAURI',
      decimals: 18,
      minimalDenom: ethereumAssets['pxETH'].erc20Address,
      denom: 'pxETH',
    },
    [ethereumAssets['eETH'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'CENTAURI',
      decimals: 18,
      minimalDenom: ethereumAssets['eETH'].erc20Address,
      denom: 'eETH',
    },
    [ethereumAssets['ezETH'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'CENTAURI',
      decimals: 18,
      minimalDenom: ethereumAssets['ezETH'].erc20Address,
      denom: 'ezETH',
    },
    [ethereumAssets['USDe'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'CENTAURI',
      decimals: 18,
      minimalDenom: ethereumAssets['USDe'].erc20Address,
      denom: 'USDe',
    },
    [ethereumAssets['PEPE'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'CENTAURI',
      decimals: 18,
      minimalDenom: ethereumAssets['PEPE'].erc20Address,
      denom: 'PEPE',
    },
    [ethereumAssets['USDT Ethereum'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'CENTAURI',
      decimals: 6,
      minimalDenom: ethereumAssets['USDT Ethereum'].erc20Address,
      denom: 'USDT Ethereum',
    },
    [ethereumAssets['CRV'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'CENTAURI',
      decimals: 18,
      minimalDenom: ethereumAssets['CRV'].erc20Address,
      denom: 'CRV',
    },
    [solanaAssets['wSOL'].mintAddress]: {
      chainId: 'solana-mainnet',
      denom: 'wSOL', // It is named SOL at cosmos
      minimalDenom: solanaAssets['wSOL'].mintAddress,
      network: 'CENTAURI',
      decimals: 9, // need to check
    },
    [solanaAssets['USDT Solana'].mintAddress]: {
      chainId: 'solana-mainnet',
      network: 'CENTAURI',
      denom: 'USDT Solana',
      minimalDenom: solanaAssets['USDT Solana'].mintAddress,
      decimals: 6,
    },
    [solanaAssets['WIF'].mintAddress]: {
      chainId: 'solana-mainnet',
      network: 'CENTAURI',
      decimals: 6,
      minimalDenom: solanaAssets['WIF'].mintAddress, //fake
      denom: 'WIF',
    },
    [solanaAssets['BONK'].mintAddress]: {
      chainId: 'solana-mainnet',
      network: 'CENTAURI',
      decimals: 5,
      minimalDenom: solanaAssets['BONK'].mintAddress, //fake
      denom: 'BONK',
    },
    [solanaAssets['WHINE'].mintAddress]: {
      chainId: 'solana-mainnet',
      network: 'CENTAURI',
      decimals: 6,
      minimalDenom: solanaAssets['WHINE'].mintAddress, //  fake
      denom: 'WHINE',
    },
  } as const satisfies Record<string, CrosschainAsset>,
  dotsama: {
    '1': {
      chainId: '2087',
      denom: 'PICA',
      minimalDenom: 'ppica',
      network: 'PICASSO',
      decimals: 12,
    },
    '4': {
      chainId: '2087',
      network: 'PICASSO',
      minimalDenom: 'uKSM', //  fake
      denom: 'KSM',
      decimals: 12,
    },
    '44': {
      chainId: '2124',
      network: 'AMPLITUDE',
      minimalDenom: 'AMPE', //  fake
      denom: 'AMPE',
      decimals: 12,
    },
    '45': {
      chainId: '2124',
      network: 'AMPLITUDE',
      minimalDenom: 'XLM', //  fake
      denom: 'XLM',
      decimals: 12,
    },
    //  BLD on picasso
    '18': {
      chainId: '2087',
      network: 'PICASSO',
      decimals: 6,
      minimalDenom: 'uBLD', //  fake
      denom: 'BLD',
    },
    '20': {
      chainId: '2087',
      network: 'KUSAMA',
      minimalDenom: 'ulsKSM', //  fake
      denom: 'Liquid Staked Kusama',
      decimals: 12,
    },
    '23': {
      chainId: '2023',
      network: 'PICASSO',
      decimals: 18,
      minimalDenom: 'uMOVR', //  fake
      denom: 'MOVR',
    },
    '25': {
      chainId: '2087',
      network: 'PICASSO',
      minimalDenom: 'uIST', //  fake
      denom: 'IST',
      decimals: 6,
    },
    //  from KSM so this is originDenom
    '31': {
      chainId: '2001',
      denom: 'BNC_KSM',
      minimalDenom: 'uBNC_KSM', //  fake
      network: 'BIFROST_KUSAMA',
      decimals: 12,
    },
    '32': {
      chainId: '2001',
      denom: 'vKSM',
      minimalDenom: 'uvksm', //  fake
      network: 'BIFROST_KUSAMA',
      decimals: 12,
    },
    '35': {
      chainId: 'pacific-1',
      denom: 'SEI',
      minimalDenom: 'uSEI', //  fake
      network: 'SEI',
      decimals: 6,
    },
    '40': {
      chainId: '2004',
      network: 'PICASSO',
      decimals: 18,
      minimalDenom: 'uGLMR', //  fake
      denom: 'GLMR',
    },
    '130': {
      chainId: '2087',
      network: 'PICASSO',
      decimals: 6,
      minimalDenom: 'uUSDT Kusama', //  fake
      denom: 'USDT Kusama',
    },
    '149': {
      chainId: '2087',
      network: 'PICASSO',
      decimals: 6,
      minimalDenom: 'uUSDT Polkadot', //  fake
      denom: 'USDT Polkadot',
    },
    //ASTAR ASTR
    '2006': {
      chainId: '2006',
      network: 'ASTAR',
      decimals: 18,
      minimalDenom: 'uASTR', //  fake
      denom: 'ASTR',
    },
    // shiden SDN
    '2007': {
      chainId: '2007',
      network: 'SHIDEN',
      decimals: 18,
      minimalDenom: 'uSDN', //  fake
      denom: 'SDN',
    },
    '2125': {
      chainId: '2125',
      network: 'TINKERNET',
      decimals: 12,
      minimalDenom: 'uTNKR', //  fake
      denom: 'TNKR',
    },
    '167283': {
      chainId: '2023',
      network: 'PICASSO',
      decimals: 18,
      minimalDenom: 'uMOVR', //  fake
      denom: 'MOVR',
    },
    '792281': {
      chainId: '2004',
      network: 'COMPOSABLE',
      decimals: 18,
      minimalDenom: 'uGLMR', //  fake
      denom: 'GLMR',
    },
    //  Dot's ID in the Asset Registry on Composable, required since DOT outside of Picasso will have this baseDenom in denomTrace
    '79228162514264337593543950342': {
      chainId: '2019',
      network: 'COMPOSABLE',
      decimals: 10,
      minimalDenom: 'uDOT', //  fake
      denom: 'DOT',
    },
    '79228162514264337593543950351': {
      chainId: '2019',
      network: 'COMPOSABLE',
      decimals: 10,
      minimalDenom: 'ulsDOT', //  fake
      denom: 'lsDOT',
    },
    //  BLD on composable
    '79228162514264337593543950354': {
      chainId: '2019',
      network: 'COMPOSABLE',
      decimals: 6,
      minimalDenom: 'uBLD', //  fake
      denom: 'BLD',
    },
    //  IST on composable
    '79228162514264337593543950361': {
      chainId: '2019',
      network: 'COMPOSABLE',
      decimals: 6,
      minimalDenom: 'uIST', //  fake
      denom: 'IST',
    },
    // bnc polkadot on composable
    '79228162514264337593543950369': {
      chainId: '2019',
      network: 'COMPOSABLE',
      decimals: 12,
      minimalDenom: 'uBNC_DOT', //  fake
      denom: 'BNC_DOT',
    },
    // vDot on composable
    '79228162514264337593543950370': {
      chainId: '2019',
      network: 'COMPOSABLE',
      decimals: 10,
      minimalDenom: 'uvdot', //  fake
      denom: 'vDOT',
    },
    '79228162514264337593543950376': {
      chainId: '2004',
      network: 'COMPOSABLE',
      decimals: 18,
      minimalDenom: 'uGLMR', //  fake
      denom: 'GLMR',
    },
    //COMPOSABLE ASTR
    '79228162514264337593543952342': {
      chainId: '2006',
      network: 'COMPOSABLE',
      decimals: 18,
      minimalDenom: 'uASTR', //  fake
      denom: 'ASTR',
    },
  } as const satisfies Record<string, CrosschainAsset>,
  solana: {
    SOL: {
      chainId: 'solana-mainnet',
      denom: 'SOL',
      minimalDenom: 'SOL', // fake
      network: 'SOLANA',
      decimals: 9,
      realDecimals: 9,
    },
    J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 9,
      realDecimals: 9,
      minimalDenom: 'JitoSOL', // fake
      denom: 'JitoSOL',
    },
    mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 9,
      realDecimals: 9,
      minimalDenom: 'mSOL', // fake
      denom: 'mSOL',
    },
    ATeTQcUkWGs7AZ15mCiFUWCW9EUL7KpDZEHCN1Y8pump: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 6,
      realDecimals: 6,
      minimalDenom: 'WHINE', // fake
      denom: 'WHINE',
    },
    HausGKcq9G9zM3azwNmgZyzUvYeeqR8h8663PmZpxuDj: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 9,
      realDecimals: 9,
      minimalDenom: 'hausSOL', // fake
      denom: 'hausSOL',
    },
    bSo13r4TkiE4KumL71LsHTPpL2euBYLFx6h9HP3piy1: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 9,
      realDecimals: 9,
      minimalDenom: 'bSOL', // fake
      denom: 'bSOL',
    },
    LSTxxxnJzKDFSLr4dUkPcmCf5VyryEqzPLz5j4bpxFp: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 9,
      realDecimals: 9,
      minimalDenom: 'LST', // fake
      denom: 'LST',
    },
    BLZEEuZUBVqFhj8adcCFPJvPVCiCyVmh3hkJMrU8KuJA: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom: 'BLZE', // fake
      denom: 'BLZE',
    },
    edge86g9cVz87xcpKpy3J77vbp4wYd9idEV562CCntt: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom: 'edgeSOL', // fake
      denom: 'edgeSOL',
    },
    '5h6ssFpeDeRbzsEHDbTQNH7nVGgsKrZydxdSTnLm6QdV': {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom: 'cSOL', // fake
      denom: 'cSOL',
    },
    '3JFC4cB56Er45nWVe29Bhnn5GnwQzSmHVf6eUq9ac91h': {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom: 'cmSOL', // fake
      denom: 'cmSOL',
    },
    '6mFgUsvXQTEYrYgowc9pVzYi49XEJA5uHA9gVDURc2pM': {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom: 'cJitoSOL', // fake
      denom: 'cJitoSOL',
    },
    FZ8KVvJ1QiytR29ykNz6kkhV6tvsB7XdiKW2s14DftFt: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom: 'cbSOL', // fake
      denom: 'cbSOL',
    },
    Comp4ssDzXcLeu2MnLuGNNFC4cmLPMng8qWHPvzAMU1h: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom: 'compassSOL', // fake
      denom: 'compassSOL',
    },
    jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom: 'jupSOL', // fake
      denom: 'jupSOL',
    },
    he1iusmfkpAdwvxLNGV8Y1iSbj4rUy6yMhEA3fotn9A: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom: 'hSOL', // fake
      denom: 'hSOL',
    },
    So11111111111111111111111111111111111111112: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom: 'wSOL', // fake
      denom: 'wSOL',
    },
    EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 6,
      minimalDenom: 'WIF', // fake
      denom: 'WIF',
    },
    DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 5,
      minimalDenom: 'BONK', // fake
      denom: 'BONK',
    },
    Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 6,
      minimalDenom: 'USDT Solana', // fake
      denom: 'USDT Solana',
    },
    '6SYCn6Hj4X3XV6dzRk8vXa1UyZc4SBvAT7p3e1AcATAx': {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom:
        'transfer/channel-1/transfer/channel-52/0x6B175474E89094C44Da98b954EedeAC495271d0F',
      denom: 'DAI',
      realDecimals: 18,
    },
    EXZbXNMbdTbMYpr9J5MUDv29XnWfxLZYyCCtk2tCy7XV: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom: 'transfer/channel-1/transfer/channel-52/wei',
      denom: 'ETH',
      realDecimals: 18,
    },
    EHzGKxauSbvLD5xfX4P9StBdQWmyroferGg9aR6oDU9v: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 6,
      minimalDenom:
        'transfer/channel-1/transfer/channel-52/0xdAC17F958D2ee523a2206206994597C13D831ec7',
      denom: 'USDT Ethereum',
    },
    '4tjtYi8dCVkE539ANy3qUHhKdqkjzqhn2iW4WSZMfMa6': {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom:
        'transfer/channel-1/transfer/channel-52/0xD533a949740bb3306d119CC777fa900bA034cd52',
      denom: 'CRV',
      realDecimals: 18,
    },
    GrkjmJt3KECe6Yi11LZxY88BJ69KyQnRtC6EioFAF1rD: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 8,
      minimalDenom:
        'transfer/channel-1/transfer/channel-52/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
      denom: 'wBTC',
    },
    urez9EJo4YNdpQQxw6xrLfF1J3EqJSaVwPGHFNG338B: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom:
        'transfer/channel-1/transfer/channel-52/0xae78736Cd615f374D3085123A210448E74Fc6393',
      denom: 'rETH',
      realDecimals: 18,
    },
    EuBHrXZJa6ZNg6dfhiotxRoHpVpMg6ZsgNc6ZKJ9iUe2: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom:
        'transfer/channel-1/transfer/channel-52/0x674C6Ad92Fd080e4004b2312b45f796a192D27a0',
      denom: 'crvUSD',
      realDecimals: 18,
    },
    A9zVTbwXTwMA3WsYbB7mGKmDZp3UPfd64sjZfZQ8Lk49: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom:
        'transfer/channel-1/transfer/channel-52/0x853d955aCEf822Db058eb8505911ED77F175b99e',
      denom: 'FRAX',
      realDecimals: 18,
    },
    '6jnTywpWt1u6Jh65FTSgUVDxv7Kyfp3f1mwH426LXmB7': {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom:
        'transfer/channel-1/transfer/channel-52/0x3432a789b141E659d494c8E074aC4d3c2bDe6a9d',
      denom: 'FXS',
      realDecimals: 18,
    },
    Go2RiPCxrU3dWH7cs52pm2Q2R45HB2ACbYBZsx1vadZd: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom:
        'transfer/channel-1/transfer/channel-52/0x5E8422345238F34275888049021821E8E08CAa1f',
      denom: 'frxETH',
      realDecimals: 18,
    },
    E5Lz7Bi1KZD9VTYXsCZhkWDiztkNzPoX7Jk71xbTkEoA: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom:
        'transfer/channel-1/transfer/channel-52/0xac3E018457B222d93114458476f3E3416Abbe38F',
      denom: 'sfrxETH',
      realDecimals: 18,
    },
    '3AvDivzbMjfin9hSVUBjdYerKroX8jQuNyDVebdRiULE': {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom:
        'transfer/channel-1/transfer/channel-52/0xc8E9b3D2AD2C8A2f97DC68cC94a4e7A1429bB10e',
      denom: 'sFRAX',
      realDecimals: 18,
    },
    B1cm3Wf5ZNUdgZ1eaXaNdiy9DCmQudfmspRMBb2TqDjb: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom:
        'transfer/channel-1/transfer/channel-52/0x28CEd45aF1aFF4F5f26E9d07A6dE1170a49a5E06',
      denom: 'pxETH',
      realDecimals: 18,
    },
    CqzASJJsEA1TDvjCahP9pa7wPjqFEdouup6g5eNV71uv: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom:
        'transfer/channel-1/transfer/channel-52/0x3446F1cD03C04b1BBFcd8d579D68E3fB7793dB95',
      denom: 'eETH',
      realDecimals: 18,
    },
    Aa34MLrb7GfT5uMXnpT9oKnj11gGcXMq61b5kBzTvbnW: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom:
        'transfer/channel-1/transfer/channel-52/0xB749A7b4Ed5E5385418EC743aF6A88CF2641bC6D',
      denom: 'ENA',
      realDecimals: 18,
    },
    GM4RuF5gLcytcq36wNJkX3UBYRKP9hQwJyyRWm6d6o47: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom:
        'transfer/channel-1/transfer/channel-52/0xC2cB1040220768554cf699b0d863A3cd4324ce32',
      denom: 'USDe',
      realDecimals: 18,
    },
    uVYDrZeCeq5T5RBHZZWHfsG12SDCm4MPHX2h8iAcXRh: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom:
        'transfer/channel-1/transfer/channel-52/0xf14eEEdF22ca7c50a2A98E629E3a91C7f8456A35',
      denom: 'PEPE',
      realDecimals: 18,
    },
    '966vsqwoS3ZBrHesTyAvE7esFV2kaHaDFLLXs4asPdLJ': {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom: 'transfer/channel-1/ppica',
      denom: 'PICA',
      realDecimals: 12,
    },
    EpZeFE5ngedGVug3s1VQK9987FEsCY512VtKUKmfzidM: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 6,
      minimalDenom: 'transfer/channel-1/transfer/channel-3/uosmo',
      denom: 'OSMO',
    },
    '9gjHXkUVtDEPfxXXT9Jj3ZbYbFzS4zN92ewsCH8zGUKc': {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 6,
      minimalDenom: 'transfer/channel-1/transfer/channel-4/uatom',
      denom: 'ATOM',
    },
    '8aHZdc7qrKAPMey7B6VHx3U3xWFBs7BZhdLAYqZBQwea': {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 6,
      minimalDenom: 'transfer/channel-1/transfer/channel-5/stuatom',
      denom: 'stATOM',
    },
    '3bHxPkuJwztJyrZW2T6sZe8GkRjN1BXgw3ViHPcrQdCj': {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 6,
      minimalDenom: 'transfer/channel-1/transfer/channel-13/uist',
      denom: 'IST',
    },
    BajH8K75CHJrmT1hf6QGHSyY5r5tbJYSHrCb7uDNCF5S: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 6,
      minimalDenom:
        'transfer/channel-1/transfer/channel-3/transfer/channel-782/usei',
      denom: 'SEI',
    },
    '6bQZs6ZSaRoaYPsfLibM9ZhZa4Haj4xF5uFJ33Kduc3V': {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 6,
      minimalDenom: 'transfer/channel-1/transfer/channel-14/uscrt',
      denom: 'SCRT',
    },
    HYaNBn8TQCpy1ohJAQ8V8GaLsRFrkudszgQU8uQpWNvB: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 6,
      minimalDenom: 'transfer/channel-1/transfer/channel-6/ustars',
      denom: 'STARS',
    },
    BtHCXVdDCRqDvuTfmsLK5gcz3WbSBNY5DxpzSxqAcouU: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 6,
      minimalDenom: 'transfer/channel-1/transfer/channel-13/ubld',
      denom: 'BLD',
    },
    FjK5ms55rMZY42NUKnAayUjA8Q1nA2jhYwkHZUY7KwvE: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 6,
      minimalDenom: 'transfer/channel-1/transfer/channel-5/ustrd',
      denom: 'STRD',
    },
    '4Atqy7XYeHXLD2thRJtDtBaRassB2Ff4ksefhvzLKxDQ': {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 8,
      minimalDenom:
        'transfer/channel-1/transfer/channel-26/cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm',
      denom: 'SHD',
    },
    Dcihw3DVQpxF7ri4fsdGaZWrwhtLgCvbkYHXWh1VdhQn: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 6,
      minimalDenom:
        'transfer/channel-1/transfer/channel-26/cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd',
      denom: 'SILK',
    },
    vbJ16tHqqVKvLq8rgWeGboJvSCoeFjSYYvH77czoT9J: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      realDecimals: 10,
      decimals: 9,
      minimalDenom:
        'transfer/channel-1/transfer/channel-2/transfer/channel-15/79228162514264337593543950342',
      denom: 'DOT',
    },
    '9m8kq5qhocfckRkRnhbAroPmR8zYaXugpyinpkpLnv12': {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      realDecimals: 12,
      decimals: 9,
      minimalDenom: 'transfer/channel-1/transfer/channel-2/4',
      denom: 'KSM',
    },
    BxZEQoVDwPT1dGTSnLw4Qvm17up2vvvP88PCSYTncgnk: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      realDecimals: 18,
      decimals: 9,
      minimalDenom: 'transfer/channel-1/transfer/channel-50/aarch',
      denom: 'ARCH',
    },
    '4wQAZCwoJbBmxHNzg8bK7JqDr8x2YdrFfkBpmAdtuHyE': {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 6,
      minimalDenom: 'transfer/channel-1/transfer/channel-56/ucore',
      denom: 'COREUM',
    },
    DD4Ew6YcPCiJvb9ZQyAktRvgtckubPLTcHdbaK4nVKUW: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 6,
      minimalDenom:
        'transfer/channel-1/transfer/channel-56/drop-core1zhs909jp9yktml6qqx9f0ptcq2xnhhj99cja03j3lfcsp2pgm86studdrz',
      denom: 'XRP',
    },
  } as const satisfies Record<string, CrosschainAsset>,
  ethereum: {
    ETH: {
      chainId: 'ethereum-mainnet',
      denom: 'ETH',
      minimalDenom: 'ETH', //  fake
      network: 'ETHEREUM',
      decimals: 18,
    },
    [ethereumAssets['PICA'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 12,
      minimalDenom: 'transfer/channel-2/ppica', // real pica name on ethereum
      denom: 'PICA',
    },
    [ethereumAssets['DAI'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 18,
      minimalDenom: ethereumAssets['DAI'].erc20Address,
      denom: 'DAI',
    },
    [ethereumAssets['OSMO'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 6,
      minimalDenom: 'transfer/channel-2/transfer/channel-3/uosmo',
      denom: 'OSMO',
    },
    [ethereumAssets['FXS'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 18,
      minimalDenom: ethereumAssets['FXS'].erc20Address,
      denom: 'FXS',
    },
    [ethereumAssets['sFRAX'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 18,
      minimalDenom: ethereumAssets['sFRAX'].erc20Address,
      denom: 'sFRAX',
    },
    [ethereumAssets['sfrxETH'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 18,
      minimalDenom: ethereumAssets['sfrxETH'].erc20Address,
      denom: 'sfrxETH',
    },
    [ethereumAssets['ENA'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 18,
      minimalDenom: ethereumAssets['ENA'].erc20Address,
      denom: 'ENA',
    },
    [ethereumAssets['FRAX'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 18,
      minimalDenom: ethereumAssets['FRAX'].erc20Address,
      denom: 'FRAX',
    },
    [ethereumAssets['frxETH'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 18,
      minimalDenom: ethereumAssets['frxETH'].erc20Address,
      denom: 'frxETH',
    },
    [ethereumAssets['wBTC'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 8,
      minimalDenom: ethereumAssets['wBTC'].erc20Address,
      denom: 'wBTC',
    },
    [ethereumAssets['stETH'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 18,
      minimalDenom: ethereumAssets['stETH'].erc20Address,
      denom: 'stETH',
    },
    [ethereumAssets['rETH'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 18,
      minimalDenom: ethereumAssets['rETH'].erc20Address,
      denom: 'rETH',
    },
    [ethereumAssets['crvUSD'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 18,
      minimalDenom: ethereumAssets['crvUSD'].erc20Address,
      denom: 'crvUSD',
    },
    [ethereumAssets['pxETH'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 18,
      minimalDenom: ethereumAssets['pxETH'].erc20Address,
      denom: 'pxETH',
    },
    [ethereumAssets['eETH'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 18,
      minimalDenom: ethereumAssets['eETH'].erc20Address,
      denom: 'eETH',
    },
    // [ethereumAssets['SILK'].erc20Address]: {
    //   chainId: "ethereum-mainnet",
    //   network: 'ETHEREUM',
    //   decimals: 6,
    //   minimalDenom: ethereumAssets['SILK'].erc20Address,
    //   denom: 'SILK',
    // },
    [ethereumAssets['SHD'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 8,
      minimalDenom: ethereumAssets['SHD'].erc20Address,
      denom: 'SHD',
    },
    // [ethereumAssets['ezETH'].erc20Address]: {
    // 	chainId: "ethereum-mainnet",
    // 	network: 'ETHEREUM',
    // 	decimals: 18,
    // 	minimalDenom: ethereumAssets['ezETH'].erc20Address,
    // 	denom: 'ezETH',
    // },
    [ethereumAssets['ezETH'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 18,
      minimalDenom: ethereumAssets['ezETH'].erc20Address,
      denom: 'ezETH',
    },
    [ethereumAssets['USDe'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 18,
      minimalDenom: ethereumAssets['USDe'].erc20Address,
      denom: 'USDe',
    },
    [ethereumAssets['PEPE'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 18,
      minimalDenom: ethereumAssets['PEPE'].erc20Address,
      denom: 'PEPE',
    },
    [ethereumAssets['USDT Ethereum'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 6,
      minimalDenom: ethereumAssets['USDT Ethereum'].erc20Address,
      denom: 'USDT Ethereum',
    },
    [ethereumAssets['CRV'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 18,
      minimalDenom: ethereumAssets['CRV'].erc20Address,
      denom: 'CRV',
    },
    [ethereumAssets['ATOM'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 6,
      minimalDenom: 'transfer/channel-2/transfer/channel-4/uatom',
      denom: 'ATOM',
    },
    [ethereumAssets['STARS'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 6,
      minimalDenom: 'transfer/channel-2/transfer/channel-6/ustars',
      denom: 'STARS',
    },
    [ethereumAssets['IST'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 6,
      minimalDenom: 'transfer/channel-2/transfer/channel-13/uist',
      denom: 'IST',
    },
    [ethereumAssets['stATOM'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 6,
      minimalDenom: 'transfer/channel-2/transfer/channel-5/stuatom',
      denom: 'stATOM',
    },
    [ethereumAssets['BLD'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 6,
      minimalDenom: 'transfer/channel-2/transfer/channel-13/ubld',
      denom: 'BLD',
    },
    [ethereumAssets['SEI'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 6,
      minimalDenom:
        'transfer/channel-2/transfer/channel-3/transfer/channel-782/usei',
      denom: 'SEI',
    },
    [ethereumAssets['ARCH'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 18,
      minimalDenom: `transfer/channel-2/transfer/channel-50/aarch`,
      denom: 'ARCH',
    },
    [ethereumAssets['SCRT'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 6,
      minimalDenom: 'transfer/channel-2/transfer/channel-14/uscrt',
      denom: 'SCRT',
    },
    [ethereumAssets['STRD'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 6,
      minimalDenom: 'transfer/channel-2/transfer/channel-5/ustrd',
      denom: 'STRD',
    },
    [ethereumAssets['DOT'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 10,
      minimalDenom:
        'transfer/channel-2/transfer/channel-2/transfer/channel-15/79228162514264337593543950342',
      denom: 'DOT',
    },
    [ethereumAssets['KSM'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 12,
      minimalDenom: 'transfer/channel-2/transfer/channel-2/4',
      denom: 'KSM',
    },
    [ethereumAssets['wSOL'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      denom: 'wSOL',
      minimalDenom: `transfer/channel-2/transfer/channel-71/${solanaAssets['wSOL'].mintAddress}`,
      network: 'ETHEREUM',
      decimals: 9,
    },
    [ethereumAssets['JitoSOL'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 9,
      minimalDenom: `transfer/channel-2/transfer/channel-71/${solanaAssets['JitoSOL'].mintAddress}`,
      denom: 'JitoSOL',
    },
    [ethereumAssets['mSOL'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 9,
      minimalDenom: `transfer/channel-2/transfer/channel-71/${solanaAssets['mSOL'].mintAddress}`,
      denom: 'mSOL',
    },

    // BlazeStake Staked SOL (bSOL)
    [ethereumAssets['bSOL'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 9,
      minimalDenom: `transfer/channel-2/transfer/channel-71/${solanaAssets['bSOL'].mintAddress}`,
      denom: 'bSOL',
    },
    // mrgn's Liquid Staking Token (LST)
    [ethereumAssets['LST'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 9,
      minimalDenom: `transfer/channel-2/transfer/channel-71/${solanaAssets['LST'].mintAddress}`,
      denom: 'LST',
    },
    // // Blaze (BLZE)
    // BLZEEuZUBVqFhj8adcCFPJvPVCiCyVmh3hkJMrU8KuJA: {
    // 	chainId: "solana-mainnet",
    // 	network: 'SOLANA',
    // 	decimals: 9,
    // 	minimalDenom: 'BLZE', //  fake
    // 	denom: 'BLZE',
    // },
    //  Edgevana Staked SOL
    [ethereumAssets['edgeSOL'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 9,
      minimalDenom: `transfer/channel-2/transfer/channel-71/${solanaAssets['edgeSOL'].mintAddress}`,
      denom: 'edgeSOL',
    },
    // //  solend cSOL
    // '5h6ssFpeDeRbzsEHDbTQNH7nVGgsKrZydxdSTnLm6QdV': {
    // 	chainId: "solana-mainnet",
    // 	network: 'SOLANA',
    // 	decimals: 9,
    // 	minimalDenom: 'cSOL', //  fake
    // 	denom: 'cSOL',
    // },
    // //  solend cmSOL
    // '3JFC4cB56Er45nWVe29Bhnn5GnwQzSmHVf6eUq9ac91h': {
    // 	chainId: "solana-mainnet",
    // 	network: 'SOLANA',
    // 	decimals: 9,
    // 	minimalDenom: 'cmSOL', //  fake
    // 	denom: 'cmSOL',
    // },
    // //  solend cmSOL
    // '6mFgUsvXQTEYrYgowc9pVzYi49XEJA5uHA9gVDURc2pM': {
    // 	chainId: "solana-mainnet",
    // 	network: 'SOLANA',
    // 	decimals: 9,
    // 	minimalDenom: 'cJitoSOL', //  fake
    // 	denom: 'cJitoSOL',
    // },
    // //  solend cbSOL
    // FZ8KVvJ1QiytR29ykNz6kkhV6tvsB7XdiKW2s14DftFt: {
    // 	chainId: "solana-mainnet",
    // 	network: 'SOLANA',
    // 	decimals: 9,
    // 	minimalDenom: 'cbSOL', //  fake
    // 	denom: 'cbSOL',
    // },
    // // compassSOL
    // Comp4ssDzXcLeu2MnLuGNNFC4cmLPMng8qWHPvzAMU1h: {
    // 	chainId: "solana-mainnet",
    // 	network: 'SOLANA',
    // 	decimals: 9,
    // 	minimalDenom: 'compassSOL', //  fake
    // 	denom: 'compassSOL',
    // },
    // jupSOL
    [ethereumAssets['jupSOL'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 9,
      minimalDenom: `transfer/channel-2/transfer/channel-71/${solanaAssets['jupSOL'].mintAddress}`,
      denom: 'jupSOL',
    },
    // hSOL
    [ethereumAssets['hSOL'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 9,
      minimalDenom: `transfer/channel-2/transfer/channel-71/${solanaAssets['hSOL'].mintAddress}`,
      denom: 'hSOL',
    },
    // [ethereumAssets['wSOL'].erc20Address]: {
    //   chainId: "ethereum-mainnet",
    //   network: 'ETHEREUM',
    //   decimals: 9,
    //   minimalDenom: `transfer/channel-2/transfer/channel-71/${solanaAssets['wSOL'].mintAddress}`,
    //   denom: 'wSOL',
    // },

    [ethereumAssets['WIF'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 6,
      minimalDenom: `transfer/channel-2/transfer/channel-71/${solanaAssets['WIF'].mintAddress}`,
      denom: 'WIF',
    },
    [ethereumAssets['BONK'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 5,
      minimalDenom: `transfer/channel-2/transfer/channel-71/${solanaAssets['BONK'].mintAddress}`,
      denom: 'BONK',
    },
    [ethereumAssets['USDT Solana'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 6,
      minimalDenom: `transfer/channel-2/transfer/channel-71/${solanaAssets['USDT Solana'].mintAddress}`,
      denom: 'USDT Solana',
    },
    [ethereumAssets['COREUM'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 6,
      minimalDenom: 'transfer/channel-2/transfer/channel-56/ucore',

      denom: 'COREUM',
    },
    [ethereumAssets['XRP'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 6,
      minimalDenom:
        'transfer/channel-2/transfer/channel-56/drop-core1zhs909jp9yktml6qqx9f0ptcq2xnhhj99cja03j3lfcsp2pgm86studdrz',
      denom: 'XRP',
    },
    // [ethereumAssets['ASTRO'].erc20Address]: {
    // 	chainId: "ethereum-mainnet",
    // 	network: 'ETHEREUM',
    // 	decimals: 6,
    // 	minimalDenom: 'factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro',
    // 	denom: 'ASTRO',
    // },
    [ethereumAssets['SILK'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 6,
      minimalDenom: `transfer/channel-1/transfer/channel-26/cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd`,
      denom: 'SILK',
    },
  } as const satisfies Record<string, CrosschainAsset>,
} as const;

export default crossChainAssets;
