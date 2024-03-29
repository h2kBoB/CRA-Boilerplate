/* eslint-disable no-nested-ternary */
/* eslint-disable no-console */
// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../store/redux/authSlice';
import { InputField } from '../../components/common/InputField/index.jsx';
import {
  LoginPageWrapper,
  Frame,
  TextWrapper,
  FrameWrapper,
  FormWrapper,
  InputWrapper,
  LoginButton,
} from './styles.js';

// 더미 유저 정보
const dummyUser = {
  username: 'admin@gmail.com',
  password: 'a1s2d3!@#',
  name: '김현제',
  type: 'master',
};

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEmailBlur = () => {
    if (username.trim() !== '') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(username)) {
        setEmailError('잘못된 이메일입니다.');
      } else {
        setEmailError('');
      }
    } else {
      setEmailError('');
    }
    setEmailFocused(false);
  };

  const handlePasswordBlur = () => {
    if (password.trim() !== '') {
      const passwordRegex =
        /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,12}$/;
      if (!passwordRegex.test(password)) {
        setPasswordError('특수문자 포함 8~12자로 입력해주세요.');
      } else {
        setPasswordError('');
      }
    } else {
      setPasswordError('');
    }
    setPasswordFocused(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (emailError || passwordError) {
      return;
    }

    // 더미 유저 정보와 입력한 값 비교
    if (username === dummyUser.username && password === dummyUser.password) {
      dispatch(login(dummyUser));
      setUsername('');
      setPassword('');
      navigate('/DashBoard');
    } else {
      // 로그인 실패 처리
      setEmailError('잘못된 이메일입니다.');
      setPasswordError('잘못된 비밀번호입니다.');
    }

    // 실제 API 호출 예시
    // try {
    //   // 로그인 API 호출
    //   const response = await fetch('/api/login', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ username, password }),
    //   });

    //   if (response.ok) {
    //     const userData = await response.json();
    //     dispatch(login(userData));
    //     navigate('/');
    //   } else {
    //     // 로그인 실패 처리
    //     console.log('로그인 실패');
    //   }
    // } catch (error) {
    //   console.error('로그인 에러:', error);
    // }
  };

  return (
    <LoginPageWrapper>
      <Frame>
        <TextWrapper>이메일로 로그인</TextWrapper>
        <FrameWrapper>
          <FormWrapper>
            <InputWrapper>
              <InputField
                multiline={false}
                size="large"
                state={
                  emailError ? 'error' : emailFocused ? 'focus' : 'default'
                }
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onFocus={() => setEmailFocused(true)}
                onBlur={handleEmailBlur}
                errorMessage={emailError}
                placeholder="이메일"
              />
              <InputField
                multiline={false}
                size="large"
                state={
                  passwordError
                    ? 'error'
                    : passwordFocused
                    ? 'focus'
                    : 'default'
                }
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setPasswordFocused(true)}
                onBlur={handlePasswordBlur}
                errorMessage={passwordError}
                placeholder="비밀번호"
              />
            </InputWrapper>
            <LoginButton
              size="large"
              state="enabled"
              text="로그인"
              variant="contained"
              onClick={handleSubmit}
            />
          </FormWrapper>
        </FrameWrapper>
      </Frame>
    </LoginPageWrapper>
  );
}
