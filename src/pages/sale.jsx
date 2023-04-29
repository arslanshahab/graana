import React from "react";
import { PropertiesList } from "../sections/PropertiesList/PropertiesList";
import { propertiesList } from "../data";
import { Layout } from "../components/Layout/Layout";

export const Sale = () => {
  return (
    <React.Fragment>
      <Layout>
        <PropertiesList
          title="Buy Properties Anywhere"
          propertiesList={propertiesList}
        />
      </Layout>
    </React.Fragment>
  );
};
