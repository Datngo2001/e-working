import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RESTORE_USER } from './store/reducer/user/userActionTypes';
import './App.css';
import { Route, Routes } from 'react-router';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Profile from './pages/Profile/Profile';
import Setting from './pages/Setting/Setting';
import Navbar from './layout/Navbar';
import Footer from './pages/Footer/Footer';
import { auth } from './firebase/auth';
import { useEffect } from 'react';

const App = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      dispatch({ type: RESTORE_USER, payload: user });
    });
  }, [dispatch]);

  return (
    <div>
      <Navbar></Navbar>
      <div className="app-route-container">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route
            path="/setting"
            element={
              <ProtectedRoute condition={user} redirectPath="/">
                <Setting />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;
