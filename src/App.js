import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import useLogin from './hooks/useLogin';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
// import PreAssignmentGuide from './pages/PreAssignmentGuide';

function App() {
  const { isLogin } = useLogin();
  console.log(isLogin);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequireLogin isLogin={isLogin}>
            <HomePage />
          </RequireLogin>
        }
      />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;

const RequireLogin = ({ children, isLogin }) => {
  return isLogin ? children : <Navigate to={'/login'} replace />;
};
