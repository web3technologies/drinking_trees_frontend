import styled from 'styled-components';

export const MainFrame = styled.div`

  width: 100%;
  display: flex;
  flex-direaction: column;
  justify-content: center;
  margin: 20px;
`;

export const MainContainer = styled.div`

  width: ${({ width }) => width || "90%"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;


export const Text = styled.p`

  font-size: 36px;
  color: blue;
  color: ${({ color }) => color || "#74d314"};

`;


export const Button = styled.button`

    


    display: inline-block;
    background-color: ${({ color }) => color || "#74d314"};
    border-radius: 10px;
    border: 4px double #cccccc;
    color: #eeeeee;
    
    text-align: center;
    font-size: 28px;
    padding: 20px;
    width: 200px;
    transition: all 0.5s;
    cursor: pointer;
    margin: 25px;


    &:hover {
        background-color:rgba(0, 0, 0, 0.5);
      }
`

export const IMG = styled.img`


  width: 25%;

`;


export const NavBar = styled.nav`

    width: 95%;
    border-bottom: 2px solid ligt-gray;
`;
