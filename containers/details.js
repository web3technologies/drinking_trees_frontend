import React from "react";
import useMyTrees from "../hooks/usemytrees";
import { ImageDetailsPage } from "../styles/components/imageGallery/details";


export default function DetailsContainer(props) {
  const { userAssets, handlePriceChange, loading } = useMyTrees();

 

  return (
    <>
      <ImageDetailsPage>
        <h1>Details Page -- Coming Soon</h1>
      </ImageDetailsPage>
    </>
  );
}
