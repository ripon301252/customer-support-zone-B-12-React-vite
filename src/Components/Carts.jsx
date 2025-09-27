import React from 'react';
import Cart from './Cart';
import Resolved from './Resolved';

const Carts = ({ selectedCard, removeCard, resolved, setResolved }) => {
    return (
        <div className='col-span-1 md:ml-5 rounded-md '>
            <div>
                <h1 className='text-2xl font-bold md:-mt-11 mt-5 md:text-left text-center'>Task Status</h1>
                <p className='text-xs md:text-left text-center'>Select a ticket to add to Task Status</p>
            </div>
            {
                selectedCard.map(card => {
                    return (
                        <Cart resolved={resolved} setResolved={setResolved} removeCard={removeCard} card={card}></Cart>
                    )
                })
            }
            <Resolved resolved={resolved} ></Resolved>
        </div>

    );
};

export default Carts;