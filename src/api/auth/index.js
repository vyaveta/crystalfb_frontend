import { userLoginRoute, userRegisterRoute } from "../../routes/userRoutes"
import { setCredentials, setIsLoggedIn, setIsloading } from "../../redux/features/auth"
// import { userLoginRoute, userRegisterRoute } from "../../utils/routes/userRoutes"
import { asyncFunction } from "../common/asyncFunction"
import { handleApiError, showToastMessage } from "../common/commonFunctions"
import { createConfig } from "../common/config"
import { setHeaders } from "../common/setHeaders"

export const registerFunction = async (data, dispatch, navigate) => {
    try{
        dispatch(setIsloading(true))
        const config = createConfig(
            'post',
            userRegisterRoute,
            setHeaders('application/json',false),
            data,
        )
        const { message, ...rest} = await asyncFunction(config)
        showToastMessage('success',message)
        dispatch(setCredentials(rest))
        dispatch(setIsLoggedIn(true))
        navigate('/')
    }catch(error){
        handleApiError(error)
    }finally{
        dispatch(setIsloading(false))
    }
}

export const loginFunction = async (data, dispatch, navigate) => {
    try{
        dispatch(setIsloading(true))
        const config = createConfig(
            'post',
            userLoginRoute,
            setHeaders('application/json',false),
            data,
        )
        const {message, ...rest} = await asyncFunction(config)
        showToastMessage('success',message)
        dispatch(setCredentials(rest))
        dispatch(setIsLoggedIn(true))
        navigate('/')
    }catch(error) {
        handleApiError(error)
    }finally{
        dispatch(setIsloading(false))
    }
}