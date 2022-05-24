import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useMyTrees from "../hooks/usemytrees";
import MockData from "../mockData/test.json";

import {
  ImageGallery,
  NFTImageContainer,
  NFTImageTextDescription,
  NFTImageDiv,
  NFTImageTextTitle,
  NFTImageText,
  ImageLink,
  ContainerDiv,
  ErrorTitle,
} from "../styles/components/imageGallery/imageGallery";

import DetailsContainer from "./details";
import { Router } from "@mui/icons-material";
import { Container } from "postcss";

export default function MyTreesContainer() {
  const { userAssets, handlePriceChange, loading } = useMyTrees();
  const router = useRouter();
  const [nftattributes, setNftAttributes] = useState([]);
  const [showUserAssests, setUserAssetState] = useState(true);

  useEffect(() => {
    if (!userAssets.length >= 0) {
      setUserAssetState(false);
    }
  });
  const openDetails = (nft) => {
    let nftAttributeItems = [];
    console.log("function selected for: " + nft.data.name);
    {
      nft.data.attributes
        ? nft.data.attributes.map(
            (trait_type, value) => (
              console.log("trait_type: " + trait_type.trait_type),
              console.log("value: " + trait_type.value),
              nftAttributeItems.push(trait_type.trait_type, trait_type.value)
            )
          )
        : null;
    }
  router.push({
    pathname: "/details/",
    query: {
      name: nft.data.name,
      image: nft.data.image,
      description: nft.data.description,
      dna: nft.data.dna,
      edition: nft.data.edition,
      date: nft.data.date,
      attributes: nftAttributeItems,
    },
  });
};
  const openDetailsTesting = (nft) => {
    let nftAttributeItems = [];
    console.log("function selected for: " + nft.name);
    {
      nft.attributes
        ? nft.attributes.map(
            (trait_type, value) => (
              console.log("trait_type: " + trait_type.trait_type),
              console.log("value: " + trait_type.value),
              nftAttributeItems.push(trait_type.trait_type, trait_type.value)
            )
          )
        : null;
    }

    router.push({
      pathname: "/details/",
      query: {
        name: nft.name,
        image: nft.image,
        description: nft.description,
        dna: nft.dna,
        edition: nft.edition,
        date: nft.date,
        attributes: nftAttributeItems,
      },
    });
  };

  return (
    <>
      {!showUserAssests && (
        <ContainerDiv>
          <ErrorTitle>You do not currently own any NFTs</ErrorTitle>
        </ContainerDiv>
      )}
      {showUserAssests && (
        <ContainerDiv>
          {userAssets
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
                      </NFTImageDiv>

                      <NFTImageTextTitle>{nft.data.name}</NFTImageTextTitle>
                      <NFTImageTextDescription>
                        Description: {nft.data.description}
                      </NFTImageTextDescription>
                      <NFTImageTextDescription>
                        DNA: {nft.data.dna}
                      </NFTImageTextDescription>
                      <NFTImageTextDescription>
                       Edition: {nft.data.edition}
                      </NFTImageTextDescription>
                      <NFTImageTextDescription>
                       Date: {nft.data.date}
                      </NFTImageTextDescription>
                    
                  </NFTImageContainer>
                </ImageGallery>
              ))
            : null}
        </ContainerDiv>
      )}

{/* <ContainerDiv>
        {MockData
          ? MockData.map((nft, idx) => (
           
              <ImageGallery>
                <NFTImageContainer>
                  <NFTImageDiv onClick={() => openDetailsTesting(nft)}>
                    <img src={nft.image} />
                    <NFTImageText>
                      {nft.attributes
                        ? nft.attributes.map((trait_type, value) => (
                            <p>
                              {trait_type.trait_type} {trait_type.value}
                            </p>
                          ))
                        : null}
                    </NFTImageText>
                    </NFTImageDiv>
                    <NFTImageTextTitle>{nft.name}</NFTImageTextTitle>
                    <NFTImageTextDescription>
                     Description: {nft.description}
                    </NFTImageTextDescription>
                    <NFTImageTextDescription>DNA: {nft.dna}</NFTImageTextDescription>
                    <NFTImageTextDescription>
                      Edition: {nft.edition}
                    </NFTImageTextDescription>
                    <NFTImageTextDescription>
                      Date: {nft.date}
                    </NFTImageTextDescription>
                  
                </NFTImageContainer>
              </ImageGallery>
             
            ))
          : null}
          </ContainerDiv> */}
    </>
  );
}
