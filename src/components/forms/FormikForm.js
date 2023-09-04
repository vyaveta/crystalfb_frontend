import React, { useEffect } from "react";
import { Form, Formik } from 'formik';


const FormikForm = ({initialValues, validationSchemaObj, onSubmit: onSubmitFunction, body}) => {

  if(!initialValues) console.error('no initial values detected!!!')

  // useEffect(() => {
  //   console.log(initialValues,'is the initial values that we got')
  // },[initialValues])

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={validationSchemaObj}
      onSubmit={onSubmitFunction}
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
