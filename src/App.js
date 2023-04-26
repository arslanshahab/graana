import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { Services } from "./sections/Services/Services";
import { BuyWant } from "./components/BuyWant/BuyWant";
import { PropertiesList } from "./sections/PropertiesList/PropertiesList";
import { propertiesList } from "./data";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <BuyWant />
      <Services />
      <PropertiesList
        title="Top areas by city"
        propertiesList={propertiesList}
      />
      <PropertiesList
        title="Recent Properties for Sale"
        propertiesList={propertiesList}
      />
      <PropertiesList
        title="Recent Properties for Rent"
        propertiesList={propertiesList}
      />
    </React.Fragment>
  );
}

export default App;
