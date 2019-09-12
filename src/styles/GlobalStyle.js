import { createGlobalStyle } from "styled-components";
import { modernNormalize } from "styled-modern-normalize";

const GlobalStyle = createGlobalStyle`
  ${modernNormalize}
  @import url("https://fonts.googleapis.com/css?family=Open+Sans&display=swap");
  :root {
  --bg-color: #D5D5D5;
  --card-color: white;
  --accent-color: orange;
  --font-color: black;
  --accent-font: "Great Vibes", Cursive;
  --main-font: "Open sans";
  --backup-font: "cursive";
  }

  body {
    background-color: var(--bg-color);
    color: var(--font-color);
    font-family: var(--main-font);
    display: block;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
