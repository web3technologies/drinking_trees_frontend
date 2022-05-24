import styled from "styled-components";

export const ContainerDiv = styled.div`
  height: 100vh;
  
`;
export const ImageGallery = styled.div`
  width: 100%;
  
  align-content: center;
  align-items: center;
`;
export const ImageLink = styled.div`
  cursor: pointer;
`;
export const NFTImageContainer = styled.div`
  cursor: pointer;
  border-radius: 15px 15px 0 0;
//   background: rgb(114,248,121);
// background: linear-gradient(180deg, rgba(114,248,121,1) 88%, rgba(255,247,51,1) 100%, rgba(255,255,255,1) 100%);
  width: 300px;
  float: left;
  color: #72F879;
  margin-left: 5%;
  margin-right: 2%;
  margin-bottom: 5%;
  position: relative; /* required for (c2) */
`;
export const NFTImageDiv = styled.div`
  position: relative; /* required for (c2) */
  text-decoration: none;
  img {
    height: 300px;
    width: 300px;
    cursor: pointer;
    border-radius: 15px 15px 0 0;
    border-bottom: 10px solid #e6c12e;
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
  color: #e6c12e;
  border-bottom: 1px solid #e6c12e;
  // font-weight: bold;
  border-left: 1px solid #e6c12e;
  margin-left: 2%;
  padding-left: 2%;
  padding-top: 0;
  margin: 0;
`;
export const NFTImageTextDescription = styled.p`
  font-size: 10px;
  color: white;
  margin: 0;
  padding-top: 5px;
  border-bottom: 1px solid #e6c12e;
  border-left: 1px solid #e6c12e;
  padding-left: 2%;
`;
export const ErrorTitle = styled.p`
  text-align: center;
  color: #049829;
  font-size: 40px;
`;
