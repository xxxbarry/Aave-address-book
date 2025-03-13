// AUTOGENERATED - MANUALLY CHANGES WILL BE REVERTED BY THE GENERATOR
// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0;

import {IPoolAddressesProvider, IPool, IPoolConfigurator, IAaveOracle, IPoolDataProvider, IACLManager, ICollector} from './AaveV3.sol';
library AaveV3Linea {
  // https://lineascan.build/address/0x89502c3731F69DDC95B65753708A07F8Cd0373F4
  IPoolAddressesProvider internal constant POOL_ADDRESSES_PROVIDER =
    IPoolAddressesProvider(0x89502c3731F69DDC95B65753708A07F8Cd0373F4);

  // https://lineascan.build/address/0xc47b8C00b0f69a36fa203Ffeac0334874574a8Ac
  IPool internal constant POOL = IPool(0xc47b8C00b0f69a36fa203Ffeac0334874574a8Ac);

  // https://lineascan.build/address/0x812E7c19421D9f41A6DDCF047d5cc2dE2Ca5Bfa2
  IPoolConfigurator internal constant POOL_CONFIGURATOR =
    IPoolConfigurator(0x812E7c19421D9f41A6DDCF047d5cc2dE2Ca5Bfa2);

  // https://lineascan.build/address/0xCFDAdA7DCd2e785cF706BaDBC2B8Af5084d595e9
  IAaveOracle internal constant ORACLE = IAaveOracle(0xCFDAdA7DCd2e785cF706BaDBC2B8Af5084d595e9);

  // https://lineascan.build/address/0x8c2d95FE7aeB57b86961F3abB296A54f0ADb7F88
  address internal constant ACL_ADMIN = 0x8c2d95FE7aeB57b86961F3abB296A54f0ADb7F88;

  // https://lineascan.build/address/0xbf32c7dFC72b730967072B112927ca0de205dbb5
  IACLManager internal constant ACL_MANAGER =
    IACLManager(0xbf32c7dFC72b730967072B112927ca0de205dbb5);

  // https://lineascan.build/address/0x9eEBf28397D8bECC999472fC8838CBbeF54aebf6
  IPoolDataProvider internal constant AAVE_PROTOCOL_DATA_PROVIDER =
    IPoolDataProvider(0x9eEBf28397D8bECC999472fC8838CBbeF54aebf6);

  // https://lineascan.build/address/0xE3A01F80c1b5ab2159A3c8B9318C38833011ddF8
  address internal constant POOL_IMPL = 0xE3A01F80c1b5ab2159A3c8B9318C38833011ddF8;

  // https://lineascan.build/address/0x02f4Eea384E92F0C2b4C50Bfb1206cA8EaE6c719
  address internal constant POOL_CONFIGURATOR_IMPL = 0x02f4Eea384E92F0C2b4C50Bfb1206cA8EaE6c719;

  // https://lineascan.build/address/0xc67bb8F2314fA0df50cBa314c6509A7bdAD500C0
  address internal constant DEFAULT_INCENTIVES_CONTROLLER =
    0xc67bb8F2314fA0df50cBa314c6509A7bdAD500C0;

  // https://lineascan.build/address/0x0165C65FB21bDC9Cdc09C627d62AB3a983337158
  address internal constant EMISSION_MANAGER = 0x0165C65FB21bDC9Cdc09C627d62AB3a983337158;

  // https://lineascan.build/address/0x86E2938daE289763D4e09a7e42c5cCcA62Cf9809
  ICollector internal constant COLLECTOR = ICollector(0x86E2938daE289763D4e09a7e42c5cCcA62Cf9809);

  // https://lineascan.build/address/0x589750BA8aF186cE5B55391B0b7148cAD43a1619
  address internal constant DEFAULT_A_TOKEN_IMPL_REV_1 = 0x589750BA8aF186cE5B55391B0b7148cAD43a1619;

  // https://lineascan.build/address/0xBeC519531F0E78BcDdB295242fA4EC5251B38574
  address internal constant DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_1 =
    0xBeC519531F0E78BcDdB295242fA4EC5251B38574;

  // https://lineascan.build/address/0x6c23bAF050ec192afc0B967a93b83e6c5405df43
  address internal constant CONFIG_ENGINE = 0x6c23bAF050ec192afc0B967a93b83e6c5405df43;

  // https://lineascan.build/address/0x3238FC1d642b60F41a35f62570237656C85F4744
  address internal constant RISK_STEWARD = 0x3238FC1d642b60F41a35f62570237656C85F4744;

  // https://lineascan.build/address/0x96dFCCB3F9ACDaF6c8f8a35E814023C3484d1eA2
  address internal constant POOL_ADDRESSES_PROVIDER_REGISTRY =
    0x96dFCCB3F9ACDaF6c8f8a35E814023C3484d1eA2;

  // https://lineascan.build/address/0x117684358D990E42Eb1649E7e8C4691951dc1E71
  address internal constant UI_INCENTIVE_DATA_PROVIDER = 0x117684358D990E42Eb1649E7e8C4691951dc1E71;

  // https://lineascan.build/address/0xf751969521E20A972A0776CDB0497Fad0F773F1F
  address internal constant UI_POOL_DATA_PROVIDER = 0xf751969521E20A972A0776CDB0497Fad0F773F1F;

  // https://lineascan.build/address/0xff75B6da14FfbbfD355Daf7a2731456b3562Ba6D
  address internal constant WALLET_BALANCE_PROVIDER = 0xff75B6da14FfbbfD355Daf7a2731456b3562Ba6D;

  // https://lineascan.build/address/0x31A239f3e39c5D8BA6B201bA81ed584492Ae960F
  address internal constant WETH_GATEWAY = 0x31A239f3e39c5D8BA6B201bA81ed584492Ae960F;

  // https://lineascan.build/address/0x94756B7508631509601a5555c93457Bf0ebDbC48
  address internal constant DUST_BIN = 0x94756B7508631509601a5555c93457Bf0ebDbC48;

  // https://lineascan.build/address/0xA68A0864F304b5145f00A3f8Fd3ec2281568700F
  address internal constant CLINIC_STEWARD = 0xA68A0864F304b5145f00A3f8Fd3ec2281568700F;

  // https://lineascan.build/address/0x07Fc6Fa43Cf6b08d24679ebf8060386b4D41B702
  address internal constant POOL_EXPOSURE_STEWARD = 0x07Fc6Fa43Cf6b08d24679ebf8060386b4D41B702;
}
library AaveV3LineaAssets {
  // https://lineascan.build/address/0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f
  address internal constant WETH_UNDERLYING = 0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f;

  uint8 internal constant WETH_DECIMALS = 18;

  // https://lineascan.build/address/0x787897dF92703BB3Fc4d9Ee98e15C0b8130Bf163
  address internal constant WETH_A_TOKEN = 0x787897dF92703BB3Fc4d9Ee98e15C0b8130Bf163;

  // https://lineascan.build/address/0x0e7543a9dA61b2E71fC880685eD2945B7426a689
  address internal constant WETH_V_TOKEN = 0x0e7543a9dA61b2E71fC880685eD2945B7426a689;

  // https://lineascan.build/address/0x3c6Cd9Cc7c7a4c2Cf5a82734CD249D7D593354dA
  address internal constant WETH_ORACLE = 0x3c6Cd9Cc7c7a4c2Cf5a82734CD249D7D593354dA;

  // https://lineascan.build/address/0xB1532b76D054c9F9E61b25c4d91f69B4133E4671
  address internal constant WETH_INTEREST_RATE_STRATEGY =
    0xB1532b76D054c9F9E61b25c4d91f69B4133E4671;

  // https://lineascan.build/address/0x3aAB2285ddcDdaD8edf438C1bAB47e1a9D05a9b4
  address internal constant WBTC_UNDERLYING = 0x3aAB2285ddcDdaD8edf438C1bAB47e1a9D05a9b4;

  uint8 internal constant WBTC_DECIMALS = 8;

  // https://lineascan.build/address/0x37f7E06359F98162615e016d0008023D910bB576
  address internal constant WBTC_A_TOKEN = 0x37f7E06359F98162615e016d0008023D910bB576;

  // https://lineascan.build/address/0x74A1b56f5137b00AA0ADA1dD964a3A361Ecc32e9
  address internal constant WBTC_V_TOKEN = 0x74A1b56f5137b00AA0ADA1dD964a3A361Ecc32e9;

  // https://lineascan.build/address/0x7A99092816C8BD5ec8ba229e3a6E6Da1E628E1F9
  address internal constant WBTC_ORACLE = 0x7A99092816C8BD5ec8ba229e3a6E6Da1E628E1F9;

  // https://lineascan.build/address/0xB1532b76D054c9F9E61b25c4d91f69B4133E4671
  address internal constant WBTC_INTEREST_RATE_STRATEGY =
    0xB1532b76D054c9F9E61b25c4d91f69B4133E4671;

  // https://lineascan.build/address/0x176211869cA2b568f2A7D4EE941E073a821EE1ff
  address internal constant USDC_UNDERLYING = 0x176211869cA2b568f2A7D4EE941E073a821EE1ff;

  uint8 internal constant USDC_DECIMALS = 6;

  // https://lineascan.build/address/0x374D7860c4f2f604De0191298dD393703Cce84f3
  address internal constant USDC_A_TOKEN = 0x374D7860c4f2f604De0191298dD393703Cce84f3;

  // https://lineascan.build/address/0x63aB166e6E1b6Fb705b6ca23686FaD9705EB3534
  address internal constant USDC_V_TOKEN = 0x63aB166e6E1b6Fb705b6ca23686FaD9705EB3534;

  // https://lineascan.build/address/0x14ac9f8a8646D11D66fbaA9E9F5A869dC08B5D71
  address internal constant USDC_ORACLE = 0x14ac9f8a8646D11D66fbaA9E9F5A869dC08B5D71;

  // https://lineascan.build/address/0xB1532b76D054c9F9E61b25c4d91f69B4133E4671
  address internal constant USDC_INTEREST_RATE_STRATEGY =
    0xB1532b76D054c9F9E61b25c4d91f69B4133E4671;

  // https://lineascan.build/address/0xA219439258ca9da29E9Cc4cE5596924745e12B93
  address internal constant USDT_UNDERLYING = 0xA219439258ca9da29E9Cc4cE5596924745e12B93;

  uint8 internal constant USDT_DECIMALS = 6;

  // https://lineascan.build/address/0x88231dfEC71D4FF5c1e466D08C321944A7adC673
  address internal constant USDT_A_TOKEN = 0x88231dfEC71D4FF5c1e466D08C321944A7adC673;

  // https://lineascan.build/address/0x4CEdfa47F7d0e9036110B850Ce49f4cd47b28a2F
  address internal constant USDT_V_TOKEN = 0x4CEdfa47F7d0e9036110B850Ce49f4cd47b28a2F;

  // https://lineascan.build/address/0x0DccbA847D677d4dc3c22C9Dc17DC468226d08Ed
  address internal constant USDT_ORACLE = 0x0DccbA847D677d4dc3c22C9Dc17DC468226d08Ed;

  // https://lineascan.build/address/0xB1532b76D054c9F9E61b25c4d91f69B4133E4671
  address internal constant USDT_INTEREST_RATE_STRATEGY =
    0xB1532b76D054c9F9E61b25c4d91f69B4133E4671;

  // https://lineascan.build/address/0xB5beDd42000b71FddE22D3eE8a79Bd49A568fC8F
  address internal constant wstETH_UNDERLYING = 0xB5beDd42000b71FddE22D3eE8a79Bd49A568fC8F;

  uint8 internal constant wstETH_DECIMALS = 18;

  // https://lineascan.build/address/0x58943d20e010d9E34C4511990e232783460d0219
  address internal constant wstETH_A_TOKEN = 0x58943d20e010d9E34C4511990e232783460d0219;

  // https://lineascan.build/address/0x81C1a619Be23050B3242B41a739e6B6CfDa56687
  address internal constant wstETH_V_TOKEN = 0x81C1a619Be23050B3242B41a739e6B6CfDa56687;

  // https://lineascan.build/address/0x96014CA32e2902A5F07c6ADF00eB17D3DE9aC364
  address internal constant wstETH_ORACLE = 0x96014CA32e2902A5F07c6ADF00eB17D3DE9aC364;

  // https://lineascan.build/address/0xB1532b76D054c9F9E61b25c4d91f69B4133E4671
  address internal constant wstETH_INTEREST_RATE_STRATEGY =
    0xB1532b76D054c9F9E61b25c4d91f69B4133E4671;

  // https://lineascan.build/address/0x2416092f143378750bb29b79eD961ab195CcEea5
  address internal constant ezETH_UNDERLYING = 0x2416092f143378750bb29b79eD961ab195CcEea5;

  uint8 internal constant ezETH_DECIMALS = 18;

  // https://lineascan.build/address/0x935EfCBeFc1dF0541aFc3fE145134f8c9a0beB89
  address internal constant ezETH_A_TOKEN = 0x935EfCBeFc1dF0541aFc3fE145134f8c9a0beB89;

  // https://lineascan.build/address/0x1fE3452CEF885724F8aDF1382ee17d05d7e01CaB
  address internal constant ezETH_V_TOKEN = 0x1fE3452CEF885724F8aDF1382ee17d05d7e01CaB;

  // https://lineascan.build/address/0x1217a8A40cea4dB5429fbF6EDeB3B606b99CC9b0
  address internal constant ezETH_ORACLE = 0x1217a8A40cea4dB5429fbF6EDeB3B606b99CC9b0;

  // https://lineascan.build/address/0xB1532b76D054c9F9E61b25c4d91f69B4133E4671
  address internal constant ezETH_INTEREST_RATE_STRATEGY =
    0xB1532b76D054c9F9E61b25c4d91f69B4133E4671;

  // https://lineascan.build/address/0x1Bf74C010E6320bab11e2e5A532b5AC15e0b8aA6
  address internal constant weETH_UNDERLYING = 0x1Bf74C010E6320bab11e2e5A532b5AC15e0b8aA6;

  uint8 internal constant weETH_DECIMALS = 18;

  // https://lineascan.build/address/0x0C7921aB4888fd06731898b3fffFeB06781D5F4F
  address internal constant weETH_A_TOKEN = 0x0C7921aB4888fd06731898b3fffFeB06781D5F4F;

  // https://lineascan.build/address/0x37a843725508243952950307CeacE7A9f5D5c280
  address internal constant weETH_V_TOKEN = 0x37a843725508243952950307CeacE7A9f5D5c280;

  // https://lineascan.build/address/0x0abf2f5642d945b49B8d2DBC6f85c2D8e0424C85
  address internal constant weETH_ORACLE = 0x0abf2f5642d945b49B8d2DBC6f85c2D8e0424C85;

  // https://lineascan.build/address/0xB1532b76D054c9F9E61b25c4d91f69B4133E4671
  address internal constant weETH_INTEREST_RATE_STRATEGY =
    0xB1532b76D054c9F9E61b25c4d91f69B4133E4671;
}
library AaveV3LineaEModes {
  uint8 internal constant NONE = 0;

  uint8 internal constant WSTETH_CORRELATED = 1;

  uint8 internal constant EZETH_CORRELATED = 2;

  uint8 internal constant WEETH_CORRELATED = 3;
}
library AaveV3LineaExternalLibraries {
  // https://lineascan.build/address/0x0b3486805D3bda7ACb2d5aa7E26f0b68aF647bc5
  address internal constant FLASHLOAN_LOGIC = 0x0b3486805D3bda7ACb2d5aa7E26f0b68aF647bc5;

  // https://lineascan.build/address/0xAB3218d0900Ba992084a6592b43f66926D4F5757
  address internal constant BORROW_LOGIC = 0xAB3218d0900Ba992084a6592b43f66926D4F5757;

  // https://lineascan.build/address/0x028a1Bc3769209345C9476aFBa72EE4274Cd2A5A
  address internal constant BRIDGE_LOGIC = 0x028a1Bc3769209345C9476aFBa72EE4274Cd2A5A;

  // https://lineascan.build/address/0xc463D0Ef209A60318F6aF2e8D29958a665d89B1e
  address internal constant E_MODE_LOGIC = 0xc463D0Ef209A60318F6aF2e8D29958a665d89B1e;

  // https://lineascan.build/address/0x70Ac8F684eED3769960b2f863e405afc90CabCD4
  address internal constant LIQUIDATION_LOGIC = 0x70Ac8F684eED3769960b2f863e405afc90CabCD4;

  // https://lineascan.build/address/0x50B8ed003a371cc498c57518e3581a059834c70c
  address internal constant POOL_LOGIC = 0x50B8ed003a371cc498c57518e3581a059834c70c;

  // https://lineascan.build/address/0x0742d8afd443B9D9B0587536d3750Ef94d69e4b7
  address internal constant SUPPLY_LOGIC = 0x0742d8afd443B9D9B0587536d3750Ef94d69e4b7;
}
