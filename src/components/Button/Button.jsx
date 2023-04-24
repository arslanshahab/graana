import React from "react";
import styles from "./styles.module.scss";

export const Button = ({ title, type, variant="solid", size }) => {
  return (
    <button className={`${styles[type]} ${styles[size]} ${styles[variant]}`}>
      {title}
    </button>
  );
};
