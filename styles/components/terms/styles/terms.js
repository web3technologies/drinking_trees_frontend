import styled from 'styled-components';


export const TermsFrame = styled.nav`
    margin: 25px 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

`;

export const TermsFrameInner = styled.div`

    width: 85%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
`;

export const TermsTitle = styled.h1`

    font-size: 28px;
    color: #049829;
    width: 100%;
    font-weight: normal;
    text-align: center;
    margin: 0;

    @media screen and (min-width: 825px){
        font-size: 48px;
        text-align: center;
    }

    @media screen and (min-width: 1000px){
        margin: 20px 0;
        font-size: 48px;
    }

    @media screen and (min-width: 1300px){
        font-size: 56px;
    }

`;

export const ParagraphDiv = styled.div`

    width: 100%;
    margin: 20px 0;

    @media screen and (min-width: 825px){
        width: 70%;
    }

`;

export const ParagraphTitle = styled.h4`

    font-size: 22px;
    color: #4BF493;
    margin: 10px 0;
    
    @media screen and (min-width: 825px){
        width: 28%;
    }
`;

export const ParagraphText = styled.p`

    font-size: 12px;
    color: #FFFFFF;
    margin: 0;

    @media screen and (min-width: 825px){
        font-size: 18px;
    }
`;