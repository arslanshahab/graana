import React from 'react';
import { Hero } from "../../components/Hero/Hero";
import CardList from "../../components/Card/CardList";
import MainCardList from "../../components/mainCard/MainCardList";
import BlogList from "../../components/Blogs/BlogList";
import AppSection from "../../components/appSection/appSection";
import CampaignList from "../../components/campaignSection/campaignList";
import LoctionSearch from "../../section/locationSearch/LoctionSearch";
import PropertyList from "../../section/Properties/propertyList/PropertyList";
import PropertyRSList from "../../section/PropertiesRS/propertyListRS/PropertyRSList";
import { propertiesListSales, propertiesListRent } from "../../data/index";
const Home = () => {
  return (
    <React.Fragment>
      <Hero />
      <CardList />
      <MainCardList />
      <LoctionSearch />
      <PropertyList />
      <PropertyRSList
        title="Recent Properties for Rent"
        propertiesRSList={propertiesListRent}
      />
      <PropertyRSList
        title="Recent Properties for Sale"
        propertiesRSList={propertiesListSales}
      />
      <BlogList />
      <AppSection />
      <CampaignList />
    </React.Fragment>
  )
}

export default Home;