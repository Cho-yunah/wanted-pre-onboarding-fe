import React, { useState } from 'react';

function useLogin() {
  const [isLogin, setIsLogin] = useState(() => {
    return !!JSON.parse(localStorage.getItem('userLogin'));
  });

  return {
    isLogin,
    login() {
      return setIsLogin(true);
    },
    logout() {
      return setIsLogin(false);
    },
  };
}
export default useLogin;
