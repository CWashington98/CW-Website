import * as React from "react";
import "./App.css";
import About from "./components/about/About";
import Profile from "./components/profile/Profile";
import Skills from "./components/resume/Skills";


function App() {
  return (
    <div>
      <Profile/>
      <About/>
      <Skills/>
    </div>
  );
}

export default App;
