import { useState, useEffect } from "react"
import "./App.css"
import chai from "./chai2.png"
import abi from "./contractJson/Chai.json"
import { Buy } from "./Components/Buy"
import { Memos } from "./Components/Memos"
import { ethers } from "ethers"

function App() {
    const [state, setState] = useState({
        provider: null,
        signer: null,
        contract: null,
    })

    const [account, setAccount] = useState("Not Connected")

    useEffect(() => {
        const template = async () => {
            const contractAddress = "0x2f8deedfdc0EB7DA554F67d0B81e10C58eeb0402"
            const contractAbi = abi.abi

            try {
                const { ethereum } = window
                const account = await ethereum.request({
                    method: "eth_requestAccounts",
                })
                window.ethereum.on("accountsChanged", () => {
                    window.location.reload()
                })

                setAccount(account)

                const provider = new ethers.BrowserProvider(ethereum)
                const signer = provider.getSigner()

                const contract = new ethers.Contract(contractAddress, contractAbi, signer)

                console.log(contract)

                setState({ provider, signer, contract })
            } catch (error) {
                alert(error)
            }
        }
        template()
    }, [])

    return (
        <div>
            <img src={chai} className="img-fluid" alt=".." width="100%" />
            <p style={{ marginTop: "10px", marginLeft: "5px" }}>
                <small>Connected Account - {account}</small>
            </p>

            <Buy state={state} />
            <Memos state={state} />
        </div>
    )
}

export default App
