import styled from 'styled-components';


export const MainFrame = styled.main`

    width: 100%;
    border: 2px solid yellow;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
`

export const MainFrameInner = styled.div`


    margin: 60px 0;

    border: 2px solid pink;
    width: 85%;

    display: flex;
    justify-content: space-between;
`;

export const MainFrameLeft = styled.div`


    width: 35%;

    border: 2px solid purple;

`;


export const MainText = styled.h1`

    font-size: 56px;
    color: #ffffff;
    width: 100%;
    font-weight: normal;
`;


export const MainFrameRight = styled.div`

    width: 65%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid green;

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