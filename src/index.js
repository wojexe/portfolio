import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    font-size: 16px;

    --width: 64ch;

    --gray: 230, 230, 230;
    --text-gray: 77, 77, 77;

    --font-size--XS: 0.7rem;
    --font-size--S: 0.85rem;
    --font-size--M: 0.9rem;
    --font-size--L: 1.1rem;
    --font-size--XL: 1.3rem;
    --font-size--XXL: 1.7rem;
  }

  @media (min-width: 768px) {
    html {
      --font-size--XS: 0.75rem;
      --font-size--S: 0.9rem;
      --font-size--M: 1.1rem;
      --font-size--L: 1.25rem;
      --font-size--XL: 1.5rem;
      --font-size--XXL: 2rem;
    }
  }

  body {
    padding: env(safe-area-inset-top)
    env(safe-area-inset-right)
    env(safe-area-inset-bottom)
    env(safe-area-inset-left);

    background: #fff;
    margin: 0;
    font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ::selection {
    background-color: rgba(0,0,0,0.35);
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorkerRegistration.register();
