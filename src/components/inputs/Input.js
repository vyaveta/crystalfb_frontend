import { ErrorMessage, useField } from 'formik'
import styles from './input.module.css'
import {useMediaQuery} from 'react-responsive'
import InputError from '../ui/InputError'

const Input = ({ bottom, onChange : onChangeFunction, value, right, ...props }) => {

  const desktopView = useMediaQuery({
    query: "(min-width: 1000px)",
  })

  const [field, meta] = useField(props)
  field.onChange = onChangeFunction
  console.log(field,'is the field')
  // console.log(meta,'is the meta')
  console.log("value:", value)

  return (
    <div className={`${styles.input_wrap}`}>
      {
        meta.touched && meta.error && !bottom &&  (
        <InputError name={field.name} right={right} />
        )
      }
      <input
        className={meta.touched && meta.error ? "input_error_border" : ''}
        type={field.type} name={field.name}  {...field}  {...props} />
      {
        meta.touched && meta.error && <i className='error_icon' style={{top: `${!bottom && !desktopView ? '65%' : '15px'}`}} ></i>
      }
      {
        meta.touched && meta.error && bottom && (
        <InputError name={field.name} right={right} bottom />
        )
      }
    </div>
  )
}

export default Input