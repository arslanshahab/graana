import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import CardList from "./components/Card/CardList";
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <CardList />
    </React.Fragment>
  );
}

export default App;
