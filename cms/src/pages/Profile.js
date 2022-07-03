import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../actions/userAction';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faIdBadge,
    faVenusMars,
    faCalendarDays,
    faEnvelope,
} from "@fortawesome/free-solid-svg-icons";


const Profile = () => {
    const { getUserDetailResult, getUserDetailLoading, getUserDetailError } = useSelector((state) => state.userReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser(localStorage.getItem('access_token')));
    }, [dispatch]);


    return (
        <div className="color-full-page">
            <div className="container-sm">
                <div className="row row-bg ">
                    <br></br>
                    <div className="col-md-2 offset-md-3 line-white"></div>
                    <div className="col-md-2 offset-md-3 col-bg justify-content-center">
                        {getUserDetailResult ? (
                            getUserDetailResult.map((e) => {
                                return (
                                    <>
                                        <img
                                            className="img-fluid img-thumbnail mx-auto h-25 w-25 d-block rounded-circle mb-3"
                                            src={e.user_avatar}
                                            alt=""
                                        />

                                        <div className="card border-warning mb-3">
                                            <div className="card-body" style={{ width: "18rem" }}>
                                                <h5 className="card-title">
                                                    <span>
                                                        <FontAwesomeIcon icon={faIdBadge}></FontAwesomeIcon>
                                                    </span>{" "}
                                                    Name
                                                </h5>
                                                <h6 className="card-subtitle mb-2 text-muted">
                                                    {e.user_name}
                                                </h6>
                                            </div>
                                        </div>

                                        <div className="card border-success mb-3">
                                            <div className="card-body" style={{ width: "18rem" }}>
                                                <h5 className="card-title">
                                                    <span>
                                                        <FontAwesomeIcon
                                                            icon={faVenusMars}
                                                        ></FontAwesomeIcon>
                                                    </span>{" "}
                                                    Gender
                                                </h5>
                                                <h6 className="card-subtitle mb-2 text-muted">
                                                    {e.user_gender}
                                                </h6>
                                            </div>
                                        </div>

                                        <div className="card border-primary mb-3">
                                            <div className="card-body" style={{ width: "18rem" }}>
                                                <h5 className="card-title">
                                                    <span>
                                                        <FontAwesomeIcon
                                                            icon={faCalendarDays}
                                                        ></FontAwesomeIcon>
                                                    </span>{" "}
                                                    Birthdate
                                                </h5>
                                                <h6 className="card-subtitle mb-2 text-muted">
                                                    {e.user_birthdate.slice(0,10)}
                                                </h6>
                                            </div>
                                        </div>

                                        <div className="card border-danger mb-3">
                                            <div className="card-body" style={{ width: "18rem" }}>
                                                <h5 className="card-title">
                                                    <span>
                                                        <FontAwesomeIcon
                                                            icon={faEnvelope}
                                                        ></FontAwesomeIcon>
                                                    </span>{" "}
                                                    Email
                                                </h5>
                                                <h6 className="card-subtitle mb-2 text-muted">
                                                    {e.user_email}
                                                </h6>
                                            </div>
                                        </div>
                                    </>
                                );
                            })
                        ) : getUserDetailLoading ? (
                            <p>Loading</p>
                        ) : (
                            <p>{getUserDetailError ? getUserDetailError : "Data Kosong"}</p>
                        )}
                        <br></br>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile