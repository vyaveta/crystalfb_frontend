import React from 'react'
import styles from "./posts.module.css"
import { Feeling, LiveVideo, Photo } from '../../svg'

const CreatePost = ({user}) => {
  return (
    <div className={styles.create_post} >
      <div className={styles.create_post_header} >
        <img src={user.picture} alt="" />
        <div className={styles.open_post} >
          What's on your mind, {user?.first_name}
        </div>
      </div>
      <div className={styles.splitter} />
      <div className={styles.body} >
        {/* <div className={`hover1 ${styles.create_post_icon}`} >
          <LiveVideo color={"#f3425f"} />
          Live Video
        </div> */}
        <div className={`hover1 ${styles.create_post_icon}`} >
          <Photo color={"#4bbf67"} />
          Photo/Video
        </div>
        <div className={`hover1 ${styles.create_post_icon}`} >
          <Feeling color={"#f7b928"} />
          Feeling/Activity
        </div>
      </div>
    </div>
  )
}

export default CreatePost