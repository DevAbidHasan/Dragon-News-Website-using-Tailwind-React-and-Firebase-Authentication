import React, { use, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../components/homeLayout/NewsCard';

const CategoryNews = () => {
    const {id}=useParams(); // here id is string value
    const data=useLoaderData();
    // console.log(data); // will show all the news whole
    const [categoryNews, setCategoryNews]=useState([]);

    useEffect(()=>{
        if(id=="0") {
            setCategoryNews(data);
            return;
        }
        else if(id=="1") {
            const filteredNews=data.filter(news=>news.others.is_today_pick==true);
            setCategoryNews(filteredNews);
            return;
        }
        else {
            const filteredNews=data.filter(news=>news.category_id==id);
            console.log(filteredNews);
            setCategoryNews(filteredNews);
        }
    },[data, id])

    return (
        <div>
            <h2 className='font-bold mb-5'>
                Dragon News Home
            </h2>
            <div className='grid gap-10 grid-cols-1'>
                {
                    categoryNews.map(news=><NewsCard key={news.id} news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;