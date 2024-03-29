/* eslint-disable react/prop-types */
import React, { useReducer, useEffect, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  PiAddressBook,
  PiAddressBookFill,
  PiChartBar,
  PiChartBarFill,
  PiDevices,
  PiDevicesFill,
  PiHeadset,
  PiHeadsetFill,
  PiMonitorPlay,
  PiMonitorPlayFill,
  PiShieldCheckered,
  PiShieldCheckeredFill,
} from 'react-icons/pi';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Dropdown,
} from './styles';

const menuItems = [
  {
    to: '/DashBoard',
    name: '대시보드',
    icon: <PiChartBar />,
    iconSelected: <PiChartBarFill color="#412CAB" />,
  },
  {
    to: '/UserManagement',
    name: '회원 관리',
    icon: <PiAddressBook />,
    iconSelected: <PiAddressBookFill color="#412CAB" />,
  },
  {
    to: '/PostManagement',
    name: '게시물 관리',
    icon: <PiMonitorPlay />,
    iconSelected: <PiMonitorPlayFill color="#412CAB" />,
  },
  {
    to: '/SystemManagement',
    name: '시스템 관리',
    icon: <PiDevices />,
    iconSelected: <PiDevicesFill color="#412CAB" />,
  },
  {
    name: '고객센터',
    icon: <PiHeadset />,
    iconSelected: <PiHeadsetFill color="#412CAB" />,
    hasDropdown: true,
  },
  {
    to: '/AccountManagement',
    name: '계정관리',
    icon: <PiShieldCheckered />,
    iconSelected: <PiShieldCheckeredFill color="#412CAB" />,
  },
];

const dropdownItems = [
  { to: '/CustomerService/inquiries', name: '문의 및 신고 관리' },
  { to: '/CustomerService/faq', name: '자주 묻는 질문' },
  { to: '/CustomerService/notices', name: '공지 사항 및 알림 관리' },
];

const initialState = {
  selectedMenuItem: null,
  selectedDropdownItem: null,
  openDropdownItem: null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_SELECTED_MENU_ITEM':
      return {
        ...state,
        selectedMenuItem: action.payload,
        openDropdownItem: null,
        selectedDropdownItem: null,
      };
    case 'SET_OPEN_DROPDOWN_ITEM':
      return {
        ...state,
        openDropdownItem: action.payload,
        selectedMenuItem:
          action.payload !== state.openDropdownItem ? action.payload : null,
      };
    case 'SET_SELECTED_DROPDOWN_ITEM':
      return {
        ...state,
        selectedDropdownItem: action.payload,
        selectedMenuItem: null,
      };
    default:
      return state;
  }
}

export default function Sidebar({ width }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith('/CustomerService')) {
      const currentDropdownItem = dropdownItems.find(
        (item) => item.to === location.pathname,
      );
      dispatch({
        type: 'SET_SELECTED_DROPDOWN_ITEM',
        payload: currentDropdownItem?.name || null,
      });
    }
  }, [location.pathname, dropdownItems]);

  const isMenuItemSelected = useMemo(
    () => (item) => {
      return (
        state.selectedMenuItem === item ||
        (state.openDropdownItem === item && state.selectedDropdownItem !== null)
      );
    },
    [
      state.selectedMenuItem,
      state.openDropdownItem,
      state.selectedDropdownItem,
    ],
  );

  const handleItemClick = (item) => {
    if (item.hasDropdown) {
      dispatch({
        type: 'SET_OPEN_DROPDOWN_ITEM',
        payload: item === state.openDropdownItem ? null : item,
      });
    } else {
      dispatch({ type: 'SET_SELECTED_MENU_ITEM', payload: item });
      if (item.to) {
        navigate(item.to);
      }
    }
  };

  const handleDropdownItemClick = (dropdownItem) => {
    dispatch({
      type: 'SET_SELECTED_DROPDOWN_ITEM',
      payload: dropdownItem.name,
    });
    if (dropdownItem.to) {
      navigate(dropdownItem.to);
    }
  };

  return (
    <Drawer width={width}>
      <List>
        {menuItems.map((item) => (
          <React.Fragment key={item.name}>
            <ListItem
              onClick={() => handleItemClick(item)}
              selected={isMenuItemSelected(item)}
            >
              <ListItemIcon>
                {isMenuItemSelected(item) ? item.iconSelected : item.icon}
              </ListItemIcon>
              <ListItemText selected={isMenuItemSelected(item)}>
                {item.name}
              </ListItemText>
              {item.hasDropdown &&
                (state.openDropdownItem === item ? (
                  <MdExpandLess size="24" color="#412CAB" />
                ) : (
                  <MdExpandMore size="24" />
                ))}
            </ListItem>
            {item.hasDropdown && (
              <Dropdown open={state.openDropdownItem === item}>
                <List>
                  {dropdownItems.map((dropdownItem) => (
                    <ListItem
                      key={dropdownItem.name}
                      onClick={() => handleDropdownItemClick(dropdownItem)}
                      selected={
                        state.selectedDropdownItem === dropdownItem.name
                      }
                      dropdown
                    >
                      <ListItemText
                        selected={
                          state.selectedDropdownItem === dropdownItem.name
                        }
                        dropdown
                      >
                        {dropdownItem.name}
                      </ListItemText>
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
