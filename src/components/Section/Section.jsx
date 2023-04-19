import React from "react";
import styles from "./styles.module.scss";
import invest from "./../../assets/images/invest.webp"
import wanted from "./../../assets/images/wanted.webp"
import { Button } from "../Button/Button";
import { Title } from "../Title/Title";
import { Description } from "../Description/Description";

export const Section=()=>{


return(
    <div className={styles.section_styles}>

    <div className={styles.invest_styles}>
      <img src={invest} alt="Section Image" />
      {<Title text={"Invest"}/>}
      {<Description text={"Invest in fully legal Imarat projects. Our “Ownerships & Approvals, Demand & Delivery” approach ensures fantastic returns with full risk mitigation"}/> }
      
      {<Button title={"Invest"} size={"md"} type={"secondary"} />}
    </div>
    <div className={styles.wanted_styles}>
      <img src={wanted} alt="Section Image" />
      {<Title text={"Wanted"}/>}
      {<Description text={"In just 3 clicks activate a team of to find the properties you need In just 3 clicks activate a team of to find the properties you need. Just do Let us know"}/> }
      <Button title={"Wanted"} size={"md"} type={"secondary"} />
    </div>
    </div>
);
};