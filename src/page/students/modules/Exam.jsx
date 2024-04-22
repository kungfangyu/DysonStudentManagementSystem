/*
 * @Author: Fangyu Kung
 * @Date: 2024-04-22 22:20:01
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-04-22 23:02:56
 * @FilePath: /csc8019_team_project_frontend/src/page/students/modules/Exam.jsx
 */

import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { ThemeProvider } from '@mui/material/styles';

import Copyright from '../../../common/Copyright';
import Aside from '../../../common/aside/Aside';
import AsideItems from '../../../common/aside/AsideItems';
import Nav from '../../../common/aside/Nav';
import theme from '../../../style/theme';

const Exam = () => {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const examDetails = {
    date: '11/05/2024 13:00',
    description:
      'Basic principles of concurrent programming. Thread synchronisation mechanisms. Challenges of concurrent programming such as interference and deadlocks. ',
    examLink: '',
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Nav
          open={open}
          toggleDrawer={toggleDrawer}
          title={'ModuleName - Exam'}
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
          <Container
            sx={{
              mt: 4,
              mb: 4,
            }}
          >
            <h2>Exam Descriptions</h2>
            <Typography>Due Date: {examDetails.date}</Typography>
            <Typography mt={2}>{examDetails.description}</Typography>
            <Typography mt={2}>
              Link to Exam :
              <Link to={examDetails.link}>
                <IconButton variant="outline" color="secondary" sx={{ ml: 1 }}>
                  <OpenInNewIcon />
                </IconButton>
              </Link>
            </Typography>
          </Container>

          <Copyright sx={{ pt: 4, pb: 4 }} />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Exam;
