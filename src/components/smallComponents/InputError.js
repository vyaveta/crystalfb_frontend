import React, { useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import styles from './inputError.module.css'
import { ErrorMessage } from 'formik'

const InputError = ({right, bottom, name}) => {

    const desktopView = useMediaQuery({
        query: "(min-width: 1000px)",
      })

      if(right) console.log('right detected')

  return (
   <>
          <div className={desktopView && right ? `${styles.input_error} ${styles.input_error_desktop_right}`: desktopView ? `${styles.input_error} ${styles.input_error_desktop}` : styles.input_error}>
            <ErrorMessage name={name} />
            <div className={desktopView && right ? styles.error_arrow_right : desktopView ? styles.error_arrow_left : bottom ? styles.error_arrow_bottom : styles.error_arrow_top}></div>
          </div>
   </>
  )
}

export default InputError