import {schema, TokenInfo, TokenList} from '@uniswap/token-lists';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import {ReserveData} from '../configs/types';
import {readFileSync, existsSync, writeFileSync} from 'fs';
import {cwd} from 'process';
import {join} from 'path';
import prettier from 'prettier';
import {Address, getContract, Hex, zeroAddress} from 'viem';
import {IERC20Detailed_ABI} from '../../src/ts/abis/IERC20Detailed';
import {fixSymbol} from './assetsLibraryGenerator';
import {getSymbolUri, VARIANT} from './svgUtils';
import {getClient} from '../clients';
import {ChainList} from '@bgd-labs/rpc-env';

const TAGS = {
  underlying: 'underlying',
  aaveV2: 'aaveV2',
  aTokenV2: 'aTokenV2',
  aaveV3: 'aaveV3',
  aTokenV3: 'aTokenV3',
  staticAToken: 'staticAT',
  stataToken: 'stataToken',
} as const;

type TokenListParams = {
  name: string;
  pool: Hex;
  chainId: number;
  reservesData: ReserveData[];
}[
  const arbitrumTokenAddresses = [
  "0xaf88d065e77c8cc2239327c5edb3a432268e5831", 
  "0x9e90296a1343258388a6476db1c12d76dd04504e", 
  "0xaf88d065e77c8cc2239327c5edb3a432268e5831", 
  "0x9e90296a1343258388a6476db1c12d76dd04504e", 
  "0xb2785e03e542161d3dfa3ce3ddad4a26d892cd6a", 
  "0xfc5a1a6eb076a2c7ad06ed22c90d7e710e35ad0a", 
  "0x5d3a1ff2b6bab83b63cd9ad0787074081a52ef34", 
  "0xf97f4df75117a78c1a5a0dbb814af92458539fb4", 
  "0xb41877593e1eec5a380f8c22d0abfa17b0865527", 
  "0x513c7e3a9c69ca3e22550ef58ac1c0088e918fff", 
  "0x5979d7b546e38e414f7e9822514be443a4800529", 
  "0x7e6f08984feac6244aec5dce3bd66387e82b9630", 
  "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9", 
  "0xf31e1ae27e7cd057c1d6795a5a083e0453d39b50", 
  "0xf67ec0a483a1c80eb1e92d58e46f1c10f8383b8d", 
  "0x187acd192822aed86d89ad516e4a3c3bb1929574", 
  "0x912ce59144191c1204e64559fe8253a0e49e6548", 
  "0x7b6c14ccca515d6d1f234054254bdced56ac173e", 
  "0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f", 
  "0xf810fc6501a91e3e7ff43f65fd81335238bbbd5e", 
  "0x82af49447d8a07e3bd95bd0d56f35241523fbab1", 
  "0x94f1747558e1287a89bf4be3abb6e736d8b5fc38", 
  "0x3082cc23568ea640225c2467653db90e9250aaa0", 
  "0xba5ddd1f9d7f570dc94a51479a000e3bce967196", 
  "0x7189fb5b6504bbff6a852b13b7b82a3c118fdc27", 
  "0xaf0807b1bfb6c9a6a000c393fa152322a67bb34b", 
  "0xf224dbc383874ecf3d8c1a63736fd914c30448a3", 
  "0x050d4e9ca843a9640e8f92731833805c650f5e3d", 
  "0x422e3b839e0bcf7c9dbc7df39329e9380096149c", 
  "0xf8d72c9cd50607bdd6fbdce53d6929794c99c959", 
  "0x15402dfec364f441e40d72625bcd7926255336ad", 
  "0x7dff72693f6a4149b17e7c6314655f6a9f7c8b33", 
  "0xec70dcb4a1efa46b8f2d97c310c9c4790ba5ffa8", 
  "0xe50fa9b3c56ffb159cb0fca61f5c9d750e8128c8", 
  "0x8b5c968077d5dcef04b4cecb7355c07105b35879", 
  "0x36c0a8081d3f71a452aaa35d5923d3172c108090", 
  "0x4c042e748b5c287aeabefc4c708323c48ab422a0", 
  "0xda10009cbd5d07dd0cecc66161fc93d7c9000da1", 
  "0x4c6b628d080cfa1d7e1847482c7836641895ca26", 
  "0x25d887ce7a35172c62febfd67a1856f20faebb00", 
  "0x7fba21dd4557f04a1579528ca8017e1d597b588f", 
  "0x674b01c87b4269c73efe4162685bf4a266f3628e", 
  "0x70711fb57682a9da5881f745ce4407044dc7fa49", 
  "0xd8369c2eda18dd6518eabb1f85bd60606deb39ec", 
  "0x1f88daa4167210a6ad57aeb9e1742ee485fb40fc", 
  "0xa8c0c7a09c9c1b70e430ab232628c4c6b6aec396", 
  "0xdfedaa96414ad263b4c53ab5c45b1e289ee37881", 
  "0x74bfe3c2a95d9b210e56d8e92ff9ef04d3b15b12", 
  "0xb29870524503b0d83ab8c57d79e7849883479346", 
  "0x2782fa9373356dc390876798d730190c38958391", 
  "0x364164afcfb7b132d22a28c5534271990892ba9a", 
  "0x4f8e4b95db4eefe416064afee01738ce74073632", 
  "0x2e688c4daad5a84d7737f08c44f79e1db2cfc126", 
  "0x8c65cec3847ad99bdc02621bdbc89f2ace56934b", 
  "0x13ad3f1150db0e1e05fd32bdeeb7c110ee023de6", 
  "0x98ded464aec5e9536795af604423c40e4d6ddb0a", 
  "0x6a451fbe233f782b3816ee156f9971a71047619f", 
  "0x5784d45a8ed6e854f44da3ca462d0cd807dbd633", 
  "0xb688ba096b7bb75d7841e47163cd12d18b36a5bf", 
  "0x06cc781b0aaed1f17f68d3a087ebbf3f53b23648", 
  "0x88094f2f8c21f32c7e63406b0a6ed5979ded0c0b", 
  "0x102dd7f1b7f316596b3e6daf8f2fe7b4a7104051", 
  "0xc8f1716dad72e3db76ff5740f88b76fecaf5715e", 
  "0x3adc64db121c2ddee24b03cc29b5df5df46a569e", 
  "0xf9c01d6fbe0042090b6f1e7583c84a5bdd52360d", 
  "0xdb3979aef9c13121bb8521349a00d62e56eb7d1e", 
  "0xba0cb0a697b72fce7ac5407f5852ccd7489928be", 
  "0x2d1352df75836a2681f8be063571c8391c04b0dc", 
  "0xcc378761492da641e3663cc5444f4005f8ead3bf", 
  "0xa1465dad1839c6e31dce04b9c060f56f6b387b6c", 
  "0x6c3670739f31d2ae772b7b1529a7a33ac764535a", 
  "0x9a61104198d685f8fc37badcf6fa39311dd6e254", 
  "0xb1f2b35f74d0b26dc29eb79da9513b4d05af2307", 
  "0xcd9f14fdb69ca34cefe038bb5f3908f99cb4b80d", 
  "0x6da7b8480cabbcfdafad6ac3abb3f696fe5dab2d", 
  "0xa8f87a4723676fa745c380ddb6b130ad1bcb762c", 
  "0x11cdb42b0eb46d95f990bedd4695a6e3fa034978", 
  "0xd4967cb4abbe6f32b2331d3d18f0b0e098dc02f7", 
  "0xcea4abfde359a312df520ca564aa9d99c581b4ed", 
  "0xff970a61a04b1ca14834a43f5de4533ebddb5cc8", 
  "0x3e1fc72f3fbd47f692d95dec0926dd506eea651d", 
  "0xee3cbee2533418d8409d108e0912311e41a78eb3", 
  "0x0791a65ba311158424c533250626c4dc74daf414", 
  "0x69420f9e38a4e60a62224c489be4bf7a94402496", 
  "0x5f44709402a00ea932e3902d9c554a53b0d7c501", 
  "0x0e012875f73895cbdf83c3f19277215a00da4a92", 
  "0x10c9cc8aba8c0d9289bee510f3147cc38774b8b0", 
  "0xaed3a2d0aaaaf5e6f54285a004af5036f3fe0eda", 
  "0xa563b03e31814497ae3523cfd9698cfc3aca5c62", 
  "0x4fc7351248e228771cf6a316f203f4beeb201039", 
  "0x2519f2598897d2a93d0ccf368fa565fd3053de1e", 
  "0x315a3f71a7ed8d44a1b9ac5ac9a26d160c567425", 
  "0x17fc002b466eec40dae837fc4be5c67993ddbd6f", 
  "0xe4251b067c541f12c5032198884306b66122e44e", 
  "0xaaa6c1e32c55a7bfa8066a6fae9b42650f262418", 
  "0x717e354905c863d3b8c4c206d23d958347b7cd97", 
  "0xa4cd3c7f8e71115c856dad1dbe042b17722f7807", 
  "0xd42785d323e608b9e99fa542bd8b1000d4c2df37", 
  "0x61b64e964964e7c6587269c53c7e0b9f35c22999", 
  "0xf18eea8287d233fca137a2e9383396fef204f38b", 
  "0xcc9841c942ec72e6ac74da8fb2fb45cf3b1a099c", 
  "0xcc1faf0ac651eec4db904b634d526d615f596e12"
];

function findInList(tokens: TokenInfo[], address: Address, chainId: number) {
  return tokens.find((x) => x.address === address && x.chainId === chainId);
}

export async function generateTokenList(pools: TokenListParams) {
  const path = join(cwd(), 'tokenlist.json');
  const cachedList: TokenList = existsSync(path)
    ? JSON.parse(readFileSync(path, 'utf-8'))
    : {tokens: []};

  const tokens: TokenInfo[] = [];
  for (const {reservesData, chainId, name: poolName, pool} of pools) {
    if (ChainList[chainId].testnet) continue;
    for (const reserve of reservesData) {
      async function addToken(
        token: Address,
        variant: VARIANT,
        tags: string[],
        extensions?: Record<string, string>,
      ) {
        const alreadyInList = findInList(tokens, token, chainId);
        if (alreadyInList) return;
        const cache = findInList(cachedList.tokens, token, chainId);

        const erc20contract = getContract({
          abi: IERC20Detailed_ABI,
          address: token,
          client: getClient(chainId),
        });
        const [name, symbol] = cache
          ? [cache.name, cache.symbol]
          : token == '0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2'
            ? ['Maker', 'MKR']
            : await Promise.all([erc20contract.read.name(), erc20contract.read.symbol()]);
        const symbolUri = await getSymbolUri(reserve.symbol, variant);
        return tokens.push({
          chainId: chainId,
          address: token,
          name: name.length > 40 ? `${name.substring(0, 37)}...` : name, // schema limits to 40 characters
          decimals: reserve.decimals,
          symbol: fixSymbol(symbol, token),
          tags,
          ...(symbolUri ? {logoURI: symbolUri} : {}),
          ...(extensions ? {extensions} : {}),
        });
      }
      await addToken(reserve.UNDERLYING, VARIANT.UNDERLYING, [TAGS.underlying]);
      await addToken(
        reserve.A_TOKEN,
        VARIANT.A_TOKEN,
        /V2/.test(poolName) ? [TAGS.aTokenV2, TAGS.aaveV2] : [TAGS.aTokenV3, TAGS.aaveV3],
        {pool: pool, underlying: reserve.UNDERLYING},
      );
      if (reserve.STATIC_A_TOKEN && reserve.STATIC_A_TOKEN != zeroAddress)
        await addToken(
          reserve.STATIC_A_TOKEN,
          VARIANT.STATIC_A_TOKEN,
          [/V2/.test(poolName) ? TAGS.aaveV3 : TAGS.aaveV3, TAGS.staticAToken],
          {
            pool: pool,
            underlying: reserve.UNDERLYING,
            underlyingAToken: reserve.A_TOKEN,
          },
        );
      if (reserve.STATA_TOKEN && reserve.STATA_TOKEN != zeroAddress)
        await addToken(
          reserve.STATA_TOKEN,
          VARIANT.STATA_TOKEN,
          [/V2/.test(poolName) ? TAGS.aaveV3 : TAGS.aaveV3, TAGS.stataToken],
          {
            pool: pool,
            underlying: reserve.UNDERLYING,
            underlyingAToken: reserve.A_TOKEN,
          },
        );
    }
  }

  const tokenList = {
    name: 'Aave token list',
    logoURI: 'https://raw.githubusercontent.com/bgd-labs/web3-icons/main/icons/full/aave.svg',
    keywords: ['audited', 'verified', 'aave'],

    tags: {
      [TAGS.underlying]: {
        name: 'underlyingAsset',
        description: 'Tokens that are used as underlying assets in the Aave protocol',
      },
      [TAGS.aaveV2]: {
        name: 'Aave V2',
        description: 'Tokens related to aave v2',
      },
      [TAGS.aaveV3]: {
        name: 'Aave V3',
        description: 'Tokens related to aave v3',
      },
      [TAGS.aTokenV2]: {
        name: 'aToken V2',
        description: 'Tokens that earn interest on the Aave Protocol V2',
      },
      [TAGS.aTokenV3]: {
        name: 'aToken V3',
        description: 'Tokens that earn interest on the Aave Protocol V3',
      },
      [TAGS.stataToken]: {
        name: 'stata token',
        description: 'Tokens that are wrapped into a 4626 Vault',
      },
      [TAGS.staticAToken]: {
        name: 'static a token',
        description: 'Tokens that are wrapped into a 4626 Vault',
      },
    },
    tokens,
    version: cachedList.version,
    timestamp: cachedList.timestamp,
  };

  if (JSON.stringify(cachedList.tokens) !== JSON.stringify(tokens)) {
    tokenList.version = {
      major: 3,
      minor: 0,
      patch: cachedList.version?.patch != undefined ? cachedList.version.patch + 1 : 0,
    };
    tokenList.timestamp = new Date().toISOString();
  }

  const ajv = new Ajv({allErrors: true, verbose: true});
  addFormats(ajv);
  const validator = ajv.compile(schema);
  const valid = validator(tokenList);
  if (valid) {
    writeFileSync(
      path,
      await prettier.format(JSON.stringify(tokenList), {
        filepath: path,
      }),
    );
  }
  if (validator.errors) {
    console.log(validator.errors);
    throw new Error('error creating tokenlist');
  }
  return {
    js: [],
    solidity: [],
  };
}
