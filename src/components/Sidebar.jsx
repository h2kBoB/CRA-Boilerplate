// Sidebar.jsx
import React, { useState } from 'react';
import styled from 'styled-components';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import ChatBarIcon from '../assets/common/ChartBar.svg';
import ChatBarIconSelect from '../assets/common/ChartBar_select.svg';
import AddressBookIcon from '../assets/common/AddressBook.svg';
import AddressBookIconSelect from '../assets/common/AddressBook_select.svg';
import MonitorPlayIcon from '../assets/common/MonitorPlay.svg';
import MonitorPlayIconSelect from '../assets/common/MonitorPlay_select.svg';
import DevicesIcon from '../assets/common/Devices.svg';
import DevicesIconSelect from '../assets/common/Devices_select.svg';
import HeadsetIcon from '../assets/common/Headset.svg';
import HeadsetIconSelect from '../assets/common/Headset_select.svg';
import ShieldCheckeredIcon from '../assets/common/ShieldCheckered.svg';
import ShieldCheckeredIconSelect from '../assets/common/ShieldCheckered_select.svg';
// import color from '../config/color';

const Drawer = styled.div`
  position: fixed;
  top: 64px;
  left: 0;
  width: ${({ width }) => width || '240px'};
  height: calc(100% - 64px);
  padding-top: 64px;
  padding: 20px 32px;
  background-color: white;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.03);
  border-right: 1px #f1f2f4 solid;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 54px;
  padding: 4px;
  border-radius: 4px;
  justify-content: flex-start;
  align-items: center;
  display: inline-flex;
  background-color: ${({ isSelected }) =>
    isSelected ? '#412CAB' : 'transparent'};
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const ListItemText = styled.span`
  flex-grow: 1;
  color: ${({ isSelected }) => (isSelected ? '#412CAB' : '#434343')};
  font-size: 16px;
  font-family: Pretendard;
  font-weight: 600;
  line-height: 22px;
`;

const ListItemIcon = styled.img`
  min-width: 24px;
  height: 24px;
  margin-right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Dropdown = styled.div`
  height: ${({ isOpen }) => (isOpen ? 'auto' : '0')};
  overflow: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transition: height 0.3s ease-out;
`;

const menuItems = [
  { name: '대시보드', icon: ChatBarIcon, iconSelected: ChatBarIconSelect },
  {
    name: '회원 관리',
    icon: AddressBookIcon,
    iconSelected: AddressBookIconSelect,
  },
  {
    name: '게시물 관리',
    icon: MonitorPlayIcon,
    iconSelected: MonitorPlayIconSelect,
  },
  { name: '시스템 관리', icon: DevicesIcon, iconSelected: DevicesIconSelect },
  {
    name: '고객센터',
    icon: HeadsetIcon,
    iconSelected: HeadsetIconSelect,
    hasDropdown: true,
  },
  {
    name: '계정관리',
    icon: ShieldCheckeredIcon,
    iconSelected: ShieldCheckeredIconSelect,
  },
];

const dropdownItems = [
  '문의 및 신고 관리',
  '자주 묻는 질문',
  '공지 사항 및 알림 관리',
];

// eslint-disable-next-line react/prop-types
export default function Sidebar({ width }) {
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const [selectedDropdownItem, setSelectedDropdownItem] = useState(null);
  const [openDropdownItem, setOpenDropdownItem] = useState(null);

  const handleItemClick = (item) => {
    if (item.hasDropdown) {
      setOpenDropdownItem(openDropdownItem === item ? null : item);
      setSelectedMenuItem(item);
    } else {
      setSelectedMenuItem(item);
      setOpenDropdownItem(null);
      setSelectedDropdownItem(null);
    }
  };

  const handleDropdownItemClick = (dropdownItem) => {
    setSelectedDropdownItem(dropdownItem);
  };

  return (
    <Drawer width={width}>
      <List>
        {menuItems.map((item) => (
          <React.Fragment key={item.name}>
            <ListItem
              onClick={() => handleItemClick(item)}
              selected={selectedMenuItem === item}
            >
              <ListItemIcon
                src={selectedMenuItem === item ? item.iconSelected : item.icon}
                alt={item.name}
              />
              <ListItemText selected={selectedMenuItem === item}>
                {item.name}
              </ListItemText>
              {item.hasDropdown &&
                (openDropdownItem === item ? <ExpandLess /> : <ExpandMore />)}
            </ListItem>
            {item.hasDropdown && (
              <Dropdown in={openDropdownItem === item}>
                <List>
                  {dropdownItems.map((dropdownItem) => (
                    <ListItem
                      key={dropdownItem}
                      onClick={() => handleDropdownItemClick(dropdownItem)}
                      selected={selectedDropdownItem === dropdownItem}
                      style={{ paddingLeft: '48px' }}
                    >
                      <ListItemText>{dropdownItem}</ListItemText>
                    </ListItem>
                  ))}
                </List>
              </Dropdown>
            )}
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
}
