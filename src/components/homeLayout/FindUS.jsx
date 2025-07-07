import React from 'react';
import { FaFacebook } from 'react-icons/fa6';
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from 'react-router';

const FindUS = () => {
    return (
        <div>
            <h2 className='font-bold text-center my-5'>Find Us on</h2>
            <div className=''>
                <div className="join w-full join-vertical">
                    <Link to="https://www.facebook.com/plabon48/" target='_blank' className="btn justify-start bg-base-100  join-item"><FaFacebook className='fill-blue-600 mr-3' size={18}/> Facebook</Link>
                    <Link to="https://github.com/DevAbidHasan" target='_blank' className="btn bg-base-100  justify-start join-item"><FaGithub size={18} className='fill-violet-700 mr-3'/> Github</Link>
                    <Link to="https://www.linkedin.com/in/abid-hasan-plabon-a4aa222a1/" target='_blank' className="btn bg-base-100  justify-start join-item"><FaLinkedin size={18} className='mr-3 fill-blue-400'/> Linkedin</Link>
                </div>
            </div>
        </div>
    );
};

export default FindUS;