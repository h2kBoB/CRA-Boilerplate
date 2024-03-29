/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */
// src/components/InputField/InputField.jsx
import React from 'react';
import { Input, InputWrapper, Label, ErrorMessage } from './styles';

export function InputField({
  frameClassName,
  multiline,
  size,
  state,
  text,
  type,
  value,
  onChange,
  onBlur,
  onFocus,
  errorMessage,
  placeholder,
}) {
  return (
    <InputWrapper className={frameClassName}>
      <Label>{text}</Label>
      <Input
        as={multiline ? 'textarea' : 'input'}
        size={size}
        state={state}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        placeholder={placeholder}
      />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </InputWrapper>
  );
}
