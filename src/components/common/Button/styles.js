/* eslint-disable import/prefer-default-export */
// src/components/Button/Button.styles.js
import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 100%;
  height: 48px;
  padding-left: 12px;
  padding-right: 12px;
  background: #1e2024;
  color: white;
  border-radius: 6px;
  border: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #262626;
    color: white;
  }
`;
