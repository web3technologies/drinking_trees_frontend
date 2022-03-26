import styled from 'styled-components';


export const NavigationFrame = styled.nav`
    margin: 25px 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

`;

export const NavigationInner = styled.div`

    width: 85%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;

`;


export const NavigationLeft = styled.div`

    width: 30%;
    display: none;
    justify-content: space-between;

    @media screen and (min-width: 825px){
        display: flex;
    }

    @media screen and (min-width: 1000px){
        width: 40%;
    }

    @media screen and (min-width: 1300px){
        width: 30%;
    }
`;

export const TabText = styled.a`

color: #049829;
    font-size: 18px;
    cursor: pointer;
    letter-spacing: 1px;
    font-weight: normal;

    margin: 18px 0;

    &:hover {
        color: #4BF493;
    }
    
    @media screen and (min-width: 825px){
        letter-spacing: 2px;
        margin: 0;
        color: #049829;
    }

`;

export const NavigationRight = styled.div`

    width: 60%;
    display: flex;
    justify-content: flex-end;
`;


export const ConnectButton = styled.button`

    color: white;
    background-color: #049829;
    width: 50%;
    border-radius: 10px;
    height: 40px;
    letter-spacing: 2px;
    font-weight: normal;
    border: none;
    cursor: pointer;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    &:hover {
        background-color: #4BF493;
      }

    @media screen and (min-width: 825px){
        width: 15%;
    }

`;

export const MetaMaskIcon = styled.img`

    width: 15%;

`;

export const UserFrame = styled.div`

    width: 50%;
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 1000px){
        width: 25%;
    }

    @media screen and (min-width: 1300px){
        width: 15%;
    }
`;

export const UserFrameTop = styled.div`

    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px;
`;

export const UserFrameBottom = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin: 0px;
`;

export const AddressText = styled.p`

    color: #ffffff;
    font-size: 12px;
    letter-spacing: 2px
    margin: 0px;

    @media screen and (min-width: 825px){
        font-size: 18px;
    }
`;

export const ConnectedText = styled.p`
    color: green;
    font-size: 8px;
    margin: 0px;

    @media screen and (min-width: 825px){
        font-size: 10px;
    }
`

export const HamburgerFrame = styled.div`

    width: 25%;
    display: flex;
    flex-direction: column;

    

    @media screen and (min-width: 825px){
        display: none;
    }

`;

export const Horizontal = styled.div`

    margin: 4px 0;
    background: #049829;
    width: 60%;
    height: 2px;
`;

export const DropDown = styled.div`
    top: 15%;
    right: 0%;
    position: fixed;
    height: 250px;
    width: 100%;
    background: #1C1E27;
    box-shadow: 0px 12px 15px rgba(0, 0, 0, 0.08);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
    z-index: 9999;


    @media only screen and (min-width: 1280px) {
        display: none;
    }
`;

export const DropDownInner = styled.div`

    width: 85%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

`;

export const XLineLeft = styled.div`
    /* White */
    height: 1px;
    transform: rotate(-45deg);
    background: ${props => props.color ? props.color : '#FFFFFF'};
    width: 50%;
    transition: 1s;
`;

export const XLineRight = styled.div`
    height: 1px;
    transform: rotate(45deg);
    background: ${props => props.color ? props.color : '#FFFFFF'};
    width: 50%;
    transition: 1s;
`;