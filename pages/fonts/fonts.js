import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @font-face {
        font-family: 'Font Name';
        src: local('Font Name'), local('FontName'),
        url('../fonts/Roboto-Regular.woff2') format('woff2'),
        url('../fonts/Roboto-Regular.woff2') format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;
