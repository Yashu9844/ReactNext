"use client"

import React, { useState } from 'react'

const page = () => {
  const [color,setColor] =useState("olive")
  return (
   
    <div className='w-full h-screen duration-200 flex items-end justify-center '
    style={{backgroundColor: color}}>
      <div className='bg-white h-15 w-2/3 bottom-12 flex fixed justify-center rounded-xl px-3 py-2'>
      <div onClick={() =>{setColor("red")}} className='flex flex-wrap justify-center  text-white  inset-x-0 px-7 m-3 py-3 items-end relative  rounded-3xl bg-red-500'>RED</div>
      
      <div onClick={() =>{setColor("lime")}} className='flex flex-wrap justify-center   text-white  inset-x-0 px-7 m-3 py-3 items-end relative  rounded-3xl bg-orange bg-lime-400'>LIME</div>
      <div onClick={() =>{setColor("orange")}} className='flex flex-wrap justify-center  text-white   inset-x-0 px-7 m-3 py-3 items-end relative  rounded-3xl bg-orange bg-orange-600'>ORANGE</div>
      <div onClick={() =>{setColor("yellow")}} className='flex flex-wrap justify-center  text-white   inset-x-0 px-7 m-3 py-3 items-end relative  rounded-3xl bg-yellow-400'>YELLOW</div>
      <div onClick={() =>{setColor("green")}} className='flex flex-wrap justify-center    text-white inset-x-0 px-7 m-3 py-3 items-end relative  rounded-3xl bg-green-600'>GREEN</div>
      <div onClick={() =>{setColor("cyan")}} className='flex flex-wrap justify-center  text-white  inset-x-0 px-7 m-3 py-3 items-end relative  rounded-3xl bg-cyan-400 '>CYAN</div>
      
      <div onClick={() =>{setColor("blue")}} className='flex flex-wrap justify-center   text-white  inset-x-0 px-7 m-3 py-3 items-end relative  rounded-3xl bg-blue-600'>BLUE</div>
      </div>
    </div>
    
    
  )
}

export default page
