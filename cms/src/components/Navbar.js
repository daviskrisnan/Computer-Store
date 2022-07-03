import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'


const Navbar = (props) => {
    const { loginCbHandler } = props;

    const logoutHandler = () => {
        localStorage.clear();
        loginCbHandler(false)
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg sticky-top bg-color-navbar">
                <div className="container-sm">
                    <Link className="nav-link" to="/home">
                        <h1 className="title-navbar">Comp Store</h1>
                    </Link>

                    <ul className="navbar-nav justify-content-end">
                        {/* <li className='nav-item item-style'>
                            <Link className='nav-link' to='profile' style={{ color: "white" }}>
                                {" "}
                                Profile
                            </Link>
                        </li>

                        <li className='nav-item item-style'>
                            <Link className='nav-link' to='order' style={{ color: "white" }}>
                                {" "}
                                Order
                            </Link>
                        </li> */}

                        <li className="nav-item item-style">
                            <Link className="nav-logout" to="/"
                                onClick={logoutHandler}>
                                {" "}
                                Logout
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className='sidenav'>
                <a href='/home'>Home</a>
                <a href='/profile'>Profile</a>
                <a href='/order'>Order</a>
            </div>
        </>
    )
}

export default Navbar