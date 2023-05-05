import React from "react";
import { Hero } from "./../components/Hero/Hero";
import { Services } from "./../sections/Services/Services";
import { BuyWant } from "./../components/BuyWant/BuyWant";
import { PropertiesList } from "./../sections/PropertiesList/PropertiesList";
// import { propertiesList } from "./../data";
import { Layout } from "../components/Layout/Layout";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export const Home = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/properties`, {
        headers: {
          "access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2ODMyNjgyNjYsImV4cCI6MTY4MzI3MTg2Nn0.pg5QQ76lmFVkYY0XM_vyJsNn8WZhhvitsZDYIepjq0Y",
        },
      })
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
