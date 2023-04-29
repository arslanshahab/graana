import React from "react";
import { Hero } from "./../components/Hero/Hero";
import { Services } from "./../sections/Services/Services";
import { BuyWant } from "./../components/BuyWant/BuyWant";
import { PropertiesList } from "./../sections/PropertiesList/PropertiesList";
import { propertiesList } from "./../data";
import { Layout } from "../components/Layout/Layout";

export const Home = () => {
  return (
    <React.Fragment>
      <Layout>
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
      </Layout>
    </React.Fragment>
  );
};
