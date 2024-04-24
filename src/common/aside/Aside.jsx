/*
 * @Author: Fangyu Kung
 * @Date: 2024-03-16 00:42:57
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-04-23 19:28:53
 * @FilePath: /csc8019_team_project_frontend/src/common/aside/Aside.jsx
 */
import MuiDrawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';

const drawerWidth = 260;

const Aside = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: 52,
      [theme.breakpoints.up('sm')]: {
        width: 52,
      },
    }),
  },
}));

export default Aside;
