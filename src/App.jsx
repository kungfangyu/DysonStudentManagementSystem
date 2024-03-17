/*
 * @Author: Fangyu Kung
 * @Date: 2024-03-14 20:59:36
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-03-17 16:39:32
 * @FilePath: /csc8019_team_project_frontend/src/App.jsx
 */

import React, { Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import SignIn from './page/SignIn';
import UserInfo from './page/UserInfo';
import ModuleList from './page/students/modules/ModuleList';
import TimeTable from './page/students/timeTable/TimeTable';

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/modules" element={<ModuleList />} />
        <Route path="/timetable" element={<TimeTable />} />
        <Route path="/user" element={<UserInfo />} />
      </Routes>
    </Suspense>
  </Router>
);

export default App;
