/*
 * @Author: Fangyu Kung
 * @Date: 2024-04-30 17:48:02
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-05-08 20:00:37
 * @FilePath: /csc8019_team_project_frontend/src/api/modules.js
 */
import service from './axios';

// All of API methods related to modules

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

export const postCoursework = async (coursework) => {
  return await service({
    url: `/Coursework`,
    method: 'post',
    data: coursework,
  });
};

export const deleteCoursework = async (moduleID, courseworkID) => {
  return await service({
    url: `/Coursework/${moduleID}/${courseworkID}`,
    method: 'delete',
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

export const postModuleMaterial = async (material) => {
  return await service({
    url: `/moduleMaterialFile`,
    method: 'post',
    data: material,
  });
};

export const getModuleMaterial = async (moduleID) => {
  return await service({
    url: `/moduleMaterial/${moduleID}`,
    method: 'get',
  });
};
