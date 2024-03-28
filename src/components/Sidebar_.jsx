// Sidebar.jsx
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from '@mui/material';
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

const StyledDrawer = styled(Drawer)(({ width }) => ({
  '& .MuiDrawer-paper': {
    top: '64px',
    width,
    paddingTop: '64px',
    padding: '20px 32px',
    backgroundColor: 'white',
    boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.03)',
    borderRight: '1px #F1F2F4 solid',
  },
}));

const StyledList = styled(List)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  gap: '8px',
  flex: '1 1 0',
});

const StyledListItem = styled(ListItem)(() => ({
  alignSelf: 'stretch',
  height: '54px',
  padding: '4px',
  borderRadius: '4px',
  justifyContent: 'flex-start',
  alignItems: 'center',
  display: 'inline-flex',
  '&.Mui-selected': {
    backgroundColor: 'white',
    borderRadius: '4px',
    '& .MuiListItemText-primary': {
      color: '#412CAB',
    },
  },
}));

const StyledListItemText = styled(ListItemText)(() => ({
  '& .MuiListItemText-primary': {
    color: '#434343',
    fontSize: '16px',
    fontFamily: 'Pretendard',
    fontWeight: '600',
    lineHeight: '22px',
    wordWrap: 'break-word',
  },
}));

const StyledListItemIcon = styled(ListItemIcon)(() => ({
  minWidth: '24px',
  height: '24px',
  marginRight: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& img': {
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

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
    <StyledDrawer variant="permanent" anchor="left" width={width}>
      <StyledList sx={{ alignSelf: 'stretch', flex: '1 1 0' }}>
        {menuItems.map((item) => (
          <React.Fragment key={item.name}>
            <StyledListItem
              button
              onClick={() => handleItemClick(item)}
              selected={selectedMenuItem === item}
            >
              <StyledListItemIcon>
                <img
                  src={
                    selectedMenuItem === item ? item.iconSelected : item.icon
                  }
                  alt={item.name}
                />
              </StyledListItemIcon>
              <StyledListItemText primary={item.name} />
              {item.hasDropdown &&
                (openDropdownItem === item ? <ExpandLess /> : <ExpandMore />)}
            </StyledListItem>
            {item.hasDropdown && (
              <Collapse
                in={openDropdownItem === item}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  {dropdownItems.map((dropdownItem) => (
                    <StyledListItem
                      key={dropdownItem}
                      button
                      onClick={() => handleDropdownItemClick(dropdownItem)}
                      selected={selectedDropdownItem === dropdownItem}
                      sx={{ pl: 4 }}
                    >
                      <StyledListItemText primary={dropdownItem} />
                    </StyledListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))}
      </StyledList>
    </StyledDrawer>
  );
}
