import React from 'react';
import styles from "./propertyRSCard.module.scss"
const PropertyRSCard = ({property}) => {
  return (
    <div key={property.id} className={styles.card} >
      <div className={styles.cardImg}>
      <img src={property.area_image} alt={property.name} />
      </div>
      <div className={styles.card_text}>
        <div className={styles.head}>
          <div className={styles.head_left}>
            <p className={styles.pkr}>PKR</p>
           <h4 className={styles.textH}>{property.home_price}</h4>
          </div>
          <div className={styles.head_right}>
            <div className={styles.box}></div>
            <h4 className={styles.area_text}>{property.home_area}</h4>
          </div>
        </div>
        <div className={styles.textImg}>
          <div className={styles.rent}>
            <div className={styles.rent_img}>
              <img src={property.bed_img} alt={property.name} />
            </div>
            <div className={styles.rent_text}>
              <h4 className={styles.h4}>{property.home_bed}</h4>
            </div>
          </div>
          <div className={styles.rent}>
            <div className={styles.rent_img}>
              <img src={property.shawer_img} alt={property.name} />
            </div>
            <div className={styles.rent_text}>
              <h4 className={styles.h4}>{property.home_shawer}</h4>
            </div>
          </div>
          <div className={styles.rent}>
            <div className={styles.rent_img}>
              <img src={property.area_img} alt={property.name} />
            </div>
            <div className={styles.rent_text}>
              <h4 className={styles.h4}>{property.home_area}</h4>
            </div>
          </div>
        </div>
        <h4 className={styles.h4}>{property.property_place}</h4>
        <h4 className={styles.h3}>{property.date}</h4>
      </div>
    </div>
  )
}

export default PropertyRSCard;