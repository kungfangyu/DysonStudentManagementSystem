/*
 * @Author: Fangyu Kung
 * @Date: 2024-04-30 18:46:09
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-05-01 13:11:48
 * @FilePath: /csc8019_team_project_frontend/src/helpers/jwt.js
 */
//幫我寫一個解析token的function
export const parseJwt = (token) => {
  const strings = token.split('.');
  const jwtInfo = JSON.parse(
    decodeURIComponent(
      escape(window.atob(strings[1].replace(/-/g, '+').replace(/_/g, '/'))),
    ),
  );
  return jwtInfo;
};
