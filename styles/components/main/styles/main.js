import styled from 'styled-components';


export const MainFrame = styled.main`

    width: 100%;
    // border: 2px solid yellow;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
`

export const MainFrameInner = styled.div`


    margin: 60px 0;

    // border: 2px solid pink;
    width: 85%;

    display: flex;
    justify-content: space-between;
`;

export const MainFrameLeft = styled.div`


    width: 35%;

    // border: 2px solid purple;

`;


export const MainText = styled.h1`

    font-size: 56px;
    color: #ffffff;
    width: 100%;
    font-weight: normal;
`;

export const SupportTextFrame = styled.div`

    width: 100%:
    display: flex;
    flex-direction: column;
    margin: 72px 92px 0 0; 
`;

export const SupportingText = styled.h6`

    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;

    color: #FFFFFF;

`;

export const MultivacFrame = styled.div`
    margin: 80px 0 0 0;
    display: flex;
    flex-direction: column;
    width: 35%;
    cursor: pointer;
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
    width: 60%;
    background: linear-gradient(180deg, #049829 0%, rgba(59, 225, 130, 0) 100%);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const CollectionLink = styled.a`

    font-style: normal;
    font-weight: 400;
    font-size: 24.5504px;
    color: #FFFFFF;
    margin: 10px;
`;


export const MainFrameRight = styled.div`

    width: 65%;
    display: flex;
    align-items: center;
    justify-content: center;
    // border: 2px solid green;

`;

export const ImageFrame = styled.div`

    width: 70%;
    background: linear-gradient(180deg, rgba(248, 205, 33, 0.9) 13.28%, rgba(248, 205, 33, 0.34) 100%);
    box-shadow: 10px 10px 20px 8px rgba(17, 17, 17, 0.25);
    border-radius: 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Image = styled.img`

    width: 70%;
    border-radius: 8px;
    margin: 40px 20px 0 0;
`;

export const CountDownFrame = styled.div`

    width: 70%;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    `;

export const CountDownText = styled.h4`

    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 35px;

    color: #FFFFFF;

`;