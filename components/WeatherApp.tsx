"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { FaRegSnowflake } from "react-icons/fa";
import { RiCelsiusFill } from "react-icons/ri";
import { TbSunset2 } from "react-icons/tb";

function WeatherApp({ data }: any) {
    const route = useRouter()
    const [location, setLocation] = useState<string>('')
    console.log(data);

    return (
        <div>
            <div>
                <div className='p-8'>
                    <div className='flex gap-3 justify-center'>
                        <input type="text"
                            placeholder='search'
                            value={location}
                            onChange={(e) => (setLocation(e.target.value))}
                            className='input outline-0 border p-1  rounded-md pr-9'
                        />
                        <div className='flex justify-center items-center bg-white rounded-md  px-3'>
                            <FaSearch onClick={() => route.push(`/${location}`)} />
                        </div>
                    </div>
                </div>

                <div className='text-center text-white'>
                    <p className='weather-location text-3xl'>london</p>
                    <p className='weather-temp text-7xl'>tgfgf</p>
                    <p>heavy snow</p>
                </div>

                <div className='px-5 max-sm:flex max-sm:justify-center'>
                    <div className='flex justify-around mt-10 bg-gray-400 p-5 rounded-lg max-sm:flex-col max-sm:w-full'>
                        <div className='text-white flex flex-col items-center max-sm:flex-row max-sm:gap-5  max-sm:justify-center'>
                            <p className='mb-5 text-lg'>now</p>
                            <FaRegSnowflake className='mb-5 text-lg' />
                            <div className='flex text-lg '>
                                <p>31</p>
                                <RiCelsiusFill className='text-sm' />
                            </div>
                        </div>
                        <div className='text-white flex flex-col items-center max-sm:flex-row max-sm:gap-5  max-sm:justify-center'>
                            <p className='mb-5 text-lg'>now</p>
                            <FaRegSnowflake className='mb-5 text-lg' />
                            <div className='flex text-lg'>
                                31
                                <RiCelsiusFill className='text-sm' />
                            </div>
                        </div>
                        <div className='text-white flex flex-col items-center max-sm:flex-row max-sm:gap-5  max-sm:justify-center'>
                            <p className='mb-5 text-lg'>now</p>
                            <FaRegSnowflake className='mb-5 text-lg' />
                            <div className='flex text-lg'>
                                31
                                <RiCelsiusFill className='text-sm' />
                            </div>
                        </div>
                        <div className='text-white flex flex-col items-center max-sm:flex-row max-sm:gap-5  max-sm:justify-center'>
                            <p className='mb-5 text-lg'>now</p>
                            <FaRegSnowflake className='mb-5 text-lg' />
                            <div className='flex text-lg'>
                                31
                                <RiCelsiusFill className='text-sm' />
                            </div>
                        </div>
                        <div className='text-white flex flex-col items-center max-sm:flex-row max-sm:gap-5  max-sm:justify-center'>
                            <p className='mb-5 text-lg'>now</p>
                            <FaRegSnowflake className='mb-5 text-lg' />
                            <div className='flex text-lg'>
                                31
                                <RiCelsiusFill className='text-sm' />
                            </div>
                        </div>
                        <div className='text-white flex flex-col items-center max-sm:flex-row max-sm:gap-5  max-sm:justify-center'>
                            <p className='mb-5 text-lg'>now</p>
                            <FaRegSnowflake className='mb-5 text-lg' />
                            <div className='flex text-lg'>
                                31
                                <RiCelsiusFill className='text-sm' />
                            </div>
                        </div>
                        <div className='text-white flex flex-col items-center max-sm:flex-row max-sm:gap-5  max-sm:justify-center'>
                            <p className='mb-5 text-lg'>now</p>
                            <FaRegSnowflake className='mb-5 text-lg' />
                            <div className='flex text-lg'>
                                31
                                <RiCelsiusFill className='text-sm' />
                            </div>
                        </div>
                        <div className='text-white flex flex-col items-center max-sm:flex-row max-sm:gap-5  max-sm:justify-center'>
                            <p className='mb-5 text-lg'>now</p>
                            <FaRegSnowflake className='mb-5 text-lg' />
                            <div className='flex text-lg'>
                                31
                                <RiCelsiusFill className='text-sm' />
                            </div>
                        </div>
                        <div className='text-white flex flex-col items-center max-sm:flex-row max-sm:gap-5  max-sm:justify-center'>
                            <p className='mb-5 text-lg'>now</p>
                            <FaRegSnowflake className='mb-5 text-lg' />
                            <div className='flex text-lg'>
                                31
                                <RiCelsiusFill className='text-sm' />
                            </div>
                        </div>
                        <div className='text-white flex flex-col items-center max-sm:flex-row max-sm:gap-5  max-sm:justify-center'>
                            <p className='mb-5 text-lg'>now</p>
                            <FaRegSnowflake className='mb-5 text-lg' />
                            <div className='flex text-lg'>
                                31
                                <RiCelsiusFill className='text-sm' />
                            </div>
                        </div>
                    </div>
                </div>


                <div className='flex px-5 mt-4 text-white gap-5 max-md:justify-between max-sm:flex-col'>
                    <div className='bg-gray-400 w-fit px-5 py-2 rounded-lg max-md:w-full max-sm:full max-sm:flex max-sm:flex-col'>
                        <p className='mb-3'>5days Forecast</p>
                        <div className='flex gap-9 '>
                            <p>Today</p>
                            <FaRegSnowflake className='mb-5 text-lg' />
                            <div className='flex'>
                                27
                                <RiCelsiusFill className='text-sm' />
                            </div>
                            <div className='flex'>
                                32
                                <RiCelsiusFill className='text-sm' />
                            </div>
                        </div>

                        <div className='flex gap-9'>
                            <p>Today</p>
                            <FaRegSnowflake className='mb-5 text-lg' />
                            <div className='flex'>
                                27
                                <RiCelsiusFill className='text-sm' />
                            </div>
                            <div className='flex'>
                                32
                                <RiCelsiusFill className='text-sm' />
                            </div>
                        </div>
                        <div className='flex gap-9 '>
                            <p>Today</p>
                            <FaRegSnowflake className='mb-5 text-lg' />
                            <div className='flex'>
                                27
                                <RiCelsiusFill className='text-sm' />
                            </div>
                            <div className='flex'>
                                32
                                <RiCelsiusFill className='text-sm' />
                            </div>
                        </div>
                        <div className='flex gap-9 '>
                            <p>Today</p>
                            <FaRegSnowflake className='mb-5 text-lg' />
                            <div className='flex'>
                                27
                                <RiCelsiusFill className='text-sm' />
                            </div>
                            <div className='flex'>
                                32
                                <RiCelsiusFill className='text-sm' />
                            </div>
                        </div>
                        <div className='flex gap-9 '>
                            <p>Today</p>
                            <FaRegSnowflake className='mb-5 text-lg' />
                            <div className='flex'>
                                27
                                <RiCelsiusFill className='text-sm' />
                            </div>
                            <div className='flex'>
                                32
                                <RiCelsiusFill className='text-sm' />
                            </div>
                        </div>
                        <div className='flex gap-9'>
                            <p>Today</p>
                            <FaRegSnowflake className='mb-5 text-lg' />
                            <div className='flex'>
                                27
                                <RiCelsiusFill className='text-sm' />
                            </div>
                            <div className='flex'>
                                32
                                <RiCelsiusFill className='text-sm' />
                            </div>
                        </div>
                    </div>

                    <div className='bg-gray-400 rounded-lg py-2 px-5 max-md:w-full'>
                        <div className='flex gap-2 items-center'>
                            <TbSunset2 />
                            Sunset
                        </div>
                        <p className='text-4xl mt-3'>6:23pm</p>
                        <hr className='mt-4 mb-4' />
                        <p>sunrise : 9:04 Am</p>
                    </div>

                    <div className='bg-gray-400 rounded-lg  w-full max-md:hidden'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d502964.57949988544!2d75.97125484852917!3d9.982886503262744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d514abec6bf%3A0xbd582caa5844192!2sKochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1710229841752!5m2!1sen!2sin" className='w-full h-full rounded-lg' loading="lazy" ></iframe>
                    </div>

                </div>

                <div className='px-5 mt-4'>
                    <div className='bg-gray-400 rounded-lg  w-full md:hidden'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d502964.57949988544!2d75.97125484852917!3d9.982886503262744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d514abec6bf%3A0xbd582caa5844192!2sKochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1710229841752!5m2!1sen!2sin" className='w-full h-full rounded-lg' loading="lazy" ></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherApp
