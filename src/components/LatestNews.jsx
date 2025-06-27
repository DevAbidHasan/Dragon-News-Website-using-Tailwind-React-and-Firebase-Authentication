import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center p-3 gap-5 bg-base-200'>
            <p className='text-base-100 bg-secondary px-4 rounded-sm py-2'>Latest</p>
            <Marquee className='flex gap-10' pauseOnHover="true" speed={60}>
                <p className='font-bold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, quas!</p>
               
            </Marquee>
        </div>
    );
};

export default LatestNews;