import React, { useCallback, useState } from "react";
import { Form, Formik } from "formik";
import styles from "../../pages/login/login.module.css";
import LoginInput from "../inputs/loginInput";
import { Link } from "react-router-dom";
import FormikForm from "../forms/FormikForm";
import { loginValidation } from "../../utils/componentHelpers/validations";

const loginInfo = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const [login, setLogin] = useState(loginInfo);

  const { email, password } = login;

  // const handleLoginChange = (e) => {
  //   // alert('hello')
  //   const { name, value } = e.target;
  //   setLogin({ ...login, [name]: value });
  // };

  const handleLoginChange = useCallback((e) => {
    const { name, value } = e.target
    setLogin({...login, [name]:value})
  },[login])

  const LoginBody = (
    <>
      <LoginInput
        onChange={handleLoginChange}
        placeholder="Email address or phone number"
        type="email"
        name="email"
      />
      <LoginInput
        onChange={handleLoginChange}
        placeholder="password"
        type="password"
        name="password"
        bottom
      />
      <button type="submit" className="blue_btn">
        Login
      </button>
    </>
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
            initialValues={{
              email,
              password,
            }}
            validationSchemaObj={loginValidation}
            body={LoginBody}
          />
          <Link to="/forgotpassword" className={`${styles.forgot_password}`}>
            Forgot password?
          </Link>
          <div className={`${styles.sign_splitter}`}></div>
          <button className={`blue_btn ${styles.open_signup}`}>
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
