/*
 * @Author: Fangyu Kung
 * @Date: 2024-03-14 20:59:36
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-05-03 10:16:16
 * @FilePath: /csc8019_team_project_frontend/src/page/signin/SignIn.jsx
 */

import * as React from 'react';
import { useState } from 'react';
import service from '../../api/axios';
import { useAuth } from '../../provider/AuthProvider';
// Mui components
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
// Customize
import Copyright from '../../common/Copyright';
import SignInForm from '../../components/SignInForm';
import { parseJwt } from '../../helpers/jwt';
import theme from '../../style/theme';

const SignIn = () => {
  const { setToken } = useAuth();
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await service.post('/login', {
        userID: userId,
        password: password,
      });
      const { accessToken } = response;
      console.log(response);

      // save accessToken in Local Storage
      localStorage.setItem('accessToken', accessToken);
      setToken(accessToken);
      const userType = parseJwt(accessToken).userType;
      if (userType === 'student') {
        window.location.href = '/modules';
      } else {
        window.location.href = '/staff/modules';
      }
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            position: 'relative',
            backgroundImage:
              'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/signin_background.png)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <Typography
            component="h1"
            variant="h3"
            sx={{
              fontWeight: 'bold',
              color: '#FFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '65%',
            }}
          >
            Dyson Student Management System
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 4,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img width={200} src="./images/Dyson_Logo.png" alt="Logo" />
            <Typography component="h2" variant="h5">
              Sign in
            </Typography>
          </Box>
          <Box
            sx={{
              my: 4,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <SignInForm
              handleSubmit={handleSubmit}
              setPassword={setPassword}
              setUserId={setUserId}
              userId={userId}
              password={password}
            />

            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default SignIn;
