import React from 'react'
import styles from "./left-side.module.css"
import LeftLink from './left-link'
import { left } from '../../../data/home'

const LeftSide = ({user}) => {

  console.log(user,'is the user')

  return (
    <div className={styles.left_home} >
      <div className={styles.left_link} >
        <img src={user?.picture} alt="user_profile" width={100} />
        <span>{user?.first_name} {user?.last_name} </span>
      </div>
      {
        left.slice(0,8).map((link,i) => (
          <LeftLink key={i} img={link.img} text={link.text} notification={link.notification} />
        ))
      }
      
    </div>
  )
}

export default LeftSide