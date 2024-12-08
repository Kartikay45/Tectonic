// /src/styles/GlobalStyle.js

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f0f0f0;
  }

  .fashion-lookbook {
    max-width: 100%;
    margin: 0 auto;
  }
`;

export default GlobalStyle;
