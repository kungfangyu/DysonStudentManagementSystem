/*
 * @Author: Fangyu Kung
 * @Date: 2024-05-01 13:45:32
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-05-01 14:30:11
 * @FilePath: /csc8019_team_project_frontend/src/components/StudentListTable.jsx
 */
import React from 'react';
// import { useState } from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Chip from '@mui/material/Chip';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { getStatusColor } from '../helpers/helperFunction';
import { StyledTableCell, StyledTableRow } from '../style/tableStyle';

const StudentListTable = () => {
  const studentData = [
    {
      id: 'STU001',
      name: 'Sam Smith',
      email: 'studentDyson@gmail.com',
      grade: 80,
      programmeName: 'Advanced Java',
      status: 'enrolled',
      detailLink: '/modules/CSC8019',
    },
    {
      id: 'STU002',
      name: 'Sam Smith',
      email: 'studentDyson@gmail.com',
      grade: 80,
      programmeName: 'Advanced Java',
      status: 'enrolled',
      detailLink: '/modules/CSC8012',
    },
    {
      id: 'STU003',
      name: 'Sam Smith',
      email: 'studentDyson@gmail.com',
      grade: 80,
      programmeName: 'Advanced Java',
      status: 'withdraw',
      detailLink: '/modules/CSC8022',
    },
    {
      id: 'STU004',
      name: 'Sam Smith',
      email: 'studentDyson@gmail.com',
      grade: 80,
      programmeName: 'Advanced Java',
      status: 'suspended',
      detailLink: '/modules/CSC8015',
    },
  ];

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 600 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Student ID</StyledTableCell>
              <StyledTableCell align="left">Student Name</StyledTableCell>
              <StyledTableCell align="left">Email</StyledTableCell>
              <StyledTableCell align="left">Grade</StyledTableCell>
              <StyledTableCell align="left">Status</StyledTableCell>
              <StyledTableCell align="right">Details</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {studentData.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {row.id}
                </StyledTableCell>
                <StyledTableCell align="left">{row.name}</StyledTableCell>
                <StyledTableCell align="left">{row.email}</StyledTableCell>
                <StyledTableCell align="left">{row.grade}</StyledTableCell>
                <StyledTableCell align="left">
                  <Chip
                    label={row.status}
                    color={getStatusColor(row.status)}
                    // onClick={() => handlePopupEdit(row.id, row.status)}
                  />
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Link href={row.detailLink} underline="none">
                    <RemoveRedEyeIcon />
                  </Link>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <PopupEditStatus
        open={popupOpen}
        moduleId={selectedModuleId}
        initStatus={currentStatus} // 使用currentStatus作为初始状态
        handlePopupEditClose={() => setPopupOpen(false)}
      /> */}
    </>
  );
};

export default StudentListTable;
