import { Link } from 'react-router-dom'
import styles from './login.module.css'
import LoginForm from '../../components/login/LoginForm'
import LoginFooter from '../../components/login/LoginFooter'
import RegisterForm from '../../components/login/RegisterForm'

const Login = () => {

  return (
    <div className='login' >
      <div className={`${styles.login_wrapper}`}>
        <LoginForm />
        <RegisterForm />
        <div className={styles.register}></div>
        <LoginFooter />
      </div>
    </div>
  )
}

export default Login