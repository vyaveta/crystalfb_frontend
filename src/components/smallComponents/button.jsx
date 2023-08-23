import React from 'react'
import styles from "./index.module.css"

const Button = ({type, text, icon : Icon, name, fullWidth}) => {
  return (
    <button className={name ? styles[name]: styles.secondary} type={type ? type : "button"}>
        {text}
        {Icon && <Icon />}
    </button>
  )
}

export default Button