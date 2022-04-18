import styled from "styled-components";

export const ImageGallery = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  align-content: center;
  align-items: center;
`;

export const NFTImageContainer = styled.div`
  cursor: pointer;
  border-radius: 15px;
  width: 300px;
  color: white;
  float: left;
  margin-left: 2%;
  margin-right: 2%;
  margin-bottom: 5%;
  position: relative; /* required for (c2) */
`;

export const NFTImageDiv = styled.div`
  position: relative; /* required for (c2) */
  img {
    height: 300px;
    width: 300px;
    cursor: pointer;
    border-radius: 15px 15px 0 0;
    border-bottom: 5px solid green;
  }
`;
export const NFTImageText = styled.p`
  font-size: 10px;
  box-sizing: border-box;
  width: 100%;
  padding: 10px;

  /* (C2) PLACE AT BOTTOM */
  position: absolute;
  bottom: 0;
  left: 0;

  /* (C3) COLORS */
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  visibility: none;
  opacity: 0;
  transition: opacity 0.3s;
  &:hover {
    visibility: visible;
    opacity: 1;
  }
`;

export const NFTImageTextTitle = styled.p`
  font-size: 15px;
  color: green;
  border-bottom: 1px solid green;
  // font-weight: bold;
  border-left: 1px solid green;
  margin-left: 2%;
  padding-left: 2%;
  padding-top: 0;
  margin: 0;
`;

export const NFTImageTextDescription = styled.p`
  font-size: 10px;
  color: green;
  margin: 0;
  padding-top: 5px;
  border-bottom: 1px solid green;
  border-left: 1px solid green;
  padding-left: 2%;
`;
