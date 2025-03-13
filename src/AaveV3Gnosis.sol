// AUTOGENERATED - MANUALLY CHANGES WILL BE REVERTED BY THE GENERATOR
// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0;

import {IPoolAddressesProvider, IPool, IPoolConfigurator, IAaveOracle, IPoolDataProvider, IACLManager, ICollector} from './AaveV3.sol';
library AaveV3Gnosis {
  // https://gnosisscan.io/address/0x36616cf17557639614c1cdDb356b1B83fc0B2132
  IPoolAddressesProvider internal constant POOL_ADDRESSES_PROVIDER =
    IPoolAddressesProvider(0x36616cf17557639614c1cdDb356b1B83fc0B2132);

  // https://gnosisscan.io/address/0xb50201558B00496A145fE76f7424749556E326D8
  IPool internal constant POOL = IPool(0xb50201558B00496A145fE76f7424749556E326D8);

  // https://gnosisscan.io/address/0x7304979ec9E4EaA0273b6A037a31c4e9e5A75D16
  IPoolConfigurator internal constant POOL_CONFIGURATOR =
    IPoolConfigurator(0x7304979ec9E4EaA0273b6A037a31c4e9e5A75D16);

  // https://gnosisscan.io/address/0xeb0a051be10228213BAEb449db63719d6742F7c4
  IAaveOracle internal constant ORACLE = IAaveOracle(0xeb0a051be10228213BAEb449db63719d6742F7c4);

  // https://gnosisscan.io/address/0x1dF462e2712496373A347f8ad10802a5E95f053D
  address internal constant ACL_ADMIN = 0x1dF462e2712496373A347f8ad10802a5E95f053D;

  // https://gnosisscan.io/address/0xEc710f59005f48703908bC519D552Df5B8472614
  IACLManager internal constant ACL_MANAGER =
    IACLManager(0xEc710f59005f48703908bC519D552Df5B8472614);

  // https://gnosisscan.io/address/0xA2d323DBc43F445aD2d8974F17Be5dab32aAD474
  IPoolDataProvider internal constant AAVE_PROTOCOL_DATA_PROVIDER =
    IPoolDataProvider(0xA2d323DBc43F445aD2d8974F17Be5dab32aAD474);

  // https://gnosisscan.io/address/0x77C874799E9564A0D0670ED40bf023D249E7bb21
  address internal constant POOL_IMPL = 0x77C874799E9564A0D0670ED40bf023D249E7bb21;

  // https://gnosisscan.io/address/0xE5e48Ad1F9D1A894188b483DcF91f4FaD6AbA43b
  address internal constant POOL_CONFIGURATOR_IMPL = 0xE5e48Ad1F9D1A894188b483DcF91f4FaD6AbA43b;

  // https://gnosisscan.io/address/0xaD4F91D26254B6B0C6346b390dDA2991FDE2F20d
  address internal constant DEFAULT_INCENTIVES_CONTROLLER =
    0xaD4F91D26254B6B0C6346b390dDA2991FDE2F20d;

  // https://gnosisscan.io/address/0x41585C50524fb8c3899B43D7D797d9486AAc94DB
  address internal constant EMISSION_MANAGER = 0x41585C50524fb8c3899B43D7D797d9486AAc94DB;

  // https://gnosisscan.io/address/0x3e652E97ff339B73421f824F5b03d75b62F1Fb51
  ICollector internal constant COLLECTOR = ICollector(0x3e652E97ff339B73421f824F5b03d75b62F1Fb51);

  // https://gnosisscan.io/address/0x589750BA8aF186cE5B55391B0b7148cAD43a1619
  address internal constant DEFAULT_A_TOKEN_IMPL_REV_1 = 0x589750BA8aF186cE5B55391B0b7148cAD43a1619;

  // https://gnosisscan.io/address/0xBeC519531F0E78BcDdB295242fA4EC5251B38574
  address internal constant DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_1 =
    0xBeC519531F0E78BcDdB295242fA4EC5251B38574;

  // https://gnosisscan.io/address/0x97CB9e81d480A2AB03299760654C1DDC0C16bE07
  address internal constant CONFIG_ENGINE = 0x97CB9e81d480A2AB03299760654C1DDC0C16bE07;

  // https://gnosisscan.io/address/0x1236010CECea55998384e795B59815D871f5f94d
  address internal constant POOL_ADDRESSES_PROVIDER_REGISTRY =
    0x1236010CECea55998384e795B59815D871f5f94d;

  // https://gnosisscan.io/address/0x5d4D4007A4c6336550DdAa2a7c0d5e7972eebd16
  address internal constant UI_INCENTIVE_DATA_PROVIDER = 0x5d4D4007A4c6336550DdAa2a7c0d5e7972eebd16;

  // https://gnosisscan.io/address/0x5598BbFA2f4fE8151f45bBA0a3edE1b54B51a0a9
  address internal constant UI_POOL_DATA_PROVIDER = 0x5598BbFA2f4fE8151f45bBA0a3edE1b54B51a0a9;

  // https://gnosisscan.io/address/0x4172E6aAEC070ACB31aaCE343A58c93E4C70f44D
  address internal constant WALLET_BALANCE_PROVIDER = 0x4172E6aAEC070ACB31aaCE343A58c93E4C70f44D;

  // https://gnosisscan.io/address/0xb85d72EC1EfE48168c4aBC4eB855f8Cbcd05cE38
  address internal constant WETH_GATEWAY = 0xb85d72EC1EfE48168c4aBC4eB855f8Cbcd05cE38;

  // https://gnosisscan.io/address/0x33AE1f41546a2e05368Bf789b3d868813c0Ae658
  address internal constant CAPS_PLUS_RISK_STEWARD = 0x33AE1f41546a2e05368Bf789b3d868813c0Ae658;

  // https://gnosisscan.io/address/0x677c9f358dA5DC83aF6760a839E4448D72840d04
  address internal constant RISK_STEWARD = 0x677c9f358dA5DC83aF6760a839E4448D72840d04;

  // https://gnosisscan.io/address/0x3Ceaf9b6CAb92dFe6302D0CC3F1BA880C28d35e5
  address internal constant FREEZING_STEWARD = 0x3Ceaf9b6CAb92dFe6302D0CC3F1BA880C28d35e5;

  // https://gnosisscan.io/address/0x02e9b27599C4Bf8f789d34b6E65C51092c3d9FA6
  address internal constant LEGACY_STATIC_A_TOKEN_FACTORY =
    0x02e9b27599C4Bf8f789d34b6E65C51092c3d9FA6;

  // https://gnosisscan.io/address/0x33992721c565dA3248bd3af80524e054F5F05b42
  address internal constant STATA_FACTORY = 0x33992721c565dA3248bd3af80524e054F5F05b42;

  // https://gnosisscan.io/address/0x86b0521f92a554057e54B93098BA2A6Aaa2F4ACB
  address internal constant REPAY_WITH_COLLATERAL_ADAPTER =
    0x86b0521f92a554057e54B93098BA2A6Aaa2F4ACB;

  // https://gnosisscan.io/address/0x63dfa7c09Dc2Ff4030d6B8Dc2ce6262BF898C8A4
  address internal constant SWAP_COLLATERAL_ADAPTER = 0x63dfa7c09Dc2Ff4030d6B8Dc2ce6262BF898C8A4;

  // https://gnosisscan.io/address/0xE28E2c8d240dd5eBd0adcab86fbD79df7a052034
  address internal constant DEBT_SWAP_ADAPTER = 0xE28E2c8d240dd5eBd0adcab86fbD79df7a052034;

  // https://gnosisscan.io/address/0xc0179321f0825c3e0F59Fe7Ca4E40557b97797a3
  address internal constant WITHDRAW_SWAP_ADAPTER = 0xc0179321f0825c3e0F59Fe7Ca4E40557b97797a3;

  // https://gnosisscan.io/address/0xFf3a13703236A77Da603c7D413cf6F6AfB866D34
  address internal constant DUST_BIN = 0xFf3a13703236A77Da603c7D413cf6F6AfB866D34;

  // https://gnosisscan.io/address/0x0447Be151c126D2d704b1Ce5F5b3ed6b7D50FABA
  address internal constant CLINIC_STEWARD = 0x0447Be151c126D2d704b1Ce5F5b3ed6b7D50FABA;

  // https://gnosisscan.io/address/0xdA12A8F009258592A9B5618129259992858636dc
  address internal constant POOL_EXPOSURE_STEWARD = 0xdA12A8F009258592A9B5618129259992858636dc;
}
library AaveV3GnosisAssets {
  // https://gnosisscan.io/address/0x6A023CCd1ff6F2045C3309768eAd9E68F978f6e1
  address internal constant WETH_UNDERLYING = 0x6A023CCd1ff6F2045C3309768eAd9E68F978f6e1;

  uint8 internal constant WETH_DECIMALS = 18;

  // https://gnosisscan.io/address/0xa818F1B57c201E092C4A2017A91815034326Efd1
  address internal constant WETH_A_TOKEN = 0xa818F1B57c201E092C4A2017A91815034326Efd1;

  // https://gnosisscan.io/address/0x0c0fce05F2314540EcB095bF4D069e5E0ED90fF8
  address internal constant WETH_V_TOKEN = 0x0c0fce05F2314540EcB095bF4D069e5E0ED90fF8;

  // https://gnosisscan.io/address/0xa767f745331D267c7751297D982b050c93985627
  address internal constant WETH_ORACLE = 0xa767f745331D267c7751297D982b050c93985627;

  // https://gnosisscan.io/address/0x4cE496f0a390745102540faF041EF92FfD588b44
  address internal constant WETH_INTEREST_RATE_STRATEGY =
    0x4cE496f0a390745102540faF041EF92FfD588b44;

  // https://gnosisscan.io/address/0xD843FB478c5aA9759FeA3f3c98D467e2F136190a
  address internal constant WETH_STATIC_A_TOKEN = 0xD843FB478c5aA9759FeA3f3c98D467e2F136190a;

  // https://gnosisscan.io/address/0x57f664882F762FA37903FC864e2B633D384B411A
  address internal constant WETH_STATA_TOKEN = 0x57f664882F762FA37903FC864e2B633D384B411A;

  // https://gnosisscan.io/address/0x6C76971f98945AE98dD7d4DFcA8711ebea946eA6
  address internal constant wstETH_UNDERLYING = 0x6C76971f98945AE98dD7d4DFcA8711ebea946eA6;

  uint8 internal constant wstETH_DECIMALS = 18;

  // https://gnosisscan.io/address/0x23e4E76D01B2002BE436CE8d6044b0aA2f68B68a
  address internal constant wstETH_A_TOKEN = 0x23e4E76D01B2002BE436CE8d6044b0aA2f68B68a;

  // https://gnosisscan.io/address/0x9D881f67F20B49243c98f53d2B9E91E39d02Ae09
  address internal constant wstETH_V_TOKEN = 0x9D881f67F20B49243c98f53d2B9E91E39d02Ae09;

  // https://gnosisscan.io/address/0x8Ee42Ba520cA106294163fb8b1ffE9C6Fba35507
  address internal constant wstETH_ORACLE = 0x8Ee42Ba520cA106294163fb8b1ffE9C6Fba35507;

  // https://gnosisscan.io/address/0x4cE496f0a390745102540faF041EF92FfD588b44
  address internal constant wstETH_INTEREST_RATE_STRATEGY =
    0x4cE496f0a390745102540faF041EF92FfD588b44;

  // https://gnosisscan.io/address/0xECfD0638175e291BA3F784A58FB9D38a25418904
  address internal constant wstETH_STATIC_A_TOKEN = 0xECfD0638175e291BA3F784A58FB9D38a25418904;

  // https://gnosisscan.io/address/0x773CDA0CADe2A3d86E6D4e30699d40bB95174ff2
  address internal constant wstETH_STATA_TOKEN = 0x773CDA0CADe2A3d86E6D4e30699d40bB95174ff2;

  // https://gnosisscan.io/address/0x9C58BAcC331c9aa871AFD802DB6379a98e80CEdb
  address internal constant GNO_UNDERLYING = 0x9C58BAcC331c9aa871AFD802DB6379a98e80CEdb;

  uint8 internal constant GNO_DECIMALS = 18;

  // https://gnosisscan.io/address/0xA1Fa064A85266E2Ca82DEe5C5CcEC84DF445760e
  address internal constant GNO_A_TOKEN = 0xA1Fa064A85266E2Ca82DEe5C5CcEC84DF445760e;

  // https://gnosisscan.io/address/0xBc59E99198DbA71985A66E1713cC89FFEC53f7FC
  address internal constant GNO_V_TOKEN = 0xBc59E99198DbA71985A66E1713cC89FFEC53f7FC;

  // https://gnosisscan.io/address/0x22441d81416430A54336aB28765abd31a792Ad37
  address internal constant GNO_ORACLE = 0x22441d81416430A54336aB28765abd31a792Ad37;

  // https://gnosisscan.io/address/0x4cE496f0a390745102540faF041EF92FfD588b44
  address internal constant GNO_INTEREST_RATE_STRATEGY = 0x4cE496f0a390745102540faF041EF92FfD588b44;

  // https://gnosisscan.io/address/0x2D737e2B0e175f05D0904C208d6C4e40da570f65
  address internal constant GNO_STATIC_A_TOKEN = 0x2D737e2B0e175f05D0904C208d6C4e40da570f65;

  // https://gnosisscan.io/address/0x7c16F0185A26Db0AE7a9377f23BC18ea7ce5d644
  address internal constant GNO_STATA_TOKEN = 0x7c16F0185A26Db0AE7a9377f23BC18ea7ce5d644;

  // https://gnosisscan.io/address/0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83
  address internal constant USDC_UNDERLYING = 0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83;

  uint8 internal constant USDC_DECIMALS = 6;

  // https://gnosisscan.io/address/0xc6B7AcA6DE8a6044E0e32d0c841a89244A10D284
  address internal constant USDC_A_TOKEN = 0xc6B7AcA6DE8a6044E0e32d0c841a89244A10D284;

  // https://gnosisscan.io/address/0x5F6f7B0a87CA3CF3d0b431Ae03EF3305180BFf4d
  address internal constant USDC_V_TOKEN = 0x5F6f7B0a87CA3CF3d0b431Ae03EF3305180BFf4d;

  // https://gnosisscan.io/address/0x0a2d05bc646C65A029e602c257DfA14adF8BfAd2
  address internal constant USDC_ORACLE = 0x0a2d05bc646C65A029e602c257DfA14adF8BfAd2;

  // https://gnosisscan.io/address/0x4cE496f0a390745102540faF041EF92FfD588b44
  address internal constant USDC_INTEREST_RATE_STRATEGY =
    0x4cE496f0a390745102540faF041EF92FfD588b44;

  // https://gnosisscan.io/address/0x270bA1f35D8b87510D24F693fcCc0da02e6E4EeB
  address internal constant USDC_STATIC_A_TOKEN = 0x270bA1f35D8b87510D24F693fcCc0da02e6E4EeB;

  // https://gnosisscan.io/address/0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d
  address internal constant WXDAI_UNDERLYING = 0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d;

  uint8 internal constant WXDAI_DECIMALS = 18;

  // https://gnosisscan.io/address/0xd0Dd6cEF72143E22cCED4867eb0d5F2328715533
  address internal constant WXDAI_A_TOKEN = 0xd0Dd6cEF72143E22cCED4867eb0d5F2328715533;

  // https://gnosisscan.io/address/0x281963D7471eCdC3A2Bd4503e24e89691cfe420D
  address internal constant WXDAI_V_TOKEN = 0x281963D7471eCdC3A2Bd4503e24e89691cfe420D;

  // https://gnosisscan.io/address/0xE5269eF0CE04E509E8134624c7BF043b21e10897
  address internal constant WXDAI_ORACLE = 0xE5269eF0CE04E509E8134624c7BF043b21e10897;

  // https://gnosisscan.io/address/0x4cE496f0a390745102540faF041EF92FfD588b44
  address internal constant WXDAI_INTEREST_RATE_STRATEGY =
    0x4cE496f0a390745102540faF041EF92FfD588b44;

  // https://gnosisscan.io/address/0x7f0EAE87Df30C468E0680c83549D0b3DE7664D4B
  address internal constant WXDAI_STATIC_A_TOKEN = 0x7f0EAE87Df30C468E0680c83549D0b3DE7664D4B;

  // https://gnosisscan.io/address/0xcB444e90D8198415266c6a2724b7900fb12FC56E
  address internal constant EURe_UNDERLYING = 0xcB444e90D8198415266c6a2724b7900fb12FC56E;

  uint8 internal constant EURe_DECIMALS = 18;

  // https://gnosisscan.io/address/0xEdBC7449a9b594CA4E053D9737EC5Dc4CbCcBfb2
  address internal constant EURe_A_TOKEN = 0xEdBC7449a9b594CA4E053D9737EC5Dc4CbCcBfb2;

  // https://gnosisscan.io/address/0xb96404e475f337A7E98e4a541C9b71309BB66c5A
  address internal constant EURe_V_TOKEN = 0xb96404e475f337A7E98e4a541C9b71309BB66c5A;

  // https://gnosisscan.io/address/0xab70BCB260073d036d1660201e9d5405F5829b7a
  address internal constant EURe_ORACLE = 0xab70BCB260073d036d1660201e9d5405F5829b7a;

  // https://gnosisscan.io/address/0x4cE496f0a390745102540faF041EF92FfD588b44
  address internal constant EURe_INTEREST_RATE_STRATEGY =
    0x4cE496f0a390745102540faF041EF92FfD588b44;

  // https://gnosisscan.io/address/0x8418D17640a74F1614AC3E1826F29e78714488a1
  address internal constant EURe_STATIC_A_TOKEN = 0x8418D17640a74F1614AC3E1826F29e78714488a1;

  // https://gnosisscan.io/address/0x417bc5b940475203A18C2f320a5ba470D6c5E463
  address internal constant EURe_STATA_TOKEN = 0x417bc5b940475203A18C2f320a5ba470D6c5E463;

  // https://gnosisscan.io/address/0xaf204776c7245bF4147c2612BF6e5972Ee483701
  address internal constant sDAI_UNDERLYING = 0xaf204776c7245bF4147c2612BF6e5972Ee483701;

  uint8 internal constant sDAI_DECIMALS = 18;

  // https://gnosisscan.io/address/0x7a5c3860a77a8DC1b225BD46d0fb2ac1C6D191BC
  address internal constant sDAI_A_TOKEN = 0x7a5c3860a77a8DC1b225BD46d0fb2ac1C6D191BC;

  // https://gnosisscan.io/address/0x8Fe06E1D8Aff42Bf6812CacF7854A2249a00bED7
  address internal constant sDAI_V_TOKEN = 0x8Fe06E1D8Aff42Bf6812CacF7854A2249a00bED7;

  // https://gnosisscan.io/address/0x1D0f881Ce1a646E2f27Dec3c57Fa056cB838BCC2
  address internal constant sDAI_ORACLE = 0x1D0f881Ce1a646E2f27Dec3c57Fa056cB838BCC2;

  // https://gnosisscan.io/address/0x4cE496f0a390745102540faF041EF92FfD588b44
  address internal constant sDAI_INTEREST_RATE_STRATEGY =
    0x4cE496f0a390745102540faF041EF92FfD588b44;

  // https://gnosisscan.io/address/0xf3f45960f8dE00D8ED614D445a5a268c6F6Dec4f
  address internal constant sDAI_STATIC_A_TOKEN = 0xf3f45960f8dE00D8ED614D445a5a268c6F6Dec4f;

  // https://gnosisscan.io/address/0x2a22f9c3b484c3629090FeED35F17Ff8F88f76F0
  address internal constant USDCe_UNDERLYING = 0x2a22f9c3b484c3629090FeED35F17Ff8F88f76F0;

  uint8 internal constant USDCe_DECIMALS = 6;

  // https://gnosisscan.io/address/0xC0333cb85B59a788d8C7CAe5e1Fd6E229A3E5a65
  address internal constant USDCe_A_TOKEN = 0xC0333cb85B59a788d8C7CAe5e1Fd6E229A3E5a65;

  // https://gnosisscan.io/address/0x37B9Ad6b5DC8Ad977AD716e92F49e9D200e58431
  address internal constant USDCe_V_TOKEN = 0x37B9Ad6b5DC8Ad977AD716e92F49e9D200e58431;

  // https://gnosisscan.io/address/0x0a2d05bc646C65A029e602c257DfA14adF8BfAd2
  address internal constant USDCe_ORACLE = 0x0a2d05bc646C65A029e602c257DfA14adF8BfAd2;

  // https://gnosisscan.io/address/0x4cE496f0a390745102540faF041EF92FfD588b44
  address internal constant USDCe_INTEREST_RATE_STRATEGY =
    0x4cE496f0a390745102540faF041EF92FfD588b44;

  // https://gnosisscan.io/address/0xf0E7eC247b918311afa054E0AEdb99d74c31b809
  address internal constant USDCe_STATIC_A_TOKEN = 0xf0E7eC247b918311afa054E0AEdb99d74c31b809;

  // https://gnosisscan.io/address/0x51350d88c1bd32Cc6A79368c9Fb70373Fb71F375
  address internal constant USDCe_STATA_TOKEN = 0x51350d88c1bd32Cc6A79368c9Fb70373Fb71F375;
}
library AaveV3GnosisEModes {
  uint8 internal constant NONE = 0;

  uint8 internal constant ETH_CORRELATED = 1;

  uint8 internal constant SDAI_EURE = 2;
}
library AaveV3GnosisExternalLibraries {
  // https://gnosisscan.io/address/0x34039100cc9584Ae5D741d322e16d0d18CEE8770
  address internal constant FLASHLOAN_LOGIC = 0x34039100cc9584Ae5D741d322e16d0d18CEE8770;

  // https://gnosisscan.io/address/0x62325c94E1c49dcDb5937726aB5D8A4c37bCAd36
  address internal constant BORROW_LOGIC = 0x62325c94E1c49dcDb5937726aB5D8A4c37bCAd36;

  // https://gnosisscan.io/address/0x621Ef86D8A5C693a06295BC288B95C12D4CE4994
  address internal constant BRIDGE_LOGIC = 0x621Ef86D8A5C693a06295BC288B95C12D4CE4994;

  // https://gnosisscan.io/address/0xC31d2362fAeD85dF79d0bec99693D0EB0Abd3f74
  address internal constant E_MODE_LOGIC = 0xC31d2362fAeD85dF79d0bec99693D0EB0Abd3f74;

  // https://gnosisscan.io/address/0x4731bF01583F991278692E8727d0700a00A1fBBf
  address internal constant LIQUIDATION_LOGIC = 0x4731bF01583F991278692E8727d0700a00A1fBBf;

  // https://gnosisscan.io/address/0xf8C97539934ee66a67C26010e8e027D77E821B0C
  address internal constant POOL_LOGIC = 0xf8C97539934ee66a67C26010e8e027D77E821B0C;

  // https://gnosisscan.io/address/0x185477906B46D9b8DE0DEB73A1bBfb87b5b51BC3
  address internal constant SUPPLY_LOGIC = 0x185477906B46D9b8DE0DEB73A1bBfb87b5b51BC3;
}
