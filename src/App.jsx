/*
 * @Author: Fangyu Kung
 * @Date: 2024-03-14 20:59:36
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-04-22 22:52:49
 * @FilePath: /csc8019_team_project_frontend/src/App.jsx
 */

import React, { Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import ForgetPassword from './page/signin/ForgetPassword';
import SignIn from './page/signin/SignIn';
import BookingAndAbsence from './page/students/bookingAndAbsence/BookingAndAbsence';
import Extensions from './page/students/extensions/Extensions';
import Assignment from './page/students/modules/Assignment';
import ModuleAssignmentAndExam from './page/students/modules/ModuleAssignmentAndExam';
import ModuleDetails from './page/students/modules/ModuleDetails';
import ModuleList from './page/students/modules/ModuleList';
import ModuleMaterial from './page/students/modules/ModuleMaterial';
import TimeTable from './page/students/timeTable/TimeTable';
import UserInfo from './page/UserInfo';

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/modules" element={<ModuleList />} />
        <Route path="/modules/:moduleId" element={<ModuleDetails />} />
        <Route path="/:moduleId/material" element={<ModuleMaterial />} />
        <Route
          path="/:moduleId/assignmentandexam"
          element={<ModuleAssignmentAndExam />}
        />
        <Route
          path="/:moduleId/assignmentandexam/assignment/:id"
          element={<Assignment />}
        />

        <Route path="/timetable" element={<TimeTable />} />
        <Route path="/bookingandabsence" element={<BookingAndAbsence />} />
        <Route path="/extensions" element={<Extensions />} />

        <Route path="/user" element={<UserInfo />} />
        <Route path="/forget" element={<ForgetPassword />} />
      </Routes>
    </Suspense>
  </Router>
);

export default App;
