/*
 * @Author: Fangyu Kung
 * @Date: 2024-03-18 16:34:54
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-04-22 10:40:24
 * @FilePath: /csc8019_team_project_frontend/src/page/students/bookingAndAbsence/BookingAndAbsence.jsx
 */
import * as React from 'react';
import { useState } from 'react';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { ThemeProvider } from '@mui/material/styles';

import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Tab from '@mui/material/Tab';

import Copyright from '../../../common/Copyright';
import Aside from '../../../common/aside/Aside';
import AsideItems from '../../../common/aside/AsideItems';
import Nav from '../../../common/aside/Nav';
import AbsenceForm from '../../../components/AbsenceForm';
import BookingForm from '../../../components/BookingForm';
import theme from '../../../style/theme';

const BookingAndAbsence = () => {
  const [value, setValue] = useState('1');

  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Nav
          open={open}
          toggleDrawer={toggleDrawer}
          title={'Booking & Absences'}
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
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <TabList
                    onChange={handleTabChange}
                    aria-label="lab API tabs example"
                  >
                    <Tab label="Booking" value="1" />
                    <Tab label="Absence" value="2" />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  <BookingForm />
                </TabPanel>
                <TabPanel value="2">
                  <AbsenceForm />
                </TabPanel>
              </TabContext>
            </Box>
          </Container>
          <Copyright sx={{ pt: 4, pb: 4 }} />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default BookingAndAbsence;
