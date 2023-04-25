import React from "react";
import styles from "./styles.module.scss";

export const Button = ({ title, type, variant, size, onClick}) => {
  return <button className={`${styles[type]} ${styles[size]}`} onClick={onClick}>{title}</button>;
};
