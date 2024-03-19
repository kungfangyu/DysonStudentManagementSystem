/*
 * @Author: Fangyu Kung
 * @Date: 2024-03-18 17:03:00
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-03-19 16:57:29
 * @FilePath: /csc8019_team_project_frontend/src/components/BookingForm.jsx
 */

import * as React from 'react';

import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

import Container from '@mui/material/Container';
import FormGrid from '../style/formStyle';

const BookingForm = () => {
  return (
    <>
      <Container
        sx={{
          mt: 4,
          mb: 4,
          display: 'flex',
          justifyContent: 'center',
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
        <Button variant="contained" endIcon={<SendIcon />} size="large">
          Send
        </Button>
      </Box>
    </>
  );
};

export default BookingForm;
