import React from 'react';
import styles from "./WantedSection.module.scss";
import wantedImg from "../../../../assets/images/sideImageWanted.webp";
const WantedSection = () => {
  return (
    <div className={styles.container}>
       <h2 className={styles.text_heading}>Wanted</h2>
       <span className={styles.wanted_text}>For the first time in Pakistan, activate a team of experts in just 3 clicks to find the properties you need with completely secure and transparent transactions</span>
       <div className={styles.wanted_img}>
        <img src={wantedImg} alt="wanted img" />
       </div>
    </div>
  )
}

export default WantedSection;