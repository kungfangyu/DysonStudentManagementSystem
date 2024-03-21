/*
 * @Author: Fangyu Kung
 * @Date: 2024-03-21 12:35:22
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-03-21 13:17:06
 * @FilePath: /csc8019_team_project_frontend/src/page/signin/ForgetPassword.jsx
 */
import * as React from 'react';
import { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

import theme from '../../style/theme';

const ForgetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleNewPasswordChange = (event) => {
    const { value } = event.target;
    setNewPassword(value);
  };

  const handleConfirmPasswordChange = (event) => {
    const { value } = event.target;
    setConfirmPassword(value);
  };

  const isSamePassword = newPassword === confirmPassword;

  const handleSubmit = (event) => {
    event.preventDefault();
    // clear input
    setNewPassword('');
    setConfirmPassword('');
  };
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <Box
          sx={{
            my: 4,
            mx: 4,
            display: 'block',
            justifyContent: 'center',
            margin: '0 auto',
          }}
        >
          {' '}
          <Box
            sx={{
              my: 4,
              mx: 4,
              textAlign: 'center',
            }}
          >
            <img
              textAlign="center"
              width="300px"
              src="./images/Dyson_Logo.png"
              alt="Logo"
            />
          </Box>
          <TextField
            margin="normal"
            required
            fullWidth
            type="password"
            id="newPassword"
            label="New Password"
            name="newPassword"
            autoComplete="newPassword"
            autoFocus
            value={newPassword}
            onChange={handleNewPasswordChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            autoComplete="current-password"
            onChange={handleConfirmPasswordChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSubmit}
            disabled={!isSamePassword}
          >
            Confirm
          </Button>
        </Box>
      </Grid>
    </ThemeProvider>
  );
};

export default ForgetPassword;
