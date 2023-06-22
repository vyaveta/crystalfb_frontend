import { Form, Formik } from 'formik'
import styles from '../../pages/login/signup.module.css'
import RegisterInput from '../inputs/registerInput'
import { useCallback, useState } from 'react'
import { registerValidation } from '../../utils/componentHelpers/validations'
import Input from '../inputs/Input'

const userInfo = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    bYear: new Date().getFullYear(),
    bMonth: new Date().getMonth() + 1,
    bDay: new Date().getDay(),
    gender: '',
}

const RegisterForm = () => {

    const [user, setUser] = useState(userInfo)

    const {first_name, last_name, bYear, bMonth, bDay} = user

    const years = Array.from(new Array(108), (val, index) => new Date().getFullYear() - index)
    const months = Array.from(new Array(12), (value,index) => 1 + index)
    const getDates = () => new Date(bYear,bMonth,0).getDate()
    const days = Array.from(new Array(getDates()), (value,index) => 1 + index)

    // const handleRegisterChange = e => {
    //     console.log('handleChangeRegister function called')
    //     const { name, value } = e.target
    //     setUser({ ...user, [name]: value })
    // }

    const handleRegisterChange = useCallback((e) => {
        console.log('handleChangeRegister function called')
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    },[user])

    console.log(user)

    console.log(getDates())

    return (
        <div className="blur">
            <div className={styles.register}>
                <div className={styles.register_header}>
                    <i className="exit_icon"></i>
                    <span>Sign up</span>
                    <span>Its quick and easy</span>
                </div>
                <Formik
                enableReinitialize
                initialValues={user}
                validationSchema={registerValidation}
                onSubmit={() => {
                    let currentDate = new Date()
                    let pickedDate = new Date(bYear,bMonth - 1,bDay)
                    console.log(pickedDate,'is the date picked by the user')
                }}
                >
                    {
                        (formik) => (
                            <Form>
                                <div className={styles.register_form}>
                                    <div className={styles.register_line}>
                                        <Input type='text' placeholder='First name' name='first_name'
                                            onChange={handleRegisterChange} bottom />
                                        <Input type='text' placeholder='Last name' name='last_name'
                                            onChange={handleRegisterChange} bottom right />
                                    </div>
                                    <div className={styles.register_line}>
                                        <Input type='text' placeholder='Mobile number or email' name='email'
                                            onChange={handleRegisterChange} bottom />
                                    </div>
                                    <div className={styles.register_line}>
                                        <Input type='password' placeholder='Set password' name='password'
                                            onChange={handleRegisterChange} bottom />
                                    </div>
                                    <div className={styles.register_col}>
                                        <div className={styles.register_line_header}>
                                            Date of birth <i className="info_icon"></i>
                                        </div>
                                        <div className={styles.register_grid}>
                                            <select name="bDay" id="" value={bDay} onChange={handleRegisterChange}  >
                                                {
                                                    days.map((day,i) => (
                                                        <option value={day} key={`signupBDay${i}`}>{day}</option>
                                                    ))
                                                }
                                            </select>
                                            <select name="bMonth" id="" value={bMonth} onChange={handleRegisterChange}  >
                                                {
                                                    months.map((month,i) => (
                                                        <option value={month} key={`signupBMonth${i}`}>{month}</option>
                                                    ))
                                                }
                                            </select>
                                            <select name="bYear" id="" value={bYear} onChange={handleRegisterChange}  >
                                                {
                                                    years.map((year,i) => (
                                                        <option value={year} key={`signupBYear${i}`} >{year}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <div className={styles.register_col}>
                                        <div className={styles.register_line_header}>
                                            Gender <i className="info_icon"></i>
                                        </div>
                                        <div className={styles.register_grid}>
                                            <label htmlFor="male">
                                                Male
                                                <input
                                                type="radio"
                                                name="gender"
                                                id="male"
                                                value='male'
                                                onChange={handleRegisterChange} 
                                                />
                                                 </label>
                                               <label htmlFor="female">
                                                Female
                                               <input
                                                type="radio"
                                                name="gender"
                                                id="female"
                                                value='female'
                                                onChange={handleRegisterChange} 
                                                />
                                               </label>
                                               <label htmlFor="custom">
                                                Custom
                                               <input
                                                type="radio"
                                                name="gender"
                                                id="custom"
                                                value='custom'
                                                onChange={handleRegisterChange} 
                                                />
                                               </label>
                                           
                                        </div>
                                    </div>
                                    <div className={styles.register_infos}>
                                        By clicking on Sign up, you agree to our{" "}
                                        <span>Terms, data policy</span> and <span>Cookie policy</span> 
                                        {' '}This is a facebook clone
                                        {" "}created by adwaith
                                    </div>
                                    <div className={styles.register_button_wrapper}>
                                        <button className={`blue_btn ${styles.open_signup}`}>Sign up</button>
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