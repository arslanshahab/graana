import React, { useEffect, useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { BuyWant, Section } from "./components/BuyWant/BuyWant";
import { Citycard } from "./components/Cards/CityCard/CityCard"
import { CityCategoriesButtons } from "./components/CityCategoriesButtons/CityCategoriesButtons";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <BuyWant/>
      <CityCategoriesButtons/>
     <Citycard/>
    </React.Fragment>
  );
}

export default App;
