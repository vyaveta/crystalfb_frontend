import React, { useState } from 'react'
import styles from "./style.module.css"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { logout } from '../../redux/actions/auth'
import { codeValidation, emailValidation } from '../../utils/componentHelpers/validations'
import SearchAccount from './components/search-account'
import AfterSearch from './components/after-search'
import ChangePassword from './components/change-password'
 
const Reset = () => {

    const user = useSelector((state) => state.auth.userDetails)
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
    const dispatch = useDispatch()
    const [email,setEmail] = useState("")
    const [code,setCode] = useState("")
    const [newPassword,setNewPassword] = useState("")
    const [confirmNewPassword,setConfirmNewPassword] = useState("")
    const [visible,setVisible] = useState(3)

    return (
        <div className={styles.reset} >
            <div className={styles.reset_header} >
                <img src="../../../icons/facebook.svg" alt="" />
                {
                    isLoggedIn ?
                           <div className={styles.right_reset} >
                           <Link to={"/profile"}>
                           <img src={user?.picture} alt="" /> 
                           </Link>
                             <button className="blue_btn" onClick={() => logout(dispatch)} >Logout</button>
                           </div>
                        :
                        <Link to={"/login"} className={styles.right_reset} >
                            <button className="blue_btn" >Login</button>
                        </Link>
                }
            </div>
            <div className={styles.reset_wrap} >
                { visible === 0 && <SearchAccount value={email} setValue={setEmail} validationObject={emailValidation}  name="email" /> }
                { visible === 1 && <AfterSearch /> }
                { visible === 2 && <SearchAccount value={code} setValue={setCode} codeVerification name="code" validationObject={codeValidation} /> }
                { visible === 3 && 
                <ChangePassword
                 newPassword={newPassword}
                 setNewPassword={setNewPassword}
                 confirmNewPassword={confirmNewPassword}
                 setConfirmNewPassword={setConfirmNewPassword}
                 />}
            </div> 
        </div>
    )
}

export default Reset  