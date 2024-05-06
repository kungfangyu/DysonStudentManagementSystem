/*
 * @Author: Fangyu Kung
 * @Date: 2024-04-23 13:38:08
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-05-06 15:18:39
 * @FilePath: /csc8019_team_project_frontend/src/components/CourseOperationTable.jsx
 */
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Chip from '@mui/material/Chip';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';
import { useState } from 'react';
import { StyledTableCell, StyledTableRow } from '../style/tableStyle';

import PopupEditStatus from '../components/PopupEditStatus';

import { getStatusColor } from '../helpers/helperFunction';

const CourseOperationTable = ({ moduleData }) => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedModuleId, setSelectedModuleId] = useState('');
  const [currentStatus, setCurrentStatus] = useState('');

  const handlePopupEdit = (moduleId, status) => {
    setSelectedModuleId(moduleId);
    setCurrentStatus(status);
    setPopupOpen(true);
  };
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 600 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Module ID</StyledTableCell>
              <StyledTableCell align="left">Module Name</StyledTableCell>
              <StyledTableCell align="left">Status</StyledTableCell>
              <StyledTableCell align="right">Details</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {moduleData.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {row.moduleID}
                </StyledTableCell>
                <StyledTableCell align="left">{row.moduleName}</StyledTableCell>
                <StyledTableCell align="left">
                  <Chip
                    label={row.status}
                    color={getStatusColor(row.status)}
                    onClick={() => handlePopupEdit(row.id, row.status)}
                  />
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Link href={`modules/${row.moduleID}`} underline="none">
                    <RemoveRedEyeIcon />
                  </Link>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <PopupEditStatus
        open={popupOpen}
        moduleId={selectedModuleId}
        initStatus={currentStatus} // 使用currentStatus作为初始状态
        handlePopupEditClose={() => setPopupOpen(false)}
      />
    </>
  );
};

export default CourseOperationTable;
