import React from 'react'
import {AiFillPhone,AiOutlineClockCircle } from 'react-icons/ai'
import {BsChatSquareDots} from 'react-icons/bs'
const TopBar = () => {
  return (
  <div className='flex justify-between items-center px-4 py-3 mx-4'>
    <div className='flex items-center'>
    <BsChatSquareDots size={30} className='text-[var(--primary-dakr) mr-2]'></BsChatSquareDots>
     <h1 className='text-xl font-bold text-gray-800 pl-3 '>Weekaway</h1>
   </div>
   <div className='flex '>
    <div className='hidden md:flex items-center px-6'>
        <AiOutlineClockCircle className='mr-2 text-[var(--primary-dark)]'></AiOutlineClockCircle>
        <p className='mx-1 text-gray-700'>9am-5am</p>
    </div>
    <div className='hidden md:flex items-center px-6'>
        <AiFillPhone className='mr-2 text-[var(--primary-dark)]'></AiFillPhone>
        <p className='mx-1  text-gray-700'>232-321-21-4593</p>
    </div>
    <button dir="rtl" className=' p-1 bg-gradient-to-r from-cyan-500 to-slate-800 rounded-s-lg  hover:from-blue-100 hover:to-zinc-200 hover:text-black' >Get a Free Qupte</button>
   </div>
  
  
  
  
  
  
  </div>
  )
}

export default TopBar