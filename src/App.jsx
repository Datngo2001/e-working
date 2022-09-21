import React from 'react';
import { useDispatch } from 'react-redux';
import { RESTORE_USER_FAILURE, RESTORE_USER_REQUEST } from './store/reducer/user/userActionTypes';
import './App.css';
import { auth } from './firebase/auth';
import { useEffect } from 'react';
import LandingPageLayout from './layout/LandingPageLayout/LandingPageLayout';
import { useLocation, useNavigate } from 'react-router';
import ConsoleLayout from './layout/ConsoleLayout/ConsoleLayout';

const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    auth.onIdTokenChanged((user) => {
      if (user) {
        dispatch({ type: RESTORE_USER_REQUEST });
      } else {
        dispatch({ type: RESTORE_USER_FAILURE });
        if (location.pathname == '/console') {
          navigate('/');
        }
      }
    });
  }, [dispatch]);

  return <div>{location.pathname == '/console' ? <ConsoleLayout /> : <LandingPageLayout />}</div>;
};

export default App;
