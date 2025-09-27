import React from 'react';
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { toast } from 'react-toastify';



const Cart = ({ card, removeCard, setResolved }) => {
   
    const { title } = card

    const handleRemove = () => {
        setResolved(prev => [...prev, card])
        removeCard(card)
        
        toast(
            <span className="flex items-center gap-2">
                <IoCheckmarkCircleOutline className="text-green-500 text-xl" />
                Completed!
            </span>
        );
    }
    
    return (
        <div>
            <div className='mb-2 mt-3 text-black bg-white border-1 border-gray-300 p-3 rounded'>
                <p className='text-lg font-bold mb-2 text-left'>{title}</p>
                <div onClick={handleRemove} className=' text-center'><button className='bg-green-500 py-1 px-[100px]  rounded text-white font-bold cursor-pointer w-full'>Complete</button></div>
            </div>  
        </div>
 
    );
};

export default Cart;