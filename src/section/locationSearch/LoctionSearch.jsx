import React from 'react';
import styles from  "./LocationSearch.module.scss";
import img from "../../assets/images/map.webp"
const LoctionSearch = () => {
  return (
    <div className={styles.bg_image}>
        <div className={styles.container}>
        <div className={styles.searchSection}>
                <h2>Area Guides</h2>
                <p>View schools, health services, parks, security index and other details of any area</p>
            <div>
                <input type="text" />
            </div>
        </div>
        <div className={styles.mapImg}>
            <img src={img} alt="map" />
        </div>
        </div>
    </div>
  )
}

export default LoctionSearch;