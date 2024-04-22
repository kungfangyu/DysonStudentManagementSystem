/*
 * @Author: Fangyu Kung
 * @Date: 2024-03-18 17:03:00
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-04-22 10:54:07
 * @FilePath: /csc8019_team_project_frontend/src/components/AbsenceForm.jsx
 */

import * as React from 'react';
import { useState } from 'react';

import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

import PopupBookingAndAbsence from '../components/PopupBookingAndAbsence';
import FormGrid from '../style/formStyle';

const AbsenceForm = () => {
  const [module, setModule] = useState([]);
  const [absenceTime, setAbsenceTime] = useState([]);

  const [popupOpen, setPopupOpen] = useState(false);

  const moduleSelect = ['CSC8019', 'CSC8015', 'CSC8014', 'CSC8022'];
  const absenceTimeSelect = [
    '2024-04-22 1330-1430',
    '2024-04-22 1430-1530',
    '2024-04-23 1330-1430',
    '2024-04-23 1430-1530',
  ];

  const handleModuleChange = (event) => {
    setModule(event.target.value);
  };

  const handleAbsenceTimeChange = (event) => {
    setAbsenceTime(event.target.value);
  };

  const handlePopupConfirm = () => {
    setPopupOpen(true);
  };

  const handlePopupConfirmClose = () => {
    setPopupOpen(false);
  };

  return (
    <>
      <Container
        sx={{
          mt: 4,
          mb: 4,
        }}
        space={2}
      >
        <Grid container spacing={1}>
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
            <FormLabel htmlFor="absenceTime">Absence Time:</FormLabel>
            <Select
              displayEmpty
              value={absenceTime}
              onChange={handleAbsenceTimeChange}
              input={<OutlinedInput />}
              renderValue={(selected) => {
                if (selected.length === 0) {
                  return <em>Select Time</em>;
                }
                return selected;
              }}
              sx={{
                mt: 2,
              }}
              inputProps={{ 'aria-label': 'Without label' }}
            >
              {absenceTimeSelect.map((title) => (
                <MenuItem key={title} value={title}>
                  {title}
                </MenuItem>
              ))}
            </Select>
          </FormGrid>
          <FormGrid item xs={12} sx={{ mt: 4 }}>
            <FormLabel htmlFor="reason">Absence Reason</FormLabel>
            <TextField
              placeholder="Type your reason here."
              multiline
              rows={4}
              maxRows={4}
            />
          </FormGrid>
        </Grid>
      </Container>
      <Box sx={{ textAlign: 'center' }}>
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          size="large"
          onClick={handlePopupConfirm}
        >
          Send
        </Button>
      </Box>
      <PopupBookingAndAbsence
        open={popupOpen}
        handlePopupConfirmClose={handlePopupConfirmClose}
      />
    </>
  );
};

export default AbsenceForm;
