import React,{useEffect, useState} from 'react';
import PropertyCard from '../propertyRSCard/propertyRSCard';
import styles from "./PropertyRSList.module.scss";
import {Button } from "../../../components/Button/Button"
import {citiesList} from "../../../data/index"
const PropertyRSList = ({title,propertiesRSList}) => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const data = propertiesRSList;
    setProperties(data);
  }, [])
  
  const handleCityClick = (id) => {
    const filteredProperties  = propertiesRSList.filter((p) => p.cityId === id);
    console.log(filteredProperties);
    setProperties(filteredProperties);
  }
  return (
   <>
   <div className={styles.container}>
    <h4>{title}</h4>
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

export default PropertyRSList;