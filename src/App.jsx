/*
 * @Author: Fangyu Kung
 * @Date: 2024-03-14 20:59:36
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-03-16 17:23:12
 * @FilePath: /csc8019_team_project_frontend/src/App.jsx
 */

import React, { Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import SignIn from './page/SignIn';
import ModuleList from './page/students/modules/ModuleList';

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/modules" element={<ModuleList />} />
      </Routes>
    </Suspense>
  </Router>
);

export default App;
