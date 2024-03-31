/* eslint-disable import/prefer-default-export */
// src/components/Modal/Modal.jsx
import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  width: 480px;
  background-color: white;
  border-radius: 8px;
  z-index: 1001;
  position: relative;
  padding: 34px 24px 24px;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  margin-bottom: 10px;
  color: #262626;
  font-family: 'Pretendard', sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 26px;
`;

const Content = styled.div`
  color: '#434343';
  font-size: 16px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  line-height: 24px;
  word-wrap: 'break-word';
`;

const Actions = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: space-around;
  width: 100%;
  gap: 12px;
`;

export const Modal = ({ isOpen, onClose, title, content, actions }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        {title && <Title>{title}</Title>}
        {content && <Content>{content}</Content>}
        {actions && <Actions>{actions}</Actions>}
      </ModalContainer>
    </ModalOverlay>
  );
};
