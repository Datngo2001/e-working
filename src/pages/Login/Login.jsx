import { Button } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import LoginForm from './components/form/LoginForm';
import { SIGNIN_GOOGLE_REQUEST, SIGNIN_REQUEST } from '../../store/reducer/user/userActionTypes';
import styles from './login.module.css';

function Login() {
  const { user, loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  if (user) {
    return <Navigate to={'/'}></Navigate>;
  }

  const handleLogin = (data) => {
    dispatch({ type: SIGNIN_REQUEST, payload: data });
  };

  const handleLoginGoogle = (data) => {
    dispatch({ type: SIGNIN_GOOGLE_REQUEST, payload: data });
  };

  return (
    <div className={styles['container']}>
      <Stack spacing={2} className={styles['form-container']}>
        <h1>Login</h1>
        <LoginForm
          handleSubmit={handleLogin}
          isLoading={loading}
          submitError={error.signin?.message}></LoginForm>
        <Button variant="outlined" onClick={handleLoginGoogle}>
          Login with google
        </Button>
        <p>
          Did not have an account yet? <Link to={'/register'}>Register</Link>
        </p>
      </Stack>
    </div>
  );
}

export default Login;
