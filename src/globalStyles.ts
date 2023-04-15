import { createGlobalStyle } from "styled-components";
import font1 from "@assets/font1.woff";
import font2 from "@assets/font2.woff2";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Font1';
    src: url(${font1}) format('woff');
  }
  @font-face {
    font-family: 'Font2';
    src: url(${font2}) format('woff2');
  }
  h2{
    font-family: Font1,serif;
  }
  h3{
    font-family: Font2,serif;
  }
  body {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
