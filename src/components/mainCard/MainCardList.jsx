import React from 'react';
import MainCardItem from './MainCardItem';
import style from "./CardList.module.scss";
import buy from "../../assets/images/buy.svg"
import rent from "../../assets/images/rent.svg"
import sell from "../../assets/images/sell.svg"

const MainCardList = () => {
  return (
    <div className={style.container}>
        <MainCardItem 
        img={buy}
        altT="buy Home"
        heading="Buy a property"
        para="Find where “perfect” meets “happy”"
        btnT="BROWSE PROPERTIES"
        />
        <MainCardItem 
        img={sell}
        altT="sell Home"
        heading="Sell a property"
        para="Get the best value in any economy"
        btnT="ADD DETAILS"
        />
        <MainCardItem 
        img={rent}
        altT="rent Home"
        heading="Rent a property"
        para="Live where you can love"
        btnT="FIND RENTALS"
        />
    </div>
  )
}

export default MainCardList;