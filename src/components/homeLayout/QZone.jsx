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
                    <img src={image1} alt="" />
                    <img src={image2} alt="" />
                    <img src={image3} alt="" />
                </div>
            </div>
            <div>
                <img  className='my-4 rounded-md' src={image4} alt="" />
            </div>
        </div>
    );
};

export default QZone;