import React from 'react';
import { Link } from 'react-router';
import { FaArrowLeftLong } from "react-icons/fa6";

const NewsDetailsCard = ({news, data}) => {
    const { title, id, author, published_date, thumbnail_url, details, rating, total_view,tags}=news;
    return (
        <div className='p-8 bg-gray-50 border-gray-300 rounded-md border'>
            
            <img className='w-full h-full object-cover rounded-xs' src={news.image_url} alt="" />
            <h2 className='text-2xl text-primary mt-7  font-bold mb-5'>
                {title}
            </h2>
            <p className='text-justify text-accent'>
                {details}
            </p>
            
                <Link className='mt-8 hover:cursor-pointer hover:bg-red-600 bg-secondary mb-4 px-5 py-3 inline-block' to={`/category/${news.category_id}`}>
                    <div className='flex text-white font-semibold items-center gap-4'>
                            <div><FaArrowLeftLong/></div>
                            <p>All news in this category</p>
                    </div>
            </Link>
           
        </div>
    );
};

export default NewsDetailsCard;