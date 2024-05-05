/*
 * @Author: Fangyu Kung
 * @Date: 2024-03-18 17:12:59
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-04-26 22:45:09
 * @FilePath: /csc8019_team_project_frontend/src/style/formStyle.js
 */
import Grid from '@mui/material/Grid';
import { styled } from '@mui/system';

export const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export const VisuallyHiddenInput = styled('input')({
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
