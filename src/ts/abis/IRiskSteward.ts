// AUTOGENERATED - MANUALLY CHANGES WILL BE REVERTED BY THE GENERATOR
export const IRiskSteward_ABI = [
  {
    type: 'constructor',
    inputs: [
      {
        name: 'poolDataProvider',
        type: 'address',
        internalType: 'contract IPoolDataProvider',
      },
      {
        name: 'engine',
        type: 'address',
        internalType: 'contract IAaveV3ConfigEngine',
      },
      {
        name: 'riskCouncil',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'riskConfig',
        type: 'tuple',
        internalType: 'struct IRiskSteward.Config',
        components: [
          {
            name: 'ltv',
            type: 'tuple',
            internalType: 'struct IRiskSteward.RiskParamConfig',
            components: [
              {
                name: 'minDelay',
                type: 'uint40',
                internalType: 'uint40',
              },
              {
                name: 'maxPercentChange',
                type: 'uint256',
                internalType: 'uint256',
              },
            ],
          },
          {
            name: 'liquidationThreshold',
            type: 'tuple',
            internalType: 'struct IRiskSteward.RiskParamConfig',
            components: [
              {
                name: 'minDelay',
                type: 'uint40',
                internalType: 'uint40',
              },
              {
                name: 'maxPercentChange',
                type: 'uint256',
                internalType: 'uint256',
              },
            ],
          },
          {
            name: 'liquidationBonus',
            type: 'tuple',
            internalType: 'struct IRiskSteward.RiskParamConfig',
            components: [
              {
                name: 'minDelay',
                type: 'uint40',
                internalType: 'uint40',
              },
              {
                name: 'maxPercentChange',
                type: 'uint256',
                internalType: 'uint256',
              },
            ],
          },
          {
            name: 'supplyCap',
            type: 'tuple',
            internalType: 'struct IRiskSteward.RiskParamConfig',
            components: [
              {
                name: 'minDelay',
                type: 'uint40',
                internalType: 'uint40',
              },
              {
                name: 'maxPercentChange',
                type: 'uint256',
                internalType: 'uint256',
              },
            ],
          },
          {
            name: 'borrowCap',
            type: 'tuple',
            internalType: 'struct IRiskSteward.RiskParamConfig',
            components: [
              {
                name: 'minDelay',
                type: 'uint40',
                internalType: 'uint40',
              },
              {
                name: 'maxPercentChange',
                type: 'uint256',
                internalType: 'uint256',
              },
            ],
          },
          {
            name: 'debtCeiling',
            type: 'tuple',
            internalType: 'struct IRiskSteward.RiskParamConfig',
            components: [
              {
                name: 'minDelay',
                type: 'uint40',
                internalType: 'uint40',
              },
              {
                name: 'maxPercentChange',
                type: 'uint256',
                internalType: 'uint256',
              },
            ],
          },
          {
            name: 'baseVariableBorrowRate',
            type: 'tuple',
            internalType: 'struct IRiskSteward.RiskParamConfig',
            components: [
              {
                name: 'minDelay',
                type: 'uint40',
                internalType: 'uint40',
              },
              {
                name: 'maxPercentChange',
                type: 'uint256',
                internalType: 'uint256',
              },
            ],
          },
          {
            name: 'variableRateSlope1',
            type: 'tuple',
            internalType: 'struct IRiskSteward.RiskParamConfig',
            components: [
              {
                name: 'minDelay',
                type: 'uint40',
                internalType: 'uint40',
              },
              {
                name: 'maxPercentChange',
                type: 'uint256',
                internalType: 'uint256',
              },
            ],
          },
          {
            name: 'variableRateSlope2',
            type: 'tuple',
            internalType: 'struct IRiskSteward.RiskParamConfig',
            components: [
              {
                name: 'minDelay',
                type: 'uint40',
                internalType: 'uint40',
              },
              {
                name: 'maxPercentChange',
                type: 'uint256',
                internalType: 'uint256',
              },
            ],
          },
          {
            name: 'optimalUsageRatio',
            type: 'tuple',
            internalType: 'struct IRiskSteward.RiskParamConfig',
            components: [
              {
                name: 'minDelay',
                type: 'uint40',
                internalType: 'uint40',
              },
              {
                name: 'maxPercentChange',
                type: 'uint256',
                internalType: 'uint256',
              },
            ],
          },
          {
            name: 'priceCapLst',
            type: 'tuple',
            internalType: 'struct IRiskSteward.RiskParamConfig',
            components: [
              {
                name: 'minDelay',
                type: 'uint40',
                internalType: 'uint40',
              },
              {
                name: 'maxPercentChange',
                type: 'uint256',
                internalType: 'uint256',
              },
            ],
          },
          {
            name: 'priceCapStable',
            type: 'tuple',
            internalType: 'struct IRiskSteward.RiskParamConfig',
            components: [
              {
                name: 'minDelay',
                type: 'uint40',
                internalType: 'uint40',
              },
              {
                name: 'maxPercentChange',
                type: 'uint256',
                internalType: 'uint256',
              },
            ],
          },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'CONFIG_ENGINE',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'address',
        internalType: 'contract IAaveV3ConfigEngine',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'POOL_DATA_PROVIDER',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'address',
        internalType: 'contract IPoolDataProvider',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'RISK_COUNCIL',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'address',
        internalType: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getRiskConfig',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'tuple',
        internalType: 'struct IRiskSteward.Config',
        components: [
          {
            name: 'ltv',
            type: 'tuple',
            internalType: 'struct IRiskSteward.RiskParamConfig',
            components: [
              {
                name: 'minDelay',
                type: 'uint40',
                internalType: 'uint40',
              },
              {
                name: 'maxPercentChange',
                type: 'uint256',
                internalType: 'uint256',
              },
            ],
          },
          {
            name: 'liquidationThreshold',
            type: 'tuple',
            internalType: 'struct IRiskSteward.RiskParamConfig',
            components: [
              {
                name: 'minDelay',
                type: 'uint40',
                internalType: 'uint40',
              },
              {
                name: 'maxPercentChange',
                type: 'uint256',
                internalType: 'uint256',
              },
            ],
          },
          {
            name: 'liquidationBonus',
            type: 'tuple',
            internalType: 'struct IRiskSteward.RiskParamConfig',
            components: [
              {
                name: 'minDelay',
                type: 'uint40',
                internalType: 'uint40',
              },
              {
                name: 'maxPercentChange',
                type: 'uint256',
                internalType: 'uint256',
              },
            ],
          },
          {
            name: 'supplyCap',
            type: 'tuple',
            internalType: 'struct IRiskSteward.RiskParamConfig',
            components: [
              {
                name: 'minDelay',
                type: 'uint40',
                internalType: 'uint40',
              },
              {
                name: 'maxPercentChange',
                type: 'uint256',
                internalType: 'uint256',
              },
            ],
          },
          {
            name: 'borrowCap',
            type: 'tuple',
            internalType: 'struct IRiskSteward.RiskParamConfig',
            components: [
              {
                name: 'minDelay',
                type: 'uint40',
                internalType: 'uint40',
              },
              {
                name: 'maxPercentChange',
                type: 'uint256',
                internalType: 'uint256',
              },
            ],
          },
          {
            name: 'debtCeiling',
            type: 'tuple',
            internalType: 'struct IRiskSteward.RiskParamConfig',
            components: [
              {
                name: 'minDelay',
                type: 'uint40',
                internalType: 'uint40',
              },
              {
                name: 'maxPercentChange',
                type: 'uint256',
                internalType: 'uint256',
              },
            ],
          },
          {
            name: 'baseVariableBorrowRate',
            type: 'tuple',
            internalType: 'struct IRiskSteward.RiskParamConfig',
            components: [
              {
                name: 'minDelay',
                type: 'uint40',
                internalType: 'uint40',
              },
              {
                name: 'maxPercentChange',
                type: 'uint256',
                internalType: 'uint256',
              },
            ],
          },
          {
            name: 'variableRateSlope1',
            type: 'tuple',
            internalType: 'struct IRiskSteward.RiskParamConfig',
            components: [
              {
                name: 'minDelay',
                type: 'uint40',
                internalType: 'uint40',
              },
              {
                name: 'maxPercentChange',
                type: 'uint256',
                internalType: 'uint256',
              },
            ],
          },
          {
            name: 'variableRateSlope2',
            type: 'tuple',
            internalType: 'struct IRiskSteward.RiskParamConfig',
            components: [
              {
                name: 'minDelay',
                type: 'uint40',
                internalType: 'uint40',
              },
              {
                name: 'maxPercentChange',
                type: 'uint256',
                internalType: 'uint256',
              },
            ],
          },
          {
            name: 'optimalUsageRatio',
            type: 'tuple',
            internalType: 'struct IRiskSteward.RiskParamConfig',
            components: [
              {
                name: 'minDelay',
                type: 'uint40',
                internalType: 'uint40',
              },
              {
                name: 'maxPercentChange',
                type: 'uint256',
                internalType: 'uint256',
              },
            ],
          },
          {
            name: 'priceCapLst',
            type: 'tuple',
            internalType: 'struct IRiskSteward.RiskParamConfig',
            components: [
              {
                name: 'minDelay',
                type: 'uint40',
                internalType: 'uint40',
              },
              {
                name: 'maxPercentChange',
                type: 'uint256',
                internalType: 'uint256',
              },
            ],
          },
          {
            name: 'priceCapStable',
            type: 'tuple',
            internalType: 'struct IRiskSteward.RiskParamConfig',
            components: [
              {
                name: 'minDelay',
                type: 'uint40',
                internalType: 'uint40',
              },
              {
                name: 'maxPercentChange',
                type: 'uint256',
                internalType: 'uint256',
              },
            ],
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getTimelock',
    inputs: [
      {
        name: 'asset',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'tuple',
        internalType: 'struct IRiskSteward.Debounce',
        components: [
          {
            name: 'supplyCapLastUpdated',
            type: 'uint40',
            internalType: 'uint40',
          },
          {
            name: 'borrowCapLastUpdated',
            type: 'uint40',
            internalType: 'uint40',
          },
          {
            name: 'ltvLastUpdated',
            type: 'uint40',
            internalType: 'uint40',
          },
          {
            name: 'liquidationBonusLastUpdated',
            type: 'uint40',
            internalType: 'uint40',
          },
          {
            name: 'liquidationThresholdLastUpdated',
            type: 'uint40',
            internalType: 'uint40',
          },
          {
            name: 'debtCeilingLastUpdated',
            type: 'uint40',
            internalType: 'uint40',
          },
          {
            name: 'baseVariableRateLastUpdated',
            type: 'uint40',
            internalType: 'uint40',
          },
          {
            name: 'variableRateSlope1LastUpdated',
            type: 'uint40',
            internalType: 'uint40',
          },
          {
            name: 'variableRateSlope2LastUpdated',
            type: 'uint40',
            internalType: 'uint40',
          },
          {
            name: 'optimalUsageRatioLastUpdated',
            type: 'uint40',
            internalType: 'uint40',
          },
          {
            name: 'priceCapLastUpdated',
            type: 'uint40',
            internalType: 'uint40',
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'isAddressRestricted',
    inputs: [
      {
        name: 'contractAddress',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'bool',
        internalType: 'bool',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'owner',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'address',
        internalType: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'renounceOwnership',
    inputs: [],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'setAddressRestricted',
    inputs: [
      {
        name: 'contractAddress',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'isRestricted',
        type: 'bool',
        internalType: 'bool',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'setRiskConfig',
    inputs: [
      {
        name: 'riskConfig',
        type: 'tuple',
        internalType: 'struct IRiskSteward.Config',
        components: [
          {
            name: 'ltv',
            type: 'tuple',
            internalType: 'struct IRiskSteward.RiskParamConfig',
            components: [
              {
                name: 'minDelay',
                type: 'uint40',
                internalType: 'uint40',
              },
              {
                name: 'maxPercentChange',
                type: 'uint256',
                internalType: 'uint256',
              },
            ],
          },
          {
            name: 'liquidationThreshold',
            type: 'tuple',
            internalType: 'struct IRiskSteward.RiskParamConfig',
            components: [
              {
                name: 'minDelay',
                type: 'uint40',
                internalType: 'uint40',
              },
              {
                name: 'maxPercentChange',
                type: 'uint256',
                internalType: 'uint256',
              },
            ],
          },
          {
            name: 'liquidationBonus',
            type: 'tuple',
            internalType: 'struct IRiskSteward.RiskParamConfig',
            components: [
              {
                name: 'minDelay',
                type: 'uint40',
                internalType: 'uint40',
              },
              {
                name: 'maxPercentChange',
                type: 'uint256',
                internalType: 'uint256',
              },
            ],
          },
          {
            name: 'supplyCap',
            type: 'tuple',
            internalType: 'struct IRiskSteward.RiskParamConfig',
            components: [
              {
                name: 'minDelay',
                type: 'uint40',
                internalType: 'uint40',
              },
              {
                name: 'maxPercentChange',
                type: 'uint256',
                internalType: 'uint256',
              },
            ],
          },
          {
            name: 'borrowCap',
            type: 'tuple',
            internalType: 'struct IRiskSteward.RiskParamConfig',
            components: [
              {
                name: 'minDelay',
                type: 'uint40',
                internalType: 'uint40',
              },
              {
                name: 'maxPercentChange',
                type: 'uint256',
                internalType: 'uint256',
              },
            ],
          },
          {
            name: 'debtCeiling',
            type: 'tuple',
            internalType: 'struct IRiskSteward.RiskParamConfig',
            components: [
              {
                name: 'minDelay',
                type: 'uint40',
                internalType: 'uint40',
              },
              {
                name: 'maxPercentChange',
                type: 'uint256',
                internalType: 'uint256',
              },
            ],
          },
          {
            name: 'baseVariableBorrowRate',
            type: 'tuple',
            internalType: 'struct IRiskSteward.RiskParamConfig',
            components: [
              {
                name: 'minDelay',
                type: 'uint40',
                internalType: 'uint40',
              },
              {
                name: 'maxPercentChange',
                type: 'uint256',
                internalType: 'uint256',
              },
            ],
          },
          {
            name: 'variableRateSlope1',
            type: 'tuple',
            internalType: 'struct IRiskSteward.RiskParamConfig',
            components: [
              {
                name: 'minDelay',
                type: 'uint40',
                internalType: 'uint40',
              },
              {
                name: 'maxPercentChange',
                type: 'uint256',
                internalType: 'uint256',
              },
            ],
          },
          {
            name: 'variableRateSlope2',
            type: 'tuple',
            internalType: 'struct IRiskSteward.RiskParamConfig',
            components: [
              {
                name: 'minDelay',
                type: 'uint40',
                internalType: 'uint40',
              },
              {
                name: 'maxPercentChange',
                type: 'uint256',
                internalType: 'uint256',
              },
            ],
          },
          {
            name: 'optimalUsageRatio',
            type: 'tuple',
            internalType: 'struct IRiskSteward.RiskParamConfig',
            components: [
              {
                name: 'minDelay',
                type: 'uint40',
                internalType: 'uint40',
              },
              {
                name: 'maxPercentChange',
                type: 'uint256',
                internalType: 'uint256',
              },
            ],
          },
          {
            name: 'priceCapLst',
            type: 'tuple',
            internalType: 'struct IRiskSteward.RiskParamConfig',
            components: [
              {
                name: 'minDelay',
                type: 'uint40',
                internalType: 'uint40',
              },
              {
                name: 'maxPercentChange',
                type: 'uint256',
                internalType: 'uint256',
              },
            ],
          },
          {
            name: 'priceCapStable',
            type: 'tuple',
            internalType: 'struct IRiskSteward.RiskParamConfig',
            components: [
              {
                name: 'minDelay',
                type: 'uint40',
                internalType: 'uint40',
              },
              {
                name: 'maxPercentChange',
                type: 'uint256',
                internalType: 'uint256',
              },
            ],
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'transferOwnership',
    inputs: [
      {
        name: 'newOwner',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'updateCaps',
    inputs: [
      {
        name: 'capsUpdate',
        type: 'tuple[]',
        internalType: 'struct IAaveV3ConfigEngine.CapsUpdate[]',
        components: [
          {
            name: 'asset',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'supplyCap',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'borrowCap',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'updateCollateralSide',
    inputs: [
      {
        name: 'collateralUpdates',
        type: 'tuple[]',
        internalType: 'struct IAaveV3ConfigEngine.CollateralUpdate[]',
        components: [
          {
            name: 'asset',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'ltv',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'liqThreshold',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'liqBonus',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'debtCeiling',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'liqProtocolFee',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'updateLstPriceCaps',
    inputs: [
      {
        name: 'priceCapUpdates',
        type: 'tuple[]',
        internalType: 'struct IRiskSteward.PriceCapLstUpdate[]',
        components: [
          {
            name: 'oracle',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'priceCapUpdateParams',
            type: 'tuple',
            internalType: 'struct IPriceCapAdapter.PriceCapUpdateParams',
            components: [
              {
                name: 'snapshotRatio',
                type: 'uint104',
                internalType: 'uint104',
              },
              {
                name: 'snapshotTimestamp',
                type: 'uint48',
                internalType: 'uint48',
              },
              {
                name: 'maxYearlyRatioGrowthPercent',
                type: 'uint16',
                internalType: 'uint16',
              },
            ],
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'updateRates',
    inputs: [
      {
        name: 'ratesUpdate',
        type: 'tuple[]',
        internalType: 'struct IAaveV3ConfigEngine.RateStrategyUpdate[]',
        components: [
          {
            name: 'asset',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'params',
            type: 'tuple',
            internalType: 'struct IAaveV3ConfigEngine.InterestRateInputData',
            components: [
              {
                name: 'optimalUsageRatio',
                type: 'uint256',
                internalType: 'uint256',
              },
              {
                name: 'baseVariableBorrowRate',
                type: 'uint256',
                internalType: 'uint256',
              },
              {
                name: 'variableRateSlope1',
                type: 'uint256',
                internalType: 'uint256',
              },
              {
                name: 'variableRateSlope2',
                type: 'uint256',
                internalType: 'uint256',
              },
            ],
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'updateStablePriceCaps',
    inputs: [
      {
        name: 'priceCapUpdates',
        type: 'tuple[]',
        internalType: 'struct IRiskSteward.PriceCapStableUpdate[]',
        components: [
          {
            name: 'oracle',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'priceCap',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    name: 'AddressRestricted',
    inputs: [
      {
        name: 'contractAddress',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'isRestricted',
        type: 'bool',
        indexed: true,
        internalType: 'bool',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'OwnershipTransferred',
    inputs: [
      {
        name: 'previousOwner',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'newOwner',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'RiskConfigSet',
    inputs: [
      {
        name: 'riskConfig',
        type: 'tuple',
        indexed: true,
        internalType: 'struct IRiskSteward.Config',
        components: [
          {
            name: 'ltv',
            type: 'tuple',
            internalType: 'struct IRiskSteward.RiskParamConfig',
            components: [
              {
                name: 'minDelay',
                type: 'uint40',
                internalType: 'uint40',
              },
              {
                name: 'maxPercentChange',
                type: 'uint256',
                internalType: 'uint256',
              },
            ],
          },
          {
            name: 'liquidationThreshold',
            type: 'tuple',
            internalType: 'struct IRiskSteward.RiskParamConfig',
            components: [
              {
                name: 'minDelay',
                type: 'uint40',
                internalType: 'uint40',
              },
              {
                name: 'maxPercentChange',
                type: 'uint256',
                internalType: 'uint256',
              },
            ],
          },
          {
            name: 'liquidationBonus',
            type: 'tuple',
            internalType: 'struct IRiskSteward.RiskParamConfig',
            components: [
              {
                name: 'minDelay',
                type: 'uint40',
                internalType: 'uint40',
              },
              {
                name: 'maxPercentChange',
                type: 'uint256',
                internalType: 'uint256',
              },
            ],
          },
          {
            name: 'supplyCap',
            type: 'tuple',
            internalType: 'struct IRiskSteward.RiskParamConfig',
            components: [
              {
                name: 'minDelay',
                type: 'uint40',
                internalType: 'uint40',
              },
              {
                name: 'maxPercentChange',
                type: 'uint256',
                internalType: 'uint256',
              },
            ],
          },
          {
            name: 'borrowCap',
            type: 'tuple',
            internalType: 'struct IRiskSteward.RiskParamConfig',
            components: [
              {
                name: 'minDelay',
                type: 'uint40',
                internalType: 'uint40',
              },
              {
                name: 'maxPercentChange',
                type: 'uint256',
                internalType: 'uint256',
              },
            ],
          },
          {
            name: 'debtCeiling',
            type: 'tuple',
            internalType: 'struct IRiskSteward.RiskParamConfig',
            components: [
              {
                name: 'minDelay',
                type: 'uint40',
                internalType: 'uint40',
              },
              {
                name: 'maxPercentChange',
                type: 'uint256',
                internalType: 'uint256',
              },
            ],
          },
          {
            name: 'baseVariableBorrowRate',
            type: 'tuple',
            internalType: 'struct IRiskSteward.RiskParamConfig',
            components: [
              {
                name: 'minDelay',
                type: 'uint40',
                internalType: 'uint40',
              },
              {
                name: 'maxPercentChange',
                type: 'uint256',
                internalType: 'uint256',
              },
            ],
          },
          {
            name: 'variableRateSlope1',
            type: 'tuple',
            internalType: 'struct IRiskSteward.RiskParamConfig',
            components: [
              {
                name: 'minDelay',
                type: 'uint40',
                internalType: 'uint40',
              },
              {
                name: 'maxPercentChange',
                type: 'uint256',
                internalType: 'uint256',
              },
            ],
          },
          {
            name: 'variableRateSlope2',
            type: 'tuple',
            internalType: 'struct IRiskSteward.RiskParamConfig',
            components: [
              {
                name: 'minDelay',
                type: 'uint40',
                internalType: 'uint40',
              },
              {
                name: 'maxPercentChange',
                type: 'uint256',
                internalType: 'uint256',
              },
            ],
          },
          {
            name: 'optimalUsageRatio',
            type: 'tuple',
            internalType: 'struct IRiskSteward.RiskParamConfig',
            components: [
              {
                name: 'minDelay',
                type: 'uint40',
                internalType: 'uint40',
              },
              {
                name: 'maxPercentChange',
                type: 'uint256',
                internalType: 'uint256',
              },
            ],
          },
          {
            name: 'priceCapLst',
            type: 'tuple',
            internalType: 'struct IRiskSteward.RiskParamConfig',
            components: [
              {
                name: 'minDelay',
                type: 'uint40',
                internalType: 'uint40',
              },
              {
                name: 'maxPercentChange',
                type: 'uint256',
                internalType: 'uint256',
              },
            ],
          },
          {
            name: 'priceCapStable',
            type: 'tuple',
            internalType: 'struct IRiskSteward.RiskParamConfig',
            components: [
              {
                name: 'minDelay',
                type: 'uint40',
                internalType: 'uint40',
              },
              {
                name: 'maxPercentChange',
                type: 'uint256',
                internalType: 'uint256',
              },
            ],
          },
        ],
      },
    ],
    anonymous: false,
  },
  {
    type: 'error',
    name: 'AssetIsRestricted',
    inputs: [],
  },
  {
    type: 'error',
    name: 'DebounceNotRespected',
    inputs: [],
  },
  {
    type: 'error',
    name: 'InvalidCaller',
    inputs: [],
  },
  {
    type: 'error',
    name: 'InvalidPriceCapUpdate',
    inputs: [],
  },
  {
    type: 'error',
    name: 'InvalidUpdateToZero',
    inputs: [],
  },
  {
    type: 'error',
    name: 'NoZeroUpdates',
    inputs: [],
  },
  {
    type: 'error',
    name: 'OracleIsRestricted',
    inputs: [],
  },
  {
    type: 'error',
    name: 'ParamChangeNotAllowed',
    inputs: [],
  },
  {
    type: 'error',
    name: 'UpdateNotInRange',
    inputs: [],
  },
] as const;
