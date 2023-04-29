import React from 'react';
import styles from "./appSection.module.scss";
import appStoreImg from "../../assets/images/appstore.svg"
import storeImg from "../../assets/images/play.svg"
import mobileImg from "../../assets/images/mobile.webp"
const AppSection = () => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.rowText}>
                    <h2>Get the app now</h2>
                    <p>Search hundreds of thousands of up to date listings
                        with powerful filters to find your perfect home and real estate investment.
                        Find properties and opportunities exclusive and unique to Graana.
                    </p>
                    <div className={styles.iconImg}>
                        <img src={appStoreImg} alt="Get the app now" />
                        <img src={storeImg} alt="Get the app now" />
                    </div>
                </div>
                <div className={styles.rowImg}>
                    <img src={mobileImg} alt="Mobile App" />
                </div>
            </div>
        </div>
    )
}

export default AppSection;