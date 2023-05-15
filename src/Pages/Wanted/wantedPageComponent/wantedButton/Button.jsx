import React from 'react';
import styles from "./Button.module.scss";
const Button = ({title,img,altText}) => {
    return (
        <div>
            <button className={styles.btn}>
                <div className={styles.img}>
                    <img src={img} alt={altText}/>
                </div>
                <span>{title}</span>
            </button>
        </div>
    )
}

export default Button;