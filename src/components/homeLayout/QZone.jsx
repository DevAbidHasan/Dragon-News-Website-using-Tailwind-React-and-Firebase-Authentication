import React from 'react';
import image1 from "../../assets/swimming.png";
import image2 from "../../assets/class.png";
import image3 from "../../assets/playground.png";
import image4 from "../../assets/bg.png"

const QZone = () => {
    return (
        <div className='my-5 '>
            <div className='bg-base-200 p-3 rounded-md'>
                <h2 className='font-bold my-5 text-center'>Q-Zone</h2>
                <div className='space-y-5 pb-5'>
                    <img className='hover:cursor-pointer hover:shadow-2xl' title='Amazing Swimming pool' src={image1} alt="" />
                    <img className='hover:cursor-pointer hover:shadow-2xl' title='Fully Digitalized Classroom' src={image2} alt="" />
                    <img className='hover:cursor-pointer hover:shadow-2xl' title='Beautiful Playground' src={image3} alt="" />
                </div>
            </div>
            <div>
                <img title='Download Mobile App' className='mt-8 -mb-5 hover:shadow-2xl rounded-md hover:cursor-pointer' src={image4} alt="" />
            </div>
        </div>
    );
};

export default QZone;