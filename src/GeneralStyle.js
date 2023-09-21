// src/GlobalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #121212;
    font-family: Arial, sans-serif;
    color: #1CE;
  }

  h1, h2, h3, h4, h5, h6 {
    color: #0BF;
  }

  a {
    color: #1CE;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #0BF;
    }
  }

  // Ajoutez d'autres styles globaux ou spécifiques selon vos besoins
`;

export default GlobalStyle;
