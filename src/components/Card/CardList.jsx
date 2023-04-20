import React from 'react';
import CardItem from './CardItem';
import style from "./CardList.module.scss";
import investImg from "../../assets/images/invest.webp"
import wantedImg from "../../assets/images/3ClicksLogo.webp";
const CardList = () => {
  return (
    <div className={style.container}>
        <CardItem
         img={investImg}
         heading="Invest"
         text="Invest in fully legal Imarat projects. Our “Ownerships & Approvals, Demand & Delivery” approach ensures fantastic returns with full risk mitigation"
         btTitle="Invest"
         altT="Invest"
         />
        <CardItem
         img={wantedImg} 
         heading="Wanted"
         text="In just 3 clicks activate a team of experts to find the properties you need"
         btTitle="Wanted"
         altT="Wanted"
         />
    </div>
  )
}

export default CardList;