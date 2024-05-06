/*
 * @Author: Fangyu Kung
 * @Date: 2024-03-18 17:03:00
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-04-26 22:46:53
 * @FilePath: /csc8019_team_project_frontend/src/components/BookingForm.jsx
 */

import * as React from 'react';
import { useEffect, useState } from 'react';

import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';

import Container from '@mui/material/Container';
import { FormGrid } from '../style/formStyle';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import { parseJwt } from '../helpers/jwt';
import { getTutorFromStudentID } from '../api/StudentTutor';
import { getUserPrimaryData } from '../api/user';
import { getPimaryData } from '../api/PrimaryData';

const BookingForm = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  let [userID, setUserId] = useState('');
  let [tutorID, setTutorID] = useState('');
  let [primData, setPrimData] = useState([]);

  useEffect(() => {
    let token = localStorage.getItem('accessToken');
    if (token) {
      let parsedToken = parseJwt(token);
      setUserId(parsedToken.userID);

      getTutorFromStudentID(parsedToken.userID)
        .then((response) => {
          setTutorID(response.data);

          return getPimaryData(tutorID);
        })
        .then((response) => {
          console.log('getUserPrimaryData response:', response);
          setPrimData('S001');
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

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
        <FormGrid container spacing={1}>
          <FormGrid item xs={12} md={5.5}>
            <FormLabel htmlFor="primData">Tutor: </FormLabel>
            <Select
              displayEmpty
              value={primData}
              input={<OutlinedInput />}
              renderValue={(selected) => {
                if (!selected) {
                  return <em>Select Module</em>;
                }
                return primData || <em>Select Module</em>;
              }}
              sx={{
                mt: 2,
              }}
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value="">Select Module</MenuItem>
              {primData.map(function (name) {
                return (
                  <MenuItem key={name.fullName} value={name.fullName}>
                    {name.fullName}
                  </MenuItem>
                );
              })}
            </Select>
          </FormGrid>
          <FormGrid item xs={12} md={5.5}>
            <FormLabel htmlFor="absenceTime">Absence Time:</FormLabel>
            <Select
              displayEmpty
              value={''}
              onChange={() => {}}
              input={<OutlinedInput />}
              sx={{ mt: 2 }}
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value={''}>Select Time</MenuItem>
            </Select>
          </FormGrid>
          <FormGrid item xs={12} md={5.5}>
            <FormLabel htmlFor="absenceTime">LessonID:</FormLabel>
            <Select
              displayEmpty
              value={''}
              input={<OutlinedInput readOnly />} // Make the input read-only
              sx={{ mt: 2 }}
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value={''}></MenuItem>
            </Select>
          </FormGrid>
          <FormGrid item xs={12} sx={{ mt: 4 }}>
            <FormLabel htmlFor="reason">Absence Reason</FormLabel>
            <TextField
              placeholder="Type your reason here."
              multiline
              rows={4}
              maxRows={4}
              value={''}
              onChange={() => {}}
            />
          </FormGrid>
        </FormGrid>
      </Container>
      <Box sx={{ textAlign: 'center' }}>
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          size="large"
          onClick={() => {}}
        >
          Send
        </Button>
      </Box>
    </>
  );
};
export default BookingForm;
