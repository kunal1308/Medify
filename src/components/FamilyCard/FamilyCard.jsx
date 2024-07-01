import React from 'react';
import styles from "./FamilyCard.module.css"

const FamilyCard = ({data}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card1}>
        <img src={data.img1} alt=''/>
        <h1>{data.count1}</h1>
        <p>{data.name1}</p>
      </div>
      <div className={styles.card2}>
      <img src={data.img2} alt=''/>
      <h1>{data.count2}</h1>
        <p>{data.name2}</p>
      </div>
    </div>
  )
}

export default FamilyCard
