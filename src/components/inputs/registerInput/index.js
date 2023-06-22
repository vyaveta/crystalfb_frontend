import { ErrorMessage, useField } from 'formik'
import styles from './registerInput.module.css'
import {useMediaQuery} from 'react-responsive'

const RegisterInput = ({ bottom, onChange : onChangeFunction, ...props }) => {

  const desktopView = useMediaQuery({
    query: "(min-width: 850px)",
  })
  const view_min_539 = useMediaQuery({
    query: "(min-width: 539px)",
  })
  const view_min_1170 = useMediaQuery({
    query: "(min-width: 1170px)",
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
        type={field.type} name={field.name} {...props} {...field} />
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

export default RegisterInput