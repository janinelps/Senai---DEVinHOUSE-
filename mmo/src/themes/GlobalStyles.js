import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
html{
    font-sizing: 16px;
    color: #333;
    font-family: Montserrat, sans-serif;
}
body{
    background-color: #efefef;
}

`