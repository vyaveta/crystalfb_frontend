import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import {ArrowDown, Friends, Gaming, HomeActive, Logo, Market, Menu, Messenger, Notifications, Search, Watch} from '../../svg'
import Input from "../inputs/Input";
import { useSelector } from "react-redux";
import SearchMenu from "./SearchMenu";
import { useState } from "react";
import AllMenu from "./AllMenu/AllMenu";

const color = '#65676b'

const Header = () => {

    const userData = useSelector((state) => state.auth.userData)
    const [showSearchMenu,setShowSearchMenu] = useState(false)


  return <header className={styles.header}>
    <div className={styles.header_left}>
        <Link to={'/'} className={styles.header_logo}>
            <div className={styles.circle}>
                <Logo />
            </div>
        </Link>
        <div
        onClick={() => setShowSearchMenu(true)}
        className={`${styles.search} ${styles.search_1}`}>
            <Search color={color} />
            <input type="text" placeholder="Search Facebook" />
            {/* <Input type='text' /> */}
        </div>
    </div>
    {
        showSearchMenu && <SearchMenu setShowSearchMenu={setShowSearchMenu} />
    }
    <div className={styles.header_middle}>
        <Link className={`${styles.middle_icon} hover1 ${styles.active}`}>
            <HomeActive  color={color}  />
        </Link>
        <Link className={`${styles.middle_icon} hover1`}>
            <Friends  color={color}  />
        </Link>
        <Link className={`${styles.middle_icon} hover1`}>
            <Watch color={color}   />
            <div className={styles.middle_notification}>9+</div>
        </Link>
        <Link className={`${styles.middle_icon} hover1`}>
            <Market  color={color}  />
        </Link>
        <Link className={`${styles.middle_icon} hover1`}>
            <Gaming  color={color}  /> 
        </Link>
    </div>
    <div className={styles.header_right}>
        <Link to={'/profile'} className={`${styles.profile_link} hover1`}>
            <img src={userData?.picture} alt="" />
            <span>{userData?.first_name}</span>
        </Link>
        <div className={`${styles.circle_icon} hover1`}>
            <Menu />
            <AllMenu />
        </div>
        <div className={`${styles.circle_icon} hover1`}>
            <Messenger />
        </div>
        <div className={`${styles.circle_icon} hover1`}>
            <Notifications />
            <div className={styles.right_notification}>5</div>
        </div>
        <div className={`${styles.circle_icon} hover1`}>
            <ArrowDown />
        </div>
    </div>
  </header>;
};

export default Header;
