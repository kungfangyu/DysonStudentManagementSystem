/*
 * @Author: Jack Burnett
 * @Date: 2024-05-06 17:04:00
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-05-06 17:04:00
 * @FilePath: /csc8019_team_project_frontend/src/api/assignmentList.js
 */
import service from './axios';

export const getAssignmentList = async (moduleID, userID) => {
  return await service({
    url: `StudentCourseworkGrade/${moduleID}/${userID}`,
    method: 'get',
  });
};