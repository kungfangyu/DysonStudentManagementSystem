/*
 * @Author: Fangyu Kung
 * @Date: 2024-03-14 20:59:36
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-03-21 12:55:30
 * @FilePath: /csc8019_team_project_frontend/src/App.jsx
 */

import React, { Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import ForgetPassword from './page/signin/ForgetPassword';
import SignIn from './page/signin/SignIn';
import BookingAndAbsence from './page/students/bookingAndAbsence/BookingAndAbsence';
import ModuleList from './page/students/modules/ModuleList';
import TimeTable from './page/students/timeTable/TimeTable';
import UserInfo from './page/UserInfo';

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/modules" element={<ModuleList />} />
        <Route path="/timetable" element={<TimeTable />} />
        <Route path="/bookingandabsence" element={<BookingAndAbsence />} />

        <Route path="/user" element={<UserInfo />} />
        <Route path="/forget" element={<ForgetPassword />} />
      </Routes>
    </Suspense>
  </Router>
);

export default App;
