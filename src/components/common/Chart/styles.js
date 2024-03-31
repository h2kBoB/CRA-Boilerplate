import styled from 'styled-components';

export const ChartContainer = styled.div`
  flex: 1 1 0;
  padding: 20px;
  background: white;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.03);
  border-radius: 12px;
  border: 1px #f1f2f4 solid;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  display: inline-flex;
`;

export const Frame = styled.div`
  align-self: stretch;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 20px;
  display: flex;
`;

export const FrameHeader = styled.div`
  align-self: stretch;
  display: flex;
  align-items: flex-start;
`;

export const TitleWrapper = styled.div`
  align-items: center;
  width: 100%;
`;

export const FrameContent = styled.div`
  align-self: stretch;
  height: 246px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 8px;
  display: flex;
`;

export const Title = styled.div`
  color: #262626;
  font-size: 16px;
  font-family: Pretendard;
  font-weight: 600;
  line-height: 16px;
  word-wrap: break-word;
`;

export const Subtitle = styled.div`
  padding-top: 8px;
  color: #555555;
  font-size: 12px;
  font-family: Pretendard;
  font-weight: 500;
  line-height: 12px;
  word-wrap: break-word;
`;

export const TooltipContainer = styled.div`
  background: #262626;
  border-radius: 4px;
  border: 1px solid #555555;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  color: white;
  font-family: Pretendard;
  position: relative;
`;
