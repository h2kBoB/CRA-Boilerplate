import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

export const TopBarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  background-color: #000000;
  height: 64px;
`;

export const LogoWrapper = styled.div`
  height: 32px;
  padding-top: 2.14px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoIconWrapper = styled.img`
  margin-bottom: 3px;
  margin-left: 10px;
`;

export const LogoTextWrapper = styled.img`
  width: 80.89px;
  height: 27.53px;
  margin-left: 7.21px;
`;

export const ProfileWrapper = styled.div`
  height: 64px;
  padding: 4px;
  padding-right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const ProfileInfoWrapper = styled.div`
  flex: 1 1 0;
  padding-left: 8px;
  border-radius: 4px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

export const MemberLabelWrapper = styled.div`
  padding-left: 4px;
  padding-right: 4px;
  background: #e9e8ff;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MemberNameText = styled.span`
  color: white;
  font-size: 14px;
  font-weight: 500;
  text-decoration: underline;
  text-underline-offset: 2px;
  text-decoration-thickness: 1px; /* 밑줄의 두께 */
`;

export const LogoutButton = styled.button`
  width: 73px;
  padding: 4px 2px;
  border-radius: 4px;
  border: 1px solid rgba(145, 158, 171, 0.8);
  color: white;
  font-size: 14px;
  font-weight: 500;
  background-color: transparent;
  cursor: pointer;
`;
