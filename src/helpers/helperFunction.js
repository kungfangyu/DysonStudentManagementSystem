/*
 * @Author: Fangyu Kung
 * @Date: 2024-03-15 17:28:39
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-04-23 17:52:58
 * @FilePath: /csc8019_team_project_frontend/src/helpers/helperFunction.js
 */
// code the helper functions

//status: 1=> Register, 2=> Enroll, 3 => Suspend, 4=> Withdraw
export const getStatusText = (status) => {
  switch (status) {
    case 1:
      return 'Register';
    case 2:
      return 'Enroll';
    case 3:
      return 'Suspend';
    case 4:
      return 'Withdraw';
    default:
      return 'Unknown';
  }
};
export const getStatusColor = (status) => {
  switch (status) {
    case 1:
      return 'primary';
    case 2:
      return 'secondary';
    case 3:
      return 'warning';
    case 4:
      return 'error';
    default:
      return 'default';
  }
};
