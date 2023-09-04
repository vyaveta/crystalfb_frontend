import React, { useCallback, useState } from "react";
import styles from "../../pages/login/login.module.css";
import { Link, useNavigate } from "react-router-dom";
import FormikForm from "../forms/FormikForm";
import { loginValidation } from "../../utils/componentHelpers/validations";
import { loginFunction } from "../../api/auth";
import { useDispatch } from 'react-redux'
import Input from "../inputs/Input";

const loginInfo = {
  email: "",
  password: "",
};

const LoginForm = ({setShowRegister}) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [login, setLogin] = useState(loginInfo);


  const handleLoginChange = useCallback((e) => {
    console.log(' handle login change function called!')
    const { name, value } = e.target
    setLogin({...login, [name]:value})
  },[login])

  console.log(login,'is the login values')

  const LoginBody = (
    <div
    style={{width: '100%'}}
    >
       <Input
        onChange={handleLoginChange}
        placeholder="Email address or phone number"
        type="email"
        name="email"
        id='email'
        value={login.email}
      />
      <Input
        onChange={handleLoginChange}
        placeholder="password"
        type="password"
        name="password"
        id='password'
        value={login.password}
        bottom
      />
      <button 
      type="submit" className="blue_btn">
        Login
      </button>
    </div>
  );

  return (
    <div className={`${styles.login_wrap}`}>
      <div className={`${styles.login_1}`}>
        <img src="../../icons/facebook.svg" alt="" />
        <span>
          CrystalFb is a facebook clone in which other companies wont be able to
          access your datas
        </span>
      </div>
      <div className={`${styles.login_2}`}>
        <div className={`${styles.login_2_wrap}`}>
          <FormikForm
            enableReinitialize
            initialValues={login}
            validationSchemaObj={loginValidation}
            body={LoginBody}
            onSubmit={() => loginFunction(login, dispatch, navigate)}
          />
          <Link to="/reset" className={`${styles.forgot_password}`}>
            Forgot password?
          </Link>
          <div className={`${styles.sign_splitter}`}></div>
          <button
          onClick={() => setShowRegister(true)}
          className={`blue_btn ${styles.open_signup}`}>
            Create Account
          </button>
        </div>
        <Link to="/" className={`${styles.sign_extra}`}>
          <b>Create a page</b> for a celebrity, brand or business.
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
