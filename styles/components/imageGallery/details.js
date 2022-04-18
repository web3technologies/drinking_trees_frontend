import { withThemeCreator } from "@material-ui/styles";
import styled from "styled-components";

export const ImageDetailsPage = styled.div`
  width: 100%;
  height: 100%;
  align-content: center;
  align-items: center;
`;
export const OutsideDiv = styled.div`
  display: block;
  width: 100%;
`;
export const InnerDiv = styled.div`
  width: 50%;
  float: left;
  display: inline-block;
`;

export const DetailImageWrap = styled.div`
  width: 50%;
  height: 100%;
  margin: 0 auto;
  padding-bottom: 10%;
  img {
    border-bottom: 10px solid green;
    border-radius: 15px 15px 0 0;
  }
`;
export const TitleStyle = styled.div`
  color: green;
  font-size: 30px;
`;

export const NFTImageTextDescription = styled.p`
  font-size: 10px;
  color: white;
  margin: 0;
  padding-top: 5px;
  border-bottom: 1px solid green;
  border-left: 1px solid green;
  padding-left: 2%;
  width: 50%;
`;

export const NFTAttributes = styled.p`
  font-size: 10px;
  color: white;
`;
