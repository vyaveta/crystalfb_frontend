import styles from "../../pages/login/signup.module.css";
import { useCallback, useState } from "react";
import { registerValidation } from "../../utils/componentHelpers/validations";
import Input from "../inputs/Input";
import { calculateAge } from "../../utils/componentHelpers/moment";
import InputError from "../smallComponents/InputError";
import { useMediaQuery } from "react-responsive";
import { useSelector, useDispatch } from "react-redux";
import { HashLoaderComponent } from "../smallComponents/loaders/loaders";
import { registerFunction } from "../../api/auth";
import { useNavigate } from "react-router-dom";
import { setIsloading } from "../../redux/features/auth";
import FormikForm from "../forms/FormikForm";

const userInfo = {
  first_name: "",
  last_name: "",
  email: "", 
  password: "",
  bYear: new Date().getFullYear(),
  bMonth: new Date().getMonth() + 1,
  bDay: new Date().getDay(),
  gender: "",
};

const RegisterForm = ({ setShowRegister }) => {
  const [errors, setErrors] = useState({});
  const [user, setUser] = useState(userInfo);
  const { bYear, bMonth, bDay, gender } = user;

  const isLoading = useSelector((state) => state.auth.isLoading);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const desktopView = useMediaQuery({
    query: "(min-width: 1000px)",
  });

  const years = Array.from(
    new Array(108),
    (val, index) => new Date().getFullYear() - index
  );
  const months = Array.from(new Array(12), (value, index) => 1 + index);
  const getDates = () => new Date(bYear, bMonth, 0).getDate();
  const days = Array.from(new Array(getDates()), (value, index) => 1 + index);

  const handleRegisterChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setUser({ ...user, [name]: value });
      setErrors({ ...errors, [name]: "" });
    },
    [user]
  );

  const onRegisterSubmit = useCallback(() => {
    try {
      let pickedDate = new Date(bYear, bMonth - 1, bDay);
      let age = calculateAge(pickedDate);
      if (age < 14 || !age){
        return setErrors({
          ...errors,
          signUpDate:
            "You are not allowed to create account since you are under 14 years of age.",
        });
      }
      
      if (!gender)
        return setErrors({
          ...errors,
          gender: "Select your gender to continue!",
        });
      registerFunction(user, dispatch, navigate);
    } catch (error) {
      dispatch(setIsloading(false));
      console.log(error, "is the error from the onRegisterSubmit function");
    }
  }, [user, dispatch]);

  const registerBody = (
    <div className={styles.register_form}>
      <div className={styles.register_line}>
        <Input
          type="text"
          placeholder="First name"
          name="first_name"
          onChange={handleRegisterChange}
          bottom
        />
        <Input
          type="text"
          placeholder="Last name"
          name="last_name"
          onChange={handleRegisterChange}
          bottom
          right
        />
      </div>
      <div className={styles.register_line}>
        <Input
          type="text"
          placeholder="Mobile number or email"
          name="email"
          onChange={handleRegisterChange}
          bottom
        />
      </div>
      <div className={styles.register_line}>
        <Input
          type="password"
          placeholder="Set password"
          name="password"
          onChange={handleRegisterChange}
          bottom
        />
      </div>
      <div className={styles.register_col}>
        <div className={styles.register_line_header}>
          Date of birth <i className="info_icon"></i>
        </div>
        <div className={styles.register_grid}>
          <select
            name="bDay"
            id="bDay"
            value={bDay}
            onChange={handleRegisterChange}
          >
            {days.map((day, i) => (
              <option value={day} key={`signupBDay${i}`}>
                {day}
              </option>
            ))}
          </select>
          <select
            name="bMonth"
            id="bMonth"
            value={bMonth}
            onChange={handleRegisterChange}
          >
            {months.map((month, i) => (
              <option value={month} key={`signupBMonth${i}`}>
                {month}
              </option>
            ))}
          </select>
          <select
            name="bYear"
            id="bYear"
            value={bYear}
            onChange={handleRegisterChange}
          >
            {years.map((year, i) => (
              <option value={year} key={`signupBYear${i}`}>
                {year}
              </option>
            ))}
          </select>
          {errors.signUpDate && desktopView && (
            <InputError text={errors.signUpDate} right bottom />
          )}
        </div>
      </div>
      {errors.signUpDate && !desktopView && (
        <InputError text={errors.signUpDate} right bottom />
      )}
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
              value="male"
              onChange={handleRegisterChange}
            />
          </label>
          <label htmlFor="female">
            Female
            <input
              type="radio"
              name="gender"
              id="female"
              value="female"
              onChange={handleRegisterChange}
            />
          </label>
          <label htmlFor="custom">
            Custom
            <input
              type="radio"
              name="gender"
              id="custom"
              value="custom"
              onChange={handleRegisterChange}
            />
          </label>
          {errors.gender && desktopView && (
            <InputError text={errors.gender} right bottom />
          )}
        </div>
      </div>
      {errors.gender && !desktopView && (
        <InputError text={errors.gender} right bottom />
      )}
      <div className={styles.register_infos}>
        By clicking on Sign up, you agree to our <span>Terms, data policy</span>{" "}
        and <span>Cookie policy</span> This is a facebook clone created by
        adwaith
      </div>
      <div className={styles.register_button_wrapper}>
        <button type="submit" className={`blue_btn ${styles.open_signup}`}>
          Sign up
        </button>
      </div>
      <HashLoaderComponent size={30} color={"#1876f2"} loading={isLoading} />
    </div>
  );

  return (
    <div className="blur">
      <div className={styles.register}>
        <div className={styles.register_header}>
          <i className="exit_icon" onClick={() => setShowRegister(false)}></i>
          <span>Sign up</span>
          <span>Its quick and easy</span>
        </div>
        <FormikForm
        enableReinitialization
          initialValues={user}
          validationSchemaObj={registerValidation}
          onSubmit={onRegisterSubmit}
          body={registerBody}
        />
      </div>
    </div>
  );
};

export default RegisterForm;
 