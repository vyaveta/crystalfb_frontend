import React, { useState } from 'react'
import styles from "./user-menu.module.css"
import { Link } from 'react-router-dom'
import SettingsPrivacy from './components/settings-privacy'
import HelpAndSupport from './components/help-support'
import DisplayAndAccessibility from './components/display-accessibility'
import Menu from './components/menu'

const UserMenu = () => {

    const [visible, setVisible] = useState(0)

    return (
        <div className={styles.menu} onClick={(e) => e.stopPropagation()} >
            {visible === 0 && <Menu setVisible={setVisible} />}
            {visible === 1 && <SettingsPrivacy setVisible={setVisible} />}
            {visible === 2 && <HelpAndSupport setVisible={setVisible} />}
            {visible === 3 && <DisplayAndAccessibility setVisible={setVisible} />}
        </div>
    )
}

export default UserMenu