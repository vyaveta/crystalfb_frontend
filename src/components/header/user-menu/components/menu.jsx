import React from 'react'
import styles from "../user-menu.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../../../../redux/actions/auth'


const Menu = ({setVisible}) => {

    const user = useSelector((state) => state.auth.userData)
    const dispatch = useDispatch()

    return (
        <div>
            <Link to={"/profile"} className={`${styles.menu_header} hover3`}>
                <img width={50} src={user?.picture} alt="image here" />
                <div className={styles.menu_col} >
                    <span>{user?.first_name} {user?.last_name}</span>
                    <span>See your profile</span>
                </div>
            </Link>
            <div className={styles.menu_splitter} />
            {/* <div className={`${styles.menu_item} hover3`}> */}
            <div className={`${styles.menu_main} hover3`} >
                <div className='small_circle' >
                    <i className="report_filled_icon"></i>
                </div>
                <div className={styles.menu_col} >
                    <div className={styles.menu_span1} >Give feedback</div>
                    <div className={styles.menu_span2} >Help us improve Crystal</div>
                </div>
            </div>
            {/* </div> */}
            <div className={styles.menu_splitter} />
            <div className={`${styles.menu_item} hover3`} onClick={() => setVisible(1)} >
                <div className="small_circle">
                    <i className="settings_filled_icon"></i>
                </div>
                <span>Settings & privacy</span>
                <div className={styles.rArrow}>
                    <i className="right_icon">

                    </i>
                </div>
            </div>
            <div className={`${styles.menu_item} hover3`} onClick={() => setVisible(2)} >
                <div className="small_circle">
                    <i className="help_filled_icon"></i>
                </div>
                <span>Help & Support</span>
                <div className={styles.rArrow}>
                    <i className="right_icon">

                    </i>
                </div>
            </div>
            <div className={`${styles.menu_item} hover3`} onClick={() => setVisible(3)} >
                <div className="small_circle">
                    <i className="dark_filled_icon"></i>
                </div>
                <span>Display & Accessibility</span>
                <div className={styles.rArrow}>
                    <i className="right_icon">

                    </i>
                </div>
            </div>

            <div className={`${styles.menu_item} hover3`} onClick={() => logout(dispatch)} >
                <div className="small_circle">
                    <i className="logout_filled_icon"></i>
                </div>
                <span>Logout</span>
            </div>
        </div>
    )
}

export default Menu