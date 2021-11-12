import React from 'react';
import { useField } from 'formik';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';

import StyleWrapper from './form.style';

export default ({
  fielderror,
  required,
  formik,
  label,
  ...props
}: any): JSX.Element => {
  const [field, meta] = useField(props);
  const { error, touched, value } = meta;
  const { setFieldValue } = formik;

  const { name } = props;

  const isValid = isValidPhoneNumber(value);

  return (
    <StyleWrapper
      className={`input phone-input ${value ? 'hasValue' : ''} ${
        (touched && error) || fielderror ? 'hasError' : ''
      }`}
    >
      {label && (
        <label htmlFor={name}>
          {label} {required && <span className="req-sign">*</span>}
        </label>
      )}

      <PhoneInput
        id={name}
        data-test-id={name}
        {...props}
        {...field}
        international
        defaultCountry="QA"
        value={value}
        onChange={(val: any) => setFieldValue(name, val)}
      />

      {touched && !fielderror && (
        <div className="text-danger">
          <span className="text-danger--text">
            {error ? error : !isValid && 'Invalid Phone Number'}
          </span>
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
