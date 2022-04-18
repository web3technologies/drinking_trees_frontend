import { createGlobalStyle } from 'styled-components';




const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        // background: linear-gradient(180deg, #2A429A 0%, rgba(242, 43, 202, 0) 100%);
        // background: rgb(42,66,154);
        // background: linear-gradient(180deg, rgba(42,66,154,1) 0%, rgba(72,234,231,1) 100%, rgba(42,66,154,1) 100%);
        background: rgb(42,66,154);
        background: linear-gradient(180deg, rgba(42,66,154,1) 93%, rgba(255,255,255,1) 100%, rgba(255,255,255,1) 100%);
        font-family: 'Fjalla One', sans-serif;
    }
`;



export default GlobalStyle;