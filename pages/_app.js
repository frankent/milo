import { useEffect } from "react";
import "antd/dist/antd.css";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import "../styles/globals.css";
import TopNav from "./component/TopNav";

const GlobalStyle = createGlobalStyle`
:root {
  --app-height: 100%;
}

@media only screen and (max-width: 640px) {
  body{
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    height: var(--app-height);
  }
}
`;

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const appHeight = () => {
      const doc = document.documentElement;
      doc.style.setProperty("--app-height", `${window.innerHeight}px`);
    };
    window.addEventListener("resize", appHeight);
    appHeight();

    return () => window.removeEventListener("resize", appHeight);
  }, []);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={{ colors: { primary: "#555" } }}>
        <TopNav />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
