import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../utilitys/SectionTitle';

const About = () => {
    return (
        <section className='py-[80px]'>
            <div className='container mx-auto px-24'>
                <SectionTitle name='About' />
                <div className='md:flex items-center'>
                    <div className='md:w-1/2 p-16 flex justify-center'>
                        <img src="assets/hero-banner-2.svg" alt="" />
                    </div>
                    <div className='md:w-1/2'>
                        <h2 className='text-5xl font-bold text-primary'>E-Learning</h2>
                        <p className='mt-5 text-justify text-gray-400'>Embark on a personalized learning journey tailored to your interests and goals. Choose from a diverse range of subjects spanning from business and technology to arts and sciences. Our carefully curated curriculum ensures that you can acquire new skills, enhance your expertise, and stay ahead of the curve in an ever-evolving world. <br /> <br /> With our innovative learning tools and engaging content, you'll experience an immersive educational experience like never before. Dive into interactive lessons, collaborate with fellow learners, and access a wealth of resources at your fingertips. Whether you prefer video lectures, quizzes, or hands-on projects, our platform offers a variety of learning formats to cater to your unique learning style.</p>

                        <button className='btn btn-primary mt-5'><Link to='courses'>Learn More</Link></button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;