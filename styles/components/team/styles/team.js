import styled from 'styled-components';

export const TeamFrame = styled.div`

    margin: 100px 0;
    width: 100%;
    display: flex;
    justify-content: center;

    @media screen and (min-width: 1100px){
        margin: 80px 0;
    }

    @media screen and (min-width: 1300px){
        margin: 100px 0;
    }
`;

export const TeamBox = styled.div`

    // border: 2px solid purple;
    background: #1C1E27;
    box-shadow: 0px 4px 4px rgba(255, 255, 255, 0.25);
    border-radius: 50px;

    width: 87.5%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 825px){
        width: 85%;
    }

`;


export const TeamText = styled.h4`

    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    text-align: center;
    letter-spacing: 0.05em;
    color: #049829;
    
    @media screen and (min-width: 825px){
        font-size: 48px;
    }

    @media screen and (min-width: 1100px){
        margin: 20px 0;
    }

    @media screen and (min-width: 1300px){
        margin: 40px 0;
    }

`;

export const CardFrame = styled.div`

    width: 100%;

`;

export const CardFrameTop = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin: 0;

    @media screen and (min-width: 825px){
        flex-direction: row;
        align-items: flex-start;
        margin: 20px 0;
    }
`;


export const Card = styled.div`

    display: flex;
    flex-direction: column;    
    align-items: center;
    background: #13151E;
    box-shadow: 0px 5px 10px rgba(75, 244, 147, 0.25);
    border-radius: 16px;
    width: 80%;

    margin: 20px 0;
    
    @media screen and (min-width: 825px){
        margin: 0;
        width: 20%;
    }

    @media screen and (min-width: 1300px){
        margin: 0;
        width: 16%;
    }
`;

export const CardImage = styled.img`
    margin: 50px 10px 0;
    border-radius: 100px;
    width: 42.5%;
    border: 2px solid white;

    @media screen and (min-width: 825px){
        margin: 60px 10px 0;
        width: 50%;
    }
`;

export const CardTitle = styled.h6`

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    letter-spacing: 0.05em;
    color: #FFFFFF;

    @media screen and (min-width: 825px){
        font-size: 18px;
    }

    @media screen and (min-width: 1100px){
        margin: 30px 0;
    }

    

`;

export const CardSubTitle = styled.p`

    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    letter-spacing: 0.05em;
    color: #BDBDBD;
    width: 85%;

    @media screen and (min-width: 825px){
        font-size: 12px;
        width: 100%;
    }

    @media screen and (min-width: 1300px){
        font-size: 14px;
        width: 90%;
    }
`;

export const SocialMediaFrame = styled.div`

    margin: 20px 0;
    width: 50%;
    display: flex;
    justify-content: ${props => props.justifyContent ? props.justifyContent: 'center'};;
    min-height: 20px;

    @media screen and (min-width: 825px){
        margin: 10px 0;
    }

    @media screen and (min-width: 1300px){
        margin: 20px 0;
    }
`;

export const CardFrameBottom = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // border: 2px solid yellow;
    margin: 40px 0;
`;


