import React from "react";
import { citiesList } from "../../data";
import { Button } from "../../components/Button/Button";
import styles from "./styles.module.scss";
import { PropertyCard } from "../../components/Cards/PropertyCard/PropertyCard";
import { useState } from "react";
import { useEffect } from "react";

export const PropertiesList = ({ title, propertiesList }) => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // api call
    // response -> data -> assign to the state
    const data = propertiesList;
    setProperties(data);
  }, []);

  const handleCityClick = (id) => {
    const filteredProperties = propertiesList.filter((p) => p.cityId === id);
    setProperties(filteredProperties);
  };

  return (
    <div className={styles.properties_list_wrapper}>
      <h2>{title}</h2>
      {citiesList.map((city) => {
        return (
          <Button
            key={city.id}
            title={city.name}
            onClick={() => handleCityClick(city.id)}
          />
        );
      })}
      {properties.length > 0 ? (
        <div className={styles.properties_cards}>
          {properties.map((property) => (
            <PropertyCard property={property} />
          ))}
        </div>
      ) : (
        <p>
          <i>No properties found.</i>
        </p>
      )}
    </div>
  );
};
