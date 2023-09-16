// src/GlobalStyles.js
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

  
  body {
    background: var(--background);
    color: var(--stroke);
    margin: 0;
    padding: 0;
    font-family: var(--mainFont);
    text-align: center;
  }
`;

export default GlobalStyles;
