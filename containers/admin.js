

export default function AdminContainer({loadUser, chain, switchNetwork, loadingUser}){

    return (
        <>
          <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%"}}>
                <h1>Verify Admin Status</h1>
                {
                    chain.isCorrectChain === "correct" || chain.isCorrectChain == "unsure" ?
                    <button style={{height: "40px", width: "20%", cursor: "pointer"}} onClick={loadUser}>Verify</button>
                    :
                    <button style={{height: "40px", width: "20%", cursor: "pointer"}} onClick={switchNetwork}>Switch Chain</button>
                }
                {
                    loadingUser ?
                    <p>Loading...</p>
                    :
                    null
                }
                
          </div>
        </>
    )

}