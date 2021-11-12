import React from 'react';
import { useField } from 'formik';
import { TreeSelect } from 'antd';

import StyleWrapper from './form.style';

export default ({
  formik,
  disabled,
  label,
  required,
  options,
  ...props
}: any): JSX.Element => {
  const [field, meta] = useField(props);
  const { setFieldValue } = formik;
  const { error, touched, value } = meta;

  const handleOnChange = (name: any, option: any) => {
    setFieldValue(name, option);
    if (!!onChange) onChange(option);
  };

  const { name, fieldError, treeData, treeCheckable, onChange, defaultValue } =
    props;

  return (
    <StyleWrapper
      className={`input select-input tree-select ${
        defaultValue || (value && value.length > 0) ? 'hasValue' : ''
      } ${(touched && error) || fieldError ? 'hasError' : ''} ${
        disabled ? 'disabled' : ''
      }`}
    >
      {label && (
        <label htmlFor={name}>
          {label} {required && <span className="req-sign">*</span>}
        </label>
      )}

      <TreeSelect
        id={name}
        data-test-id={name}
        {...props}
        {...field}
        treeCheckable={treeCheckable}
        style={{ width: '100%' }}
        multiple
        treeData={treeData}
        defaultValue={defaultValue}
        treeDefaultExpandAll
        onChange={(option) => handleOnChange(name, option)}
      />

      {touched && error && (
        <div className="text-danger">
          <span className="text-danger--text">{error}</span>
        </div>
      )}
      {fieldError && (
        <div className="text-danger field-error">
          <span className="text-danger--text">{fieldError}</span>
        </div>
      )}
    </StyleWrapper>
  );
};
