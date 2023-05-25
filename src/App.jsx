import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import appStyle from "./App.module.css";
import Companies from "./components/companies/Companies";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value";

const App = () => {
  return (
    <div className={`${appStyle.app}`}>
      <div>
        <div className={`${appStyle["white-gradient"]}`}></div>
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residencies />
      <Value />
    </div>
  );
};

export default App;
