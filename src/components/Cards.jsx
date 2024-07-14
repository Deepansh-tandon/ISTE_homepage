import React from 'react'
import styles from "./Cards.module.css"

export const Cards = () => {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.column1}>
      <div className={styles.events}></div>
      <div className={styles.bottomcards}>
        <div className={styles.team}></div>
        <div className={styles.alumni}></div>
      </div>
      </div>
      <div className={styles.column2}>
      <div className={styles.about}></div>
      <div className={styles.pastprojects}></div>
      </div>
     </div>
    </>
  )
}

export default Cards
