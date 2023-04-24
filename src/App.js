import React, { useEffect, useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { BuyWant } from "./sections/BuyWant/BuyWant";
import { Services } from "./sections/Services/Services";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <BuyWant />
      <Services />
    </React.Fragment>
  );
}

export default App;
