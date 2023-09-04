import React from 'react'
import styles from "../style.module.css"
import { Link } from 'react-router-dom'

const AfterSearch = () => {
    return (
        <div className={styles.reset_form} >
            <div className={`${styles.reset_form} ${styles.dynamic_height}`} >
                <div className={styles.reset_form_header} >
                    Reset your password
                </div>
                <div className={styles.reset_grid} >
                    <div className={styles.reset_left} >
                        <div className={styles.reset_form_text} >
                            You will recieve a code to reset your password
                        </div>
                        <label htmlFor="email">
                            <input type="radio" name="" id="email" checked readOnly />
                            <div className={styles.label_col} >
                                <span>Sent code via email</span>
                                <span>boruto@gmail.com</span>
                            </div>
                        </label>
                    </div>
                    <div className={styles.reset_right} >
                        <img src="https://www.animesenpai.net/wp-content/uploads/2023/08/1000010486_D2uiVGVA0U-1024x576.jpeg.webp" alt="" />
                        <span>boruto@gmail.com</span>
                        <span>uzumaki boruto</span>
                    </div>
                </div>
                    <div className={styles.reset_form_btns} >
                        <button className='gray_btn' >Not you?</button>
                        <button type='submit' className='blue_btn' >Search</button>
                    </div>
            </div>
        </div>
    )
}

export default AfterSearch