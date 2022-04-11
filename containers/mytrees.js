import useMyTrees from "../hooks/usemytrees"
import { ImageGallery, NFTImage, NFTImageContainer, NFTImageTags,NFTImageTextDescription, NFTImageDiv, NFTImageTextTitle, NFTImageText} from "../styles/components/imageGallery/imageGallery"
import imageMock from "../public/TestImages/1.png"


export default function MyTreesContainer(){

    // const{ userAssets, handlePriceChange, loading} = useMyTrees()

    

    return (
        <>
            {/* <div style={{display: "flex", justifyContent: "center", margin: "80px 0"}}>
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
            </div> */}
            <ImageGallery>
                <NFTImageContainer> 
    
                    <NFTImageDiv>
                        <img src={"https://gateway.pinata.cloud/ipfs/QmfVaciVeEyZMEuyB5xJQbte78TVoNFd3KVQoky92hNwnj/10.png"}/>
                        <NFTImageText>
                            <p>Background: Black</p>
                            <p>Eyeball: White</p>
                            <p>Eye color: Yellow</p>
                            <p>Iris: Small</p>
                            <p>Shine: Shapes</p>
                            <p>Bottom lid: Middle</p>
                            <p>Top lid: Middle</p>
                        </NFTImageText>
                    </NFTImageDiv>
                    <NFTImageTextTitle>Drinking Trees NFT #1</NFTImageTextTitle>
                    <NFTImageTextDescription>A collection of NFTs in support One Tree Planted</NFTImageTextDescription>
                    <NFTImageTextDescription>dna: cfa27eeba852b5a1cc1b861892aa36c65b2df024</NFTImageTextDescription>
                    <NFTImageTextDescription>edition: 1</NFTImageTextDescription>
                    <NFTImageTextDescription>date: 1648861142336</NFTImageTextDescription>
                    <NFTImageTextDescription>generation: 1</NFTImageTextDescription>

                </NFTImageContainer>
                <NFTImageContainer> 
    
                    <NFTImageDiv>
                        <img src={"https://gateway.pinata.cloud/ipfs/QmfVaciVeEyZMEuyB5xJQbte78TVoNFd3KVQoky92hNwnj/10.png"} />
                        <NFTImageText>
                            <p>Background: Black</p>
                            <p>Eyeball: White</p>
                            <p>Eye color: Yellow</p>
                            <p>Iris: Small</p>
                            <p>Shine: Shapes</p>
                            <p>Bottom lid: Middle</p>
                            <p>Top lid: Middle</p>
                        </NFTImageText>
                    </NFTImageDiv>
                    <NFTImageTextTitle>Drinking Trees NFT #10</NFTImageTextTitle>
                    <NFTImageTextDescription>A collection of NFTs in support One Tree Planted</NFTImageTextDescription>
                    <NFTImageTextDescription>dna: cfa27eeba852b5a1cc1b861892aa36c65b2df024</NFTImageTextDescription>
                    <NFTImageTextDescription>edition: 1</NFTImageTextDescription>
                    <NFTImageTextDescription>date: 1648861142336</NFTImageTextDescription>
                    <NFTImageTextDescription>generation: 1</NFTImageTextDescription>

                </NFTImageContainer>
                <NFTImageContainer> 
    
                    <NFTImageDiv>
                        <img  src={"https://gateway.pinata.cloud/ipfs/QmfVaciVeEyZMEuyB5xJQbte78TVoNFd3KVQoky92hNwnj/11.png"} />
                        <NFTImageText>
                            <p>Background: Black</p>
                            <p>Eyeball: White</p>
                            <p>Eye color: Yellow</p>
                            <p>Iris: Small</p>
                            <p>Shine: Shapes</p>
                            <p>Bottom lid: Middle</p>
                            <p>Top lid: Middle</p>
                        </NFTImageText>
                    </NFTImageDiv>
                    <NFTImageTextTitle>Drinking Trees NFT #11</NFTImageTextTitle>
                    <NFTImageTextDescription>A collection of NFTs in support One Tree Planted</NFTImageTextDescription>
                    <NFTImageTextDescription>dna: cfa27eeba852b5a1cc1b861892aa36c65b2df024</NFTImageTextDescription>
                    <NFTImageTextDescription>edition: 1</NFTImageTextDescription>
                    <NFTImageTextDescription>date: 1648861142336</NFTImageTextDescription>
                    <NFTImageTextDescription>generation: 1</NFTImageTextDescription>

                </NFTImageContainer>
               
              <NFTImageContainer> 
    
                    <NFTImageDiv>
                        <img  src={"https://gateway.pinata.cloud/ipfs/QmfVaciVeEyZMEuyB5xJQbte78TVoNFd3KVQoky92hNwnj/13.png"} />
                        <NFTImageText>
                            <p>Background: Black</p>
                            <p>Eyeball: White</p>
                            <p>Eye color: Yellow</p>
                            <p>Iris: Small</p>
                            <p>Shine: Shapes</p>
                            <p>Bottom lid: Middle</p>
                            <p>Top lid: Middle</p>
                        </NFTImageText>
                    </NFTImageDiv>
                    <NFTImageTextTitle>Drinking Trees NFT #13</NFTImageTextTitle>
                    <NFTImageTextDescription>A collection of NFTs in support One Tree Planted</NFTImageTextDescription>
                    <NFTImageTextDescription>dna: cfa27eeba852b5a1cc1b861892aa36c65b2df024</NFTImageTextDescription>
                    <NFTImageTextDescription>edition: 1</NFTImageTextDescription>
                    <NFTImageTextDescription>date: 1648861142336</NFTImageTextDescription>
                    <NFTImageTextDescription>generation: 1</NFTImageTextDescription>

                </NFTImageContainer>
              
               
                <NFTImageContainer> 
    
                    <NFTImageDiv>
                        <img  src={"https://gateway.pinata.cloud/ipfs/QmfVaciVeEyZMEuyB5xJQbte78TVoNFd3KVQoky92hNwnj/13.png"} />
                        <NFTImageText>
                            <p>Background: Black</p>
                            <p>Eyeball: Red</p>
                            <p>Eye color: Yellow</p>
                            <p>Iris: Small</p>
                            <p>Shine: Shapes</p>
                            <p>Bottom lid: Middle</p>
                            <p>Top lid: Middle</p>
                        </NFTImageText>
                    </NFTImageDiv>
                    <NFTImageTextTitle>Drinking Trees NFT #13</NFTImageTextTitle>
                    <NFTImageTextDescription>A collection of NFTs in support One Tree Planted</NFTImageTextDescription>
                    <NFTImageTextDescription>dna: cfa27eeba852b5a1cc1b861892aa36c65b2df024</NFTImageTextDescription>
                    <NFTImageTextDescription>edition: 1</NFTImageTextDescription>
                    <NFTImageTextDescription>date: 1648861142336</NFTImageTextDescription>
                    <NFTImageTextDescription>generation: 1</NFTImageTextDescription>

                </NFTImageContainer>
            </ImageGallery>
        
        </>)
    
}