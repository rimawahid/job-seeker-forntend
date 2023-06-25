import React from 'react';

const Footer = () => {
    return (
        <div className='footer p-[5rem] mb-4 bg-blueColor rounded-[10px] gap-[8] grid
        grid-cols-5 m-auto items-center justify-cneter'>
            <div>
                <div className="logoDiv">
                    <h1 className='logo text-[25px] text-white pb-[1.5rem]'>
                        <strong>Job</strong> Search
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Footer;