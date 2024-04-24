import React from 'react';

import { IoMail  } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";


const Aside = () => {
    return (
        <aside className='sidebar'>

            <div className='sidebar-info'>
            <figure className='avatar-box'>
            <img
              src={"/images/ovi.png"}
              alt="Ovi"
              width="80"
            />
            </figure>

            <div className='info-content'>
                <h1 className='name'>Arfan H Ovi</h1>
                <p className='title'>Web Developer</p>
                
            </div>

            <button className='info_more-btn'>
                <span>Show Contacts</span>
            </button>


            </div>


            {/* Contacts Info  */}

            <div className='sidebar-info_more'>
                <hr className='separator2' />
                <ul className='contacts-list'>
                    <li className='contact-item'>
                        <div className='icon-box'>
                        <IoMail />
                        </div>
                        <div className='contact-info'>
                            <p className='contact-title'> Mail</p>
                            <a href="mailto:arfanovi.ce@gmail.com" className='contact-link'>arfanovi.ce@gmail.com</a>
                        </div> 
                    </li>


                    <li className='contact-item'>
                        <div className='icon-box'>
                        <FaPhone></FaPhone>
                        </div>
                        <div className='contact-info'>
                            <p className='contact-title'> PHONE</p>
                            <a href="callto:+8801717700836" className='contact-link'>+8801717700926</a>
                        </div>
                    </li>
                    <li className='contact-item'>
                        <div className='icon-box'>
                        <FaCalendarAlt />

                        </div>
                        <div className='contact-info'>
                            <p className='contact-title'> Born</p>
                            <time className='contact-link'>5 March, 2000</time>
                        </div>
                    </li>
                    <li className='contact-item'>
                        <div className='icon-box'>
                        <FaLocationDot />

                        </div>
                        <div className='contact-info'>
                            <p className='contact-title'> Location</p>
                            <a href="maps" className='contact-link'>Dhaka Bangladesh</a>
                        </div>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default Aside;