/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { FaCrown, FaStar } from 'react-icons/fa';

const BADGE_COLORS = {
  default: {
    background: '#FFFFFF', // 기본 배경색
    text: '#000000', // 기본 텍스트색
    label: '사용자', // 기본 라벨
  },
  master: {
    background: '#E9E8FF',
    text: '#645DD1',
    label: '마스터',
  },
  super: {
    background: '#FFF8DB',
    text: '#FFB200',
    label: '슈퍼관리자',
  },
  serviceManger: {
    background: '#E5FAEC',
    text: '#00AD74',
    label: '서비스관리자',
  },
  serviceAdmin: {
    background: '#F1F2F4',
    text: '#686B73',
    label: '서비스운영자',
  },
};

const Badge = styled.div`
  display: inline-flex;
  padding: 6px 8px 6px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  color: ${({ type }) => BADGE_COLORS[type]?.text || BADGE_COLORS.default.text};
  background-color: ${({ type }) =>
    BADGE_COLORS[type]?.background || BADGE_COLORS.default.background};
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 4px;
`;
const BadgeComponent = ({ type }) => {
  return (
    <Badge type={type}>
      {type === 'super' && (
        <IconWrapper>
          <FaCrown size="14px" />
        </IconWrapper>
      )}
      {type === 'master' && (
        <IconWrapper>
          <FaStar size="14px" />
        </IconWrapper>
      )}
      {BADGE_COLORS[type]?.label || ''}
    </Badge>
  );
};

export default BadgeComponent;
// 용법
//  <BadgeComponent type="master" />
