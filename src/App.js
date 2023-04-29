import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import CardList from "./components/Card/CardList";
import MainCardList from "./components/mainCard/MainCardList";
import LoctionSearch from "./section/locationSearch/LoctionSearch";
import BlogList from "./components/Blogs/BlogList";
import AppSection from "./components/appSection/appSection";
import CampaignList from "./components/campaignSection/campaignList";


function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <CardList />
      <MainCardList />
      <LoctionSearch/>
      <BlogList/>
      <AppSection/>
      <CampaignList/>
    </React.Fragment>
  );
}

export default App;
