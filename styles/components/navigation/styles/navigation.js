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
    display: flex;
    justify-content: space-between;
`;

export const TabText = styled.a`

    color: #049829;
    font-size: 18px;
    cursor: pointer;
    letter-spacing: 2px;
    font-weight: normal;

    &:hover {
        color: #4BF493;
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
    width: 15%;
    border-radius: 10px;
    height: 40px;
    letter-spacing: 2px;
    font-weight: normal;
      border: none;
      cursor: pointer;

    &:hover {
        background-color: #4BF493;
      }

`;

export const UserFrame = styled.div`

      width: 15%;
      display: flex;
      flex-direction: column;
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
    font-size: 18px;
    letter-spacing: 2px
    margin: 0px;
`;

export const ConnectedText = styled.p`
    color: green;
    font-size: 10px;
    margin: 0px;
`