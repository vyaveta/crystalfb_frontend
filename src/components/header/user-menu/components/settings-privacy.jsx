import React from 'react'
import styles from "../user-menu.module.css"

const SettingsPrivacy = ({setVisible}) => {
  return (
    <div className={styles.absolute_wrap} >
        <div className={styles.absolute_wrap_header} >
            <div className='small_circle hover1' onClick={() => setVisible(0)} >
                <i className="arrow_back_icon"></i>
            </div>
            Settings & Privacy
        </div>
        <div className={`${styles.menu_item} hover3`} >
            <div className='small_circle' >
                <i className="settings_filled_icon"></i>
            </div>
            <span>Settings</span>
        </div>
        <div className={`${styles.menu_item} hover3`} >
            <div className='small_circle' >
                <i className="privacy_checkup_icon"></i>
            </div>
            <span>Privacy checkup</span>
        </div>
        <div className={`${styles.menu_item} hover3`} >
            <div className='small_circle' >
                <i className="privacy_shortcuts_icon"></i>
            </div>
            <span>Privacy shortcut</span>
        </div>
        <div className={`${styles.menu_item} hover3`} >
            <div className='small_circle' >
                <i className="activity_log_icon"></i>
            </div>
            <span>Activity log</span>
        </div>
        <div className={`${styles.menu_item} hover3`} >
            <div className='small_circle' >
                <i className="news_icon"></i>
            </div>
            <span>News feed preferences</span>
        </div>
        <div className={`${styles.menu_item} hover3`} >
            <div className='small_circle' >
                <i className="language_icon"></i>
            </div>
            <span>Language</span>
        </div>
    </div>
  )
}

export default SettingsPrivacy