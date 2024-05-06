/*
 * @Author: Fangyu Kung
 * @Date: 2024-03-18 17:03:00
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-04-26 22:46:59
 * @FilePath: /csc8019_team_project_frontend/src/components/AbsenceForm.jsx
 */

import * as React from 'react';
import { useEffect, useState } from 'react';

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
import { listModuleDetails } from '../api/ModuleDetailAPI';
import { lessonByModuleID } from '../api/LessonDetails';
import { createAbsenceRequest } from '../api/AbsenceRequest';
import { parseJwt } from '../helpers/jwt';
import { FormGrid } from '../style/formStyle';

const AbsenceForm = () => {
  let [module, setModule] = useState([]);
  let [absenceTime, setAbsenceTime] = useState([]);
  let [selectedModuleName, setSelectedModuleName] = useState('');
  let [selectedTime, setSelectedTime] = useState('');
  let [selectedLesson, setSelectedLesson] = useState('');
  let [absenceReason, setAbsenceReason] = useState('');

  let [userID, setUserId] = useState('');

  useEffect(() => {
    let token = localStorage.getItem('accessToken');
    if (token) {
      let parsedToken = parseJwt(token);
      setUserId(parsedToken.userID);
    }
  }, []);

  useEffect(() => {
    listModuleDetails()
      .then((response) => {
        setModule(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (selectedModuleName) {
      lessonByModuleID(selectedModuleName)
        .then((response) => {
          setAbsenceTime(response.data); // Set absenceTime state
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      setAbsenceTime([]);
    }
  }, [selectedModuleName]);

  useEffect(() => {
    if (selectedTime) {
      let lesson = absenceTime.find(function (time) {
        return time.startTime === selectedTime;
      });
      if (!lesson) {
        return;
      }
      setSelectedLesson(lesson.lessonID);
    }
  }, [selectedTime, absenceTime]);

  let [popupOpen, setPopupOpen] = useState(false);

  let handleReasonChange = (event) => {
    let absenceReason;
    absenceReason = event.target.value;
    setAbsenceReason(absenceReason);
  };

  let handleModuleChange = (event) => {
    let selectedModuleID;
    selectedModuleID = event.target.value;
    let selectedModule;
    selectedModule = module.find((m) => m.moduleID === selectedModuleID);
    if (!selectedModule) {
      setSelectedModuleName('');
    } else {
      setSelectedModuleName(selectedModuleID);
    }
  };

  let handleAbsenceTimeChange = (event) => {
    let selectedTime;
    selectedTime = event.target.value;
    setSelectedTime(selectedTime);
  };

  let handlePopupConfirm = () => {
    setPopupOpen(true);
  };

  let handleSubmit = () => {
    let absenceRequestData = {
      moduleID: selectedModuleName,
      lessonID: selectedLesson,
      studentID: userID,
      requestReason: absenceReason,
      requestStatus: 'submitted',
    };
    createAbsenceRequest(absenceRequestData)
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };

  const handlePopupConfirmClose = () => {
    setPopupOpen(false);
    handleSubmit();
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
          <FormGrid item xs={12} md={5.5}>
            <FormLabel htmlFor="module">Modules Name</FormLabel>
            <Select
              displayEmpty
              value={module}
              onChange={handleModuleChange}
              input={<OutlinedInput />}
              renderValue={(selected) => {
                if (!selected) {
                  return <em>Select Module</em>;
                }
                return selectedModuleName || <em>Select Module</em>;
              }}
              sx={{
                mt: 2,
              }}
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value="">Select Module</MenuItem>
              {module.map(function (mod) {
                return (
                  <MenuItem key={mod.moduleID} value={mod.moduleID}>
                    {mod.moduleID}
                  </MenuItem>
                );
              })}
            </Select>
          </FormGrid>
          <FormGrid item xs={12} md={5.5}>
            <FormLabel htmlFor="absenceTime">Absence Time:</FormLabel>
            <Select
              displayEmpty
              value={selectedTime}
              onChange={handleAbsenceTimeChange}
              input={<OutlinedInput />}
              sx={{
                mt: 2,
              }}
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value="">Select Time</MenuItem>
              {absenceTime.map((time) => (
                <MenuItem key={time.startTime} value={time.startTime}>
                  {time.startTime}
                </MenuItem>
              ))}
            </Select>
          </FormGrid>
          <FormGrid item xs={12} md={1}>
            <FormLabel htmlFor="absenceTime">LessonID:</FormLabel>
            <Select
              displayEmpty
              value={selectedLesson}
              input={<OutlinedInput readOnly />} // Make the input read-only
              sx={{ mt: 2 }}
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value={selectedLesson}>{selectedLesson}</MenuItem>
            </Select>
          </FormGrid>
          <FormGrid item xs={12} sx={{ mt: 4 }}>
            <FormLabel htmlFor="reason">Absence Reason</FormLabel>
            <TextField
              placeholder="Type your reason here."
              multiline
              rows={4}
              maxRows={4}
              value={absenceReason}
              onChange={handleReasonChange}
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
