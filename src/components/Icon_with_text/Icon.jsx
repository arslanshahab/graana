import React from 'react'
import styles from './styles.module.scss'



export const Icon_with_Text = (props) => 

{
  return (
   
    <div className={styles.Icon_with_Text}>
    <img src={props.icon_image} alt="" />
    <p>{props.icon_text}</p>
    </div>
   
  )
}
