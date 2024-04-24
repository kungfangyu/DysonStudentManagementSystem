/*
 * @Author: Fangyu Kung
 * @Date: 2024-04-23 19:17:30
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-04-24 15:58:15
 * @FilePath: /csc8019_team_project_frontend/src/page/students/academicHistory/AcademicHistory.jsx
 */

import dayjs from 'dayjs';
import * as React from 'react';
import { useState } from 'react';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';

import { ThemeProvider } from '@mui/material/styles';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';

import { styled } from '@mui/material/styles';
import Copyright from '../../../common/Copyright';
import Aside from '../../../common/aside/Aside';
import AsideItems from '../../../common/aside/AsideItems';
import Nav from '../../../common/aside/Nav';
import FormGrid from '../../../style/formStyle';
import theme from '../../../style/theme';

const AcademicPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  ...theme.typography.body2,
  marginTop: theme.spacing(6),
}));

const AcademicHistory = () => {
  const [open, setOpen] = useState(true);

  const [dateAchieved, setDateAchieved] = useState(dayjs(Date()));

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
          title={'Academic History'}
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
            <Container>
              <h2>Update Academic History</h2>
            </Container>
            <AcademicPaper>
              <Grid container spacing={2}>
                <FormGrid item xs={12} md={6}>
                  <FormLabel htmlFor="institution" required>
                    Institution
                  </FormLabel>
                  <OutlinedInput
                    id="institution"
                    size="small"
                    name="institution"
                    type=""
                    required
                  />
                </FormGrid>
                <FormGrid item xs={12} md={6}>
                  <FormLabel htmlFor="subject" required>
                    Subject
                  </FormLabel>
                  <OutlinedInput
                    size="small"
                    id="subject"
                    name="subject"
                    type=""
                    required
                  />
                </FormGrid>
                <FormGrid item xs={12} md={4}>
                  <FormLabel htmlFor="level" required>
                    Qualification Level
                  </FormLabel>
                  <OutlinedInput
                    id="level"
                    size="small"
                    name="level"
                    type=""
                    required
                  />
                </FormGrid>

                <FormGrid item xs={12} md={4}>
                  <FormLabel htmlFor="grade" required>
                    Grade
                  </FormLabel>
                  <OutlinedInput
                    size="small"
                    id="grade"
                    name="grade"
                    type=""
                    required
                  />
                </FormGrid>
                <FormGrid item xs={12} md={4}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                      <DatePicker
                        label="dateAchieved"
                        defaultValue={dateAchieved}
                        onChange={(newValue) => setDateAchieved(newValue)}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </FormGrid>
              </Grid>
            </AcademicPaper>
            <IconButton
              color="primary"
              sx={{ float: 'right' }}
              aria-label="create a new academic record"
            >
              <AddCircleIcon />
            </IconButton>
          </Container>
          <Box sx={{ textAlign: 'center', mt: 4, clear: 'both' }}>
            <Button variant="contained" endIcon={<SendIcon />} size="large">
              Submit
            </Button>
          </Box>
          <Copyright sx={{ pt: 4, pb: 4 }} />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default AcademicHistory;
