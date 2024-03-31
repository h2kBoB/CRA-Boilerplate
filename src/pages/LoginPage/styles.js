// src/pages/LoginPage/LoginPage.styles.js
import styled from 'styled-components';
// import Button from '../../components/common/Button';

export const LoginPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding-top: 80px;
  background-color: #f9fafa;
`;

export const Frame = styled.div`
  padding: 80px;
  background: white;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.03);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 40px;
`;

export const TextWrapper = styled.div`
  color: #1e2024;
  font-size: 28px;
  font-family: 'Pretendard';
  font-weight: 700;
  line-height: 36px;
  word-wrap: break-word;
`;

export const FrameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 40px;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 12px;
`;
