import { createGlobalStyle } from "styled-components";

import 경기천년제목_Bold from "../fonts/경기천년제목_Bold.ttf";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: sans-serif;
  }

  body {
    display: block;
  }

  @font-face {
    font-family: '경기천년제목';
    font-style: bold;
    src: url(${경기천년제목_Bold}) format(truetype);
  }
`;

export default GlobalStyle;
