import styled from 'styled-components';


export const MintFrame = styled.div`
    margin: 25px 0 40px  0;
    width: 85%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 4px solid #049829;
    box-shadow: 0px -10px 20px rgba(4, 152, 41, 0.25);
    border-radius: 20px;

    @media screen and (min-width: 825px){
        margin: 25px 0;
        flex-direction: row;
    }

    @media screen and (min-width: 1000px){
    }

    @media screen and (min-width: 1300px){

    }
`;

export const MintFrameInner = styled.div`
    
    margin: 30px 0;
    width: 90%;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 825px){
        margin: 60px 0;
        flex-direction: row;
        justify-content: space-between;
        align-items: stretch;

    }
`;

export const MintFrameLeft = styled.div`
    
    width: 75%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    @media screen and (min-width: 825px){
        width: 50%;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;

    }

`;


export const MainText = styled.h2`

    font-style: normal;
    font-size: 28px;
    text-align: center;
    color: #FFFFFF;
    display: none;

    @media screen and (min-width: 825px){
        font-size: 42px;
        display: block;
    }


`;

export const MainTextMobile = styled.h2`

    font-style: normal;
    font-size: 28px;
    text-align: center;
    color: #FFFFFF;
    order: 1;

    @media screen and (min-width: 825px){
        display: none

    }

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
    // border: 2px solid white;
`;

export const InfoText = styled.p`

    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    text-align: center;
    color: #FFFFFF;

    @media screen and (min-width: 825px){
        font-size: 24px;

    }

`;

export const MintButton = styled.button`
    font-family: 'Fjalla One', sans-serif;
    letter-spacing: 2px;
    width: 100%;
    background: #049829;
    border-radius: 4px;
    border: none;
    color: #ffffff;
    cursor: pointer;
    font-size: 18px;
    padding: 20px;

    @media screen and (min-width: 825px){
        width: 50%;

    }
`;



export const MintFrameRight = styled.div`

    width: 75%;

    @media screen and (min-width: 825px){
        width: 45%;

    }
`;
