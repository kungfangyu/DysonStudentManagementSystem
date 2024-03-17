/*
 * @Author: Fangyu Kung
 * @Date: 2024-03-16 00:50:07
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-03-16 02:04:03
 * @FilePath: /csc8019_team_project_frontend/src/common/menu/Nav.jsx
 */
import MuiAppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';

const drawerWidth = 260;

const Nav = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default Nav;
