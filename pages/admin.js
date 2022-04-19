import React from "react";
import useAdmin from "../hooks/useadmin";


export default function Admin(){

    const { balance, withdrawBalance } = useAdmin()

    return (
        <div style={{width: "100%", display: "flex", justifyContent: "center", minHeight: "100vh"}}>
            
            <div style={{display: "flex", flexDirection: "column", width: "80%", alignItems: "center"}}>
            <h1>Admin Page</h1>
            <div style={{display: "flex", width: "25%", justifyContent: "space-between", margin:"10px"}}>
                <h4>Withdraw</h4>
                <p>{balance}</p>
                <button style={{cursor: "pointer"}} onClick={withdrawBalance}>Click to Withdraw</button>
            </div>
            </div>
        </div>
    )
}