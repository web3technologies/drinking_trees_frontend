import useMyTrees from "../hooks/usemytrees"
import { ImageGallery, NFTImage, NFTImageContainer, NFTImageTags, NFTImageTextTitle, NFTImageText} from "../styles/components/imageGallery/imageGallery"
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
                    <NFTImage src={"https://gateway.pinata.cloud/ipfs/QmfVaciVeEyZMEuyB5xJQbte78TVoNFd3KVQoky92hNwnj/10.png"} />
                    <NFTImageTextTitle>Drinking Trees NFT #1</NFTImageTextTitle>
                    <NFTImageTextTitle>A collection of NFTs in support One Tree Planted</NFTImageTextTitle>
                    
                </NFTImageContainer>
                <NFTImageContainer> 
                    <NFTImage src={"https://gateway.pinata.cloud/ipfs/QmfVaciVeEyZMEuyB5xJQbte78TVoNFd3KVQoky92hNwnj/10.png"} />
                    <NFTImageTextTitle>Drinking Trees NFT #10</NFTImageTextTitle>
                    <NFTImageTextTitle>A collection of NFTs in support One Tree Planted</NFTImageTextTitle>
                   
                </NFTImageContainer>
                <NFTImageContainer> 
                    <NFTImage src={"https://gateway.pinata.cloud/ipfs/QmfVaciVeEyZMEuyB5xJQbte78TVoNFd3KVQoky92hNwnj/11.png"} />
                    <NFTImageTextTitle>Drinking Trees NFT #11</NFTImageTextTitle>
                    
                    <NFTImageTextTitle>A collection of NFTs in support One Tree Planted</NFTImageTextTitle>
                  
                    {/* <NFTImageTextTitle>Traits</NFTImageTextTitle> */}
                    {/* <NFTImageTags>Background: Black</NFTImageTags>
                    <NFTImageTags>Eyeball: Red</NFTImageTags>
                    <NFTImageTags>Eye color: Yellow</NFTImageTags>
                    <NFTImageTags>Iris: Large</NFTImageTags>
                    <NFTImageTags>Shine: Shapes</NFTImageTags>
                    <NFTImageTags>Bottom lid: Low</NFTImageTags>
                    <NFTImageTags>Top lid: Low</NFTImageTags> */}
                </NFTImageContainer>
                <NFTImageContainer> 
                    <NFTImage src={"https://gateway.pinata.cloud/ipfs/QmfVaciVeEyZMEuyB5xJQbte78TVoNFd3KVQoky92hNwnj/13.png"} />
                    <NFTImageTextTitle>Drinking Trees NFT #11</NFTImageTextTitle>
                    
                    <NFTImageTextTitle>A collection of NFTs in support One Tree Planted</NFTImageTextTitle>
                  
                    {/* <NFTImageTextTitle>Traits</NFTImageTextTitle> */}
                    {/* <NFTImageTags>Background: Black</NFTImageTags>
                    <NFTImageTags>Eyeball: Red</NFTImageTags>
                    <NFTImageTags>Eye color: Yellow</NFTImageTags>
                    <NFTImageTags>Iris: Large</NFTImageTags>
                    <NFTImageTags>Shine: Shapes</NFTImageTags>
                    <NFTImageTags>Bottom lid: Low</NFTImageTags>
                    <NFTImageTags>Top lid: Low</NFTImageTags> */}
                </NFTImageContainer>
                <NFTImageContainer> 
                    <NFTImage src={"https://gateway.pinata.cloud/ipfs/QmfVaciVeEyZMEuyB5xJQbte78TVoNFd3KVQoky92hNwnj/13.png"} />
                    <NFTImageTextTitle>Drinking Trees NFT #11</NFTImageTextTitle>
                    
                    <NFTImageTextTitle>A collection of NFTs in support One Tree Planted</NFTImageTextTitle>
                  
                    {/* <NFTImageTextTitle>Traits</NFTImageTextTitle> */}
                    {/* <NFTImageTags>Background: Black</NFTImageTags>
                    <NFTImageTags>Eyeball: Red</NFTImageTags>
                    <NFTImageTags>Eye color: Yellow</NFTImageTags>
                    <NFTImageTags>Iris: Large</NFTImageTags>
                    <NFTImageTags>Shine: Shapes</NFTImageTags>
                    <NFTImageTags>Bottom lid: Low</NFTImageTags>
                    <NFTImageTags>Top lid: Low</NFTImageTags> */}
                </NFTImageContainer>
            </ImageGallery>
        
        </>)
    
}