/*
 * @Author: Fangyu Kung
 * @Date: 2024-03-16 19:06:31
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-04-20 22:31:20
 * @FilePath: /csc8019_team_project_frontend/src/page/UserInfo.jsx
 */
import * as React from 'react';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
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
        <Nav
          open={open}
          toggleDrawer={toggleDrawer}
          title={'User Information'}
        />
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

          <Copyright sx={{ pt: 4, pb: 4 }} />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default UserInfo;
