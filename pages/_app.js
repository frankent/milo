import { createGlobalStyle, ThemeProvider } from "styled-components";
import "antd/dist/antd.css";

import "../styles/globals.css";
import TopNav from "../components/TopNav";

const themeColor = { primary: "#0a9f37", secondary: "#753a28" };

const GlobalStyle = createGlobalStyle`
body {
  background-color: ${themeColor.primary};
}
`;

function MyApp({ Component, pageProps }) {
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
