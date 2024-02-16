import React from "react"
import "./Buy.css"
import { ethers } from "ethers"

export const Buy = ({ state }) => {
    const buychai = async (e) => {
        e.preventDefault()
        const { contract } = state

        const name = document.querySelector("#name").value
        const message = document.querySelector("#message").value
        const amount = { value: ethers.parseEther("0.001") }

        const trxn = await contract.methods.buyChai(name, message, amount)
        await trxn.wait(1)
        alert("Transaction Successful !")
        window.location.reload()
    }
    return (
        <div className="center">
            <h1>Thanks</h1>
            <form onSubmit={buychai}>
                <div className="inputbox">
                    <input type="text" required="required" id="name" />
                    <span>Name</span>
                </div>
                <div className="inputbox">
                    <input type="text" required="required" id="message" />
                    <span>Message</span>
                </div>
                <div className="inputbox">
                    <input type="submit" value="Pay" disabled={!state.contract} />
                </div>
            </form>
        </div>
    )
}
