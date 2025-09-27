import React from 'react';
import { IoMdCheckmark } from "react-icons/io";

const Resolved = ({ resolved }) => {


    return (

        <div>
            <h1 className='text-2xl font-bold mt-16 md:text-left text-center'>Resolved Task</h1>
            <p className='text-xs mb-2 md:text-left text-center'>No resolved tasks yet.</p>
        {

            resolved.map(r => (
                    <div className='mb-2 text-black bg-green-100 border-1 border-gray-300 p-3 rounded'>
                        <p className='text-lg font-bold mb-2'>{r.title}</p>
                        <div className=' flex justify-between'>
                            <div className='flex items-center gap-1'>
                                <span className='text-green-700 '><IoMdCheckmark /></span>
                                <span className='text-green-700 text-sm font-semibold'>Completed</span>
                            </div>
                            <h1 className='text-gray-500 text-sm cursor-pointer'>Click to remove</h1>
                        </div>

                    </div>
                
            ))
        }

    </div>
    );
};

export default Resolved;