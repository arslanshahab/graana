import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import CardList from "./components/Card/CardList";
import MainCardList from "./components/mainCard/MainCardList";
import LoctionSearch from "./section/locationSearch/LoctionSearch";


function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <CardList />
      <MainCardList />
      <LoctionSearch/>
    </React.Fragment>
  );
}

export default App;
