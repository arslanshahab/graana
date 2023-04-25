import React from 'react';
import styles from "./styles.module.scss";
import { Button } from '../Button/Button';


export const CityCategoriesButtons=()=>
 {
  return (
    <><h3>Top Areas By Cities</h3>
    <div className={styles.city_Categories_buttons}>
        
        <Button title={"Lahore"}/>
        <Button title={"Islamabad"}/>
        <Button title={"Karachi"}/>
        <Button title={"Peshawar"}/>
        <Button title={"Rawalpindi"}/>
        

    </div>
    </>)
}
