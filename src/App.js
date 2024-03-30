import "./App.css";
import "./assets/css/dark.css";
import GlobalStyle from "./components/styles/Global.styles";
import Tutorial from "./components/Tutorial";
import ThemeProvider from "styled-components";

export default function App() {
  return (
    <>
      <GlobalStyle />
      {/* <ThemeProvider theme='dark'> */}
      <Tutorial />
      {/* </ThemeProvider> */}
    </>
  );
}
