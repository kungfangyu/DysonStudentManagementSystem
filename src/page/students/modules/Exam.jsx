/*
 * @Author: Fangyu Kung
 * @Date: 2024-04-22 22:20:01
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-05-03 01:22:32
 * @FilePath: /csc8019_team_project_frontend/src/page/students/modules/Exam.jsx
 */

import * as React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

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
import { getExamsDetails } from '../../../api/modules';
import Copyright from '../../../common/Copyright';
import Aside from '../../../common/aside/Aside';
import AsideItems from '../../../common/aside/AsideItems';
import Nav from '../../../common/aside/Nav';
import { SIGNIN_URL } from '../../../data/data';
import theme from '../../../style/theme';

const Exam = () => {
  const { moduleId, examId } = useParams();
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const [examData, setAssignmentData] = useState();

  const fetchExamDetails = useCallback(async () => {
    try {
      const token = localStorage.getItem('accessToken');
      if (token) {
        const response = await getExamsDetails(moduleId, examId);
        const results = response;
        setAssignmentData(results);
      } else {
        window.location.href = SIGNIN_URL;
      }
    } catch (error) {
      console.error('Error fetching student modules:', error);
    }
  }, [moduleId, examId]);

  useEffect(() => {
    fetchExamDetails();
  }, [fetchExamDetails]);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Nav
          open={open}
          toggleDrawer={toggleDrawer}
          title={`${moduleId} - Exam`}
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
            <Typography mt={2} color={'primary'}>
              Start: {examData.startTime}
            </Typography>
            <Typography mt={2} color={'primary'}>
              End: {examData.endTime}
            </Typography>

            <Typography mt={2}>
              Percentage of Module: {examData.percentageOfModule}
            </Typography>
            <Typography mt={2}>
              Link to Exam :
              <Link to={examData.link}>
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
