
 // [FAST TRACK] Add asset info here to display the USD price from CoinGecko in our UI
 const coinGecko = [
  {
    "name": "BLD",
    "id": "agoric"
  },
  {
    "name": "IST",
    "id": "inter-stable-token"
  },
  {
    "name": "ARCH",
    "id": "archway"
  },
  {
    "name": "ASTR",
    "id": "astar"
  },
  {
    "name": "BNC_KSM",
    "id": "bifrost-native-coin"
  },
  {
    "name": "BNC_DOT",
    "id": "bifrost-native-coin"
  },
  {
    "name": "TIA",
    "id": "celestia"
  },
  {
    "name": "PICA",
    "id": "picasso"
  },
  {
    "name": "HUAHUA",
    "id": "chihuahua-token"
  },
  {
    "name": "DOT",
    "id": "polkadot"
  },
  {
    "name": "BNC_DOT",
    "id": "bifrost-native-coin"
  },
  {
    "name": "ASTR",
    "id": "astar"
  },
  {
    "name": "XRP",
    "id": "ripple"
  },
  {
    "name": "CORE",
    "id": "coreum"
  },
  {
    "name": "ATOM",
    "id": "cosmos"
  },
  {
    "name": "CRE",
    "id": "crescent-network"
  },
  {
    "name": "bCRE",
    "id": "liquid-staking-crescent"
  },
  {
    "name": "ETH",
    "id": "ethereum"
  },
  {
    "name": "DAI",
    "id": "dai"
  },
  {
    "name": "FXS",
    "id": "frax-share"
  },
  {
    "name": "sFRAX",
    "id": "staked-frax"
  },
  {
    "name": "sfrxETH",
    "id": "staked-frax-ether"
  },
  {
    "name": "ENA",
    "id": "ethena"
  },
  {
    "name": "FRAX",
    "id": "frax"
  },
  {
    "name": "frxETH",
    "id": "frax-ether"
  },
  {
    "name": "wBTC",
    "id": "wrapped-bitcoin"
  },
  {
    "name": "stETH",
    "id": "lido-staked-ether"
  },
  {
    "name": "rETH",
    "id": "rocket-pool-eth"
  },
  {
    "name": "crvUSD",
    "id": "crvusd"
  },
  {
    "name": "pxETH",
    "id": "dinero-staked-eth"
  },
  {
    "name": "eETH",
    "id": "ether-fi-staked-eth"
  },
  {
    "name": "SILK",
    "id": "silk-bcec1136-561c-4706-a42c-8b67d0d7f7d2"
  },
  {
    "name": "ezETH",
    "id": "renzo-restaked-eth"
  },
  {
    "name": "USDe",
    "id": "ethena-usde"
  },
  {
    "name": "PEPE",
    "id": "pepe"
  },
  {
    "name": "USDT Ethereum",
    "id": "tether"
  },
  {
    "name": "CRV",
    "id": "curve-dao-token"
  },
  {
    "name": "INJ",
    "id": "injective-protocol"
  },
  {
    "name": "KUJI",
    "id": "kujira"
  },
  {
    "name": "KSM",
    "id": "kusama"
  },
  {
    "name": "USDT Kusama",
    "id": "tether"
  },
  {
    "name": "USDT Kusama",
    "id": "tether"
  },
  {
    "name": "GLMR",
    "id": "moonbeam"
  },
  {
    "name": "MOVR",
    "id": "moonriver"
  },
  {
    "name": "ASTRO",
    "id": "astroport-fi"
  },
  {
    "name": "NTRN",
    "id": "neutron-3"
  },
  {
    "name": "OSMO",
    "id": "osmosis"
  },
  {
    "name": "milkTIA",
    "id": "milkyway-staked-tia"
  },
  {
    "name": "USDT Kusama",
    "id": "tether"
  },
  {
    "name": "TNKR",
    "id": "tinkernet"
  },
  {
    "name": "KSM",
    "id": "kusama"
  },
  {
    "name": "BNC_KSM",
    "id": "bifrost-native-coin"
  },
  {
    "name": "KSM",
    "id": "kusama"
  },
  {
    "name": "QCK",
    "id": "quicksilver"
  },
  {
    "name": "SCRT",
    "id": "secret"
  },
  {
    "name": "SILK",
    "id": "silk-bcec1136-561c-4706-a42c-8b67d0d7f7d2"
  },
  {
    "name": "SHD",
    "id": "shade-protocol"
  },
  {
    "name": "SEI",
    "id": "sei-network"
  },
  {
    "name": "SDN",
    "id": "shiden"
  },
  {
    "name": "SOL",
    "id": "solana"
  },
  {
    "name": "JitoSOL",
    "id": "jito-staked-sol"
  },
  {
    "name": "mSOL",
    "id": "msol"
  },
  {
    "name": "bSOL",
    "id": "blazestake-staked-sol"
  },
  {
    "name": "LST",
    "id": "liquid-staking-token"
  },
  {
    "name": "BLZE",
    "id": "solblaze"
  },
  {
    "name": "edgeSOL",
    "id": "edgevana-staked-sol"
  },
  {
    "name": "wSOL",
    "id": "wrapped-solana"
  },
  {
    "name": "WIF",
    "id": "dogwifcoin"
  },
  {
    "name": "BONK",
    "id": "bonk"
  },
  {
    "name": "USDT Solana",
    "id": "tether"
  },
  {
    "name": "STARS",
    "id": "stargaze"
  },
  {
    "name": "stTIA",
    "id": "stride-staked-tia"
  },
  {
    "name": "STRD",
    "id": "stride"
  },
  {
    "name": "stATOM",
    "id": "stride-staked-atom"
  },
  {
    "name": "TNKR",
    "id": "tinkernet"
  },
  {
    "name": "UMEE",
    "id": "umee"
  },
  {
    "name": "UMEE",
    "id": "umee"
  }
] as const;
 
 export default coinGecko;
 