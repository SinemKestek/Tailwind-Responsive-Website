import React from 'react'

const Card = () => {
  return (
    <div className='max-w-[1140px] mx-auto md:flex justify-center  w-full  mt-[-75px]'>
      <div className='relative py-5 '>
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%]  translate-y-[-50%] text-white  font-bold text-2xl'>Resort</h3>
        <img src="https://media.istockphoto.com/id/119926339/tr/foto%C4%9Fraf/resort-swimming-pool.jpg?s=612x612&w=0&k=20&c=6kPVs11xi1d62H4KWLvHTiohZBbhyDwBij8fJu9BZXc=" className= ' shadow-lg w-full h-full object-cover relative border-4 border-white ' alt="" />
      </div>
      <div className='relative py-5'>
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%]  translate-y-[-50%] text-white  font-bold text-2xl'>Scuba Diving</h3>
        <img src="https://media.istockphoto.com/id/498283106/tr/foto%C4%9Fraf/underwater-scuba-diver-explore-and-enjoy-coral-reef-sea-life.jpg?s=612x612&w=0&k=20&c=32j17qivRjti0rNTnh7jHsux1Vtf-aypCj5CnnAnBVk=" alt="" className=' shadow-lg w-full h-full object-cover relative border-4 border-white '/>
      </div>
      <div className='relative py-5 '>
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%]  translate-y-[-50%] text-white  font-bold text-2xl'>AquaPark</h3>
        <img src="https://media.istockphoto.com/id/962135960/tr/foto%C4%9Fraf/kad%C4%B1n-kameraya-floaties-y%C3%BCzme-havuzunda-ar%C4%B1yor.jpg?s=612x612&w=0&k=20&c=xkXjC8MJxHIMVYbWoUCVV6zablrR4p9HW3sToQQiEmc=" alt="" className='shadow-lg w-full h-full object-cover relative border-4 border-white ' />
      </div>
      </div>






    
  )
}

export default Card