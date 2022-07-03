import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';


const LoginNav = (props) => {
    const { loginStatus, loginCbHandler } = props;

    return (
        <>
            <div className='container-fluid'>
                <Routes>
                    <Route path='/' element={<LoginPage loginStatus={loginStatus} loginCbHandler={loginCbHandler} />} />
                    <Route path='/register' element={<RegisterPage />} />
                    {/* <Route path='*' element= {<Navigate replace to='/' />} /> */}
                </Routes>
            </div>
        </>
    )
}

export default LoginNav;