/*
 * @Author: Fangyu Kung
 * @Date: 2024-04-15 16:43:40
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-04-15 16:58:05
 * @FilePath: /csc8019_team_project_frontend/src/components/PopupExtensions.jsx
 */
import * as React from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const PopupExtensions = ({ open, handlePopupExtensionsClose, handlePopUpExtensionsSubmit }) => {
  const handleClose = () => {
    handlePopupExtensionsClose && handlePopupExtensionsClose();
  };

  const handleAgree = async () => {
    handlePopUpExtensionsSubmit && handlePopUpExtensionsSubmit();
  }

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {'Are you sure to extend ?'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            It cannot be change when you confirm.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleAgree} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default PopupExtensions;
