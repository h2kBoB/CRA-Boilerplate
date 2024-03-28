// TopBar.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import styled, { createGlobalStyle } from 'styled-components';
import LogoIcon from '../assets/logo_icon.svg';
import LogoText from '../assets/logo_text.svg';

const GlobalStyle = createGlobalStyle`
  .MuiAppBar-root {
    background-color: #000000 !important;
  }
`;

const StyledAppBar = styled(AppBar)`
  padding-left: 40px;
  padding-right: 30px;
`;

const LogoWrapper = styled.div`
  height: 32px;
  padding-top: 2.14px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoIconWrapper = styled.img`
  width: 26.03px;
  height: 26.17px;
`;

const LogoTextWrapper = styled.img`
  width: 80.89px;
  height: 27.53px;
  margin-left: 7.21px;
`;

const ProfileWrapper = styled.div`
  height: 64px;
  padding: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
`;

const ProfileInfoWrapper = styled.div`
  flex: 1 1 0;
  padding-left: 8px;
  padding-right: 8px;
  border-radius: 4px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

const MemberLabelWrapper = styled.div`
  width: 62px;
  padding-left: 4px;
  padding-right: 4px;
  background: #e9e8ff;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MemberLabelText = styled(Typography)`
  color: #645dd1;
  font-size: 12px;
  font-weight: 500;
`;

const MemberNameText = styled(Typography)`
  color: white;
  font-size: 14px;
  font-weight: 500;
  text-decoration: underline;
`;

const LogoutButton = styled(Button)`
  width: 73px;
  padding-left: 8px;
  padding-right: 8px;
  border-radius: 4px;
  border: 1px solid rgba(145, 158, 171, 0.8);
  color: white;
  font-size: 14px;
  font-weight: 500;
`;

export default function TopBar() {
  return (
    <>
      <GlobalStyle />
      <StyledAppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <LogoWrapper>
            <LogoIconWrapper src={LogoIcon} alt="Logo Icon" />
            <LogoTextWrapper src={LogoText} alt="Logo Text" />
          </LogoWrapper>
          <ProfileWrapper>
            <ProfileInfoWrapper>
              <MemberLabelWrapper>
                <MemberLabelText>마스터</MemberLabelText>
              </MemberLabelWrapper>
              <MemberNameText>김현제님</MemberNameText>
            </ProfileInfoWrapper>
            <LogoutButton variant="outlined">로그아웃</LogoutButton>
          </ProfileWrapper>
        </Toolbar>
      </StyledAppBar>
    </>
  );
}
