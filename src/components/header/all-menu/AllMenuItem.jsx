import React from 'react'
import styles from './AllMenu.module.css'


const AllMenuItem = ({name, description, img}) => {
  return (
    <div className={`${styles.all_menu_item} hover1`}>
    <img src={`../../left/${img}.png`} alt="" />
    <div className={styles.all_menu_col}>
      <span>{name}</span>
      <span>{description} </span>
    </div>
  </div>
  )
}

export default AllMenuItem