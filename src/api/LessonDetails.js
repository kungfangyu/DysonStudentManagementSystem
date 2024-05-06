import axios from 'axios';

const REST_API_BASE_URL_LESSON_BY_MODULEID =
  'http://localhost:8080/api/lesson/by-moduleID/';

export const lessonByModuleID = (moduleId) =>
  axios.get(REST_API_BASE_URL_LESSON_BY_MODULEID + moduleId);
