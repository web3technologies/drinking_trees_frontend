import styled from 'styled-components';


export const NavigationFrame = styled.nav`

    height: 100px;
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
    border: none;
    cursor: pointer;
    letter-spacing: 2px;
    font-weight: normal;

    &:hover {
        background-color: #4BF493;
      }

`;