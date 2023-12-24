import { ErrorMessage, Field } from "formik";
import React from "react";

const TextField = ({ label, name, ...rest }) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name}>{label}</label>
      <Field className="input-field" name={name} {...rest} />
      <ErrorMessage name={name}>
        {(msg) => <div className="text-red-500 font-medium">{msg}</div>}
      </ErrorMessage>
    </div>
  );
};

export default TextField;
