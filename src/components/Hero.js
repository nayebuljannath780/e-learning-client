import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className='py-[80px]'>
            <div className='container mx-auto'>
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className='lg:w-3/6  ml-6'>
                            <img src="assets/hero-banner.svg" className="rounded-lg px-12 " alt='' />
                        </div>
                        <div className='lg:w-3/6'>
                            <h1 className="text-5xl font-bold mt-5">Innovate Your Learning Experience</h1>
                            <p className="py-8 text-justify text-gray-400">Welcome to our cutting-edge e-learning platform, where knowledge knows no boundaries. Experience the power of learning in a digital realm, where education becomes accessible anytime, anywhere. Our platform brings together a vast array of courses, expert instructors, and interactive resources to ignite your thirst for knowledge.</p>
                            <button className="btn btn-primary"><Link to='courses'>Get Started</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;