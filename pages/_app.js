import { useEffect } from "react";
import "antd/dist/antd.css";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import "../styles/globals.css";
import TopNav from "../components/TopNav";

const themeColor = { primary: "#0a9f37", secondary: "#753a28" };

const GlobalStyle = createGlobalStyle`
:root {
  --app-height: 100%;
}

body {
  background-color: ${themeColor.primary};
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
      <ThemeProvider theme={{ colors: themeColor }}>
        <TopNav />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
