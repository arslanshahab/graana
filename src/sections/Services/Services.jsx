import React from "react";
import styles from "./styles.module.scss";
import { DescriptionCard } from "../../components/DescriptionCard/DescriptionCard";
import invest from "./../../assets/images/invest.webp";

export const Services = () => {
  return (
    <div className={styles.services_section}>
      <div className={styles.box}></div>
      <div className={styles.services_wrapper}>
        <DescriptionCard
          image={invest}
          title="Invest"
          description="Invest in fully legal Imarat projects. Our “Ownerships & Approvals, Demand & Delivery” approach ensures fantastic returns with full risk mitigation"
          btnTitle="Invest"
          btnVariant="outline"
          btnType="primary"
        />
        <DescriptionCard
          image={invest}
          title="Invest"
          description="Invest in fully legal Imarat projects. Our “Ownerships & Approvals, Demand & Delivery” approach ensures fantastic returns with full risk mitigation"
          btnTitle="Invest"
          btnVariant="outline"
          btnType="primary"
        />
        <DescriptionCard
          image={invest}
          title="Invest"
          description="Invest in fully legal Imarat projects. Our “Ownerships & Approvals, Demand & Delivery” approach ensures fantastic returns with full risk mitigation"
          btnTitle="Invest"
          btnVariant="outline"
          btnType="primary"
        />
      </div>
    </div>
  );
};
