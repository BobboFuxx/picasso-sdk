const ibcChannelMap = {
  'centauri-1': {
    0: {
      chainId: 'chihuahua-1',
      destinationId: 62,
      tokens: ['UHUAHUA'],
    },
    2: {
      chainId: '2087',
      destinationId: 17,
      tokens: ['PICA', 'KSM', 'DOT', 'UMEE', 'ASTR', 'SDN', 'USDT Kusama'],
    },
    3: {
      chainId: 'osmosis-1',
      destinationId: 1279,
      tokens: ['UOSMO', 'USEI' /*, 'milkTIA'*/],
    },
    4: {
      chainId: 'cosmoshub-4',
      destinationId: 617,
      tokens: ['ATOM'],
    },
    5: {
      chainId: 'stride-1',
      destinationId: 134,
      tokens: ['STRD', 'stATOM' /*, 'stTIA'*/],
    },
    6: {
      chainId: 'stargaze-1',
      destinationId: 184,
      tokens: ['STARS'],
    },
    52: {
      chainId: 'ethereum',
      destinationId: 2,
      tokens: [
        'PICA',
        'ETH',
        'DAI',
        'FXS',
        'sFRAX',
        'sfrxETH',
        'OSMO',
        'ENA',
        'FRAX',
        'frxETH',
        'wBTC',
        'pxETH',
        'PEPE',
        'CRV',
        'rETH',
        'crvUSD',
        'eETH',
        'USDe',
        'USDT Ethereum',
        'stETH',
        'ATOM',
        // 'STARS',
        'IST',
        'stATOM',
        'BLD',
        // 'ezETH',
        'SEI',
        'SCRT',
        'STRD',
        // 'DOT',
        // 'KSM',
        // 'SILK',
      ],
    },
    11: {
      chainId: 'crescent-1',
      destinationId: 64,
      tokens: ['CRE', 'BCRE', 'UCRE'],
    },
    13: {
      chainId: 'agoric-3',
      destinationId: 55,
      tokens: ['BLD', 'IST'],
    },
    14: {
      chainId: 'secret-4',
      destinationId: 80,
      tokens: ['SCRT', 'SILK', 'SHD'],
    },
    18: {
      chainId: 'neutron-1',
      destinationId: 17,
      tokens: ['NTRN'],
    },
    20: {
      chainId: 'umee-1',
      destinationId: 99,
      tokens: ['UMEE'],
    },
    56: {
      chainId: 'coreum-mainnet-1',
      destinationId: 31,
      tokens: ['COREUM', 'XRP'],
    },
    38: {
      chainId: 'celestia',
      destinationId: 12,
      tokens: ['TIA'],
    },
    27: {
      chainId: 'kaiyo-1',
      destinationId: 101,
      tokens: ['KUJI'],
    },
    9: {
      chainId: 'quicksilver-2',
      destinationId: 94,
      tokens: ['QCK'],
    },
    29: {
      chainId: 'injective-1',
      destinationId: 145,
      tokens: ['INJ'],
    },
    71: {
      chainId: 'solana',
      destinationId: 1,
      tokens: [
        'PICA',
        'OSMO',
        'SOL',
        'ETH',
        'wSOL',
        'WHINE',
        'LST',
        'bSOL',
        'JitoSOL',
        'edgeSOL',
        'hSOL',
        'jupSOL',
        'mSOL',
        'BONK',
        'WIF',
        'USDT Solana',
        //ethereum
        'DAI',
        'USDT Ethereum',
        'CRV',
        'wBTC',
        'rETH',
        'crvUSD',
        'FRAX',
        'FXS',
        'frxETH',
        'sfrxETH',
        'sFRAX',
        'pxETH',
        'eETH',
        'ENA',
        'USDe',
        'PEPE',
        //cosmos
        'ATOM',
        'stATOM',
        'IST',
        'SEI',
        'SCRT',
        'STARS',
        'BLD',
        'STRD',
        'SHD',
        'SILK',
        'DOT',
        'KSM',
        'XRP',
        'COREUM',
        'ASTRO',
      ],
    },
    50: {
      chainId: 'archway-1',
      destinationId: 108,
      tokens: ['ARCH'],
    },
  },
  '2087': {
    15: {
      chainId: 'composable',
      destinationId: 15,
      tokens: ['DOT', 'PICA', 'vDOT', 'BNC_DOT', 'ASTR', 'lsDOT', 'BLD', 'IST'],
    },
    17: {
      chainId: 'centauri-1',
      destinationId: 2,
      tokens: ['PICA', 'KSM', 'DOT', 'UMEE', 'ASTR', 'SDN', 'USDT Kusama'],
    },
  },
  composable: {
    15: {
      chainId: 'picasso',
      destinationId: 15,
      tokens: ['DOT', 'PICA', 'vDOT', 'BNC_DOT', 'ASTR', 'lsDOT', 'BLD', 'IST'],
    },
  },
  'chihuahua-1': {
    62: {
      chainId: 'centauri-1',
      destinationId: 0,
      tokens: ['UHUAHUA'],
    },
  },
  'osmosis-1': {
    1279: {
      chainId: 'centauri-1',
      destinationId: 3,
      tokens: ['UOSMO', 'USEI'],
    },
    782: {
      chainId: 'pacific-1',
      destinationId: 0,
    },
  },
  'cosmoshub-4': {
    617: {
      chainId: 'centauri-1',
      destinationId: 4,
      tokens: ['ATOM'],
    },
  },
  'stride-1': {
    134: {
      chainId: 'centauri-1',
      destinationId: 5,
      tokens: ['STRD', 'stATOM'],
    },
  },
  ethereum: {
    2: {
      chainId: 'centauri-1',
      destinationId: 52,
      tokens: [
        'PICA',
        'ETH',
        'DAI',
        'FXS',
        'sFRAX',
        'sfrxETH',
        'OSMO',
        'ENA',
        'FRAX',
        'frxETH',
        'wBTC',
        'pxETH',
        'PEPE',
        'CRV',
        'rETH',
        'crvUSD',
        'eETH',
        'USDe',
        'USDT Ethereum',
        'stETH',
        'ATOM',
        // 'STARS',
        'IST',
        'stATOM',
        'BLD',
        // 'ezETH',
        'SEI',
        'SCRT',
        'STRD',
        // 'DOT',
        // 'KSM',
        // 'SILK',
      ],
    },
  },
  'stargaze-1': {
    184: {
      chainId: 'centauri-1',
      destinationId: 6,
      tokens: ['STARS'],
    },
  },
  'crescent-1': {
    64: {
      chainId: 'centauri-1',
      destinationId: 11,
      tokens: ['CRE', 'BCRE', 'UCRE'],
    },
  },
  'secret-4': {
    80: {
      chainId: 'centauri-1',
      destinationId: 14,
      tokens: ['SCRT', 'SILK', 'SHD'],
    },
  },
  'neutron-1': {
    17: {
      chainId: 'centauri-1',
      destinationId: 18,
      tokens: ['NTRN'],
    },
  },
  'umee-1': {
    99: {
      chainId: 'centauri-1',
      destinationId: 20,
      tokens: ['UMEE'],
    },
  },
  'agoric-3': {
    55: {
      chainId: 'centauri-1',
      destinationId: 13,
      tokens: ['BLD', 'IST'],
    },
  },
  'pacific-1': {
    0: {
      chainId: 'osmosis-1',
      destinationId: 782,
      tokens: ['UOSMO', 'USEI'],
    },
  },
  celestia: {
    12: {
      chainId: 'centauri-1',
      destinationId: 38,
      tokens: ['TIA'],
    },
  },
  'kaiyo-1': {
    101: {
      chainId: 'centauri-1',
      destinationId: 27,
      tokens: ['KUJI'],
    },
  },
  'quicksilver-2': {
    94: {
      chainId: 'centauri-1',
      destinationId: 9,
      tokens: ['QCK'],
    },
  },
  'injective-1': {
    145: {
      chainId: 'centauri-1',
      destinationId: 29,
      tokens: ['INJ'],
    },
  },
  'coreum-mainnet-1': {
    31: {
      chainId: 'centauri-1',
      destinationId: 56,
      tokens: ['COREUM', 'XRP'],
    },
  },
  solana: {
    1: {
      chainId: 'centauri-1',
      destinationId: 71,
      tokens: [
        'PICA',
        'OSMO',
        'SOL',
        'ETH',
        'wSOL',
        'WHINE',
        'LST',
        'bSOL',
        'JitoSOL',
        'edgeSOL',
        'hSOL',
        'jupSOL',
        'mSOL',
        'BONK',
        'WIF',
        'USDT Solana',
        //ethereum
        'DAI',
        'USDT Ethereum',
        'CRV',
        'wBTC',
        'rETH',
        'crvUSD',
        'FRAX',
        'FXS',
        'frxETH',
        'sfrxETH',
        'sFRAX',
        'pxETH',
        'eETH',
        'ENA',
        'USDe',
        'PEPE',
        //cosmos
        'ATOM',
        'stATOM',
        'IST',
        'SEI',
        'SCRT',
        'STARS',
        'BLD',
        'STRD',
        'SHD',
        'SILK',
        'DOT',
        'KSM',
        'XRP',
        'COREUM',
        'ASTRO',
      ],
    },
  },
  'archway-1': {
    108: {
      chainId: 'centauri-1',
      destinationId: 50,
      tokens: ['ARCH'],
    },
  },
} satisfies Partial<
  Record<
    string,
    Record<
      number,
      { chainId: string; destinationId: number; tokens?: string[] }
    >
  >
>;

export default ibcChannelMap;
