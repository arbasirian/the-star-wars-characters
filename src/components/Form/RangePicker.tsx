import React from "react";
import { useField } from "formik";
import { DatePicker } from "antd";
import moment from "moment";

import StyleWrapper from "./form.style";

const { RangePicker } = DatePicker;

export default ({ formik, label, ...props }: any): JSX.Element => {
  const [{ value, ...field }, meta] = useField(props);

  const { setFieldValue } = formik;
  const { error, touched } = meta;
  const { name, fielderror } = props;

  return (
    <StyleWrapper className="input range-picker-input">
      {label && <label htmlFor={name}>{label}</label>}

      <RangePicker
        id={name}
        data-test-id={name}
        {...props}
        {...field}
        {...value}
        // {...(value
        //   ? { value: [moment(value[0], format), moment(value[1], format)] }
        //   : { value: [null, null] })}
        onChange={(_: any, date: any) => setFieldValue(name, date)}
        getPopupContainer={(trigger) => trigger.parentNode}
      />

      {touched && error && (
        <div className="text-danger">
          <span className="text-danger--text">{error}</span>
        </div>
      )}

      {fielderror && (
        <div className="text-danger field-error">
          <span className="text-danger--text">{fielderror}</span>
        </div>
      )}
    </StyleWrapper>
  );
};
