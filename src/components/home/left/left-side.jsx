import React, { useState } from 'react'
import styles from "./left-side.module.css"
import LeftLink from './left-link'
import { left } from '../../../data/home'
import { ArrowDown, ArrowDown1 } from '../../../svg'
import Button from '../../ui/button'

const LeftSide = ({ user }) => {

  const [seeMore, setSeeMore] = useState(false)


  return (
    <div className={`${styles.left_home} scrollbar`} >
      <div className={styles.left_link} >
        <img src={user?.picture} alt="user_profile" width={100} />
        <span className={styles.col} >{user?.first_name} {user?.last_name} </span>
      </div>
      {
        left.slice(0, 6).map((link, i) => (
          <LeftLink key={i} img={link.img} text={link.text} notification={link.notification} />
        ))
      }
      {
        !seeMore && <div className={`${styles.left_link} hover1`} onClick={() => setSeeMore(true)} >
          <div className="small_circle">
            <ArrowDown1 />
          </div>
          <span className={styles.col} >See more</span>
        </div>
      }
      <div className={styles.more_left} >
        {
         seeMore && left.slice(6, left.length).map((link, i) => (
            <LeftLink key={i} img={link.img} text={link.text} notification={link.notification} />
          ))
        }
      </div>
      
      {
        seeMore && <div className={`${styles.left_link} hover1`} onClick={() => setSeeMore(false)} >
          <div className="small_circle rotate180">
            <ArrowDown1 />
          </div>
          <span className={styles.col} >Show less</span>
        </div>
      }
      <div className='splitter' />
      <div className={styles.shortcuts} >
        <div className={`${styles.shortcut_heading} ${styles.col}`} >
        <h3 className={`heading3`}  >Your shortcuts</h3>
        <span className={`text_blue none ${styles.none}`} >edit</span>
        </div>
        <div className={`${styles.shortcut_item} ${styles.col}`} >
          {!user.profileShorcuts && "No short cuts added"}
        </div>
        <div className={`${styles.shortcut_item} ${styles.col}`} >
          <Button name="primary" text={"Add shortcut"} />
        </div>
        
      </div>
    </div>
  )
}

export default LeftSide