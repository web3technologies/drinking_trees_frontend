import useMyTrees from "../hooks/usemytrees"


export default function MyTreesContainer(){

    const{ userAssets, handlePriceChange, loading} = useMyTrees()

    

    return (
        <>
            <div style={{display: "flex", justifyContent: "center", margin: "80px 0"}}>
                <div style={{display: "flex", justifyContent: "space-evenly", width: "85%"}}>
                    {
                        userAssets ? 
                        userAssets.map((nft, idx)=>(
                            <img style={{width: "20%"}} src={nft.data.image}></img>
                        ))
                        :
                        null
                    }
                    
                </div>
            </div>
        
        </>)
    
}