import React from 'react';
// import image from "../../assets/images/invest.webp"
import { Button } from '../Button/Button';
import style from "./CardItem.module.scss";
const CardItem = ({img,heading,btTitle,text, altT}) => {
    return (
        <div className={style.card_main}>
            <div className={style.img}>
                <img src={img} alt={altT} />
            </div>
            <div className={style.heading}>
                <h2>{heading}</h2>
            </div>
            <div className={style.text}>
                <p>{text}</p>
            </div>
            <div className={style.btn}>
                <Button title={btTitle} type="secondary" size="lg"/>
            </div>
        </div>
    )
}

export default CardItem;