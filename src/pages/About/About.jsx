import React, { useEffect, useState } from 'react';
import Service from '../Service';
import Testimonials from '../Testimonials';



const servicesData = [
    {
      "title": "UI/UX",
      "icon": "/images/icon-design.svg",
      "description": "The most modern and high-quality design made at a professional level."
    },
    {
      "title": "Web development",
      "icon": "/images/icon-dev.svg",
      "description": "High-quality development of sites at the professional level."
    },
    {
      "title": "Mobile Apps",
      "icon": "/images/icon-app.svg",
      "description": "Professional development of applications for iOS and Android."
    },
    {
      "title": "Photography",
      "icon": "/images/icon-photo.svg",
      "description": "I make high-quality photos of any category at a professional level."
    }
  ]
  




const About = () => {

    const [testimonials, setTestimonials] = useState([])
    useEffect(() =>{
        fetch('testimonials.json').then(res => res.json()).then(data => {
            // console.log(data);
            setTestimonials(data)
        });
    }, [])
    return (
        <div className='about active'>
            <header>
                <h2 className='h2 article-title'>About Me</h2>
            </header>
            <section>
                <p>
                Greetings! I'm Ovi, a MERN stack sorcerer and explorer of digital realms. With a passion for crafting enchanting web experiences, I bring a blend of creativity and technical prowess to every project.
                <br />

                My journey into web development began with a fascination for technology and a desire to create meaningful connections in the digital landscape. Through years of exploration and learning, I've honed my skills in the MERN stack, mastering MongoDB, Express, React, and Node.js spells to conjure immersive web experiences.

                </p>
            </section>

            <section className='service'>
                <p className='h3 service-title'>What's I'm Doing</p>
                <ul className='service-list'>
                    {servicesData.map((service, index)=> (
                     <Service key={index} title={service.title} icon={service.icon} description={service.description}>

                     </Service>
                     ))}
                </ul>

            </section>

            <section className='testimonials'>
                <h2 className='h3 testimonials-title'>Testimonials</h2>

                <ul className='testimonials-list has-scrollbar'>

                    {
                        testimonials.map((testimonial, index)=>(
                            <Testimonials key={index}
                            name={testimonial.name}
                            avatar={testimonial.avatar}
                            testimonial={testimonial.testimonial}
                            
                            />
                        ))
                    }
                

                </ul>

            </section>

            {/* clint logo */}
            <section className='clients'>
                <h3 className='h3 clients-title'>
                    CLIENTS

                </h3>

                <ul className='clients-list has-scrollbar'>
                    <li className='clients-item'>
                        <a href="#">
                            <img src="../../../public/images/logo-1-color.png" alt="" />
                        </a>

                    </li>
                    <li className='clients-item'>
                        <a href="#">
                            <img src="../../../public/images/logo-2-color.png" alt="" />
                        </a>

                    </li>
                    <li className='clients-item'>
                        <a href="#">
                            <img src="../../../public/images/logo-3-color.png" alt="" />
                        </a>

                    </li>
                    <li className='clients-item'>
                        <a href="#">
                            <img src="../../../public/images/logo-4-color.png" alt="" />
                        </a>

                    </li>
                    <li className='clients-item'>
                        <a href="#">
                            <img src="../../../public/images/logo-5-color.png" alt="" />
                        </a>

                    </li>
                    <li className='clients-item'>
                        <a href="#">
                            <img src="../../../public/images/logo-6-color.png" alt="" />
                        </a>

                    </li>
                </ul>

            </section>
        </div>
    );
};

export default About;