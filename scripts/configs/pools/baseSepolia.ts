import {ChainId} from '@bgd-labs/js-utils';
import {PoolConfig} from '../types';

export const baseSepoliaProtoV3: PoolConfig = {
  name: 'BaseSepolia',
  chainId: ChainId.base_sepolia,
  POOL_ADDRESSES_PROVIDER: '0xd449FeD49d9C443688d6816fE6872F21402e41de',
  additionalAddresses: {
    CONFIG_ENGINE: '0xC18ECB3DEf8BAaB2be2714324c5AdA75608e0a48',
    RATES_FACTORY: '0x777fBA024bA1228fDa76149A4ff8B23475ed057D',
    L2_ENCODER: '0x458d281bFFCE958E34571B33F1F26Bd42Aa27c44',
    POOL_ADDRESSES_PROVIDER_REGISTRY: '0x1169e227cD901899A02c8FD242251a311D73b252',
    UI_INCENTIVE_DATA_PROVIDER: '0x52Cb5CDf732889be3fd5d5E3A5D589446e060C0D',
    UI_POOL_DATA_PROVIDER: '0x884702E4b1d0a2900369E83d5765d537F469cAC9',
    WALLET_BALANCE_PROVIDER: '0xdeB02056E277174566A1c425a8e60550142B70A2',
    WETH_GATEWAY: '0xF6Dac650dA5616Bc3206e969D7868e7c25805171',
  },
};
