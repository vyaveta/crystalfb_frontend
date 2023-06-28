import { Link } from 'react-router-dom'
import styles from './login.module.css'
import LoginForm from '../../components/login/LoginForm'
import LoginFooter from '../../components/login/LoginFooter'
import RegisterForm from '../../components/login/RegisterForm'
import { useState } from 'react'

const Login = () => {

  const [showRegister,setShowRegister] = useState(false)

  return (
    <div className='login' >
      <div className={`${styles.login_wrapper}`}>
        <LoginForm setShowRegister={setShowRegister} />
        {
          showRegister && <RegisterForm setShowRegister={setShowRegister} />
        }
        <div className={styles.register}></div>
        <LoginFooter />
      </div>
    </div>
  )
}

export default Login