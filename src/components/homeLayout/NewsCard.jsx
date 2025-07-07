import React from 'react';
import { IoStarOutline } from "react-icons/io5";
import { IoEyeSharp } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { Link } from 'react-router';


const NewsCard = ({news}) => {
    const { title, id, author, published_date, thumbnail_url, details, rating, total_view,tags}=news;
    const formattedDate=new Date(news.author.published_date).toLocaleDateString();
    return (
        <div className='border border-1 hover:shadow-blue-200 hover:border-gray-300 transition-shadow duration-100 hover:shadow-2xl border-gray-200 rounded-md '>
            <div className='flex rounded-t-md bg-gray-100 justify-between items-center p-5 mb-2'>
                <div className='flex gap-5'>
                    <img className='w-[42px] rounded-[100%]' src={author.img} alt="" />
                    <div className='flex flex-col'>
                        <h2 className='font-bold'>{author.name}</h2>
                        <p className='text-gray-500'>{formattedDate}</p>
                    </div>
                </div>
                
                <div className='flex items-center gap-5'>
                    <FaRegBookmark size={22}/>
                    <FaShareAlt size={22}/>
                </div>
            </div>
            <div className='p-5'>
                <h2 className='font-bold mb-3 text-lg'>{title}</h2>
                {/* <p>{author}</p> */}
                <img className='rounded-sm object-cover w-full h-[250px]' src={news["image_url"]} alt="" />
                <p className='my-5 text-justify pb-5 border-gray-300 border-b text-gray-500'>{details.length>200 ? (
                    <>
                        {details.slice(0,200)}...
                        <Link to={`/news-details/${id}`} className='text-secondary font-semibold cursor-pointer hover:underline'>
                            Read More
                        </Link>
                    </>
                ):(
                    details
                )}
                </p>
            </div>
            <div className='flex items-center justify-between mx-5 -mt-6 mb-4'>
               <div className='flex items-center gap-2'>
                   <>
                        {[...Array(Math.round(rating.number))].map((_, index) => (
                        <IoStarOutline key={index} className="h-5 w-5 text-amber-500" />
                        ))}
                    </>
                    <p className='font-bold text-lg'>{rating.number}</p>
               </div>
               <div className='flex items-center gap-3'>
                <IoEyeSharp size={22}/>
                    <p className='text-blue-700'>{total_view}</p>
               </div>
            </div>
            
        </div>
    );
};

export default NewsCard;