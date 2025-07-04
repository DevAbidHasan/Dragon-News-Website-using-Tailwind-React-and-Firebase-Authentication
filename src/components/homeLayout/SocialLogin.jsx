import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";


const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-bold text-center mb-5'>Login With</h2>
            <div className='space-y-3'>
                <button className='btn btn-secondary btn-outline w-full'><FcGoogle size={25}/>Login With Google</button>
                <button className='btn btn-primary btn-outline w-full'><BsGithub size={24}/>Login With GitHub</button>
            </div>
        </div>
    );
};

export default SocialLogin;