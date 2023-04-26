import React from 'react'
import styles from './styles.module.scss'



export const IconWithText = (props) => 

{
  return (
   
    <div className={styles.icon_with_text}>
    <img src={props.icon_image} alt="" />
    <p>{props.icon_text}</p>
    </div>
   
  )
}
