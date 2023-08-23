import React from 'react'
import styles from "../stories.module.css"

// const Story = ({story}) => {
//   return (
//     <div className={styles.story} >
//         <img src={story.image} alt="" className={styles.story_img} />
//         <div className={styles.story_profile_pic} >
//             <img src={story.profile_picture} alt=""  />
//         </div>
//         <div className={styles.story_profile_name} >{story.profile_name}</div>
//     </div>
//   )
// }

const Story = React.forwardRef(({ story }, ref) => {
    return (
      <div className={styles.story} ref={ref}>
        <img src={story.image} alt="" className={styles.story_img} />
        <div className={styles.story_profile_pic}>
          <img src={story.profile_picture} alt="" />
        </div>
        <div className={styles.story_profile_name}>{story.profile_name}</div>
      </div>
    );
  });

export default Story