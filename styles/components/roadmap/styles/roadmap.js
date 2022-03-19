import styled from 'styled-components';

export const RoadMapFrame = styled.div`

    margin: 100px 0;
    width: 100%;
    display: flex;
    justify-content: center;

    @media screen and (min-width: 600px){
        margin: 200px 0;
    }
`;

export const RoadMapFrameInner = styled.div`

    display: flex;
    justify-content: center;
    width: 85%;

    @media screen and (min-width: 600px){
        width: 95%;
    }

`;

export const RoadMapImage = styled.img`

    width: 100%;


    @media screen and (min-width: 600px){
        width: 68%;
    }
`;