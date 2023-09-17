import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --overlay: rgba(76, 91, 97, 0.7);
    --background: #4c5b61;
    --button: #c5c5c5;
    --headline: #200116;
    --paragraph: #829191;
    --buttonText: #200116;
    --stroke: #949b96;
    --main: #c5c5c5;
    --highlight: #829191;
    --secondary: #200116;
    --tertiary: #949b96;
    --mainFont: 'Poppins';
    --secondaryFont: 'Roboto';
    --darkBackground: #fdfffc;
  }

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: var(--paragraph);
  }

  /* Button styles */
  button {
    background-color: var(--button);
    color: var(--buttonText);
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    width: 60%;
    margin: 10px auto;
  }

  input {
    width: 100%;
    margin: auto;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Horizontal offset, vertical offset, blur, color */
  }

  

  /* Mobile First Styles */
  @media only screen and (max-width: 600px) {
    :root {
      /* Define mobile-specific variables here if needed */
    }

    input {
      width: 70%;
      margin: auto;
    }

    button {
      padding: 8px 16px;  /* slightly smaller padding for mobile */
    }
  }

  @media only screen and (min-width: 601px) {
    :root {
      /* Tablet and above */
    }
  }

  @media only screen and (min-width: 1025px) {
    :root {
      /* Desktop and above */
    }
  }
`;

export default GlobalStyles;
