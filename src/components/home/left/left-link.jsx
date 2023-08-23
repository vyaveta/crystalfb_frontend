import React from 'react'
import styles from "./left-side.module.css"

const LeftLink = ({img, text, notification}) => {
  return (
    <div className={`${styles.left_link} hover1`} >
        <img src={`../../../left/${img}.png`} alt="" />
        { notification != undefined ? (
            <div className={styles.col} >
                <div className="col_1">{text}</div>
                <div className={styles.col_2}>{notification}</div>
            </div>
        ) : (
            <span className={styles.col} >{text}</span>
        )}
    </div>
  )
}

export default LeftLink