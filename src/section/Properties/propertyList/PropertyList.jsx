import React,{useEffect, useState} from 'react';
import PropertyCard from '../propertyCard/propertyCard';
import styles from "./PropertyList.module.scss";
import {Button } from "../../../components/Button/Button"
import {citiesList,propertiesList} from "../../../data/index"
const PropertyList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const data = propertiesList;
    setProperties(data);
  }, [])
  
  const handleCityClick = (id) => {
    const filteredProperties  = propertiesList.filter((p) => p.cityId === id);
    console.log(filteredProperties);
    setProperties(filteredProperties);
  }
  return (
   <>
   <div className={styles.container}>
    <h4>Top areas by city</h4>
    <div className={styles.cityFilterBtnSec}>
      <div className={styles.cityFilterBtn}>
        {citiesList.map((city)=>{
          return (
          <Button  
           key={city.id}
           title={city.name}
          onClick={()=>handleCityClick(city.id)}
          />
          );
        })}
      </div>
      <div className={styles.cityFilterText}>
         <h4>Total properties in Islamabad:  3810 on rent | 11017 on sale</h4>
      </div>
    </div>
    <div className={styles.card_wrapper}>
     {properties.map((property)=>{
       return <PropertyCard property={property}/>
     })}
    </div>
   </div>
   </>
  )
}

export default PropertyList;