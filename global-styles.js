import { createGlobalStyle } from 'styled-components';


// FONT: MONTSERRAT BOLD SIZE 34 WHITE 
// COLORS
// Secondary:
// Pink - #F22BCA
// Orange - #FFAE5F
// Gold - #F8CD21
// Blue - #48EAE7
// Purple - #7B72F8


const GlobalStyle = createGlobalStyle`
    :root{
        --pink-color: #f22bca; 
        --orange-color: #ffae5f; 
        --gold-color: #f8cd21; 
        --blue-color: #48eae7; 
        --purple-color: #7b72f8;
        --title-font: 50px;
        --white-color: #ffffff;
        --black-color: #000000;
        --supporting-font: 18px;
        --green-trees: #049829;
        --lightgreen-color: #4bF493;
        --green-color: #66cc2e;
        --skyblue-color: #41b6e6;
    }
    *{
        margin:0;
        padding:0;
    }
    body {
        background: var(--skyblue-color);
        font-family: 'Gotham Black', sans-serif;
        background-size:cover;
        background-position:center;
        height:100vh;
    }
`;



export default GlobalStyle;