import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: sans-serif;
  }

  body {
    display: block;
  }

  @font-face {
    font-family: 경기천년제목;
    font-style: bold;
    src: local("경기천년제목"), url("../fonts/경기천년제목_Bold.ttf") format("truetype");
  }
`;

export default GlobalStyle;
