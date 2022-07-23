import * as React from "react";
import "./App.css";
import About from "./components/about/About";
import Profile from "./components/profile/Profile";
import Skills from "./components/resume/Skills";
import { ThemeProvider } from "styled-components";
import { COLORS, GlobalStyle } from "./components/constants/constants";
import { ScrollContainer } from "react-scroll-motion";

function App() {
  return (
    <div >
      <GlobalStyle/>
      <Profile/>
      <Skills/>
      <About/>
    </div>
  );
}

export default App;
