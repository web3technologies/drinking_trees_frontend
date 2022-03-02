import { MainFrame, MainContainer, Text, Button, PriceInput} from "../styles/base"
import useConnection  from '../hooks/useconnection';
import useMyAssets from '../hooks/usemyassets'
import CircularProgress from '@mui/material/CircularProgress';


export default function MyAssets() {

    const { user, contract, loadUser } = useConnection()
    const { userAssets, sellAsset, handlePriceChange, loading } = useMyAssets(user, contract)


    if (userAssets.length === 0 && !loading){
      return (
        <MainFrame>
          <Text color="green">No Trees yet</Text>
        </MainFrame>
      )
    }

    if (loading){
      return(
        <MainFrame>
          <MainContainer>
            <CircularProgress color="primary" />
          </MainContainer>
          {/* <Button onClick={loadUser}>Load User</Button> */}
        </MainFrame>)
    }



  return (
    <MainFrame>
        <MainContainer>
          <Text>Your Collection</Text>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          {
              userAssets.map((nft, i) => (
                <MainContainer key={i} style={{margin: "10px"}}>
                  <img src={nft ? nft.data.image : null}/>
                  <MainContainer>
                    <p style={{margin: "10px 0"}} className="text-2xl font-semibold">{nft ? nft.data.name: null}</p>
                    <MainContainer style={{ height: '70px', overflow: 'hidden' }}>
                      <p className="text-black-400">{nft ? nft.data.description: null}</p>
                    </MainContainer>
                    <Button color="red" onClick={() => sellAsset(nft, i)}>List on Marketplace</Button>
                    <PriceInput type="text" id="lname" name="lname" onChange={handlePriceChange}/>
                  </MainContainer>
                </MainContainer>
              ))
            }
          </div>
          </MainContainer>
      </MainFrame>
  )
}