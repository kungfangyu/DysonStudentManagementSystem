/*
 * @Author: Fangyu Kung
 * @Date: 2024-04-15 16:43:40
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-05-08 20:01:37
 * @FilePath: /csc8019_team_project_frontend/src/components/modules/PopupAddCoursework.jsx
 */
import dayjs from 'dayjs';

import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { FormLabel, OutlinedInput } from '@mui/material';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControlLabel from '@mui/material/FormControlLabel';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import * as React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { uploadFile } from '../../api/fileUpload';
import { postCoursework } from '../../api/modules';
import { FormGrid, VisuallyHiddenInput } from '../../style/formStyle';

const PopupAddCoursework = ({ open, handlePopupClose, fetchCoursework }) => {
  const { moduleId } = useParams();
  const [selectedFile, setSelectedFile] = useState();
  const [fileName, setFileName] = useState('');
  const [postDate, setPostDate] = useState(dayjs(Date.now()));
  const [percentage, setPercentage] = useState(0);
  const [isPublished, setIsPublished] = useState(false);

  //Upload file to the server
  const filepath = `module/${moduleId}/cousework`;
  const handleUpload = async () => {
    if (!selectedFile) {
      console.error('No file selected');
      return;
    }
    const formData = new FormData();
    formData.append('file', selectedFile);
    try {
      const response = await uploadFile(
        selectedFile,
        filepath,
        selectedFile.name,
      );
      setFileName(response.data.fileName);
      handleClose();
    } catch (error) {
      console.log('Error uploading file');
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setFileName(file.name);
      handleUpload();
    }
  };

  const handleClose = () => {
    handlePopupClose && handlePopupClose();
  };

  //Post the coursework to the server
  const handleAdd = async () => {
    try {
      const courseworkData = {
        moduleId: moduleId,
        description: selectedFile.name,
        deadline: postDate,
        percentageOfModule: percentage,
        isCourseworkPublished: isPublished,
      };

      await postCoursework(courseworkData);
      handleClose();
      fetchCoursework();
    } catch (error) {
      console.log('Error creating announcement');
    }
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{ sx: { width: '300px' } }}
      >
        <DialogTitle id="alert-dialog-title">{'Upload Coursework'}</DialogTitle>
        <DialogContent>
          <FormGrid item xs={12} md={6}>
            <Button
              component="label"
              variant="contained"
              startIcon={<CloudUploadIcon onClick={handleUpload} />}
            >
              Upload file
              <VisuallyHiddenInput type="file" onChange={handleFileChange} />
            </Button>
            {fileName && <p>Selected file: {fileName}</p>}
          </FormGrid>
          <FormGrid item xs={12} md={4} mt={2}>
            <FormLabel htmlFor="percentage" required>
              Percentage of module
            </FormLabel>
            <OutlinedInput
              id="percentage"
              name="percentage"
              value={percentage}
              type="number"
              onChange={(e) => setPercentage(e.target.value)}
              required
            />
          </FormGrid>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer
              components={['DatePicker', 'DatePicker']}
              sx={{
                mt: 2,
              }}
            >
              <DatePicker
                label="Start"
                defaultValue={postDate}
                onChange={(newValue) => setPostDate(newValue)}
              />
            </DemoContainer>
          </LocalizationProvider>
          <FormControlLabel
            mt={2}
            control={
              <Checkbox
                checked={isPublished}
                onChange={(e) =>
                  setIsPublished(e.target.value === 'on' ? true : false)
                }
              />
            }
            label="Publish"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAdd} autoFocus variant="contained">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default PopupAddCoursework;
