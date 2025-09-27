import React from 'react';
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { CiMail } from "react-icons/ci";


const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
                <nav className='md:w-68'>
                    <h6 className="footer-title">CS — Ticket System</h6>
                    <a className="link link-hover">A ticket system is a software tool used to manage customer requests, issues, or tasks in an organized way. When a user reports a problem or asks for support, the system generates a ticket with all the details.</a>

                </nav>
                <nav className='md:ml-24'>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Our Mission</a>
                    <a className="link link-hover">Contact Saled</a>

                </nav>
                <nav className='md:ml-24'>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Products & Services</a>
                    <a className="link link-hover">Customer Stories</a>
                    <a className="link link-hover">Download Apps</a>
                </nav>
                <nav className='md:ml-24'>
                    <h6 className="footer-title">Information</h6>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Terms & Conditions</a>
                    <a className="link link-hover">Join Us</a>
                </nav>
                <nav className='md:ml-24'>
                    <h6 className="footer-title"> Social Links</h6>
                    <div className="flex items-center gap-2">
                        <FaXTwitter />
                        <a className="link link-hover"> @CS — Ticket System</a>
                    </div>
                    <div className="flex items-center gap-2">
                        <CiLinkedin />
                        <a className="link link-hover"> @CS — Ticket System</a>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaFacebook />
                        <a className="link link-hover"> @CS — Ticket System</a>
                    </div>
                    <div className="flex items-center gap-2">
                        <CiMail />
                        <a className="link link-hover"> support@cst.com</a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;