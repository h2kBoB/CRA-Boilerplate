import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% {
    background-position: -468px 0
  }
  100% {
    background-position: 468px 0
  }
`;

// kpiStats
export const StatsContainer = styled.div`
  min-width: 453px;
  flex: 1 1 0;
  width: 100%;
  padding: 20px;
  background: white;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.03);
  border-radius: 12px;
  border: 1px solid #f1f2f4;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StatsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`;

export const StatsTitle = styled.div`
  color: #262626;
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
  margin-bottom: 8px;
`;

export const StatsDescription = styled.div`
  color: #555555;
  font-size: 12px;
  line-height: 12px;
`;

export const StatsItemsContainer = styled.div`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
  width: 100%;
`;

export const StatsItemContainer = styled.div`
  flex: 1 1 0;
  padding: 8px 24px;
  background: #f5f5f5;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

export const StatsItem = styled.div`
  flex: 1 1 0; /* Ensure each stat item takes equal space */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;

export const StatsLabel = styled.div`
  text-align: center;
  color: #9d9d9d;
  font-size: 11px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  line-height: 14.3px;
`;

export const StatsCount = styled.div`
  text-align: center;
  color: black;
  font-size: 16px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  line-height: 20.8px;
`;

export const StatsChange = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

export const ChangeIndicator = styled.span`
  text-align: center;
  color: ${(props) => (props.$isPositive ? '#47D16C' : '#F76659')};
  font-size: 10px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 600;
  line-height: 13px;
`;

export const ChangeValue = styled.div`
  text-align: center;
  color: #9d9d9d;
  font-size: 10px;
  font-family: 'Pretendard';
  font-weight: 500;
  line-height: 13px;
`;

export const StatsItemSkeleton = styled.div`
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
