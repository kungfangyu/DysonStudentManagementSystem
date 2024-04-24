/*
 * @Author: Fangyu Kung
 * @Date: 2024-04-11 15:28:17
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-04-15 16:57:29
 * @FilePath: /csc8019_team_project_frontend/src/page/students/extensions/Extensions.jsx
 */
import dayjs from 'dayjs';
import * as React from 'react';
import { useState } from 'react';

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

import Copyright from '../../../common/Copyright';
import Aside from '../../../common/aside/Aside';
import AsideItems from '../../../common/aside/AsideItems';
import Nav from '../../../common/aside/Nav';
import FormGrid from '../../../style/formStyle';
import theme from '../../../style/theme';

import PopupExtensions from '../../../components/PopupExtensions';

const Extensions = () => {
  const [open, setOpen] = useState(true);
  const [module, setModule] = useState([]);
  const [assignment, setAssignment] = useState([]);
  const [startDate, setStartDate] = useState(dayjs(Date.now()));
  const [endDate, setEndDate] = useState(dayjs(Date.now()));
  const [popupOpen, setPopupOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleModuleChange = (event) => {
    setModule(event.target.value);
  };

  const handleAssignmentChange = (event) => {
    setAssignment(event.target.value);
  };

  const handlePopupExtensions = () => {
    setPopupOpen(true);
  };

  const handlePopupExtensionsClose = () => {
    setPopupOpen(false);
  };

  const moduleSelect = ['CSC8019', 'CSC8015', 'CSC8014', 'CSC8022'];
  const assignmentSelect = [
    'assignment001',
    'assignment002',
    'assignment003',
    'assignment004',
  ];

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
                  value={module}
                  onChange={handleModuleChange}
                  input={<OutlinedInput />}
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return <em>Select Module</em>;
                    }
                    return selected;
                  }}
                  sx={{
                    mt: 2,
                  }}
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  {moduleSelect.map((title) => (
                    <MenuItem key={title} value={title}>
                      {title}
                    </MenuItem>
                  ))}
                </Select>
              </FormGrid>
              <FormGrid item xs={12} md={6}>
                <FormLabel htmlFor="module">Assignment</FormLabel>
                <Select
                  displayEmpty
                  value={assignment}
                  onChange={handleAssignmentChange}
                  input={<OutlinedInput />}
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return <em>Select Assignment</em>;
                    }
                    return selected;
                  }}
                  sx={{
                    mt: 2,
                  }}
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  {assignmentSelect.map((title) => (
                    <MenuItem key={title} value={title}>
                      {title}
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
      />
    </ThemeProvider>
  );
};

export default Extensions;
