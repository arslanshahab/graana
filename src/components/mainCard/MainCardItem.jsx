import React from 'react';
import {Button} from "../Button/Button"
import style from "./CardItem.module.scss";
const MainCardItem = ({img,altT,heading,para,btnT}) => {
  return (  
    <div className={style.card_main}>
    <div>
        <img src={img} alt={altT}/>
    </div>
    <div className={style.main_head}>
        <h2>{heading}</h2>
    </div>
    <div className={style.main_para}>
        <p>{para}</p>
    </div>
    <div className={style.main_btn}>
        <Button title={btnT} type="primary" size="md"/>
    </div>
</div>
  )
}

export default MainCardItem;