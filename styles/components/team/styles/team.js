import styled from 'styled-components';

export const TeamFrame = styled.div`

    margin: 100px 0;
    width: 100%;
    display: flex;
    justify-content: center;
    border: 2px solid green;
`;

export const TeamBox = styled.div`

    border: 2px solid purple;
    background: #1C1E27;
    box-shadow: 0px 4px 4px rgba(255, 255, 255, 0.25);
    border-radius: 50px;

    width: 85%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;


export const TeamText = styled.h4`

    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    text-align: center;
    letter-spacing: 0.05em;
    color: #049829;

`;

export const CardFrame = styled.div`

    width: 100%;

    border: 2px solid pink;
`;

export const CardFrameTop = styled.div`

    display: flex;
    justify-content: space-evenly;
    margin: 20px 0;
`;


export const Card = styled.div`

    display: flex;
    flex-direction: column;    
    align-items: center;
    background: #13151E;
    box-shadow: 0px 5px 10px rgba(75, 244, 147, 0.25);
    border-radius: 16px;
    width: 16%;
`;

export const CardImage = styled.img`
    margin: 60px 10px 0;
    border-radius: 100px;
    width: 50%;
    border: 2px solid white;
`;

export const CardTitle = styled.h6`

    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    text-align: center;
    letter-spacing: 0.05em;
    color: #FFFFFF;

`;

export const CardSubTitle = styled.p`

    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    letter-spacing: 0.05em;
    color: #BDBDBD;
    width: 85%;
`;

export const SocialMediaFrame = styled.div`

    margin: 20px 0;
    width: 50%;
    display: flex;
    justify-content: space-between;

`;


