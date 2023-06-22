import { ErrorMessage, useField } from 'formik'
import styles from './loginInput.module.css'
import { useEffect } from 'react'
import {useMediaQuery} from 'react-responsive'

const LoginInput = ({ bottom , onChange: onChangeFunction, ...props }) => {

  const desktopView = useMediaQuery({
    query: "(min-width: 850px)",
  })

  const [field, meta] = useField(props)

  field.onChange = onChangeFunction

  return (
    <div className={`${styles.input_wrap}`}>
      {
        meta.touched && meta.error && !bottom &&  (
          <div className={desktopView ? `${styles.input_error} ${styles.input_error_desktop}`: styles.input_error}>
            <ErrorMessage name={field.name} />
            <div className={desktopView ? styles.error_arrow_left : styles.error_arrow_top}></div>
          </div>
        )
      }
      <input
        className={meta.touched && meta.error ? "input_error_border" : ''}
        type={field.type} name={field.name} {...props}  {...field} />
      {
        meta.touched && meta.error && <i className='error_icon' style={{top: `${!bottom && !desktopView ? '65%' : '15px'}`}} ></i>
      }
      {
        meta.touched && meta.error && bottom && (
          <div className={desktopView ? `${styles.input_error} ${styles.input_error_desktop}`: styles.input_error} >
            <ErrorMessage name={field.name} />
            <div className={desktopView ? styles.error_arrow_left : styles.error_arrow_bottom}></div>
          </div>
        )
      }
    </div>
  )
}

export default LoginInput