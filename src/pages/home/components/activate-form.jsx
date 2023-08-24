import React from 'react'
import HashLoader from 'react-spinners/HashLoader'
import styles from "./styles.module.css"

const ActivateForm = ({type, header, text, loading}) => {
  return (
    <div className={"blur"} >
        <div className={styles.popup} >
            <div className={`${styles.popup_header} ${type=== 'success' ? 'success_test' : "error_text"}`} >{header}</div>
            <div className={styles.popup_message}>{header}</div>
                <HashLoader color='#1876f2' size={30} loading={true} />
        </div>
    </div>
  )
}

export default ActivateForm