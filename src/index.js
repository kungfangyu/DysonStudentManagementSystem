/*
 * @Author: Fangyu Kung
 * @Date: 2024-03-14 20:59:36
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-03-15 17:20:05
 * @FilePath: /csc8019_team_project_frontend/src/index.js
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import SignIn from './page/SignIn';
import ModuleList from './page/students/modules/ModuleList';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<SignIn />}>
      <Route path="modules" element={<ModuleList />} />
      {/* ... etc. */}
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
