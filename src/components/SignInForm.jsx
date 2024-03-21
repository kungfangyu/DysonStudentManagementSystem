/*
 * @Author: Fangyu Kung
 * @Date: 2024-03-20 22:39:40
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-03-21 12:55:47
 * @FilePath: /csc8019_team_project_frontend/src/components/SignInForm.jsx
 */
import * as React from 'react';

// Mui components
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';

const SignInForm = ({
  userId,
  password,
  setUserId,
  setPassword,
  handleSubmit,
}) => {
  return (
    <Box component="form" noValidate sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="userId"
        label="User ID"
        name="userId"
        autoComplete="userId"
        autoFocus
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        value={password}
        autoComplete="current-password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={handleSubmit}
      >
        Sign In
      </Button>
      <Grid container>
        <Grid item xs>
          <Link href="/forget" variant="">
            Forgot password?
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SignInForm;
