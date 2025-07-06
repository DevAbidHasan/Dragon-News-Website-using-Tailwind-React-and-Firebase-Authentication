import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='bg-base-200 min-h-screen'>
            <header className='mx-auto py-5 w-11/12'>
                <Navbar></Navbar>
            </header>
            <main className='w-11/12 py-5 mx-auto'>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;