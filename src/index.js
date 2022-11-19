import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    background: rgb(var(--body-background));

    font-size: 1rem;

    --width: 64ch;

    --font-size--XS: 0.7rem;
    --font-size--S: 0.85rem;
    --font-size--M: 0.9rem;
    --font-size--L: 1.1rem;
    --font-size--XL: 1.3rem;
    --font-size--XXL: 1.7rem;
  }

  @media (min-width: 768px) {
    :root {
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

    background: rgb(var(--body-background));
    margin: 0;

    color: rgb(var(--text-color--primary));
    font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ::selection {
    background-color: rgba(0, 0, 0, 0.35);
  }

  :root,
  ::before,
  ::after {
    --body-background: 255, 255, 255;

    --bubble-background: 230, 230, 230;
    --bubble-foreground: 255, 255, 255;

    --text-color--primary: 0, 0, 0;
    --text-color--softer: 77, 77, 77;
    --text-color--inverted: 255, 255, 255;
    --text-color--inverted-softer: 178, 178, 178;
  }

  @media (prefers-color-scheme: light) {
    ::selection {
      background-color: rgba(0, 0, 0, 0.35);
    }
  
    :root,
    ::before,
    ::after {
      --body-background: 255, 255, 255;
      --body-background--inverted: 0, 0, 0;
  
      --bubble-background: 230, 230, 230;
      --bubble-foreground: 255, 255, 255;
  
      --text-color--primary: 0, 0, 0;
      --text-color--softer: 77, 77, 77;
      --text-color--inverted: 255, 255, 255;
      --text-color--inverted-softer: 178, 178, 178;
    }
  }

  @media (prefers-color-scheme: dark) {
    ::selection {
      background-color: rgba(255, 255, 255, 0.2);
    }
  
    :root,
    ::before,
    ::after {
      --body-background: 30, 30, 30;
      --body-background--inverted: 225, 225, 225;

      --bubble-background: 50, 50, 50;
      --bubble-foreground: 90, 90, 90;

      --text-color--primary: 255, 255, 255;
      --text-color--softer: 178, 178, 178;
      --text-color--inverted: 0, 0, 0;
      --text-color--inverted-softer: 77, 77, 77;
    }
  }
`;

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);

serviceWorkerRegistration.register();
