import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import "bootstrap/dist/css/bootstrap.min.css";
import './style.css';
import Swal from 'sweetalert2';


const LoginPage = (props) => {
    const { loginCbHandler } = props;
    const navigation = useNavigate();

    const [form, setForm] = useState({
        user_email: "",
        user_password: ""
    });

    const loginUser = async () => {
        try {
            let result = await axios({
                method: "POST",
                url: 'http://localhost:3000/users/login',
                data: form
            })
            const access_token = result.data.access_token;
            localStorage.setItem('access_token', access_token);
            loginCbHandler(true);
            Swal.fire(
                'Login',
                'User has successfully login',
                'success'
            )
            navigation('/home');
        } catch(err) {
            console.log(err);
        }
    };

    const submitHandler = () => {
        loginUser()
    };


    return (
        <>
            <div className='container-md'>
                <div className='col-5 bg-col-1'>
                    <h1>Sign In (Admin)</h1>

                    <div className='input-group flex-nowrap input-align-login'>
                        {/* <label>Email :</label> */}
                        <input type='email' className='form-control' placeholder='email@example.com' 
                        onChange={(e) => setForm({...form, user_email: e.target.value})}/>
                    </div>

                    <div className='input-group flex-nowrap input-align-login'>
                        <input type='password' className='form-control' placeholder='input your password' 
                        onChange={(e) => setForm({...form, user_password: e.target.value})}/>
                    </div>

                    <div className='justify-content-center input-group flex-nowrap submit-btn input-align-login'>
                        <button className='btn text-add' onClick={submitHandler}>Sign In</button>
                    </div>

                    <div className='container text-center'>
                        <p>Don't have an account ? <a href='/register'>Sign Up</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage