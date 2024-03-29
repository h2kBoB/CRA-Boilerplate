// TopBar.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LogoIcon from '../../../assets/logo_icon.svg';
import LogoText from '../../../assets/logo_text.svg';
import BadgeComponent from '../Badge';
import { logout } from '../../../store/redux/authSlice';
import {
  GlobalStyle,
  TopBarWrapper,
  LogoWrapper,
  LogoIconWrapper,
  LogoTextWrapper,
  ProfileWrapper,
  ProfileInfoWrapper,
  MemberLabelWrapper,
  MemberNameText,
  LogoutButton,
} from './styles';

export default function TopBar() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };
  return (
    <>
      <GlobalStyle />
      <TopBarWrapper>
        <LogoWrapper>
          <LogoIconWrapper src={LogoIcon} alt="Logo Icon" />
          <LogoTextWrapper src={LogoText} alt="Logo Text" />
        </LogoWrapper>
        <ProfileWrapper>
          <ProfileInfoWrapper>
            <MemberLabelWrapper>
              <BadgeComponent type="master" />
            </MemberLabelWrapper>
            <MemberNameText>{user?.name}님</MemberNameText>
          </ProfileInfoWrapper>
          <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
        </ProfileWrapper>
      </TopBarWrapper>
    </>
  );
}
