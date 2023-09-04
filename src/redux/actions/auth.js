import { setCredentials, setIsLoggedIn } from "../features/auth"

export const logout = (dispatch) => {
    // dispatch(setCredentials(null))
    dispatch(setIsLoggedIn(false))
}