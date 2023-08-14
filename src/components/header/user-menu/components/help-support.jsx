import React from 'react'
import styles from "../user-menu.module.css"


const HelpAndSupport = ({setVisible}) => {
  return (
    <div className={styles.absolute_wrap} >
        <div className={styles.absolute_wrap_header} >
            <div className='small_circle hover1' onClick={() => setVisible(0)} >
                <i className="arrow_back_icon"></i>
            </div>
            Help & Support
        </div>
        <div className={`${styles.menu_item} hover3`} >
            <div className='small_circle' >
                <i className="help_center_icon"></i>
            </div>
            <span>Help center</span>
        </div>
        <div className={`${styles.menu_item} hover3`} >
            <div className='small_circle' >
                <i className="email_icon"></i>
            </div>
            <span>Support Inbox</span>
        </div>
        <div className={`${styles.menu_item} hover3`} >
            <div className='small_circle' >
                <i className="info_filled_icon"></i>
            </div>
            <span>Report a problem</span>
        </div>
    </div>
  )
}

export default HelpAndSupport