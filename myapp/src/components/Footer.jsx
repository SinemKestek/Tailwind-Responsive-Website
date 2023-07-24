import React from 'react'
import { BsChatSquareDots } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='max-w-[1140px] w-full py-8 m-auto border-t-4 flex flex-col items-center'>
        <BsChatSquareDots size={30} className='text-[var(--dark-primary)] px-2' ></BsChatSquareDots>
    <h1 className='mx-2'>WeekAway</h1> </div>
  )
}

export default Footer