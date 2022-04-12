import React from "react";
import useMyTrees from "../hooks/usemytrees";
import {
  ImageGallery,
  NFTImageContainer,
  NFTImageTextDescription,
  NFTImageDiv,
  NFTImageTextTitle,
  NFTImageText,
  ImageLink
} from "../styles/components/imageGallery/imageGallery";
import MockData from '../mockData/test.json'
export default function MyTreesContainer() {
  const { userAssets, handlePriceChange, loading } = useMyTrees();
  
 
 


  return (
    <>
      {/* {userAssets
        ? userAssets.map((nft, idx) => (
            <ImageGallery>
              <NFTImageContainer>
                <NFTImageDiv>
                  <img src={nft.data.image} />

                  <NFTImageText>
                    {nft.data.attributes
                      ? nft.data.attributes.map((trait_type, value) => (
                          <p>
                            {trait_type.trait_type} {trait_type.value}
                          </p>
                        ))
                      : null}
                  </NFTImageText>

                  <NFTImageTextTitle>{nft.data.name}</NFTImageTextTitle>
                  <NFTImageTextDescription>
                    {nft.data.description}
                  </NFTImageTextDescription>
                  <NFTImageTextDescription>
                    {nft.data.dna}
                  </NFTImageTextDescription>
                  <NFTImageTextDescription>
                    {nft.data.edition}
                  </NFTImageTextDescription>
                  <NFTImageTextDescription>
                    {nft.data.date}
                  </NFTImageTextDescription>
                </NFTImageDiv>
              </NFTImageContainer>
            </ImageGallery>
          ))
        : null} */}
        { MockData ? 
                MockData.map((nft, idx)=>(
                    
                <ImageGallery>
                    <NFTImageContainer>  
                    {/* <NFTImageDiv href={`/details/${encodeURIComponent(nft)}`}> */}
                    <NFTImageDiv>
                      <ImageLink  href={`/details`}>
                            <img src={nft.image}/>
                            </ImageLink>
                            
                                    
                                <NFTImageText>
                                {
                                nft.attributes ? 
                                nft.attributes.map((trait_type, value) => (
                                <p>{trait_type.trait_type} {trait_type.value}</p>
                                  ))
                                : null
                                }    
                                </NFTImageText>
                                     
                            
                            <NFTImageTextTitle>{nft.name}</NFTImageTextTitle>
                            <NFTImageTextDescription>{nft.description}</NFTImageTextDescription>
                            <NFTImageTextDescription>{nft.dna}</NFTImageTextDescription>
                            <NFTImageTextDescription>{nft.edition}</NFTImageTextDescription>
                            <NFTImageTextDescription>{nft.date}</NFTImageTextDescription>
                    </NFTImageDiv>
                            
                       
                        
                    </NFTImageContainer> 
                </ImageGallery>
               ))
               :
               null
           
        }
    </>
  );
}
