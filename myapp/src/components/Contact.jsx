import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1140px] m-auto w-full p-4 py-16'>
        <h2 className='text-center text-gray-700'>Send Us Message</h2>
        <p  className='text-center text-gray-700'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <div className='grid md:grid-cols-2 '>
          <img className="w-full md:h:full object-cover p-2 max-h-[500px] h-[200px]"src="https://media.istockphoto.com/id/1160947136/tr/foto%C4%9Fraf/%C3%A7ift-sahilde-dinlenmek-tropikal-adada-g%C3%BCzel-deniz-tad%C4%B1n%C4%B1-%C3%A7%C4%B1kar%C4%B1n.jpg?s=612x612&w=0&k=20&c=OYgsYfSu6Evz65K_wEMCn6jhnYLx0QrxURxlIa9dwNA=" alt="" />
          <form action="">
            <div className='grid grid-cols-2 py-2'>
            <input className='border m-2 p-2' type="text" placeholder='Name' />
           <input className='border m-2 p-2' type="text" placeholder='Surname' />
           <input className='border m-2 p-2' type="tel" placeholder='Phone' />
           <input className='border m-2 p-2' type="email" placeholder='Email'/>
           <input  className='border m-2 p-2 col-span-2' type="text" placeholder='Adress' />
          
           <button className='col-span-2 m-2 bg-cyan-500 hover:bg-cyan-600 p-2 rounded w-full '>Submit </button>
            </div>
           


          </form>



        </div>
    </div>
  )
}

export default Contact