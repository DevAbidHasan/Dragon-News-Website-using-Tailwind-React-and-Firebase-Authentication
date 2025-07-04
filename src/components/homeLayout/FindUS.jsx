import React from 'react';
import { FaFacebook } from 'react-icons/fa6';
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const FindUS = () => {
    return (
        <div>
            <h2 className='font-bold text-center my-5'>Find Us on</h2>
            <div className=''>
                <div className="join w-full join-vertical">
                    <button className="btn justify-start bg-base-100  join-item"><FaFacebook className='fill-blue-600 mr-3' size={18}/> Facebook</button>
                    <button className="btn bg-base-100  justify-start join-item"><FaGithub size={18} className='fill-violet-700 mr-3'/> Github</button>
                    <button className="btn bg-base-100  justify-start join-item"><FaLinkedin size={18} className='mr-3 fill-blue-400'/> Linkedin</button>
                </div>
            </div>
        </div>
    );
};

export default FindUS;