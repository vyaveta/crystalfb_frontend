import { Form, Formik } from 'formik'
import styles from '../../pages/login/signup.module.css'
import RegisterInput from '../inputs/registerInput'
import { useState } from 'react'

const userInfo = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    bYear: '',
    bMonth: '',
    bDay: '', 
    gender: '',
}

const RegisterForm = () => {

    const [user,setUser] = useState(userInfo)

    const handleRegisterChange = e => {
        const {name,value} = e.target
        setUser({...user, [name]: value}) 
    }

  return (
    <div className="blur">
        <div className={styles.register}>
            <div className={styles.register_header}>
                <i className="exit_icon"></i>
                <span>Sign up</span>
                <span>Its quick and easy</span>
            </div>
            <Formik>
                {
                    (formik) => (
                        <Form>
                            <div className={styles.register_form}>
                                <div className="register_line">
                                    <RegisterInput type='text' placeholder='First name' name='first_name'
                                    onChange={handleRegisterChange} />
                                </div>
                            </div>
                        </Form>
                    )
                }
            </Formik>
        </div>
    </div>
  )
}

export default RegisterForm