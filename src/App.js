import React, { useEffect, useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { Box } from "./components/Cta-Box/Box";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <Box />
    </React.Fragment>
  );
}

export default App;
