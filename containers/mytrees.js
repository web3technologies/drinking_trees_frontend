import React from "react";
import useMyTrees from "../hooks/usemytrees";
import {
  ImageGallery,
  NFTImageContainer,
  NFTImageTextDescription,
  NFTImageDiv,
  NFTImageTextTitle,
  NFTImageText,
} from "../styles/components/imageGallery/imageGallery";


export default function MyTreesContainer() {
  const { userAssets, handlePriceChange, loading } = useMyTrees();
  
  if (userAssets.length === 0){
    return (
      <div style={{display: "flex", justifyContent: "center", minHeight: "100vh"}}>

        <p>No NFTS yet</p>
        </div>
    )
  }


  return (
    <div style={{minHeight: "100vh"}}>
      {userAssets
        ? userAssets.map((nft, idx) => (
            <ImageGallery >
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
        : null}
    </div>
  );
}
