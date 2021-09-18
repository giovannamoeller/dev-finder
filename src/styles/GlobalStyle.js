import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Space Mono', monospace;
  }

  body {
    width: 100%;
    max-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;