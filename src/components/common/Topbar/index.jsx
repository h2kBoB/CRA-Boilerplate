/* eslint-disable react/button-has-type */
// TopBar.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LogoIcon from '../../../assets/logo_icon.svg';
import LogoText from '../../../assets/logo_text.svg';
import BadgeComponent from '../Badge';
import { logout } from '../../../store/redux/authSlice';
import CustomButton from '../Button/index';
import { Modal } from '../Modal/index';
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
} from './styles';

const TopBar = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);

  const showModal = () => setModalOpen(true);
  const hideModal = () => setModalOpen(false);

  // TODO: 로그아웃 로직 나중에 실제 로직으로 바꿔주세요!
  const confirmLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  const logoutActions = (
    <>
      <CustomButton
        size="large"
        $state="default"
        text="취소"
        $variant="cancel"
        onClick={hideModal}
      />
      <CustomButton
        size="large"
        $state="default"
        text="로그아웃"
        $variant="alert"
        onClick={confirmLogout}
      />
    </>
  );

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
              <BadgeComponent type={user?.type || 'default'} />
            </MemberLabelWrapper>
            <MemberNameText>{user?.name}님</MemberNameText>
          </ProfileInfoWrapper>
          <CustomButton
            size="small" // CustomButton에 적용할 사이즈
            $state="default" // 버튼 상태 (enabled, disabled 등)
            text="로그아웃" // 버튼에 표시될 텍스트
            $variant="logout" // 버튼 스타일 변형 (primary, secondary 등)
            onClick={showModal}
          />
        </ProfileWrapper>
      </TopBarWrapper>
      <Modal
        isOpen={isModalOpen}
        onClose={hideModal}
        title="로그아웃 하시겠습니까?"
        actions={logoutActions}
      />
    </>
  );
};

export default TopBar;
