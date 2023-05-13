import React from 'react';
import styles from "./Button.module.scss";
import homeImg from "../../../../assets/images/sell-icon.svg"
const Button = () => {
    return (
        <div>
            <button className={styles.btn}>
                <div className={styles.img}>
                    <img src={homeImg} alt="" />
                </div>
                <span>Buy</span>
            </button>
        </div>
    )
}

export default Button;