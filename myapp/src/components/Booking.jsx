import React from 'react'

const Booking = () => {
  return (
    <div id='deals' className='max-w-[1140px] m-auto w-full p-4'>
      <form  className='lg:flex lg:justify-center w-full items-center'>
        <div className='flex flex-col my-2 py-2'>
          <label htmlFor="">Destination</label>
          <select className='lg:w--[300px] md:w-full border rounded-md p-2'>
            <option value="">Grande Antigua</option>
            <option value="">Key West</option>
            <option value="">Maldives</option>
            <option value="">Cozumel</option>

          </select>
        </div>
        <div className=' flex w-full'>
          <div className='flex flex-col w-full lg:max-w-[250px] my-2 py-2'>
            <label >Check-In</label>
            <input type="date" className='border rounded-md' />
          </div>
          <div className='flex flex-col w-full lg:max-w-[250px] my-2 py-2'>
            <label >Check-Out</label>
            <input type="date" className='border rounded-md' />
          </div>
        </div>
        <div className='flex flex-col w-full  my-2 py-2'>
          <label >Search</label>
          <button className="bg-cyan-500 hover:bg-cyan-600 p-2 rounded w-full" >Rates&Avabilities</button>
        </div>
      </form>
    </div>
  )
}

export default Booking