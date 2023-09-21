// src/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #121212;
    font-family: Arial, sans-serif;
    color: #1CE;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    color: #0BF;
    text-shadow: 0 0 5px #0BF, 0 0 10px #0BF;
  }

  a {
    color: #1CE;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #0BF;
    }
  }

  section {
    background-color: rgba(18, 18, 18, 0.75);
    border: 2px solid #0BF;
    border-radius: 15px;
    padding: 20px;
    margin: 20px;
    box-shadow: 0 0 5px #0BF, 0 0 10px #0BF;
  }

  // Ajoutez d'autres styles globaux ou spécifiques selon vos besoins
`;

export default GlobalStyle;
