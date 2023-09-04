import * as Yup from "yup";
import { regx } from "./regx";

const messages = {
  emailValid: "Enter a valid email address",
  emailRequired: "Email address is required",
  tooLong: "ooi thats too long!",
  passReq: "Password is required!",
  passLength: 'password must be between 6 to 36 characters',
  fNReq: "What is your first name?",
  fNValid: "First name should be between 2 to 16 characters",
  FNRegx: "Numbers and special characters are not allowed",
  emailReq: 'You will need this when you login and when you ever reset your password!'
};

export const loginValidation = Yup.object({
  email: Yup.string()
    .required(messages.emailRequired)
    .email(messages.emailValid)
    .max(50, messages.tooLong),
  password: Yup.string().required(messages.passReq),
});

const nameValidation = () => Yup.string()
.required(messages.fNReq)
.min(2, messages.fNValid)
.max(16, messages.fNValid)
.matches(regx.name, messages.FNRegx)

export const registerValidation = Yup.object({
  first_name: nameValidation(),
    last_name: nameValidation(),
  email: Yup.string().email(messages.emailValid).required(messages.emailReq),
  password: Yup.string().required(messages.passReq).min(6,messages.passLength).max(36,messages.passLength)
});

export const emailValidation = Yup.object({
  email: Yup.string().email(messages.emailValid).required("Enter your email id!"),
})

export const passwordValidation = Yup.object({
  password: Yup.string().required(messages.passReq).min(6,messages.passLength).max(36,messages.passLength),
  confirmPassword: Yup.string().required(messages.passReq).oneOf([Yup.ref("password")], "passwords must match!")
})

export const codeValidation = Yup.object({
  code: Yup.string().required("Enter the code!")
})