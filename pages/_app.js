import ReactGA from "react-ga4";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import "antd/dist/antd.css";

import "../styles/globals.css";
import TopNav from "../components/TopNav";
import { hotjar } from "react-hotjar";

const GA_4 = "G-FQDVFZDYD2";
const themeColor = { primary: "#0a9f37", secondary: "#753a28" };

const GlobalStyle = createGlobalStyle`
body {
  background-color: ${themeColor.primary};
}
`;

function MyApp({ Component, pageProps }) {
  ReactGA.initialize(GA_4);
  ReactGA.send("pageview");

  hotjar.initialize(2938370, 6);

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
