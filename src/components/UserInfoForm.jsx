import * as React from 'react';
import { useState } from 'react';

import { PhotoCamera } from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';

import { styled } from '@mui/system';

const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const titleSelect = ['Miss', 'Mrs', 'Mr', 'Dr.', 'Prof'];
const UserInfoForm = () => {
  const [title, setTitle] = useState([]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <>
      <Container>
        <h2>Update Information</h2>
      </Container>
      <Container
        sx={{
          mt: 4,
          mb: 4,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <FormGrid item xs={12} md={12} mr={2}>
          <Grid justifyItems="center" display="grid">
            <Avatar
              alt="User Name"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 100, height: 100, mb: 2 }}
            />
          </Grid>
          <Button
            role={undefined}
            variant="contained"
            tabIndex={-1}
            endIcon={<PhotoCamera />}
          >
            <VisuallyHiddenInput type="file" />
            Update
          </Button>
        </FormGrid>

        <Grid container spacing={1}>
          <FormGrid item xs={12} md={4}>
            <FormLabel htmlFor="first-name" required>
              First name
            </FormLabel>
            <OutlinedInput
              id="first-name"
              name="first-name"
              type="name"
              placeholder="John"
              autoComplete="first name"
              required
            />
          </FormGrid>
          <FormGrid item xs={12} md={4}>
            <FormLabel htmlFor="middle-name">Middle name (optional)</FormLabel>
            <OutlinedInput
              id="middle-name"
              name="middle-name"
              type="middle-name"
              placeholder="Snow"
              autoComplete="middle name"
              required
            />
          </FormGrid>
          <FormGrid item xs={12} md={4}>
            <FormLabel htmlFor="last-name" required>
              Last name
            </FormLabel>
            <OutlinedInput
              id="last-name"
              name="last-name"
              type="last-name"
              placeholder="Snow"
              autoComplete="last name"
              required
            />
          </FormGrid>

          <FormGrid item xs={12} md={4}>
            <FormLabel htmlFor="email">Title</FormLabel>
            <Select
              displayEmpty
              value={title}
              onChange={handleTitleChange}
              input={<OutlinedInput />}
              renderValue={(selected) => {
                if (selected.length === 0) {
                  return <em>Title</em>;
                }
                return selected;
              }}
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem disabled value="">
                <em>Title</em>
              </MenuItem>
              {titleSelect.map((title) => (
                <MenuItem key={title} value={title}>
                  {title}
                </MenuItem>
              ))}
            </Select>
          </FormGrid>
          <FormGrid item xs={12} md={4}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <OutlinedInput
              id="email"
              name="email"
              type="email"
              placeholder="personal@email.com"
              autoComplete="personal@email.com"
              required
            />
          </FormGrid>
          <FormGrid item xs={12} md={4}>
            <FormLabel htmlFor="address1" required>
              Phone
            </FormLabel>
            <OutlinedInput
              id="phone"
              name="phone"
              type="phone"
              placeholder="+44 07123456789"
              autoComplete="+44 07123456789"
              required
            />
          </FormGrid>
          <FormGrid item xs={12}>
            <FormLabel htmlFor="address1" required>
              Address line 1
            </FormLabel>
            <OutlinedInput
              id="address1"
              name="address1"
              type="address1"
              placeholder="Street name and number"
              autoComplete="shipping address-line1"
              required
            />
          </FormGrid>
          <FormGrid item xs={12}>
            <FormLabel htmlFor="address2">Address line 2</FormLabel>
            <OutlinedInput
              id="address2"
              name="address2"
              type="address2"
              placeholder="Apartment, suite, unit, etc. (optional)"
              autoComplete="shipping address-line2"
              required
            />
          </FormGrid>
          <FormGrid item xs={6}>
            <FormLabel htmlFor="city" required>
              City
            </FormLabel>
            <OutlinedInput
              id="city"
              name="city"
              type="city"
              placeholder="New York"
              autoComplete="City"
              required
            />
          </FormGrid>
          <FormGrid item xs={6}>
            <FormLabel htmlFor="state" required>
              State
            </FormLabel>
            <OutlinedInput
              id="state"
              name="state"
              type="state"
              placeholder="NY"
              autoComplete="State"
              required
            />
          </FormGrid>
          <FormGrid item xs={6}>
            <FormLabel htmlFor="zip" required>
              Zip / Postal code
            </FormLabel>
            <OutlinedInput
              id="zip"
              name="zip"
              type="zip"
              placeholder="12345"
              autoComplete="shipping postal-code"
              required
            />
          </FormGrid>
          <FormGrid item xs={6}>
            <FormLabel htmlFor="country" required>
              Country
            </FormLabel>
            <OutlinedInput
              id="country"
              name="country"
              type="country"
              placeholder="United States"
              autoComplete="shipping country"
              required
            />
          </FormGrid>
        </Grid>
      </Container>
      <Container>
        <h2>Update Password</h2>
      </Container>
      <Container
        sx={{
          mt: 4,
          mb: 4,
          display: 'flex',
          justifyContent: 'end',
        }}
      >
        <Grid container spacing={1}>
          <FormGrid item xs={12} md={6}>
            <FormLabel htmlFor="newPassword" required>
              Change Password
            </FormLabel>
            <OutlinedInput
              id="newPassword"
              name="newPassword"
              type="password"
            />
          </FormGrid>
          <FormGrid item xs={12} md={6}>
            <FormLabel htmlFor="confirmPassword" required>
              Confirm Password
            </FormLabel>
            <OutlinedInput
              id="confirmPassword"
              name="confirmPassword"
              type="password"
            />
          </FormGrid>
        </Grid>
      </Container>
    </>
  );
};

export default UserInfoForm;
