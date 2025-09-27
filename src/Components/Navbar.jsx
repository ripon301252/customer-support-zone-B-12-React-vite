import React from 'react';
import Container from './Container';
import { FaPlus } from "react-icons/fa6";

const Navbar = () => {
    return (
        <div className="bg-base-100 shadow-sm sticky top-0 z-10 py-2">
            <Container>
                <div className='flex justify-between items-center md:flex-row flex-col md:mx-2'>
                    <div>
                        <a className="w-full"><span className="text-xl ml-1 font-bold">CS — Ticket System</span> </a>
                    </div>
                    <div className='flex items-center md:flex-row flex-col'>
                        <div className="lg:flex md:my-0 my-3">
                            <ul className="flex items-center md:text-base text-sm flex-wrap md:gap-5 gap-2 md:ml-12 cursor-pointer">
                                <li><a className=''>Home</a></li>
                                <li><a>FAQ</a></li>
                                <li><a>Changelog</a></li>
                                <li><a>Blog</a></li>
                                <li><a>Download</a></li>
                                <li><a>Contact</a></li>
                            </ul>
                        </div>
                        <div className="md:ml-9">
                            <a className="btn bg-gradient-to-r from-[#422AD5] to-[#6155f5] text-white"> <FaPlus className="md:mr-1 md:text-base text-sm" /><span className="md:text-base text-xs ">New Ticket</span>
                            </a>
                        </div>
                    </div>
                </div>

            </Container>
        </div>
    );
};

export default Navbar;