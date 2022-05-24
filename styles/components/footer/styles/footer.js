import styled, { keyframes } from 'styled-components';
import { bounce, slideOutLeft, fadeInLeft, slideInRight } from 'react-animations';


const bounceAnimation = keyframes`${bounce}`;
const FadeInLeftAnimation = keyframes`${fadeInLeft}`;
const SlideOutLeftAnimation = keyframes`${slideOutLeft}`;
const SlideInRightAnimation= keyframes`${slideInRight}`;


export const FooterFrame = styled.footer`

    // box-shadow: 10px 10px 50px rgba(255, 255, 255, 0.25);
    position: fixed;
    left: 0;
    bottom: 0;
    width: 2000px;
    // background-color: #13151E;
    color: white;
    text-align: center;
    width: 100%;
    height: 15vh;
`;

export const FooterFrameInner = styled.div`
    width: 85%;
    flex-shirnk: 0;
    align-items: center;
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
    width:1900px;
    position: absolute;
    right: 0px;
    bottom: 0px;
    overflow:hidden;
    img{
        height: 100px;
        width: 100px;
       
    }
`;
export const IconFrame2 = styled.div`
    width:1900px;   
    position: absolute;
    left: 0px;
    bottom: 0px;
    overflow:hidden;
    img{
        height:100px;
        width:100px;
        
    }
`;

export const AnimationTreeImage = styled.div`
    animation: infinite 40s ${SlideInRightAnimation};   
`;
export const AnimationTreeImage2 = styled.div`
    animation: infinite 40s ${SlideOutLeftAnimation};   
`;