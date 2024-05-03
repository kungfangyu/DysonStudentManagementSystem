/*
 * @Author: Fangyu Kung
 * @Date: 2024-04-22 22:20:01
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-05-03 01:22:59
 * @FilePath: /csc8019_team_project_frontend/src/page/students/modules/Assignment.jsx
 */

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { ThemeProvider } from '@mui/material/styles';
import * as React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCoursesworkDetails } from '../../../api/modules';
import Copyright from '../../../common/Copyright';
import Aside from '../../../common/aside/Aside';
import AsideItems from '../../../common/aside/AsideItems';
import Nav from '../../../common/aside/Nav';
import { SIGNIN_URL } from '../../../data/data';
import theme from '../../../style/theme';

const Assignment = () => {
  const { moduleId, courseworkId } = useParams();
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const [assignmentData, setAssignmentData] = useState([]);

  const fetchCourseworkDetails = useCallback(async () => {
    try {
      const token = localStorage.getItem('accessToken');
      if (token) {
        const response = await getCoursesworkDetails(moduleId, courseworkId);
        const results = response;
        setAssignmentData(results);
      } else {
        window.location.href = SIGNIN_URL;
      }
    } catch (error) {
      console.error('Error fetching student modules:', error);
    }
  }, [moduleId, courseworkId]);

  useEffect(() => {
    fetchCourseworkDetails();
  }, [fetchCourseworkDetails]);

  // const handleDownload = () => {
  //   const url = 'https://example.com/file.zip';
  //   const anchor = document.createElement('a');
  //   anchor.href = url;
  //   anchor.download = 'file.zip';
  //   anchor.click();
  // };

  // const handleUpload = () => {
  //   document.getElementById('fileInput').click();
  // };

  // const assignmentDetails = {
  //   due: '11/05/2024 13:00',
  //   description:
  //     'Basic principles of concurrent programming. Thread synchronisation mechanisms. Challenges of concurrent programming such as interference and deadlocks. ',
  //   assignmentName: 'Assignment File',
  //   assignmentFile: '/path/to/week1_material1.pdf',
  // };
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Nav
          open={open}
          toggleDrawer={toggleDrawer}
          title={`${moduleId} - Assignment`}
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
            <h2>Assignments Descriptions</h2>
            <Typography color={'primary'}>
              Due Date: {assignmentData.deadline}
            </Typography>
            <Typography mt={2}>
              Descriptions: {assignmentData.description}
            </Typography>
            <Typography mt={2}>
              Percentage of Module: {assignmentData.percentageOfModule}%
            </Typography>

            {/* <Typography mt={2}>
              {assignmentDetails.assignmentName}:
              <IconButton
                variant="outline"
                color="primary"
                onClick={handleDownload}
                sx={{ ml: 1 }}
              >
                <CloudDownloadIcon />
              </IconButton>
            </Typography> */}
            <Typography variant="h6" component="h6" mt={2}>
              Submit Your Assignment:
              <input
                type="file"
                id="fileInput"
                style={{ display: 'none' }}
                // onChange={(e) => handleFileUpload(e.target.files)}
              />
              <IconButton
                variant="outline"
                color="secondary"
                // onClick={handleUpload}
                sx={{ ml: 1 }}
              >
                <CloudUploadIcon />
              </IconButton>
            </Typography>
          </Container>

          <Copyright sx={{ pt: 4, pb: 4 }} />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Assignment;
