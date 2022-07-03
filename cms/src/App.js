import React, { useState, useEffect } from 'react';
import LoginNav from './components/LoginNav';
import MainContent from './components/MainContent';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [loginStatus, setLoginStatus] = useState(false);

  const loginCbHandler = (result) => {
    setLoginStatus(result);
  };

  useEffect( () => {
    if (localStorage.getItem('access_token')) {
      setLoginStatus(true);
    } else {
      setLoginStatus(false)
    }
  }, [loginStatus]);


  return (
    <>
      {loginStatus ? (
        <MainContent loginStatus={loginStatus} loginCbHandler={loginCbHandler}>{" "}</MainContent>
      ) : (
        <LoginNav loginCbHandler={loginCbHandler} />
      )}
    </>
  );
}

export default App;