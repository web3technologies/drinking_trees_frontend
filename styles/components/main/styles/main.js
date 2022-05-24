import styled from 'styled-components';




export const MainFrame = styled.main`
    width: 100%;
    // border: 10px solid yellow;
    margin-top:3%;
    background-color: var(--skyblue-color);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url('https://i.imgur.com/MZ4EbBS.jpeg');
    background-size:contain;
    // background-position:center;
    background-repeat:no-repeat;
    height:300vh;
    z-index:10;
    
    h1{
        z-index:10;

    }
`

export const Heading = styled.p`
        height:200vh;
        color: var(--white-color);
        z-index:10;
        font-size:50px;
        padding-top:2%;
`


export const MainFrameInner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--green-color);
    // justify-content: space-between;
    width: 100%;
    margin-top: clamp(5%, 7%, 10%);
    height: 130%;
`;

export const MainFrameLeft = styled.div`
    display: flex;
    // justify-content: center;
    width: clamp(60%, 80%, 80%);
    flex-direction: column;
    padding-left: clamp(5%, 10%, 15%);
    height: 180vh;

`;


export const MainText = styled.h1`
    font-size: clamp(var(--title-font), var(--title-font), 56px);
    color: var(--white-color);
    width: 100%;
    font-weight: normal;
    text-align: center;
    text-align: left;
    
`;

export const SupportTextFrame = styled.div`

    width: 100%;
    align-items: clamp(flex-start, center, center);
    display: flex;
    flex-direction: column;
    z-index:10;
`;

export const SupportingText = styled.h6`
    font-size: clamp(var(--supporting-font), var(--supporting-font), 18px);
    color: var(--white-color);
    margin: 8px 0;
    text-align: center;
    text-align: left;
    margin: clamp(14px, 22px, 25px);
    margin-left: 0;
`;

export const BlueDiv = styled.div`
    padding: clamp(100px, 100px, 100px);
    // margin: clamp(14px, 22px, 25px);
    // height: 500px;
    width:150%;
    height: 30%;
    background: var(--blue-color);
    position: absolute;
    right:0;
    bottom:0;
    z-index:0;
  
`;
export const PurpleDiv = styled.div`
    padding: clamp(100px, 100px, 100px);
    // margin: clamp(14px, 22px, 25px);
    // height: 500px;
    width:50%;
    height: 80%;
    background: var(--purple-color);
    position: absolute;
    right:0;
    bottom:0;
    // z-index:-1;
    overflow:hidden;
    position:absolute;
  
`;


export const ExploreDiv = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    // width: 90%;
    background: var(--orange-color);
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    with: clamp(60%, 60%, 80%);
    &:hover{
        background: var(--purple-color);
    }


`;

export const CollectionLink = styled.a`

    font-size: clamp(var(--supporting-font), var(--supporting-font), 20px);
    color: var(--white-color);
    margin: 10px;
    &:hover{
        color: var(--blue-color);
    }

`;
export const LinkLogo = styled.div`

    img{
        width: 50px;
        height:50px;
        margin-right: 10px;
    }
`;


export const MainFrameRight = styled.div`

    width: clamp(100%, 45%, 65%);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height:200vh;
    img{
        height: 50%;
        top:0;
        position: absolute;
        right:0;
        z-index:10;
    }

`;

export const ImageFrame = styled.div`
    // width: 90%;
    background: var(--purple-color);
    box-shadow: 10px 10px 20px 8px rgba(17, 17, 17, 0.25);
    border-radius: 20px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    right:0;
    align-items: center;
    
    @media screen and (min-width: 825px){
        min-height: 650px;
        width: 65%;
    }

    @media screen and (min-width: 1000px){
        width: 80%;
    }

    @media screen and (min-width: 1300px){
        width: 65%;
    }

`;

export const Image = styled.img`

    width: 70%;
    border-radius: 8px;
    margin: 40px 0;

    @media screen and (min-width: 825px){
        margin: 40px 0;
    }
`;

export const CountDownFrame = styled.div`

    width: 100%;
    right:0;
    bottom:0;
    height:500px;
    float:right;
  
    background-color: var(--gold-color);

    @media screen and (min-width: 825px){
        width: 70%;
    }
`;

export const CountDownText = styled.h4`

    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 35px;

    color: #FFFFFF;

    @media screen and (min-width: 825px){
        font-size: 28px;
    }

`;

export const LoadingFrame = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 300px;
`

export const LogoFrame = styled.div`
    margin: 10px 0;
    display: flex;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

`;