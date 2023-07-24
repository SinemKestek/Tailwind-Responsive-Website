import React from 'react'

const Hero = () => {
  return (
    <div className='bg-gray-100 w-full h-[70vh]'>

   <img src="https://media.istockphoto.com/id/1320244412/tr/foto%C4%9Fraf/g%C3%BCzel-tropikal-koyda-y%C3%BCzme-havuzunda-gen%C3%A7-kafkas-kad%C4%B1n-mavi-g%C3%B6ky%C3%BCz%C3%BC-ve-okyanus-yaz-tatili.jpg?s=612x612&w=0&k=20&c=jZuIhKcJPuCn62mTtAC6yiAqQDX3kxNoCllGwUwEoj8=" alt=""  className='w-full h-full object-cover'/>
      


       <div className='max-w-[1140px] m-auto '>
        <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-black p-4 ' >
          <h1 className='font-bold text-4xl text-white'>Find your best trip</h1>
          <h2 className='text-4xl  py-2 italic text-white'>With Weekaway</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, asperiores? Lorem ipsum dolor sit amet consectetur.</p>
        </div>
       </div>
    </div>
  )
}

export default Hero