import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import RightAside from '../components/homeLayout/RightAside';
import LeftAside from '../components/homeLayout/LeftAside';
import NewsDetailsCard from '../components/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const data=useLoaderData();
    const {id}=useParams();

    const [news, setNews]=useState({});

    console.log(data, id);

    useEffect(()=>{

        const newsDetails=data.find((singleNews)=>singleNews.id==id);
        setNews(newsDetails);

    },[id, data]);

    return (
        <div>
            <header className='py-1'>
                <Header></Header>
            </header>
            <main className='w-11/12 gap-10 py-6 grid grid-cols-12 mx-auto'>
                <section className='col-span-9 w-full'>
                    <h2 className='font-bold mb-5'>News Details</h2>
                    <NewsDetailsCard data={data} news={news}></NewsDetailsCard>
                </section>
                <aside className='col-span-3 mb-10  w-full'>
                    <RightAside></RightAside>
                </aside>
            </main>

        </div>
    );
};

export default NewsDetails;