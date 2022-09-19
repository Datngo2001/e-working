import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router';
import ProtectedRoute from '../components/ProtectedRoute';
import HomePage from '../pages/Home/HomePage';
import ProfilePage from '../pages/Profile/ProfilePage';
import RegisterPage from '../pages/Register/RegisterPage';
import SettingPage from '../pages/Setting/SettingPage';
import LoginPage from '../pages/Login/LoginPage';

function LandingPageRoute() {
  const { user } = useSelector((state) => state.user);

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/profile/:id" element={<ProfilePage />} />
      <Route
        path="/setting"
        element={
          <ProtectedRoute condition={user} redirectPath="/">
            <SettingPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default LandingPageRoute;
