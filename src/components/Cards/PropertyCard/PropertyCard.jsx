import React from "react";
import styles from "./styles.module.scss";
import { Description } from "../../Description/Description";
import { IconWithText } from "../../IconWithText/IconWithText";
import home_icon from "./../../../assets/images/home_icon.svg";
import rent_icon from "./../../../assets/images/rent_icon.svg";
import arrow_icon from "./../../../assets/images/areaGuideArrow.svg";

export const PropertyCard = ({ property }) => {
  return (
    <div key={property.id} className="card">
      <img src={property.area_image} alt="city" />
      <Description text={property.area_name} />
      <div className={styles.rs_div}>
        <IconWithText
          icon_image={home_icon}
          icon_text={property.properties_for_rent + " on Rent"}
        />
        <IconWithText
          icon_image={rent_icon}
          icon_text={property.properties_for_sales + " on Sale"}
        />
      </div>
      <hr />
      <IconWithText icon_image={arrow_icon} icon_text={"View Area Guide"} />
    </div>
  );
};
