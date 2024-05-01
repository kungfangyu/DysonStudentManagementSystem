/*
 * @Author: Fangyu Kung
 * @Date: 2024-04-29 11:59:24
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-04-30 17:00:26
 * @FilePath: /csc8019_team_project_frontend/src/routes/ProtectedRoute.jsx
 */
// ProtectedRoute.jsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../provider/AuthProvider';
const ProtectedRoute = ({ element }) => {
  const navigate = useNavigate();
  const { token } = useAuth();
  console.log('🚀 ~ ProtectedRoute ~ token:', token);

  useEffect(() => {
    if (!token) {
      console.log('No token found, redirecting to signin page');
      navigate('/signin');
    }
  }, [token, navigate]);

  return token ? element : null;
};

export default ProtectedRoute;
