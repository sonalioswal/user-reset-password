import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html{
      height: 100%;
    }
    body {
        height: 100%;
        margin: 0;
        font-size: 16px;
        background-repeat: no-repeat;
        background-attachment: fixed;
        font-family: Open Sans, sans-serif;
    }
    * {
        box-sizing: border-box;
    }
    #root {
        float: left;
        width: 100%;
        overflow-x: hidden;
    }
    h2 {
        text-align: center;
        font-weight: 900;
    }
`;
