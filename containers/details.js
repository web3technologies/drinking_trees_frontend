import React from "react";
import { useEffect } from "react";
import useMyTrees from "../hooks/usemytrees";
import { ImageDetailsPage } from "../styles/components/imageGallery/details";
// import MockData from "../mockData/test.json";

export default function DetailsContainer() {
  const { userAssets, handlePriceChange, loading } = useMyTrees();

 ?

  return (
    <>
      <ImageDetailsPage>
        <h1>Details Page -- Coming Soon</h1>
      </ImageDetailsPage>
    </>
  );
}
