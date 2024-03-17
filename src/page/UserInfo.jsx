/*
 * @Author: Fangyu Kung
 * @Date: 2024-03-16 19:06:31
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-03-17 18:18:00
 * @FilePath: /csc8019_team_project_frontend/src/page/UserInfo.jsx
 */
import * as React from 'react';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import MenuIcon from '@mui/icons-material/Menu';
import SendIcon from '@mui/icons-material/Send';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';

import Copyright from '../common/Copyright';
import Aside from '../common/aside/Aside';
import AsideItems from '../common/aside/AsideItems';
import Nav from '../common/aside/Nav';
import UserInfoForm from '../components/UserInfoForm';
import theme from '../style/theme';

const UserInfo = () => {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Nav position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              User Information
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <ExitToAppIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </Nav>
        <Aside variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <AsideItems />
        </Aside>
        <Box
          sx={{
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <UserInfoForm />
          <Box sx={{ textAlign: 'center' }}>
            <Button variant="contained" endIcon={<SendIcon />} size="large">
              Send
            </Button>
          </Box>

          <Copyright sx={{ pt: 4 }} />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default UserInfo;
