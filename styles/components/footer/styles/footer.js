import styled from 'styled-components';


export const FooterFrame = styled.footer`

    background: #13151E;
    box-shadow: 10px 10px 50px rgba(255, 255, 255, 0.25);
    
    display: flex;
    justify-content: center;
    width: 100%;
`;

export const FooterFrameInner = styled.div`

    

    width: 85%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 600px){
        flex-direction: row;
    }
`;

export const FooterText = styled.h6`

    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    
    /* identical to box height */

    text-align: center;
    letter-spacing: 0.02em;
    margin: 10px 0;
    color: #4BF493;

    @media screen and (min-width: 600px){
        flex-direction: row;
        margin: 60px 0;
        font-size: 22px;
    }

`;

export const IconFrame = styled.div`

    width: 30%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 20px 0;

    @media screen and (min-width: 600px){
        width: 10%;
    }
`;