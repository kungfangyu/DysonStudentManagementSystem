/*
 * @Author: Fangyu Kung
 * @Date: 2024-04-05 06:45:24
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-04-22 22:27:07
 * @FilePath: /csc8019_team_project_frontend/src/page/students/modules/ModuleAssignmentAndExam.jsx
 */
import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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

const ModuleAssignmentAndExam = () => {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const assignments = [
    {
      id: '1',
      assignment: 'Assignment 01',
      link: `assignment/assignmentId`,
    },
    {
      id: '2',
      assignment: 'Assignment 02',
      link: `assignment/assignmentId`,
    },
  ];

  const exams = [
    {
      id: '1',
      exams: 'Exam 01',
      link: `exam/examId`,
    },
    {
      id: '2',
      exams: 'Exam 02',
      link: `exam/examId`,
    },
  ];

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
            {assignments.map((items, index) => {
              return (
                <List
                  sx={{ width: '100%', maxWidth: 360, padding: 0 }}
                  key={index}
                >
                  <ListItem>
                    <ListItemText primary={items.assignment} />
                    <Link to={items.link}>
                      <IconButton>
                        <OpenInNewIcon />
                      </IconButton>
                    </Link>
                  </ListItem>
                </List>
              );
            })}
            <h2>Exams</h2>
            {exams.map((items, index) => {
              return (
                <List
                  sx={{ width: '100%', maxWidth: 360, padding: 0 }}
                  key={index}
                >
                  <ListItem>
                    <ListItemText primary={items.exams} />
                    <Link to={items.link}>
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
