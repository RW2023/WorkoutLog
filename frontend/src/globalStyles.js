import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Reset */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Root Variables */
  :root {
    --overlay: rgba(184, 193, 236, 0.5);
    --background: #232946;
    --button: #ff8906;
    --headline: #fffffe;
    --paragraph: #b8c1ec;
    --buttonText: #232946;
    --stroke: #121629;
    --main: #b8c1ec;
    --highlight: #eebbc3;
    --secondary: #fffffe;
    --tertiary: #eebbc3;
    --breakpoint-sm: 480px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 1024px;
    --mainFont: 'Poppins', sans-serif;
    --secondaryFont: 'Roboto', sans-serif;
  }

  /* Typography */
  body {
    font-family: 'Arial, Helvetica, sans-serif';
    font-size: 16px;
    line-height: 1.5;
    background-color: var(--background);
    color: var(--paragraph);
  }

  /* Link Styles */
  a {
    color: var(--primary-color);
    text-decoration: none;
  }

  /* Button Defaults */
  button {
    background-color: var(--button);
    color: var(--buttonText);
    border: none;
    cursor: pointer;
  }

  /* Form Elements */
  input, textarea, select {
    font-family: inherit;
    font-size: inherit;
  }

  /* Utility Classes */
  .hidden {
    display: none;
  }

  .center-text {
    text-align: center;
  }
`;

export default GlobalStyles;
