import React from 'react';
import { MdSupervisedUserCircle } from 'react-icons/md';

const Card = () => {
    return (
        <div className='flex gap-4 bg-[#182237] rounded-xl p-5 hover:bg-[#384d7e] w-full'>
            <MdSupervisedUserCircle size={24}/>
            <div>
                <h1 className='text-md mb-2'>Total Users</h1>
                <h1 className='text-2xl font-bold mb-2'>10,928</h1>
                <h1 className='text-[12px]'> <span className='text-green-600'>12%</span> more than previous week</h1>
            </div>
        </div>
    );
};

export default Card;