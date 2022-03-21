import styled from 'styled-components';


export const MainFrame = styled.main`

    width: 100%;
    // border: 2px solid yellow;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const MainFrameInner = styled.div`

    margin: 30px 0;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: 825px){
        margin: 60px 0;
        justify-content: space-between;
        align-items: flex-start;
        flex-direction: row;
        width: 85%;
    }
    @media screen and (min-width: 1920px){
        width: 85%;
    }
`;

export const MainFrameLeft = styled.div`


    width: 100%;
    display: flex;

    flex-direction: column;

    align-items: center;
    justify-content: center;

    @media screen and (min-width: 825px){
        display: block;
        width: 35%;
    }


`;


export const MainText = styled.h1`

    font-size: 48px;
    color: #ffffff;
    width: 100%;
    font-weight: normal;
    text-align: center;
    margin: 0;

    @media screen and (min-width: 825px){
        font-size: 48px;
        text-align: left;
    }

    @media screen and (min-width: 1000px){
        margin: 20px 0;
        font-size: 48px;
    }

    @media screen and (min-width: 1300px){
        font-size: 56px;
    }
`;

export const SupportTextFrame = styled.div`

    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 825px){
        align-items: flex-start;
    }
`;

export const SupportingText = styled.h6`

    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 23px;
    color: #FFFFFF;
    margin: 8px 0;
    text-align: center;
    
    @media screen and (min-width: 825px){
        text-align: left;
        font-size: 18px;
        margin: 22px 0;
    }

    @media screen and (min-width: 1000px){
        font-size: 14px;
        margin: 14px 0;
    }

    @media screen and (min-width: 1300px){
        font-size: 18px;
        margin: 22px 0;
    }

`;

export const MultivacFrame = styled.div`
    margin: 40px 0 0 0;
    display: flex;
    flex-direction: column;
    width: 35%;
    cursor: pointer;

    @media screen and (min-width: 825px){
        margin: 80px 0 0 0;
    }

    @media screen and (min-width: 1000px){
        
        margin: 20px 0 0 0;
    }

    @media screen and (min-width: 1300px){
        margin: 80px 0 0 0;
    }
`;

export const MultiVacLogo = styled.img`

    width: 100%;
`;

export const SmallText = styled.p`

    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    letter-spacing: 0.05em;
    color: #FFFFFF;

    // &:hover {
    //     background-color: #4BF493;
    //   }

`;

export const ExploreDiv = styled.div`
    margin-top: 48px;
    width: 90%;
    background: linear-gradient(180deg, #049829 0%, rgba(59, 225, 130, 0) 100%);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    @media screen and (min-width: 825px){
        width: 60%;
    }

    @media screen and (min-width: 1000px){
        
        width: 80%;
    }

    @media screen and (min-width: 1300px){
        width: 60%;
    }

`;

export const CollectionLink = styled.a`

    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: #FFFFFF;
    margin: 10px;

    @media screen and (min-width: 825px){
        font-size: 20px;
    }
`;


export const MainFrameRight = styled.div`

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 80px;
    // border: 2px solid green;

    @media screen and (min-width: 825px){
        width: 65%;
        margin: 0;
    }

`;

export const ImageFrame = styled.div`

    width: 90%;
    background: linear-gradient(180deg, rgba(248, 205, 33, 0.9) 13.28%, rgba(248, 205, 33, 0.34) 100%);
    box-shadow: 10px 10px 20px 8px rgba(17, 17, 17, 0.25);
    border-radius: 20px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
        margin: 40px 20px 0 0;
    }
`;

export const CountDownFrame = styled.div`

    width: 90%;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;

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