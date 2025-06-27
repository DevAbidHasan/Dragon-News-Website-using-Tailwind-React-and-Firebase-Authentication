import React, { use } from 'react';
import { NavLink } from 'react-router';
import user from "../assets/user.png"

const Navbar = () => {
    return (
        <div className='flex items-center gap-10 justify-between'>
            <div className=""></div>
            <div className="nav flex text-accent gap-7">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className="login-btn flex items-center gap-5 justify-center">
                <img src={user} alt="" />
                <button className='btn px-8 btn-primary'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;