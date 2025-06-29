import React from 'react';

const NewsCard = ({news}) => {
    const { title, author, published_date, thumbnail_url, details, rating, total_view,tags}=news;
    return (
        <div className='border border-1 border-gray-200 rounded-md p-5'>
            <div className='flex mb-4'>
                <div className='flex gap-5'>
                    <img className='w-[42px] rounded-[100%]' src={author.img} alt="" />
                    <div className='flex flex-col'>
                        <h2>{author.name}</h2>
                        <p>{author.published_date}</p>
                    </div>
                </div>
                
                <div>

                </div>
            </div>
            <div>
                <h2 className='font-bold mb-3 text-lg'>{title}</h2>
                {/* <p>{author}</p> */}
                <img className='rounded-sm object-cover w-full' src={news["image_url"]} alt="" />
            </div>
            
        </div>
    );
};

export default NewsCard;