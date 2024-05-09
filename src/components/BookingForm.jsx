/*
 * @Author: Fangyu Kung
 * @Date: 2024-03-18 17:03:00
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-05-07 14:44:40
 * @FilePath: /csc8019_team_project_frontend/src/components/BookingForm.jsx
 */

import * as React from 'react';
import { useCallback, useEffect, useState } from 'react';

import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';

import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import {
  getMeetingTime,
  getStudentTutor,
  updateMeetingTime,
} from '../api/bookingandabsence';
import { getUserPrimaryData } from '../api/user';
import { parseJwt } from '../helpers/jwt';
import { FormGrid } from '../style/formStyle';

import { SIGNIN_URL } from '../data/data';

const BookingForm = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  const [tutorName, setTutorName] = useState('');
  const [tutorId, setTutorId] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [meetingTimeList, setMeetingTimeList] = useState([]);

  const [issue, setIssue] = useState('');

  const fetchTutor = useCallback(async () => {
    try {
      const token = localStorage.getItem('accessToken');
      if (token) {
        const studentID = parseJwt(token).userID;
        const response = await getStudentTutor(studentID);
        const userInfo = await getUserPrimaryData(response[0].staffID);
        if (userInfo) {
          setTutorName(userInfo.firstName + ' ' + userInfo.lastName);
          setTutorId(response[0].staffID);
          fetchMeetingTime(response[0].staffID);
        }
      } else {
        window.location.href = SIGNIN_URL;
      }
    } catch (error) {
      console.error('Error fetching student tutor:', error);
    }
  }, []);
  console.log(tutorId);

  const fetchMeetingTime = useCallback(async () => {
    try {
      const token = localStorage.getItem('accessToken');
      if (token) {
        const response = await getMeetingTime(tutorId);
        setMeetingTimeList(response);
      } else {
        window.location.href = SIGNIN_URL;
      }
    } catch (error) {
      console.error('Error fetching student tutor:', error);
    }
  }, [tutorId]);

  useEffect(() => {
    fetchTutor();
    fetchMeetingTime();
  }, [fetchTutor, fetchMeetingTime]);

  const handleMeetingTimeChange = (event) => {
    const selectedTime = event.target.value;
    setSelectedTime(selectedTime);
  };

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      if (token) {
        const parseToken = parseJwt(token);
        const bookingData = {
          staffID: tutorId,
          meetingTime: selectedTime,
          studentID: parseToken.userID,
          notes: issue,
        };
        await updateMeetingTime(tutorId, selectedTime, bookingData);
        setPopupOpen(false);
      }
    } catch (error) {
      console.log('Error creating announcement');
    }
  };

  const handlePopupConfirmClose = () => {
    handleSubmit();
  };

  const handlePopupConfirm = () => {
    setPopupOpen(true);
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
        <FormGrid container spacing={1}>
          <FormGrid item xs={12} md={5.5}>
            <FormLabel htmlFor="primData">Tutor: {tutorName} </FormLabel>
          </FormGrid>
          <FormGrid item xs={12} md={5.5}>
            <FormLabel htmlFor="booking">Booking Time:</FormLabel>
            <Select
              displayEmpty
              value={selectedTime}
              onChange={handleMeetingTimeChange}
              input={<OutlinedInput />}
              // renderValue={(selected) => {
              //   if (!selected || selected === '') {
              //     return <em>Select Time</em>;
              //   }
              //   return selectedTime;
              // }}
              sx={{
                mt: 2,
              }}
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value="">Select Time</MenuItem>
              {meetingTimeList &&
                meetingTimeList.map((time, index) => (
                  <MenuItem key={time.index} value={time.meetingTime}>
                    {time.meetingTime}
                  </MenuItem>
                ))}
            </Select>
          </FormGrid>
          <FormGrid item xs={12} sx={{ mt: 4 }}>
            <FormLabel htmlFor="issue">Booking Issues</FormLabel>
            <TextField
              placeholder="Type your issue here."
              multiline
              rows={4}
              maxRows={4}
              value={issue}
              onChange={(e) => setIssue(e.target.value)}
            />
          </FormGrid>
        </FormGrid>
      </Container>
      <Box sx={{ textAlign: 'center' }}>
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          size="large"
          onClick={handleSubmit}
        >
          Send
        </Button>
      </Box>
    </>
  );
};
export default BookingForm;
