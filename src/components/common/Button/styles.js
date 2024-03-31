/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';

const sizeStyles = {
  small: css`
    height: 32px;
    font-size: 14px;
  `,
  medium: css`
    height: 40px;
    font-size: 16px;
  `,
  large: css`
    width: 100%;
    height: 48px;
    font-size: 18px;
  `,
};

const stateStyles = {
  default: css`
    background-color: #1e2024;
    color: white;
    &:hover {
      background-color: #919eab;
      opacity: 0.8;
    }
  `,
  disabled: css`
    background-color: #e0e0e0;
    color: #9e9e9e;
    cursor: not-allowed;
  `,
};

const variantStyles = {
  default: css`
    background-color: #000000;
    padding-left: 12px;
    padding-right: 12px;
    border-radius: 4px;
  `,
  login: css`
    background-color: #1e2024;
  `,
  logout: css`
    height: 34px;
    background-color: #000000;
    border: 1px rgba(145, 158, 171, 0.8) solid;
    padding-left: 12px;
    padding-right: 12px;
    border-radius: 4px;
  `,
  confirm: css`
    background-color: #412cab; // Confirm button color
    color: white;
    font-size: 16px;
    width: 212px;
  `,
  cancel: css`
    background-color: transparent; // Cancel button color
    color: #262626;
    border: 1px #dddfe3 solid;
    font-size: 16px;
  `,
  alert: css`
    background-color: #f76659; // Confirm button color
    color: white;
    font-size: 16px;
  `,
};

export const StyledButton = styled.button`
  padding: 0 16px;
  border-radius: 6px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: 'Pretendard';
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;

  ${({ size }) => sizeStyles[size]}
  ${({ $state }) => stateStyles[$state]}
  ${({ $variant }) => variantStyles[$variant]}
`;
