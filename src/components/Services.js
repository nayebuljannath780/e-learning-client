import React from 'react';
import { AcademicCapIcon, ArrowRightIcon, ArrowTrendingUpIcon, BookOpenIcon } from '@heroicons/react/24/solid'

const Services = () => {
    return (
        <section className='px-24 bg-slate-100 py-[80px]'>
            <div className='container mx-auto grid md:grid-cols-3'>
                <div className='bg-white p-10 m-5 rounded-xl'>
                    <AcademicCapIcon className='w-20 text-primary mx-auto my-4'/>
                    <h2 className='text-2xl font-bold text-center'>Unlock Your Future</h2>
                    <p className='text-gray-500 mt-3 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero veniam expedita enim vero debitis dolorem in tempore amet, voluptatibus ratione.</p>
                    <button className='mx-auto flex whitespace-nowrap text-lg items-center text-primary mt-3 transition-all hover:ml-2'>read more <ArrowRightIcon className='w-6 ml-2'/></button>
                </div>
                <div className='bg-white p-10 m-5 rounded-xl'>
                    <ArrowTrendingUpIcon className='w-20 text-primary mx-auto my-4'/>
                    <h2 className='text-2xl font-bold text-center'>Master New Skills</h2>
                    <p className='text-gray-500 mt-3 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero veniam expedita enim vero debitis dolorem in tempore amet, voluptatibus ratione.</p>
                    <button className='mx-auto flex whitespace-nowrap text-lg items-center text-primary mt-3 transition-all hover:ml-2'>read more <ArrowRightIcon className='w-6 ml-2'/></button>
                </div>
                <div className='bg-white p-10 m-5 rounded-xl'>
                    <BookOpenIcon className='w-20 text-primary mx-auto my-4'/>
                    <h2 className='text-2xl font-bold text-center'>Level Up Your Education</h2>
                    <p className='text-gray-500 mt-3 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero veniam expedita enim vero debitis dolorem in tempore amet, voluptatibus ratione.</p>
                    <button className='mx-auto flex whitespace-nowrap text-lg items-center text-primary mt-3 transition-all hover:ml-2'>read more <ArrowRightIcon className='w-6 ml-2'/></button>
                </div>
                <div className='bg-white p-10 m-5 rounded-xl'>
                    <BookOpenIcon className='w-20 text-primary mx-auto my-4'/>
                    <h2 className='text-2xl font-bold text-center'>Level Up Your Education</h2>
                    <p className='text-gray-500 mt-3 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero veniam expedita enim vero debitis dolorem in tempore amet, voluptatibus ratione.</p>
                    <button className='mx-auto flex whitespace-nowrap text-lg items-center text-primary mt-3 transition-all hover:ml-2'>read more <ArrowRightIcon className='w-6 ml-2'/></button>
                </div>
                <div className='bg-white p-10 m-5 rounded-xl'>
                    <BookOpenIcon className='w-20 text-primary mx-auto my-4'/>
                    <h2 className='text-2xl font-bold text-center'>Level Up Your Education</h2>
                    <p className='text-gray-500 mt-3 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero veniam expedita enim vero debitis dolorem in tempore amet, voluptatibus ratione.</p>
                    <button className='mx-auto flex whitespace-nowrap text-lg items-center text-primary mt-3 transition-all hover:ml-2'>read more <ArrowRightIcon className='w-6 ml-2'/></button>
                </div>
                <div className='bg-white p-10 m-5 rounded-xl'>
                    <BookOpenIcon className='w-20 text-primary mx-auto my-4'/>
                    <h2 className='text-2xl font-bold text-center'>Level Up Your Education</h2>
                    <p className='text-gray-500 mt-3 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero veniam expedita enim vero debitis dolorem in tempore amet, voluptatibus ratione.</p>
                    <button className='mx-auto flex whitespace-nowrap text-lg items-center text-primary mt-3 transition-all hover:ml-2'>read more <ArrowRightIcon className='w-6 ml-2'/></button>
                </div>
            </div>
        </section>
    );
};

export default Services;