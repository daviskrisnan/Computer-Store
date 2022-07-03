import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../actions/userAction';

import "./style.css";
import Swal from "sweetalert2";


const RegisterPage = () => {
    const navigation = useNavigate();
    const dispatch = useDispatch();

    const { addUserResult } = useSelector((state) => state.userReducer);

    const [user_name, setUser_name] = useState("");
    const [user_email, setUser_email] = useState("");
    const [user_password, setUser_password] = useState("");
    const [user_birthdate, setUser_birthdate] = useState("");
    const [user_gender, setUser_gender] = useState("");
    const [user_avatar, setUser_avatar] = useState("");
    const [user_type, setUser_type] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(
            addUser({
                user_name: user_name,
                user_email: user_email,
                user_password: user_password,
                user_birthdate: user_birthdate,
                user_gender: user_gender,
                user_avatar: user_avatar,
                user_type: user_type
            })
        )
    };

    useEffect(() => {
        if (addUserResult) {
            Swal.fire(
                "Register Successfully!",
                "Clicked the button!",
                "success"
            );
            navigation('/')
        }
    })


    return (
        <>
            <div className='container-md'>
                <div className='col-2 bg-col-2'>
                    <h1>Create Account</h1>

                    <div className='input-group flex-nowrap input-align-login'>
                        <input type='text' className='form-control' placeholder='input your name'
                            onChange={(e) => setUser_name(e.target.value)} value={user_name} />
                    </div>

                    <div className='input-group flex-nowrap input-align-login'>
                        <input type='email' className='form-control' placeholder='email@example.com'
                            onChange={(e) => setUser_email(e.target.value)} value={user_email} />
                    </div>

                    <div className='input-group flex-nowrap input-align-login'>
                        <input type='password' className='form-control' placeholder='password'
                            onChange={(e) => setUser_password(e.target.value)} value={user_password} />
                    </div>

                    <div className='input-group flex-nowrap input-align-login'>
                        <input type='date' className='form-control'
                            onChange={(e) => setUser_birthdate(e.target.value)} value={user_birthdate} />
                    </div>

                    <div className='input-group flex-nowrap input-align-login'>
                        <input type='file' className='form-control' 
                            onChange={(e) => setUser_avatar(e.target.value)} value={user_avatar} />
                    </div>

                    <div className='input-group flex-nowrap input-align-login'>
                        <select className='form-select' onChange={(e) => setUser_gender(e.target.value)} value={user_gender} >
                            <option className='disabled'>Select Gender</option>
                            <option value='Male'>Male</option>
                            <option value='Female'>Female</option>
                        </select>
                    </div>

                    <div className='input-group flex-nowrap input-align-login'>
                        <select className='form-select' onChange={(e) => setUser_type(e.target.value)} value={user_type} >
                            <option value='User'>User</option>
                            <option value='Admin'>Admin</option>
                        </select>
                    </div>
                    

                    <div className='justify-content-center input-group flex-nowrap submit-btn input-align-login'>
                        <button className='btn text-add' onClick={submitHandler}>Sign Up</button>
                    </div>

                    <div className='container text-center'>
                        <p>Already have an account ? <a href='/'>Sign In</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}


export default RegisterPage