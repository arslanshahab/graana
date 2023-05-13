import React from 'react';
import styles from "./ForgetModal.module.scss";
import {Button} from "../Button/Button"
const ForgetForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.forgetSec}>
        <div className={styles.header}>
          <h2><span className={styles.color}>Forgot</span> <span >Password</span></h2>
        </div>
        <h5 className={styles.text}>Please enter phone number to receive
          a verification code</h5>
          <div className={styles.input_wraper}>
            <input type="email"  placeholder='Please Enter Your Email' className={styles.input_field} />
          </div>
          <div className={styles.footer}>
            <h6>Back to Login</h6>
            <Button title="SEND" size="md" variant="secondary"/>
         </div>
      </div>
    </div>
  )
}

export default ForgetForm;



