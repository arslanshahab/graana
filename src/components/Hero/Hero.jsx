import React from "react";
import styles from "./styles.module.scss";
import { Button } from "../Button/Button";
import searchIcon from "./../../assets/images/searchIcon.svg";

export const Hero = () => {
  return (
    <header>
      <h1>
        Buy or rent vetted properties at the <br /> most trusted online real
        estate portal
      </h1>
      <div className={styles.cta_button}>
        <Button title="BUY" type="primary" />
        <Button title="RENT" type="primary" />
      </div>
      <div className={styles.header_search}>
        <div className={styles.input_wrapper}>
            <input type="text" placeholder="Search by city or area" />
        </div>
        <div className={styles.search_icon}>
          <img src={searchIcon} alt="search" />
        </div>
      </div>
    </header>
  );
};
