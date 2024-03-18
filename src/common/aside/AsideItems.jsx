/*
 * @Author: Fangyu Kung
 * @Date: 2024-03-16 01:05:55
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-03-18 16:40:55
 * @FilePath: /csc8019_team_project_frontend/src/common/aside/AsideItems.jsx
 */
import * as React from 'react';

import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import InfoIcon from '@mui/icons-material/Info';
import LayersIcon from '@mui/icons-material/Layers';
import PeopleIcon from '@mui/icons-material/People';
import ViewModuleIcon from '@mui/icons-material/ViewModule';

const menuItems = [
  {
    menuId: 'modules',
    primary: 'Modules',
    icon: <ViewModuleIcon />,
    link: '/modules',
  },
  {
    menuId: 'timetable',
    primary: 'Time Table',
    icon: <CalendarMonthIcon />,
    link: '/timetable',
  },
  {
    menuId: 'bookingandabsence',
    primary: 'Booking & Absence',
    icon: <PeopleIcon />,
    link: '/bookingandabsence',
  },
  {
    menuId: 'courseinfooperations',
    primary: 'CourseInfo & Operations',
    icon: <LayersIcon />,
    link: '',
  },
  {
    menuId: 'heips',
    primary: 'Helps',
    icon: <InfoIcon />,
    link: 'https://google.com',
  },
  {
    menuId: 'users',
    primary: 'User',
    icon: <AccountCircleIcon />,
    link: '/user',
  },
];

const MenuItems = () => {
  return (
    <>
      {menuItems.map((items) => {
        return (
          <MenuList key={items.menuId}>
            <MenuItem href={items.link} target="_blank" component="a">
              <ListItemIcon>{items.icon}</ListItemIcon>
              <ListItemText>{items.primary}</ListItemText>
            </MenuItem>
          </MenuList>
        );
      })}
    </>
  );
};

export default MenuItems;
