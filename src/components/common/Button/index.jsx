/* eslint-disable react/prop-types */
// src/components/Button/Button.jsx
import React from 'react';
import { StyledButton } from './styles';

export default function Button({
  className,
  labelClassName,
  size,
  state,
  text,
  variant,
  onClick,
}) {
  return (
    <StyledButton
      className={className}
      size={size}
      state={state}
      variant={variant}
      onClick={onClick}
    >
      <span className={labelClassName}>{text}</span>
    </StyledButton>
  );
}
