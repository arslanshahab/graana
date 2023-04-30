import React from 'react';
import styles from "./propertyCard.module.scss"
const PropertyCard = ({property}) => {
  return (
    <div key={property.id} className={styles.card} >
      <div className={styles.cardImg}>
      <img src={property.area_image} alt={property.name} />
      </div>
      <div className={styles.card_text}>
        <h4 className={styles.textH}>{property.area_name}</h4>
        <div className={styles.textImg}>
          <div className={styles.rent}>
            <div className={styles.rent_img}>
              <img src={property.rent_img} alt={property.name} />
            </div>
            <div className={styles.rent_text}>
              <h4 className={styles.iImg}>{property.properties_for_rent}</h4>
              <h4 className={styles.h4}>on rent</h4>
            </div>
          </div>
          <div className={styles.rent}>
            <div className={styles.rent_img}>
              <img src={property.sale_img} alt={property.name} />
            </div>
            <div className={styles.rent_text}>
              <h4 className={styles.iImg}>{property.properties_for_sales}</h4>
              <h4 className={styles.h4}>on sales</h4>
            </div>
          </div>
        </div>
        <hr className={styles.underline}/>
        <h4 className={styles.foot}>View Area Guide</h4>
      </div>
    </div>
  )
}

export default PropertyCard;