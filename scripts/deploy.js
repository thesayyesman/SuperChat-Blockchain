//imports
const { ethers } = require("hardhat")

//async main()

async function main() {
    // const contractFactory = await ethers.getContractFactory("Chai")
    // console.log("Deploying Contract...")
    // const contract = await contractFactory.deploy()
    // console.log(`Contract deployment Address: ${contract.target}`)

    // await contract.deployed()

    //

    const contract = await ethers.deployContract("Chai")
    await contract.waitForDeployment()
    console.log(`Contract deployment Address: ${contract.target}`)
}

//main()
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })

// Contract deployment Address: 0xc4181d88fd18320B356866a0eae7764e720043C1
