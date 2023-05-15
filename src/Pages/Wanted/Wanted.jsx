import React from 'react';
import styles from  "./Wanted.module.scss";
import Form from './wantedPageComponent/wantedForm/Form';
import WantedSection from './wantedPageComponent/wantedSection/WantedSection';
const Wanted = () => {
  return (
    <div className={styles.container}>
      <div className={styles.detail_section}>
        <Form/>
      </div>
      <div className={styles.vertical_line}>
        <div className={styles.line}></div>
      </div>
      <div className={styles.wanted_section}>
        <WantedSection/>
      </div>
    </div>
  )
}

export default Wanted;