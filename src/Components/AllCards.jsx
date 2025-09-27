import React from 'react';
import { FaBullseye } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";
import { toast } from 'react-toastify';
import { IoCheckmarkCircleOutline } from "react-icons/io5";



const AllCards = ({ issues, data, setData, selectedCard, setSelectedCard, setCount, count }) => {


    const handleClick = () => {

        const currentData = data.find(element => element.id == issues.id)

        const restData = data.filter(element => element.id !== issues.id)
        setData([currentData, ...restData])


        setSelectedCard([...selectedCard, issues])
        setCount([...count, issues])

        
        toast(
            <span className="flex items-center gap-2">
                <IoCheckmarkCircleOutline className="text-green-500 text-xl" />
                In Progress!
            </span>
        );
       
    }


    const { title, status, description, id, priority, customer, createdAt } = issues

    return (

        <div>
            <div onClick={handleClick} className='bg-white border-1 h-fit border-gray-300 col-span-3 md:p-5 p-3 rounded cursor-pointer'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-xl font-bold text-[#383838]'>{title}</h1>
                    <div className={`flex items-center gap-1 px-3 cursor-pointer py-1 ${status === 'Open' ? 'text-green-500 bg-green-200 rounded-full' : 'text-yellow-500 bg-yellow-200 rounded-full'}`}>
                        <p><FaBullseye className='md:text-sm text-xs font-extrabold ' /></p>
                        <p className='font-bold md:text-base text-sm'>{status}</p>
                    </div>
                </div>
                <div className='text-[#627382] md:text-base text-sm my-2'>{description}</div>
                <div className='flex justify-between '>
                    <div className='flex items-center  gap-2'>
                        <p className='text-[#627382] md:text-base font-bold text-sm'>#{id}</p>
                        <h3 className={`md:text-base text-sm font-bold cursor-pointer ${priority === 'High' ? 'text-red-500 ' : priority === 'Medium' ? 'text-yellow-500' : 'text-green-500'}`}>{priority}</h3>
                    </div>
                    <div className='flex items-center md:gap-3 gap-1 '>
                        <h1 className='text-[#627382] md:text-base text-sm'>{customer}</h1>
                        <div className='flex items-center gap-1'>
                            <CiCalendarDate className='md:text-xl text-md text-[#627382]' />
                            <p className='text-[#627382] md:text-base text-xs'>{createdAt}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllCards;