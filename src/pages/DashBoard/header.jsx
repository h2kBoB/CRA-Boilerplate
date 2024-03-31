import React, { useState } from 'react';
import styled from 'styled-components';
import CustomButton from '../../components/common/Button';
import { Modal } from '../../components/common/Modal';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const TitleSection = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

const Title = styled.div`
  color: #1e2024;
  font-size: 22px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  line-height: 36px;
`;

const ButtonSection = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`;

const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const showModal = () => setModalOpen(true);
  const hideModal = () => setModalOpen(false);

  const handleClick = (e) => {
    // TODO: 해당 부분 파이어베이스 이동 추가 필요.
    console.log('Button clicked', e.target);
  };

  const excelActions = (
    <CustomButton
      size="large"
      $state="default"
      text="확인"
      $variant="confirm"
      onClick={hideModal}
    />
  );

  return (
    <>
      <HeaderContainer>
        <TitleSection>
          <Title>대시보드</Title>
        </TitleSection>
        <ButtonSection>
          {/* TODO: FireBase Button Link */}
          <CustomButton
            size="small"
            $state="default"
            text="파이어베이스 이동"
            $variant="default"
            onClick={handleClick}
          />
          <CustomButton
            size="small"
            $state="default"
            text="엑셀 다운로드"
            $variant="default"
            onClick={showModal}
          />
        </ButtonSection>
      </HeaderContainer>
      <Modal
        isOpen={isModalOpen}
        onClose={hideModal}
        title="엑셀 다운로드가 완료되었습니다."
        actions={excelActions}
      />
    </>
  );
};

export default Header;
