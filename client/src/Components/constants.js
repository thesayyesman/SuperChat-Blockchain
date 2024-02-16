export const contractAddress = "0x2f8deedfdc0EB7DA554F67d0B81e10C58eeb0402"
export const abi = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "name",
                type: "string",
            },
            {
                internalType: "string",
                name: "message",
                type: "string",
            },
        ],
        name: "buyChai",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [],
        name: "getMemos",
        outputs: [
            {
                components: [
                    {
                        internalType: "string",
                        name: "name",
                        type: "string",
                    },
                    {
                        internalType: "string",
                        name: "message",
                        type: "string",
                    },
                    {
                        internalType: "uint256",
                        name: "timestamp",
                        type: "uint256",
                    },
                    {
                        internalType: "address",
                        name: "sender",
                        type: "address",
                    },
                ],
                internalType: "struct Chai.Memo[]",
                name: "",
                type: "tuple[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
]
