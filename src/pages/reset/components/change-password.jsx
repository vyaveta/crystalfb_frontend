import React from 'react'
import styles from "../style.module.css"
import FormikForm from '../../../components/forms/FormikForm'
import Input from '../../../components/inputs/Input'
import { passwordValidation } from '../../../utils/componentHelpers/validations'

const ChangePassword = ({newPassword, setNewPassword, confirmNewPassword, setConfirmNewPassword}) => {

    const formBody = (
        <>
            <Input type="password" name={"password"} onChange={(e) => setNewPassword(e.target.value) } placeholder={"Enter new password"} value={newPassword} bottom />
            <Input type="password" name={"confirmPassword"} onChange={(e) => setConfirmNewPassword(e.target.value)} placeholder={"Confirm password"} value={confirmNewPassword} bottom />
            <div className={styles.reset_form_btns} >
                {/* <Link to={"/login"} className='gray_btn' >Cancel</Link> */}
                <button type='submit' className='blue_btn' >Finish</button>
            </div>
        </>
    )

  return (
    <div className={styles.reset_form} >
    <div className={styles.reset_form_header} >
        Change password
    </div>
    <div className={styles.reset_form_text} >
        Set a new password to your account
    </div>
    <FormikForm
        validationSchemaObj={passwordValidation}
        initialValues={{
            ["password"]:newPassword,
            ["confirmPassword"]: confirmNewPassword,
        }}
        onSubmit={() => console.log("form submitted")}
        body={formBody}
    />
</div>
  )
}

export default ChangePassword