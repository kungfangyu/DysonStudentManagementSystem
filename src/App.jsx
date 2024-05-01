/*
 * @Author: Fangyu Kung
 * @Date: 2024-03-14 20:59:36
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-05-01 13:20:58
 * @FilePath: /csc8019_team_project_frontend/src/App.jsx
 */

import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loading from './common/Loading.jsx';
import ForgetPassword from './page/signin/ForgetPassword';
import SignIn from './page/signin/SignIn';
import ModuleEdited from './page/staff/modules/ModuleEdited';
import StaffModuleList from './page/staff/modules/StaffModuleList';
import StudentList from './page/staff/studentList/StudentList';
import AcademicHistory from './page/students/academicHistory/AcademicHistory';
import BookingAndAbsence from './page/students/bookingAndAbsence/BookingAndAbsence';
import CourseInfoOperations from './page/students/courseOperations/CourseInfoOperations';
import Extensions from './page/students/extensions/Extensions';
import Assignment from './page/students/modules/Assignment';
import Exam from './page/students/modules/Exam';
import ModuleAssignmentAndExam from './page/students/modules/ModuleAssignmentAndExam';
import ModuleDetails from './page/students/modules/ModuleDetails';
import ModuleList from './page/students/modules/ModuleList';
import TimeTable from './page/students/timeTable/TimeTable';
import UserInfo from './page/UserInfo';
import AuthProvider from './provider/AuthProvider.jsx';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Set the loading time in milliseconds
  }, []);

  return (
    <BrowserRouter>
      <AuthProvider>
        {isLoading ? (
          <Loading />
        ) : (
          <Routes>
            <Route exact path="/modules" element={<ModuleList />} />
            <Route exact path="/timeTable" element={<TimeTable />} />
            <Route exact path="/extensions" element={<Extensions />} />
            <Route
              exact
              path="/courseoperations"
              element={<CourseInfoOperations />}
            />
            <Route
              exact
              path="/modules/:moduleId"
              element={<ModuleDetails />}
            />
            <Route
              exact
              path="/bookingandabsence"
              element={<BookingAndAbsence />}
            />
            <Route
              exact
              path="/:moduleId/assignmentandexam/exam/:id"
              element={<Exam />}
            />
            <Route
              exact
              path="/:moduleId/assignmentandexam/assignment/:id"
              element={<Assignment />}
            />
            <Route
              exact
              path="/:moduleId/assignmentandexam"
              element={<ModuleAssignmentAndExam />}
            />
            <Route
              exact
              path="/academichistory"
              element={<AcademicHistory />}
            />
            <Route exact path="/staff/modules" element={<StaffModuleList />} />
            <Route
              exact
              path="/staff/modules/:moduleId"
              element={<ModuleEdited />}
            />
            <Route exact path="/studentlist" element={<StudentList />} />
            <Route exact path="/userinfo" element={<UserInfo />} />
            <Route exact path="/forget" element={<ForgetPassword />} />
            <Route exact path="/signin" element={<SignIn />} />
          </Routes>
        )}
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
