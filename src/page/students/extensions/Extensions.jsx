/*
 * @Author: Fangyu Kung
 * @Date: 2024-04-11 15:28:17
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-05-06 22:00:18
 * @FilePath: /csc8019_team_project_frontend/src/page/students/extensions/Extensions.jsx
 */
import dayjs from 'dayjs';
import * as React from 'react';
import { useCallback, useEffect, useState } from 'react';

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
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import { ThemeProvider } from '@mui/material/styles';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';

import { getAssignmentList } from '../../../api/assignmentList';
import { createExtensionRequest } from '../../../api/extension';
import { getStudentModules } from '../../../api/modules';
import Copyright from '../../../common/Copyright';
import Aside from '../../../common/aside/Aside';
import AsideItems from '../../../common/aside/AsideItems';
import Nav from '../../../common/aside/Nav';
import { SIGNIN_URL } from '../../../data/data';
import { parseJwt } from '../../../helpers/jwt';
import { FormGrid } from '../../../style/formStyle';
import theme from '../../../style/theme';

import PopupExtensions from '../../../components/PopupExtensions';

const Extensions = () => {
  const [open, setOpen] = useState(true);
  const [module, setModule] = useState([]);
  const [selectedModule, setSelectedModule] = useState('');
  const [selectedModuleName, setSelectedModuleName] = useState('');

  const [selectedAssignment, setSelectedAssignment] = useState('');
  const [assignment, setAssignment] = useState([]);
  const [assignmentName, setAssignmentName] = useState('');
  const [reason, setReason] = useState('');

  const [startDate, setStartDate] = useState(dayjs(Date.now()));
  const [endDate, setEndDate] = useState(dayjs(Date.now()));
  const [popupOpen, setPopupOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleModuleChange = (event) => {
    const selectedModuleId = event.target.value;
    const selectedModule = module.find(
      (module) => module.moduleID === selectedModuleId,
    );
    setSelectedModule(selectedModuleId);
    setSelectedModuleName(selectedModule.moduleName);
    fetchAssignmentList(selectedModuleId);
    setAssignmentName('');
    setSelectedAssignment('');
  };

  const handleAssignmentChange = (event) => {
    const selectedAssignmentId = event.target.value;
    const selectedAssignment = assignment.find(
      (assignment) => assignment.courseworkId === selectedAssignmentId,
    );
    setAssignmentName(selectedAssignment.description);
    setSelectedAssignment(selectedAssignmentId);
  };

  const handlePopupExtensions = () => {
    setPopupOpen(true);
  };

  const handlePopUpExtensionsSubmit = async () => {
    try {
      const bodyData = {
        studentID: parseJwt(localStorage.getItem('accessToken')).userID,
        moduleID: selectedModule,
        courseworkID: selectedAssignment,
        requestNumber: 1,
        requestDate: new Date(Date.now()).toISOString(),
        requestReason: reason,
        status: 'Submitted',
        adjustedDeadline: endDate,
      };
      createExtensionRequest(bodyData);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePopupExtensionsClose = () => {
    setPopupOpen(false);
  };

  const handleReasonChange = (event) => {
    setReason(event.target.value);
  };

  const fetchAssignmentList = useCallback(async (moduleId) => {
    try {
      const token = localStorage.getItem('accessToken');
      if (token && moduleId !== '') {
        const response = await getAssignmentList(moduleId);
        setAssignment(response);
      } else {
        window.location.href = SIGNIN_URL;
      }
    } catch (error) {
      console.error('Error fetching modules:', error);
    }
  }, []);

  useEffect(() => {
    // fetch default module and student list
    const fetchDefaultModule = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        if (token) {
          const parseToken = parseJwt(token);
          const response = await getStudentModules(parseToken.userID);
          const moduleArray = Object.values(response);
          if (moduleArray.length > 0) {
            const defaultModuleId = moduleArray[0].moduleID;
            setSelectedModule(defaultModuleId);
            setSelectedModuleName(moduleArray[0].moduleName);
            await fetchAssignmentList(defaultModuleId);
          }
          setModule(moduleArray);
        } else {
          window.location.href = SIGNIN_URL;
        }
      } catch (error) {
        console.error('Error fetching modules:', error);
      }
    };

    fetchDefaultModule();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Nav open={open} toggleDrawer={toggleDrawer} title="Extensions" />
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
            <Grid container spacing={2}>
              <FormGrid item xs={12} md={6}>
                <FormLabel htmlFor="module">Modules Name</FormLabel>
                <Select
                  displayEmpty
                  value={selectedModule}
                  onChange={handleModuleChange}
                  input={<OutlinedInput />}
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return <em>Select Module</em>;
                    }
                    return selectedModule + ' ' + selectedModuleName;
                  }}
                  sx={{
                    mt: 2,
                  }}
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  {module &&
                    module.map((module) => (
                      <MenuItem key={module.moduleID} value={module.moduleID}>
                        {module.moduleID} - {module.moduleName}
                      </MenuItem>
                    ))}
                </Select>
              </FormGrid>
              <FormGrid item xs={12} md={6}>
                <FormLabel htmlFor="assignment">Assignment</FormLabel>
                <Select
                  displayEmpty
                  value={selectedAssignment}
                  onChange={handleAssignmentChange}
                  input={<OutlinedInput />}
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return <em>Select Assignment</em>;
                    }
                    return selectedAssignment + ' ' + assignmentName;
                  }}
                  sx={{
                    mt: 2,
                  }}
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  {assignment &&
                    assignment.map((assignment) => (
                      <MenuItem
                        key={assignment.courseworkId}
                        value={assignment.courseworkId}
                      >
                        {assignment.courseworkId} - {assignment.description}
                      </MenuItem>
                    ))}
                </Select>
              </FormGrid>
            </Grid>
            <Grid
              container
              spacing={2}
              sx={{
                mt: 4,
              }}
            >
              <FormGrid item xs={12} md={6}>
                <FormLabel htmlFor="reason">
                  Provide as full a description as possible including impact on
                  your studies
                </FormLabel>
                <TextField
                  label="Reason"
                  multiline
                  rows={5} // Set the number of rows you want to display
                  variant="outlined"
                  value={reason}
                  onChange={handleReasonChange}
                  sx={{
                    mt: 2,
                  }}
                />
              </FormGrid>
              <FormGrid item xs={12} md={6}>
                <FormLabel htmlFor="period">Period affected</FormLabel>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer
                    components={['DatePicker', 'DatePicker']}
                    sx={{
                      mt: 1,
                    }}
                  >
                    <DatePicker
                      label="Start"
                      defaultValue={startDate}
                      onChange={(newValue) => setStartDate(newValue)}
                    />
                    <DatePicker
                      label="End"
                      value={endDate}
                      onChange={(newValue) => setEndDate(newValue)}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </FormGrid>
            </Grid>
            <Box sx={{ textAlign: 'center', mt: 4 }}>
              <Button
                variant="contained"
                endIcon={<SendIcon />}
                size="large"
                onClick={handlePopupExtensions}
              >
                Send
              </Button>
            </Box>
          </Container>

          <Copyright sx={{ pt: 4, pb: 4 }} />
        </Box>
      </Box>
      <PopupExtensions
        open={popupOpen}
        handlePopupExtensionsClose={handlePopupExtensionsClose}
        handlePopUpExtensionsSubmit={handlePopUpExtensionsSubmit}
      />
    </ThemeProvider>
  );
};

export default Extensions;
