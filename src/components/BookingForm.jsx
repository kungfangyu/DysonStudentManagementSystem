/*
 * @Author: Fangyu Kung
 * @Date: 2024-03-18 17:03:00
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-04-22 10:57:30
 * @FilePath: /csc8019_team_project_frontend/src/components/BookingForm.jsx
 */

import * as React from 'react';
import { useState } from 'react';

import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

import Container from '@mui/material/Container';
import PopupBookingAndAbsence from '../components/PopupBookingAndAbsence';
import FormGrid from '../style/formStyle';

const BookingForm = () => {
  const [popupOpen, setPopupOpen] = useState(false);

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
          <FormGrid item xs={12}>
            <FormLabel htmlFor="email">Booking Issue</FormLabel>
            <TextField
              placeholder="Type your issue here."
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

export default BookingForm;
