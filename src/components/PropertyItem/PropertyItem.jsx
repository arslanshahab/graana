import React from "react";
import styles from "./styles.module.scss";

export const PropertyItem = ({
  image,
  title,
  rentCount,
  saleCount,
  cityId,
}) => {
  return (
    <div className={styles.item_wrapper}>
      <div className={styles.image_wrapper}>
          <img src={image} alt={title} />
      </div>
      <h3>{title}</h3>
      
    </div>
  );
};
