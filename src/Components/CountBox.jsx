import React from 'react';
import Img from '../assets/vector1.png'

const CountBox = ({ selectedCard, count }) => {

    return (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mx-2 my-5">
            <div className="bg-gradient-to-r from-[#422AD5] to-[#6155f5] flex justify-between rounded-lg">

                <div><img className="md:w-64 w-28" src={Img} alt="" /></div>

                <div className="flex items-center justify-center flex-col">
                    <h4 className="md:text-xl text-sm text-white font-bold mb-1">In-Progress</h4>
                    <p className="md:text-3xl text-2xl text-white font-bold">{selectedCard.length}</p>
                </div>
                <div><img className="rotate-y-180 md:w-64 w-28" src={Img} alt="" /></div>
            </div>
            <div className="bg-gradient-to-l from-[#0B5E06] to-[#27c840] flex justify-between rounded-lg">
                <div><img className="md:w-64 w-28" src={Img} alt="" /></div>
                <div className="flex items-center justify-center flex-col">
                    <h4 className="md:text-xl text-sm text-white font-bold mb-1">Resolved</h4>
                    <p className="md:text-3xl text-2xl text-2x text-white font-bold">{count.length - selectedCard.length}</p>
                </div>

                <div><img className="rotate-y-180 md:w-64 w-28" src={Img} alt="" /></div>
            </div>
        </div>
    );
};

export default CountBox;