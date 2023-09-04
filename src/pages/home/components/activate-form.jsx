import React from 'react'
import HashLoader from 'react-spinners/HashLoader'
import styles from "./styles.module.css"

const ActivateForm = ({type, header, text, loading , onClose}) => {
  return (
    <div className={"blur"} >
        <div className={styles.popup} >
          <div className={styles.close} onClick={onClose} >
            <i className="exit_icon"></i>
          </div>
            <div className={`${styles.popup_header} ${type=== 'success' ? 'success_test' : "error_text"}`} >{header}</div>
            <div className={styles.popup_message}>{text}</div>
                <HashLoader color='#1876f2' size={30} loading={loading} />
        </div>
    </div>
  )
}

export default ActivateForm