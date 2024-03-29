/* eslint-disable no-nested-ternary */
// src/components/InputField/InputField.styles.js
import styled from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 335px;
`;

export const Label = styled.label`
  color: var(--neutralsgray-400);
  font-size: 16px;
  font-weight: 500;
`;

export const Input = styled.input`
  height: 48px;
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 6px;
  border: 1px solid
    ${({ state }) =>
      state === 'error'
        ? '#F76659'
        : state === 'focus'
        ? '#1A1A1A'
        : '#DDDFE3'};
  color: ${({ state }) => (state === 'error' ? '#F76659' : '#1e2024')};
  font-size: 16px;
  font-family: 'Pretendard';
  font-weight: 400;
  line-height: 24px;

  &:focus {
    border-color: #1a1a1a;
    outline: none;
  }

  &::placeholder {
    color: #9d9d9d;
    font-size: 16px;
    font-family: 'Pretendard';
    font-weight: 400;
    line-height: 24px;
    word-wrap: break-word;
  }
`;

export const ErrorMessage = styled.div`
  color: #f76659;
  font-size: 14px;
  margin-top: 8px;
`;
