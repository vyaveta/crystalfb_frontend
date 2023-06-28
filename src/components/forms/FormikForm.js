import React, { useEffect } from "react";
import { Form, Formik } from 'formik';


const FormikForm = ({initialValues, validationSchemaObj, onSubmit: onSubmitFunction, body}) => {

  if(!initialValues) console.error('no initial values detected!!!')

  useEffect(() => {
    console.log(initialValues,'is the initial values that we got')
  },[initialValues])

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={validationSchemaObj}
      onSubmit={values => console.log(values,'is the final values for the login')}
    >
      {(formik) => (
        <Form
        style={{width:'100%'}}
        >
          {body}
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
