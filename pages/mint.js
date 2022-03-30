import ComingSoonContainer from "../containers/comingsoon"
import useMint from '../hooks/usemint';


export default function Mint(){

    const { mintNFT } = useMint()

    const style={
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }


    return (
        <div style={style}>
            <h1 style={{color: "white"}}>Mint</h1>
            <button 
            style={{width: "30%", margin: "20px", height: "40px", fonSize: "24px", cursor: "pointer"}}
            onClick={mintNFT}
            >Mint</button>
        </div>
        )
}