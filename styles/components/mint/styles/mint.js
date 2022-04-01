import styled from 'styled-components';


export const MintFrame = styled.div`
    margin: 25px 0;
    width: 85%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 4px solid #049829;
    box-shadow: 0px -10px 20px rgba(4, 152, 41, 0.25);
    border-radius: 20px;
`;

export const MintFrameInner = styled.div`
    
    margin: 60px 0;
    width: 90%;
    display: flex;

    justify-content: space-between;
`;

export const MintFrameLeft = styled.div`
    
    width: 50%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

`;


export const MainText = styled.h2`

    font-style: normal;
    font-size: 42px;

    color: #FFFFFF;


`;


export const InfoFrame = styled.div`

    width: 100%;
    display: flex;
    justify-content: space-evenly;

`;

export const InfoCard = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 20%;

`;

export const InfoText = styled.p`

    font-weight: 400;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
    color: #FFFFFF;

`;

export const MintButton = styled.button`
    font-family: 'Fjalla One', sans-serif;
    letter-spacing: 2px;
    width: 50%;
    background: #049829;
    border-radius: 4px;
    border: none;
    color: #ffffff;
    cursor: pointer;
    font-size: 18px;
    padding: 20px;
`;



export const MintFrameRight = styled.div`

    width: 45%;

`;
