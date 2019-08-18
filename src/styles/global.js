import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:100,400,500&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        -webkit-font-smoothing: antialiased !important;
    }

    /* body, html, #root {
        height: 100%;
    } */

    body, input, button {
        font-family: 'Roboto', sans-serif;
    }
`;
