import React from 'react';
import CampaignItem from './campaignItem';
import styles from "./campaignList.module.scss"
import {CampaignData} from "../../data/index"

const CampaignList = () => {
  return (
    <div>
        <div className={styles.container}>
            <h2>Happenings</h2>
            <p>Navigate through the landscape of some of our most well-received campaigns!</p>
            <div className={styles.card_list}>
                {CampaignData.map((data)=>{
                    return <CampaignItem data={data}/>
                })}
            </div>
        </div>

    </div>
  )
}

export default CampaignList;