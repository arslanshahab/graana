import React from 'react';
import styles from "./campaignItem.module.scss";
const CampaignItem = ({ data }) => {
    return (
        <div className={styles.card}>
            <div className={styles.card_head}>
                <div className={styles.card_img}>
                    <img src={data.image} alt="Rosan garana" />
                </div>
            </div>
            <div className={styles.card_body}>
                {data.text}
            </div>
            <div className={styles.card_footer}>
                {data.mText}
            </div>
        </div>
    )
}

export default CampaignItem;