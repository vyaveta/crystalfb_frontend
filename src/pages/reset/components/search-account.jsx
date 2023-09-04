import React, { useCallback, useEffect } from 'react'
import styles from "../style.module.css"
import FormikForm from '../../../components/forms/FormikForm'
import Input from '../../../components/inputs/Input'
import { Link } from 'react-router-dom'

const SearchAccount = ({ value, setValue, codeVerification, validationObject, name }) => {

    const onChange = useCallback((e) => {
        // this function is getting called, no prob with this
        setValue(e.target.value)
    },[value, setValue])

    useEffect(() => {
        console.log("email",value,'changed!!!')
    },[value])


    const formBody = (
        <>
            <Input type="text" name={name} onChange={onChange} placeholder={codeVerification ? "Enter code": "Email addess"} value={value} bottom />
            <div className={styles.reset_form_btns} >
                <Link to={"/login"} className='gray_btn' >Cancel</Link>
                <button type='submit' className='blue_btn' >Search</button>
            </div>
        </>
    )

    return (
        <div className={styles.reset_form} >
            <div className={styles.reset_form_header} >
                {codeVerification ? "Code verification" : " Find your account"}
            </div>
            <div className={styles.reset_form_text} >
                {codeVerification ? "Enter the code that has been send to your email account": "Enter your email address here to search for your account"}
            </div>
            <FormikForm
                validationSchemaObj={validationObject}
                initialValues={{
                    [name]: value
                }}
                onSubmit={() => console.log("form submitted")}
                body={formBody}
            />
        </div>
    )
}

export default SearchAccount