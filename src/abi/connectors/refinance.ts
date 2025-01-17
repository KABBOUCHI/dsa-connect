import { AbiItem } from 'web3-utils';

export const refinance: AbiItem[] = [
  {
    inputs: [],
    name: "connectorID",
    outputs: [
      {
        internalType: "uint256",
        name: "_type",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "enum Helpers.Protocol",
            name: "source",
            type: "uint8"
          },
          {
            internalType: "enum Helpers.Protocol",
            name: "target",
            type: "uint8"
          },
          {
            internalType: "uint256",
            name: "collateralFee",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "debtFee",
            type: "uint256"
          },
          {
            internalType: "address[]",
            name: "tokens",
            type: "address[]"
          },
          {
            internalType: "uint256[]",
            name: "borrowAmts",
            type: "uint256[]"
          },
          {
            internalType: "uint256[]",
            name: "withdrawAmts",
            type: "uint256[]"
          },
          {
            internalType: "uint256[]",
            name: "borrowRateModes",
            type: "uint256[]"
          },
          {
            internalType: "uint256[]",
            name: "paybackRateModes",
            type: "uint256[]"
          }
        ],
        internalType: "struct RefinanceResolver.RefinanceData",
        name: "data",
        type: "tuple"
      }
    ],
    name: "refinance",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  }
];
