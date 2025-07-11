import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftAside from '../components/homeLayout/LeftAside';
import RightAside from '../components/homeLayout/RightAside';
import Loading from '../pages/Loading';

const HomeLayout = () => {
    const {state} = useNavigation();
    return (
        <div>
            <header>
                <Header></Header>
                {import.meta.env.VITE_name }
                {/* {import.meta.env.age} */}
                <section className='w-11/12 my-5 mx-auto'>
                    <LatestNews></LatestNews>
                </section>
                <nav className='w-11/12 my-5 mx-auto'>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className='w-11/12 gap-10 mx-auto grid grid-cols-12 my-10'>
                <aside className='py-2 sticky h-fit top-0 col-span-3'>
                    <LeftAside></LeftAside>
                </aside>
                <section className="main py-2 col-span-6">
                   {state=="loading" ? <Loading></Loading> : <Outlet></Outlet> } 
                </section>
                <aside className='col-span-3 sticky h-fit top-0 py-2'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;