require("@nomicfoundation/hardhat-toolbox")
require("dotenv").config()

/** @type import('hardhat/config').HardhatUserConfig */

const { GOERLI_RPC_URL, PRIVATE_KEY } = process.env

module.exports = {
    solidity: "0.8.19",

    networks: {
        goerli: {
            url: GOERLI_RPC_URL,
            accounts: [PRIVATE_KEY],
        },
    },
}
