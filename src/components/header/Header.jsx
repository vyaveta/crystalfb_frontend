import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { ArrowDown, Friends, Gaming, HomeActive, Logo, Market, Menu, Messenger, Notifications, Search, Watch } from '../../svg'
import { useSelector } from "react-redux";
import SearchMenu from "./SearchMenu";
import { useRef, useState } from "react";
import AllMenu from "./all-menu/all-menu";
import UserMenu from "./user-menu/user-menu";
import { useMediaQuery } from "react-responsive";
import { useClickOutside } from "../../hooks/click-outside";

const color = '#65676b'

const Header = () => {

    const min_470px = useMediaQuery({
        query: '(min-width: 470px)'
    })

    const userData = useSelector((state) => state.auth.userData)
    const [showSearchMenu, setShowSearchMenu] = useState(false)
    const [showAllMenu, setShowAllMenu] = useState(false)
    const [showUserMenu, setShowUserMenu] = useState(false)

    const allMenuRef = useRef(null)
    const userMenuRef = useRef(null)

    useClickOutside(allMenuRef, () => setShowAllMenu(false))
    useClickOutside(userMenuRef, () => setShowUserMenu(false))


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
                <Search color={color} className={styles.search_icon} />
                <input type="text" placeholder="Search Facebook" />
                {/* <Input type='text' /> */}
            </div>
        </div>
        {showSearchMenu && <SearchMenu setShowSearchMenu={setShowSearchMenu} />}
        <div className={styles.header_middle}>
            <HeaderMiddleItems />
        </div>
        <div className={styles.header_right}>
            <Link to={'/profile'} className={`${styles.profile_link} hover1`}>
                <img src={userData?.picture} alt="" />
                { min_470px && <span>{userData?.first_name}</span>}
            </Link>
            <div className={`${styles.circle_icon} hover1 ${showAllMenu && styles.active_header}`} onClick={() => setShowAllMenu((prev) => !prev)} ref={allMenuRef} >
                <Menu />
                {showAllMenu && <AllMenu />}
            </div>
            <div className={`${styles.circle_icon} hover1`}>
                <Messenger />
            </div>
            <div className={`${styles.circle_icon} hover1`}>
                <Notifications />
                <div className={styles.right_notification}>5</div>
            </div>
            <div className={`${styles.circle_icon} hover1 ${showUserMenu && styles.active_header}`} onClick={() => setShowUserMenu((prev) => !prev)} ref={userMenuRef} >
                <ArrowDown />
                {showUserMenu && <UserMenu />}
            </div>
        </div>
    </header>;
};

export default Header;

export const HeaderMiddleItems = () => {
    return (
        <>
            <Link className={`${styles.middle_icon} hover1 ${styles.active}`}>
                <HomeActive color={color} />
            </Link>
            <Link className={`${styles.middle_icon} hover1`}>
                <Friends color={color} />
            </Link>
            <Link className={`${styles.middle_icon} hover1`}>
                <Watch color={color} />
                <div className={styles.middle_notification}>9+</div>
            </Link>
            <Link className={`${styles.middle_icon} hover1`}>
                <Market color={color} />
            </Link>
            <Link className={`${styles.middle_icon} hover1`}>
                <Gaming color={color} />
            </Link>
        </>
    )
}
