import React from 'react';
import { Navigate } from 'react-router-dom';
import Login from '../components/Login';
import useLogin from '../hooks/useLogin';
import HomePage from './Home';

function LoginPage() {
  const { isLogin } = useLogin();

  if (isLogin) {
    return <HomePage />;
  } else return <Login />;
}

export default LoginPage;
