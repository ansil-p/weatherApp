"use client"
import React from 'react'
import Image from 'next/image'
import Cloud from '../components/assets/3d-weather-icon-day-with-rain-free-png.webp'
import Link from 'next/link'

function GetStart() {
    return (
        <div className='flex justify-center items-center h-full'>
            <div className='flex flex-col'>
                <Image
                    src={Cloud}
                    className='mb-3'
                    alt=''
                />
              <div className='text-center mb-4 text-4xl text-yellow-500 font-bold'>
              <p>Weather</p>
                <p>ForeCasts</p>
              </div>
           <Link href="/register">
           <button className='bg-blue-600 text-white p-2 px-4 w-full rounded-lg'>Get Start</button>
           </Link>
            
            </div>
        </div>
    )
}

export default GetStart
