/*
 * @Author: Fangyu Kung
 * @Date: 2024-04-05 06:45:24
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-05-02 13:06:52
 * @FilePath: /csc8019_team_project_frontend/src/page/students/modules/ModuleAssignmentAndExam.jsx
 */
import * as React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import { ThemeProvider } from '@mui/material/styles';
import Copyright from '../../../common/Copyright';
import Aside from '../../../common/aside/Aside';
import AsideItems from '../../../common/aside/AsideItems';
import Nav from '../../../common/aside/Nav';
import theme from '../../../style/theme';

import { getCourseworks, getExams } from '../../../api/modules';
import { SIGNIN_URL } from '../../../data/data';

const ModuleAssignmentAndExam = () => {
  const { moduleId } = useParams();
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const [assignmentData, setAssignmentData] = useState([]);
  const [examData, setExamData] = useState([]);

  const fetchCoursework = useCallback(async () => {
    try {
      const token = localStorage.getItem('accessToken');
      if (token) {
        const response = await getCourseworks(moduleId);
        const results = response;
        setAssignmentData(results);
      } else {
        window.location.href = SIGNIN_URL;
      }
    } catch (error) {
      console.error('Error fetching student modules:', error);
    }
  }, [moduleId]);

  const fetchExams = useCallback(async () => {
    try {
      const token = localStorage.getItem('accessToken');
      if (token) {
        const response = await getExams(moduleId);
        const results = response;
        setExamData(results);
      } else {
        window.location.href = SIGNIN_URL;
      }
    } catch (error) {
      console.error('Error fetching student modules:', error);
    }
  }, [moduleId]);

  useEffect(() => {
    fetchCoursework();
    fetchExams();
  }, [fetchCoursework, fetchExams]);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Nav open={open} toggleDrawer={toggleDrawer} title={'ModuleName'} />
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
            <h2>Assignments</h2>
            {assignmentData.map((items, index) => {
              return (
                <List
                  sx={{ width: '100%', maxWidth: 600, padding: 0 }}
                  key={index}
                >
                  <ListItem>
                    <ListItemText primary={items.description} />
                    <Link to={`assignment/${items.courseworkId}`}>
                      <IconButton>
                        <OpenInNewIcon />
                      </IconButton>
                    </Link>
                  </ListItem>
                </List>
              );
            })}
            <h2>Exams</h2>
            {examData.map((items, index) => {
              return (
                <List
                  sx={{ width: '100%', maxWidth: 600, padding: 0 }}
                  key={index}
                >
                  <ListItem>
                    <ListItemText primary={`Exam: ${items.examID}`} />
                    <Link to={`exam/${items.examID}`}>
                      <IconButton>
                        <OpenInNewIcon />
                      </IconButton>
                    </Link>
                  </ListItem>
                </List>
              );
            })}
          </Container>

          <Copyright sx={{ pt: 4, pb: 4 }} />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default ModuleAssignmentAndExam;
