import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import TextField from "./component/TextField";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

function App() {
  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col gap-2 p-10 rounded-lg m-10 bg-pink-50 max-w-md mx-auto w-full">
            <TextField name="firstName" placeholder="Enter firstName" />
            <TextField name="lastName" placeholder="Enter lastName" />
            <TextField name="age" placeholder="Enter age" />
            <TextField name="email" type="text" placeholder="Enter email" />

            <button
              type="submit"
              className="py-2 bg-fuchsia-500 text-white rounded-md px-8"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default App;
