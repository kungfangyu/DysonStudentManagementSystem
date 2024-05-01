/*
 * @Author: Fangyu Kung
 * @Date: 2024-04-27 12:30:09
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-05-01 13:13:50
 * @FilePath: /csc8019_team_project_frontend/src/api/axios.js
 */

import request from 'axios';

const service = request.create({
  baseURL: 'http://localhost:8080/api/',
  timeout: 50000,
});

/*
 * Request interceptor: A mechanism for processing requests before they are sent, whereby a token is uniformly added to the request header and the request parameters are uniformly encrypted.
 */
service.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token != null && typeof token != 'undefined') {
      config.headers['Authorization'] = token;
    }

    // if (token == null) window.location.href = '/signin';
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

/*
 * Response interceptor: Evaluates response information and redirects to the login page in case of errors.
 */
service.interceptors.response.use((response) => {
  const res = response.data;
  //response status
  if (!res) {
    window.location.href = '/signin';
  }
  // if (res.data == null)
  return res;
});

export default service;
