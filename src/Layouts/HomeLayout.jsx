import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftAside from '../components/homeLayout/LeftAside';
import RightAside from '../components/homeLayout/RightAside';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-11/12 my-5 mx-auto'>
                    <LatestNews></LatestNews>
                </section>
                <nav className='w-11/12 my-5 mx-auto'>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className='w-11/12 gap-10 mx-auto grid grid-cols-12 my-10'>
                <aside className='py-2 col-span-3'>
                    <LeftAside></LeftAside>
                </aside>
                <section className="main py-2 col-span-6">
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3 py-2'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;