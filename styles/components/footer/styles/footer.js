import styled from 'styled-components';


export const FooterFrame = styled.footer`

    background: #13151E;
    box-shadow: 10px 10px 50px rgba(255, 255, 255, 0.25);
    
    display: flex;
    justify-content: center;
`;

export const FooterFrameInner = styled.div`

    width: 85%;
    display: flex;
    justify-content: space-between;
`;

export const FooterText = styled.h6`

    font-style: normal;
    font-weight: 400;
    font-size: 22px;

    /* identical to box height */

    text-align: center;
    letter-spacing: 0.02em;

    color: #4BF493;
`;

export const IconFrame = styled.div`

    width: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center
`;