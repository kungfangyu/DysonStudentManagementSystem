/*
 * @Author: Fangyu Kung
 * @Date: 2024-04-25 16:18:58
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-04-25 16:49:47
 * @FilePath: /csc8019_team_project_frontend/src/style/cardStyle.js
 */
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

export const CardPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  ...theme.typography.body2,
  marginTop: theme.spacing(6),
}));

export const ModuleEditCardPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  ...theme.typography.body2,
  marginTop: theme.spacing(2),
}));
