/*
 * @Author: Fangyu Kung
 * @Date: 2024-03-18 17:03:00
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-05-07 11:51:51
 * @FilePath: /csc8019_team_project_frontend/src/components/AbsenceForm.jsx
 */

import * as React from 'react';
import { useCallback, useEffect, useState } from 'react';

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

import { getLessonTime, postAbsenceRequest } from '../api/bookingandabsence';
import { getStudentModules } from '../api/modules';
import PopupBookingAndAbsence from '../components/PopupBookingAndAbsence';
import { SIGNIN_URL } from '../data/data';
import { parseJwt } from '../helpers/jwt';
import { FormGrid } from '../style/formStyle';

const AbsenceForm = () => {
  const [modules, setModules] = useState([]);
  const [selectedModuleName, setSelectedModuleName] = useState('');
  const [absenceTimeList, setAbsenceTimeList] = useState([]);
  const [selectedModule, setSelectedModule] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [lessonId, setLessonId] = useState('');
  const [absenceReason, setAbsenceReason] = useState('');

  const [popupOpen, setPopupOpen] = useState(false);

  const fetchLesson = useCallback(
    async (moduleID) => {
      const token = localStorage.getItem('accessToken');
      try {
        if (token) {
          const response = await getLessonTime(selectedModule);
          setAbsenceTimeList(response);
        } else {
          window.location.href = SIGNIN_URL;
        }
      } catch (error) {
        console.error('Error fetching student modules:', error);
      }
    },
    [selectedModule],
  );

  const handleModuleChange = (event) => {
    const selectedModuleId = event.target.value;
    const selectedModule = modules.find(
      (module) => module.moduleID === selectedModuleId,
    );
    setSelectedModule(selectedModuleId);
    setSelectedModuleName(selectedModule.moduleName);
    setSelectedTime('');
    fetchLesson(selectedModuleId);
  };

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
            await fetchLesson(defaultModuleId);
          }
          setModules(moduleArray);
        } else {
          window.location.href = SIGNIN_URL;
        }
      } catch (error) {
        console.error('Error fetching modules:', error);
      }
    };

    fetchDefaultModule();
  }, [fetchLesson]);

  useEffect(() => {
    if (selectedTime) {
      const lesson = absenceTimeList.find(function (time) {
        return time.startTime === selectedTime;
      });
      if (!lesson) {
        return;
      }
      setLessonId(lesson.lessonID);
    }
  }, [selectedTime, absenceTimeList]);

  const handleReasonChange = (event) => {
    const absenceReason = event.target.value;
    setAbsenceReason(absenceReason);
  };

  const handleAbsenceTimeChange = (event) => {
    const selectedTime = event.target.value;
    if (selectedTime) {
      const lesson = absenceTimeList.find(function (time) {
        return time.startTime === selectedTime;
      });
      setLessonId(lesson.lessonID);
    }
    setSelectedTime(selectedTime);
  };

  const handlePopupConfirm = () => {
    setPopupOpen(true);
  };

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      if (token) {
        const parseToken = parseJwt(token);
        const absenceRequestData = {
          moduleID: selectedModule,
          lessonID: lessonId,
          studentID: parseToken.userID,
          requestReason: absenceReason,
          requestStatus: 'submitted',
        };
        await postAbsenceRequest(absenceRequestData);
        setPopupOpen(false);
      }
    } catch (error) {
      console.log('Error creating announcement');
    }
  };

  const handlePopupConfirmClose = () => {
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
          <FormGrid item xs={12} md={6}>
            <FormLabel htmlFor="module">Modules Name</FormLabel>
            <Select
              displayEmpty
              value={selectedModule}
              onChange={handleModuleChange}
              input={<OutlinedInput />}
              renderValue={(selected) => {
                if (!selected || selected === '') {
                  return <em>Select Module</em>;
                }
                return selectedModule + '-' + selectedModuleName;
              }}
              sx={{
                mt: 2,
              }}
              inputProps={{ 'aria-label': 'Without label' }}
            >
              {modules &&
                modules.map((module) => (
                  <MenuItem key={module.moduleID} value={module.moduleID}>
                    {module.moduleID} - {module.moduleName}
                  </MenuItem>
                ))}
            </Select>
          </FormGrid>
          <FormGrid item xs={12} md={5.5}>
            <FormLabel htmlFor="absenceTime">Absence Time:</FormLabel>
            <Select
              displayEmpty
              value={selectedTime}
              onChange={handleAbsenceTimeChange}
              input={<OutlinedInput />}
              renderValue={(selected) => {
                if (!selected || selected === '') {
                  return <em>Select Time</em>;
                }
                return selectedTime;
              }}
              sx={{
                mt: 2,
              }}
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value="">Select Time</MenuItem>
              {absenceTimeList &&
                absenceTimeList.map((time) => (
                  <MenuItem key={time.startTime} value={time.startTime}>
                    {time.startTime}
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
