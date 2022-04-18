import React from "react";
import { useEffect, useState } from "react";
import useMyTrees from "../hooks/usemytrees";
import {
  ImageDetailsPage,
  OutsideDiv,
  InnerDiv,
  DetailImageWrap,
  TitleStyle,
  NFTImageTextDescription,
  NFTAttributes,
  TitleTags
} from "../styles/components/imageGallery/details";
import { useRouter } from "next/router";
import { AiOutlineTag } from "react-icons/ai";

export default function DetailsContainer(props) {
  const { userAssets, handlePriceChange, loading } = useMyTrees();
  const { query } = useRouter();
  const [nftattributes, setNftAttributes] = useState([]);
  useEffect(() => {
    {
      query.attributes
        ? query.attributes.map((trait_type, value) =>
            console.log("trait: " + trait_type)
          )
        : null;
    }
  });

  return (
    <>
      <ImageDetailsPage>
        <OutsideDiv>
          <InnerDiv>
            <DetailImageWrap>
              <img src={query.image} />
            </DetailImageWrap>
          </InnerDiv>
          <InnerDiv>
            <TitleStyle>{query.name}</TitleStyle>
            <NFTImageTextDescription>
              description: {query.description}
            </NFTImageTextDescription>
            <NFTImageTextDescription>dna: {query.dna}</NFTImageTextDescription>
            <NFTImageTextDescription>edition: {query.edition}</NFTImageTextDescription>
            <NFTImageTextDescription>date: {query.date}</NFTImageTextDescription>
            <NFTAttributes>
              <TitleTags><AiOutlineTag /> Tags:{" "}</TitleTags>
              
            </NFTAttributes>
            {query.attributes
              ? query.attributes.map((trait_type, value) => (
                  <NFTAttributes>{trait_type}</NFTAttributes>
                ))
              : null}
          </InnerDiv>
        </OutsideDiv>
      </ImageDetailsPage>
    </>
  );
}
