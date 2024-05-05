/*
 * @Author: Fangyu Kung
 * @Date: 2024-05-04 15:36:06
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-05-04 15:40:10
 * @FilePath: /csc8019_team_project_frontend/src/api/studentList.js
 */
import service from './axios';

export const getStudentList = async (moduleID) => {
  return await service({
    url: `studentModuleGrade/getAdminModuleStudents/${moduleID}`,
    method: 'get',
  });
};
