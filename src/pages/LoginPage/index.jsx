// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../store/redux/authSlice';
import InputField from '../../components/common/InputField/index.jsx';
import CustomButton from '../../components/common/Button/index.jsx';

import {
  LoginPageWrapper,
  Frame,
  TextWrapper,
  FrameWrapper,
  FormWrapper,
  InputWrapper,
} from './styles.js';

// 더미 유저 정보
// TODO: 더미 부분 나중에 삭제해 주세요!
const dummyUsers = [
  {
    username: 'master@example.com',
    password: 'master123!',
    name: '마스터',
    type: 'master',
  },
  {
    username: 'super@example.com',
    password: 'super123!',
    name: '슈퍼관리자',
    type: 'super',
  },
  {
    username: 'serviceManger@example.com',
    password: 'sManger123!',
    name: '서비스관리자',
    type: 'serviceManger',
  },
  {
    username: 'serviceAdmin@example.com',
    password: 'sAdmin123!',
    name: '서비스운영자',
    type: 'serviceAdmin',
  },
];

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getEmailState = () => {
    if (emailError) {
      return 'error';
    }
    if (emailFocused) {
      return 'focus';
    }
    return 'default';
  };

  const getPasswordState = () => {
    if (passwordError) {
      return 'error';
    }
    if (passwordFocused) {
      return 'focus';
    }
    return 'default';
  };

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

  // TODO: 나중에 실제 로그인 로직으로 바꿔주세요!
  const handleSubmit = (e) => {
    e.preventDefault();

    if (emailError || passwordError) {
      return;
    }

    const foundUser = dummyUsers.find(
      (dummyUser) =>
        dummyUser.username === username && dummyUser.password === password,
    );

    if (foundUser) {
      dispatch(login(foundUser));
      setUsername('');
      setPassword('');
      navigate('/DashBoard');
    } else {
      setEmailError('잘못된 이메일입니다.');
      setPasswordError('잘못된 비밀번호입니다.');
    }
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
                $state={getEmailState()}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onFocus={() => setEmailFocused(true)}
                onBlur={handleEmailBlur}
                errorMessage={emailError}
                placeholder="이메일"
                autoComplete="off"
              />
              <InputField
                multiline={false}
                size="large"
                $state={getPasswordState()}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setPasswordFocused(true)}
                onBlur={handlePasswordBlur}
                errorMessage={passwordError}
                placeholder="비밀번호"
                autoComplete="off"
              />
            </InputWrapper>
            <CustomButton
              size="large"
              $state="default"
              text="로그인"
              $variant="login"
              onClick={handleSubmit}
            />
          </FormWrapper>
        </FrameWrapper>
      </Frame>
    </LoginPageWrapper>
  );
};

export default LoginPage;
