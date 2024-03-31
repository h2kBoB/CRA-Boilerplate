// src/components/Button/Button.jsx
import React from 'react';
import { StyledButton } from './styles';

const CustomButton = ({ size, $state, text, $variant, onClick }) => {
  return (
    <StyledButton
      size={size}
      $state={$state}
      $variant={$variant}
      onClick={onClick}
    >
      {text}
    </StyledButton>
  );
};

export default CustomButton;
