/*
 * @Author: Fangyu Kung
 * @Date: 2024-03-14 20:59:36
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-04-09 07:54:23
 * @FilePath: /csc8019_team_project_frontend/src/page/signin/SignIn.jsx
 */

import * as React from 'react';
import { useState } from 'react';

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
import theme from '../../style/theme';

export default function SignIn() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      userId: userId,
      password: password,
    });
    // clear input
    setUserId('');
    setPassword('');
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
            {/* <TabContext value={role}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="Student" value="1" />
                  <Tab label="Staff" value="0" />
                </TabList>
              </Box>
              <TabPanel value="1"> */}
            <SignInForm
              handleSubmit={handleSubmit}
              setPassword={setPassword}
              setUserId={setUserId}
              userId={userId}
              password={password}
            />
            {/* </TabPanel>
              <TabPanel value="0">
                <SignInForm
                  handleSubmit={handleSubmit}
                  setPassword={setPassword}
                  setUserId={setUserId}
                  userId={userId}
                  password={password}
                />
              </TabPanel>
            </TabContext> */}

            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
