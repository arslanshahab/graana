import React, { useEffect, useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { Section } from "./components/Section/Section";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <Section/>
    </React.Fragment>
  );
}

export default App;
