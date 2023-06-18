import * as Yup from "yup";

export const loginValidation = Yup.object({
    email: Yup.string()
      .required("email address is required!")
      .email("Enter a valid email address")
      .max(50, "ooi thats too long!"),
    password: Yup.string().required("Password is required"),
  });