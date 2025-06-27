import React from 'react';
import logo from "../assets/logo.png";
import {format} from 'date-fns'

const Header = () => {
   
    return (
        <div className='flex items-center my-4 gap-2 flex-col justify-center'>
            <img className='w-[330px]' src={logo} alt="" />
            <p className='text-accent'>Journalism Without Fear or Favour</p>
            {/* <p>Sunday, November 27, 2025</p> */}
            <p className='text-semibold text-accent'>{format(new Date(),"EEEE , MMMM d , y")}</p>
        </div>
    );
};

export default Header;