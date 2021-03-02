import React, { Component } from "react";

import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
//CSS import
import "../css/components/Home.css";
const Home = () => {
  return (
    <div>
      <div>
        <h2>Elizabeth Chandra</h2>
        <h4>Software Engineer</h4>
      </div>
      <About />
      <Skills />
      <Contact />
    </div>
  )
};

export default Home;
