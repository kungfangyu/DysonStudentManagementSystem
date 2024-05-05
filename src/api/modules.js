/*
 * @Author: Fangyu Kung
 * @Date: 2024-04-30 17:48:02
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-05-05 20:01:20
 * @FilePath: /csc8019_team_project_frontend/src/api/modules.js
 */
import service from './axios';

export const getStudentModules = async (studentID) => {
  return await service({
    url: `studentModuleGrade/getModulesDetailsByStudentID/${studentID}`,
    method: 'get',
  });
};

export const getStaffModules = async (staffID) => {
  return await service({
    url: `moduleStaff/getModulesDetailsByStaffID/${staffID}`,
    method: 'get',
  });
};

export const getCourseworks = async (moduleID) => {
  return await service({
    url: `/Coursework/${moduleID}`,
    method: 'get',
  });
};

export const getCoursesworkDetails = async (moduleID, courseworkID) => {
  return await service({
    url: `/Coursework/${moduleID}/${courseworkID}`,
    method: 'get',
  });
};

export const getExams = async (moduleID) => {
  return await service({
    url: `/exam/by-moduleID/${moduleID}`,
    method: 'get',
  });
};

export const getExamsDetails = async (moduleID, examID) => {
  return await service({
    url: `/exam/${moduleID}/${examID}`,
    method: 'get',
  });
};

export const getModuleAnnouncements = async (moduleID) => {
  return await service({
    url: `/moduleAnnouncement/${moduleID}`,
    method: 'get',
  });
};

export const postModuleAnnouncement = async (announcement) => {
  return await service({
    url: `/moduleAnnouncement`,
    method: 'post',
    data: announcement,
  });
};

export const getModuleDetails = async (moduleID) => {
  return await service({
    url: `/moduleDetails/${moduleID}`,
    method: 'get',
  });
};
