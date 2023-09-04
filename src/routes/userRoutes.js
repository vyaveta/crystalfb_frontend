const apiUrl = process.env.REACT_APP_BACKEND_URL
// auth routes
export const userRegisterRoute = `${apiUrl}/register`
export const userLoginRoute = `${apiUrl}/login`
export const userEmailActivateRoute = `${apiUrl}/activate`
export const userSendVerificationRoute = `${apiUrl}/sendVerification`