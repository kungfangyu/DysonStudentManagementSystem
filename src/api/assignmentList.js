/*
 * @Author: Jack Burnett
 * @Date: 2024-05-06 17:04:00
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-05-06 21:39:34
 * @FilePath: /csc8019_team_project_frontend/src/api/assignmentList.js
 */
import service from './axios';

export const getAssignmentList = async (moduleID) => {
  return await service({
    url: `Coursework/${moduleID}`,
    method: 'get',
  });
};
