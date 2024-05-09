/*
 * @Author: Fangyu Kung
 * @Date: 2024-04-15 16:43:40
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-05-08 20:02:09
 * @FilePath: /csc8019_team_project_frontend/src/components/modules/PopupAddAnnouncement.jsx
 */
import dayjs from 'dayjs';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import { useCallback, useState } from 'react';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { postModuleAnnouncement } from '../../api/modules';
import { parseJwt } from '../../helpers/jwt';
import { FormGrid } from '../../style/formStyle';

const PopupAddAnnouncement = ({
  moduleId,
  open,
  handlePopupClose,
  fetchModuleAnnouncements,
}) => {
  const token = localStorage.getItem('accessToken');
  const parse = parseJwt(token);
  const userId = parse.userID;
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [postDate, setPostDate] = useState(dayjs(Date.now()));

  const handleClose = () => {
    handlePopupClose && handlePopupClose();
  };

  // Create announcement function
  const createAnnouncement = useCallback(async () => {
    try {
      const announcementData = {
        description: description,
        title: title,
        moduleID: moduleId,
        staffID: userId,
        datePosted: postDate,
      };

      await postModuleAnnouncement(announcementData);
      setTitle('');
      setDescription('');
      fetchModuleAnnouncements();
      handleClose();
    } catch (error) {
      console.log('Error creating announcement');
    }
  }, [fetchModuleAnnouncements, moduleId, description, title]);

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{ sx: { width: '500px' } }}
      >
        <DialogTitle id="alert-dialog-title">{'Add Announcement'}</DialogTitle>
        <DialogContent>
          <FormGrid item xs={12} md={6} mt={2}>
            <TextField
              label="Title"
              value={title}
              placeholder="Type here."
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormGrid>
          <FormGrid item xs={12} md={6} mt={2}>
            <TextField
              multiline
              rows={9}
              maxRows={10}
              value={description}
              placeholder="Type here."
              onChange={(e) => setDescription(e.target.value)}
            />
          </FormGrid>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer
              components={['DatePicker', 'DatePicker']}
              sx={{
                mt: 1,
              }}
            >
              <DatePicker
                label="Start"
                defaultValue={postDate}
                onChange={(newValue) => setPostDate(newValue)}
              />
            </DemoContainer>
          </LocalizationProvider>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={createAnnouncement} autoFocus variant="contained">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default PopupAddAnnouncement;
