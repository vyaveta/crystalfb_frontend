import React, { useEffect, useRef, useState } from 'react'
import styles from './Header.module.css'
import { Return, Search } from '../../svg'
import { useClickOutside } from '../../hooks/click-outside'

const color = '#65676b'

const SearchMenu = ({setShowSearchMenu}) => {

    const menu = useRef(null)
    const inputRef = useRef(null)
    const [showIcon,setShowIcon] = useState(false)

    useClickOutside(menu,() => {
        setShowSearchMenu(false)
    })

    useEffect(() => {
        inputRef.current.focus()
    },[inputRef])

  return (
    <div className={`${styles.header_left} ${styles.search_area} scrollbar`} ref={menu} >
        <div className={styles.search_wrap}>
            <div className={styles.header_logo}
            onClick={() => setShowSearchMenu(false)}
            >
                     <div className={`${styles.circle} hover1`}>
                    <Return />
                </div>
            </div>
            <div className={styles.search}>
             {
                showIcon && <div>
                <Search color={color} />
            </div>
             }
                <input type="text" placeholder='Search Fcebook' ref={inputRef} onFocus={() => setShowIcon(false)} onBlur={() => setShowIcon(true)} /> 
            </div>
        </div>
        <div className={styles.search_history_header}>
            <span>Recent Searches</span>
            <a>edit</a>
        </div>
        <div className={styles.search_history}>

        </div>
        <div className="search_results scrollbar"></div>
    </div>
  )
}

export default SearchMenu