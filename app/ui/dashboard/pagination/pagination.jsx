import React from 'react';

const Pagination = () => {
    return (
        <div className='flex justify-between'>
            <button disabled className="text-gray-700 bg-gray-400 p-1 rounded-md">Previous</button>
            <button  className="bg-white text-black p-1 rounded-md">Next</button>
        </div>
    );
};

export default Pagination;