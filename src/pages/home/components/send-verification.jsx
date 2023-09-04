import { toast } from "react-hot-toast"
import styles from "./styles.module.css"
import React, { useEffect, useState } from 'react'
import { sendVerificationLink } from "../../../api/auth"

const SendVerification = ({ dispatch, setAllowVerification }) => {

    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    useEffect(() => {
    if(success) toast.success(success)
    if(error) toast.error(error)
    },[success, error])

  return (
    <div className={styles.send_verification} >
        <span>
            Your account is not verified, verify your account before it gets deleted after a month from creating.
        </span>
        <a onClick={() => sendVerificationLink(dispatch, setAllowVerification)} >
            click here to resend verification link
        </a>
    </div>
  )
}

export default SendVerification