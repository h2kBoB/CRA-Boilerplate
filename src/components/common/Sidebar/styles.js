import styled from 'styled-components';

export const Drawer = styled.div`
  position: fixed;
  top: 64px;
  left: 0;
  width: ${({ width }) => width || '270px'};
  height: calc(100% - 64px);
  padding-top: 64px;
  padding: 20px 32px;
  background-color: white;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.03);
  border-right: 1px #f1f2f4 solid;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  & :hover {
    background-color: #d4d5d8;
  }
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: ${({ dropdown }) => (dropdown ? '40px' : '54px')};
  padding: ${({ dropdown }) => (dropdown ? '4px 8px' : '4px')};
  border-radius: 4px;
  justify-content: flex-start;
  align-items: center;
  display: inline-flex;
  cursor: pointer;
`;

export const ListItemText = styled.span`
  flex-grow: 1;
  color: ${({ selected }) => (selected ? '#412CAB' : '#434343')};
  font-size: 16px;
  font-family: Pretendard;
  font-weight: ${({ selected, dropdown }) => {
    if (selected) {
      return '600';
    }
    if (dropdown) {
      return '500';
    }
    return '600';
  }};
  line-height: 22px;
`;

export const ListItemIcon = styled.div`
  min-width: 24px;
  height: 24px;
  margin-right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px; /* 아이콘 크기 조정 */
`;

export const Dropdown = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ open }) => (open ? 'auto' : '0')};
  overflow: ${({ open }) => (open ? 'visible' : 'hidden')};
  transition: height 0.3s ease-out;
  background-color: #e7e7e7;
  padding: ${({ open }) => (open ? '10px' : '0')};
`;
