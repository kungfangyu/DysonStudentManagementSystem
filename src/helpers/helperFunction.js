/*
 * @Author: Fangyu Kung
 * @Date: 2024-03-15 17:28:39
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-05-01 14:10:08
 * @FilePath: /csc8019_team_project_frontend/src/helpers/helperFunction.js
 */
// code the helper functions

export const getStatusColor = (status) => {
  switch (status) {
    case 'register':
      return 'primary';
    case 'enrolled':
      return 'secondary';
    case 'suspended':
      return 'warning';
    case 'withdrawn':
      return 'error';
    default:
      return 'default';
  }
};
