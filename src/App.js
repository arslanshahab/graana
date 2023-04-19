import React, { useEffect, useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
    </React.Fragment>
  );
}

export default App;
