import React from "react";
import { Hero } from "./../components/Hero/Hero";
import { Services } from "./../sections/Services/Services";
import { BuyWant } from "./../components/BuyWant/BuyWant";
import { PropertiesList } from "./../sections/PropertiesList/PropertiesList";
import { Layout } from "../components/Layout/Layout";
import { useEffect } from "react";
import { useState } from "react";
import { HTTP } from "../http/http.js";

export const Home = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    HTTP.get("/properties")
      .then((response) => {
        setProperties(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <React.Fragment>
      <Layout>
        <Hero />
        <BuyWant />
        <Services />
        <PropertiesList title="Top areas by city" propertiesList={properties} />
        {/* <PropertiesList
          title="Recent Properties for Sale"
          propertiesList={properties}
        />
        <PropertiesList
          title="Recent Properties for Rent"
          propertiesList={properties}
        /> */}
      </Layout>
    </React.Fragment>
  );
};
