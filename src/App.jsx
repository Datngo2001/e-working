import React from 'react';
import { useDispatch } from 'react-redux';
import { RESTORE_USER } from './store/reducer/user/userActionTypes';
import './App.css';
import { auth } from './firebase/auth';
import { useEffect } from 'react';
import LandingPageLayout from './layout/LandingPageLayout/LandingPageLayout';
import { useLocation } from 'react-router';
import ConsoleLayout from './layout/ConsoleLayout/ConsoleLayout';

const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  console.log('render');
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      dispatch({ type: RESTORE_USER, payload: user });
    });
  }, [dispatch]);

  return <div>{location.pathname == '/console' ? <ConsoleLayout /> : <LandingPageLayout />}</div>;
};

export default App;
