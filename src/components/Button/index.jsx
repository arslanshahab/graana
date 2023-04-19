import React from 'react'
import styles from './styles.module.scss'

export const Button = () => {
  return (
    <div className={styles.wrapper}>
      <ul>
        <li>Java</li>
        <li>C#</li>
        <li>PHP</li>
      </ul>
    </div>
  )
}
