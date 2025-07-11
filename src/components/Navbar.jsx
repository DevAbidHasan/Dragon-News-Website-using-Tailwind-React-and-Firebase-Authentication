import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from "../assets/user.png"
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const {user, logOut}=use(AuthContext);
    const handleLogOut=()=>{
        alert("logout clicked");
        logOut().then(result=>console.log(result)).catch(error=>console.log(error));
    }
    return (
        <div className='flex items-center gap-10 justify-between'>
            <div className="">
                {
                    user && user.email
                }
                </div>
            <div className="nav flex text-accent gap-7">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className="login-btn flex items-center gap-5 justify-center">
                <img className='w-[50px]' src={`${user ? user.photoURL : userIcon }`} alt="" />
                {
                    user ? 
                    ((
                        <button onClick={handleLogOut} className='btn px-8 btn-primary'>Logout</button>
                    )) : 
                    (
                        <Link to="/auth/login" className='btn px-8 btn-primary'>Login</Link>
                    )
                }

                
            </div>
        </div>
    );
};

export default Navbar;