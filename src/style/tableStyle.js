/*
 * @Author: Fangyu Kung
 * @Date: 2024-04-23 13:46:09
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-04-23 13:46:24
 * @FilePath: /csc8019_team_project_frontend/src/style/tableStyle.js
 */
import { styled } from '@mui/material/styles';

import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
