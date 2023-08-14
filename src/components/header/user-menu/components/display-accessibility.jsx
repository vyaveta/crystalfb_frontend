import React from 'react'
import styles from "../user-menu.module.css"


const DisplayAndAccessibility = ({ setVisible }) => {
    return (
        <div className={styles.absolute_wrap} >
            <div className={styles.absolute_wrap_header}>
                <div className='small_circle hover1' onClick={() => setVisible(0)} >
                    <i className="arrow_back_icon"></i>
                </div>
                Display and Accessibility
            </div>
        <div className={styles.menu_main} >
            <div className="small_circle">
                <i className="dark_filled_icon"></i>
            </div>
            <div className={styles.menu_col} >
                <span className={styles.menu_span1} >Dark mode</span>
                <span className={styles.menu_span2} >Adjust the appearence of crystalFB to your desired mode</span>
            </div>
        </div>
        <label htmlFor="darkOff" className='hover1' >
            <span>Off</span>
            <input type="radio" name='dark' id='darkOff' />
        </label>
        <label htmlFor="darkOn" className='hover1' >
            <span>On</span>
            <input type="radio" name='dark' id='darkOn' />
        </label>

        <div className={styles.menu_main} >
            <div className="small_circle">
                {/* <i className="dark_filled_icon"></i> */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" id="minimize"><path d="M10 5v4a1 1 0 0 1-1 1H5a1 1 0 0 1 0-2h3V5a1 1 0 0 1 2 0Zm29 5h4a1 1 0 0 0 0-2h-3V5a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1ZM9 38H5a1 1 0 0 0 0 2h3v3a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1Zm34 0h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-3h3a1 1 0 0 0 0-2ZM33 10H15a3 3 0 0 0-3 3v4a1 1 0 0 0 2 0v-4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v22a1 1 0 0 1-1 1H15a1 1 0 0 1-1-1V21a1 1 0 0 0-2 0v14a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3V13a3 3 0 0 0-3-3Zm-14 9h10a1 1 0 0 0 0-2H19a1 1 0 0 0 0 2Zm0 6h10a1 1 0 0 0 0-2H19a1 1 0 0 0 0 2Zm0 6h5a1 1 0 0 0 0-2h-5a1 1 0 0 0 0 2Z" data-name="13 Minimize"></path></svg>
            </div>
            <div className={styles.menu_col} >
                <span className={styles.menu_span1} >Compact mode</span>
                <span className={styles.menu_span2} >Make your font size smaller so more content fit on the screen</span>
            </div>
        </div>
        <label htmlFor="compactOn" className='hover1' >
            <span>Off</span>
            <input type="radio" name='compact' id='compactOn' />
        </label>
        <label htmlFor="compactOff" className='hover1' >
            <span>On</span>
            <input type="radio" name='compact' id='compactOff' />
        </label>

        <div className={`${styles.menu_item} hover3`} >
            <div className='small_circle' >
                <i className="keyboard_icon"></i>
            </div>
            <span>Keyboard</span>
            <div className={styles.rArrow} >
                <i className="right_icon"></i>
            </div>
        </div>
        </div>
    )
}

export default DisplayAndAccessibility