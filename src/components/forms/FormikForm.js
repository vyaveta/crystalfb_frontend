import React from "react";
import { Form, Formik } from 'formik';


const FormikForm = ({initialValues, validationSchemaObj, body}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchemaObj}
    >
      {(formik) => (
        <Form>
          {body}
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
