// StyledComponents.js
import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% {
    background-position: -468px 0
  }
  100% {
    background-position: 468px 0
  }
`;

// index
export const Contents = styled.div`
  display: flex;
  gap: 10px;
`;

export const TabContainer = styled.div`
  width: 50%;
  height: 100%;
  padding-top: 30px;
  padding-right: 10px;
  padding-bottom: 21px;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
`;

export const Tab = styled.div`
  flex: 1;
  padding: 12px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: ${(props) => (props.$isActive ? '600' : '500')};
  color: ${(props) => (props.$isActive ? '#1E2024' : '#555555')};
  border-bottom: 2px solid
    ${(props) => (props.$isActive ? '#1E2024' : '#C4C4C4')};
`;

// todayTasks
export const TaskContainer = styled.div`
  min-width: 453px;
  flex: 1 1 0;
  padding: 20px;
  background: white;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.03);
  border-radius: 12px;
  border: 1px solid #f1f2f4;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const TaskTitle = styled.h2`
  color: #262626;
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
  margin: 0;
`;

export const TaskDescription = styled.p`
  color: #555555;
  font-size: 12px;
  line-height: 14px;
  margin: 0;
`;

export const TaskInfoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
  margin-top: 10px;
`;

export const TaskInfo = styled.div`
  flex: 1 1 0;
  height: 76px;
  background: #f5f5f5;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const TaskLabel = styled.div`
  text-align: center;
  color: #9d9d9d;
  font-size: 11px;
  font-family: 'Pretendard';
  font-weight: 500;
  line-height: 14.3px;
`;

export const TaskCount = styled.div`
  text-align: center;
  color: black;
  font-size: 16px;
  font-family: 'Pretendard';
  font-weight: 500;
  line-height: 20.8px;
`;

export const TaskSkeleton = styled.div`
  height: 76px;
  width: 100%;
  background-color: #e0e0e0;
  background-image: linear-gradient(
    to right,
    #e0e0e0 0%,
    #f5f5f5 20%,
    #e0e0e0 40%,
    #e0e0e0 100%
  );
  background-repeat: no-repeat;
  background-size: 800px 104px;
  display: inline-block;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: ${shimmer};
  animation-timing-function: linear;
`;
