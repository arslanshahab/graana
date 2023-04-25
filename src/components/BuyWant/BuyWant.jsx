import React from "react";
import styles from "./styles.module.scss";
import invest from "./../../assets/images/invest.webp";
import wanted from "./../../assets/images/wanted.webp";
import { DescriptionCard } from "../../components/DescriptionCard/DescriptionCard";

export const BuyWant = () => {
  return (
    <div className={styles.section_styles}>
      <DescriptionCard
        image={invest}
        title="Invest"
        description="Invest in fully legal Imarat projects. Our “Ownerships & Approvals, Demand & Delivery” approach ensures fantastic returns with full risk mitigation"
        btnTitle="Invest"
      />

      <DescriptionCard
        image={wanted}
        title="Wanted"
        description="In just 3 clicks activate a team of to find the properties you need In just 3 clicks activate a team of to find the properties you need. Just do Let us know"
        btnTitle="Wanted"
      />
    </div>
  );
};