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

import FormGrid from '../style/formStyle';

const titleSelect = ['Miss', 'Mrs', 'Mr', 'Dr.', 'Prof'];

const UserInfoForm = () => {
  const [title, setTitle] = useState([]);
  const [emergencyTitle, setEmergencyTitle] = useState([]);
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleEmergencyTitleChange = (event) => {
    setEmergencyTitle(event.target.value);
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
          <input
            type="file"
            id="fileInput"
            style={{ display: 'none' }}
            // onChange={(e) => handleFileUpload(e.target.files)}
          />

          <Button
            role={undefined}
            variant="contained"
            tabIndex={-1}
            onClick={() => document.getElementById('fileInput').click()}
            endIcon={<PhotoCamera />}
          >
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

          <FormGrid item xs={8}>
            <FormLabel htmlFor="address" required>
              Address
            </FormLabel>
            <OutlinedInput
              id="address"
              name="address"
              type="address"
              required
            />
          </FormGrid>
          <FormGrid item xs={4}>
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
        </Grid>
      </Container>

      {/*  Emergency Contact Start-------------------------------------*/}
      <Container>
        <h2>Emergency Contact</h2>
      </Container>
      <Container
        sx={{
          mt: 4,
          mb: 4,
          display: 'flex',
          justifyContent: 'end',
        }}
      >
        <Grid container spacing={1} sx={{ justifyContent: 'end' }}>
          <FormGrid item xs={12} md={4}>
            <FormLabel htmlFor="e-first-name" required>
              First name
            </FormLabel>
            <OutlinedInput
              id="e-first-name"
              name="e-first-name"
              type="name"
              placeholder=""
              required
            />
          </FormGrid>
          <FormGrid item xs={12} md={4}>
            <FormLabel htmlFor="e-last-name">Last name</FormLabel>
            <OutlinedInput
              id="e-last-name"
              name="e-last-name"
              type="e-last-name"
              placeholder=""
              required
            />
          </FormGrid>
          <FormGrid item xs={12} md={4}>
            <FormLabel htmlFor="e-title">Title</FormLabel>
            <Select
              displayEmpty
              value={emergencyTitle}
              onChange={handleEmergencyTitleChange}
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
            <FormLabel htmlFor="relation">Relation</FormLabel>
            <OutlinedInput id="relation" name="relation" type="" required />
          </FormGrid>
          <FormGrid item xs={12} md={4}>
            <FormLabel htmlFor="e-email" required>
              Email
            </FormLabel>
            <OutlinedInput
              id="e-email"
              name="e-email"
              type="email"
              placeholder="personal@email.com"
              autoComplete="personal@email.com"
              required
            />
          </FormGrid>
          <FormGrid item xs={12} md={4}>
            <FormLabel htmlFor="e-phone" required>
              Phone
            </FormLabel>
            <OutlinedInput
              id="e-phone"
              name="e-phone"
              type="phone"
              placeholder="+44 07123456789"
              autoComplete="+44 07123456789"
              required
            />
          </FormGrid>

          <FormGrid item xs={8}>
            <FormLabel htmlFor="e-address" required>
              Address
            </FormLabel>
            <OutlinedInput
              id="e-address"
              name="e-address"
              type="e-address"
              placeholder=""
              required
            />
          </FormGrid>
          <FormGrid item xs={4}>
            <FormLabel htmlFor="e-zip" required>
              Zip / Postal code
            </FormLabel>
            <OutlinedInput
              id="e-zip"
              name="e-zip"
              type="e-zip"
              placeholder=""
              required
            />
          </FormGrid>
        </Grid>
      </Container>
      {/*  Emergency Contact End-------------------------------------*/}
    </>
  );
};

export default UserInfoForm;
