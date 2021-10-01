import React, { Component } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import CodeExamples from "./components/CodeExamples";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        {/* <Header />
        <Main />
        <Footer /> */}
        <Skills />
        <Portfolio />
        <CodeExamples />
      </div>
    );
  }
}

export default App;
