/*
 * @Author: Fangyu Kung
 * @Date: 2024-03-16 01:05:55
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-05-02 01:11:50
 * @FilePath: /csc8019_team_project_frontend/src/common/aside/AsideItems.jsx
 */
import * as React from 'react';
import { NavLink } from 'react-router-dom';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DvrIcon from '@mui/icons-material/Dvr';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import LayersIcon from '@mui/icons-material/Layers';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PeopleIcon from '@mui/icons-material/People';
import SendTimeExtensionIcon from '@mui/icons-material/SendTimeExtension';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { SIGNIN_URL } from '../../data/data';
import { parseJwt } from '../../helpers/jwt';

const menuItems = [
  {
    menuId: 'modules',
    primary: 'Modules',
    icon: <ViewModuleIcon />,
    link: '/modules',
    type: 'student',
  },
  {
    menuId: 'staffmodules',
    primary: 'Modules',
    icon: <ViewModuleIcon />,
    link: 'staff/modules',
    type: 'admin',
  },
  {
    menuId: 'timetable',
    primary: 'Time Table',
    icon: <CalendarMonthIcon />,
    link: '/stafftimetable',
    type: 'admin',
  },
  {
    menuId: 'timetable',
    primary: 'Time Table',
    icon: <CalendarMonthIcon />,
    link: '/timetable',
    type: 'student',
  },
  {
    menuId: 'studentlist',
    primary: 'Student List',
    icon: <ListAltIcon />,
    link: '/studentlist',
    type: 'admin',
  },

  {
    menuId: 'bookingandabsence',
    primary: 'Booking & Absence',
    icon: <PeopleIcon />,
    link: '/bookingandabsence',
    type: 'student',
  },
  {
    menuId: 'extensions',
    primary: 'Extensions',
    icon: <SendTimeExtensionIcon />,
    link: '/extensions',
    type: 'student',
  },
  {
    menuId: 'courseoperations',
    primary: 'CourseInfo & Operations',
    icon: <LayersIcon />,
    link: '/courseoperations',
    type: 'student',
  },
  {
    menuId: 'academichistory',
    primary: 'Academic History',
    icon: <DvrIcon />,
    link: '/academichistory',
    type: 'student',
  },
];

const MenuItems = () => {
  const token = parseJwt(localStorage.getItem('accessToken'));
  const userType = token.userType;

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    window.location.href = SIGNIN_URL;
  };
  const isActive = (link) => {
    return window.location.pathname === link;
  };

  return (
    <>
      {menuItems
        .filter((item) => item.type === userType || !item.type)
        .map((item) => (
          <MenuList key={item.menuId}>
            <MenuItem
              href={item.link}
              component="a"
              className={isActive(item.link) ? 'active' : ''}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>{item.primary}</ListItemText>
            </MenuItem>
          </MenuList>
        ))}
      {/*  */}
      <MenuList>
        <MenuItem
          to="/user"
          component={NavLink}
          className={isActive('/user') ? 'active' : ''}
        >
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText>User Info</ListItemText>
        </MenuItem>
      </MenuList>

      <MenuList>
        <MenuItem component="a" onClick={handleLogout}>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </MenuItem>
      </MenuList>
    </>
  );
};

export default MenuItems;
