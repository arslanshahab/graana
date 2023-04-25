
import React from "react";
import styles from "./styles.module.scss"

export const Description = ({ text }) => {
    return (
      <div className={styles.description}>
      <p>{text}</p>
      </div>    
      );
  };
  
  