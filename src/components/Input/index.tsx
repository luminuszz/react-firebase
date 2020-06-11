/* eslint-disable react/prop-types */
import InputUi from '@material-ui/core/Input';
import { useField } from '@unform/core';
import React, { useEffect, useRef } from 'react';

interface Props {
  name: string;
  label?: string;
}
type InputProps = JSX.IntrinsicElements['input'] & Props;

const Input: React.FC<InputProps> = ({ name, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      path: 'value',
      ref: inputRef.current,
    });
  }, [fieldName, registerField]);
  return (
    <>
      <input
        id={fieldName}
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
      />
    </>
  );
};
export default Input;
