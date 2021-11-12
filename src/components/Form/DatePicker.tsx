import React from "react";
import { useField } from "formik";
import { DatePicker } from "antd";
import moment from "moment";

import StyleWrapper from "./form.style";

export default ({ formik, label, ...props }: any): JSX.Element => {
  const [{ value, ...field }, meta] = useField(props);

  const { setFieldValue } = formik;
  const { error, touched } = meta;
  const { name, format, required, palceholder } = props;

  return (
    <StyleWrapper
      className={`input text-input datepicker ${value ? "hasValue" : ""}`}
    >
      {label && (
        <label htmlFor={name}>
          {label} {required && <span className="req-sign">*</span>}
        </label>
      )}

      <DatePicker
        id={name}
        data-test-id={name}
        {...props}
        {...field}
        {...(value ? { value: moment(value, format) } : {})}
        onChange={(_: any, date: any) => setFieldValue(name, date)}
        placeholder={palceholder}
        getPopupContainer={(trigger) => trigger.parentNode}
      />

      {touched && error && (
        <div className="text-danger">
          <span className="text-danger--text">{error}</span>
        </div>
      )}
    </StyleWrapper>
  );
};
