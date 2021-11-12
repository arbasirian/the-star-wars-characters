import React from "react";
import { useField, Field } from "formik";
import { Checkbox } from "antd";

import StyleWrapper from "./form.style";

export default ({ label, formik, options, ...props }: any): JSX.Element => {
  const [{ value, ...field }, meta] = useField(props);

  const { setFieldValue } = formik;
  const { error, touched } = meta;
  const { name } = props;

  return (
    <StyleWrapper className="input checkbox-input group">
      {label && <label htmlFor={name}>{label}</label>}

      <Checkbox.Group
        {...props}
        {...field}
        options={options}
        onChange={(val) => setFieldValue(name, val)}
      />

      {touched && error && (
        <div className="text-danger">
          <span className="text-danger--text">{error}</span>
        </div>
      )}
    </StyleWrapper>
  );
};
