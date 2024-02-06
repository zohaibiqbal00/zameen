import React from 'react'

const page = () => {
  return (
    <div className='h-[70px] flex w-[100%] bg-[#F7F7F7] '>
        <div className='w-[120px] ml-6
        '>
            <img  src = "https://www.zameen.com/news/wp-content/uploads/2016/01/Zameen-logo.jpg" alt="" />
        </div>
        <ul className='w-[600px]  flex justify-around items-center'>
            <li className='text-[14px] text-[#848484]'>BUY</li>
            <li className='text-[14px] text-[#33A137]'>HOMES</li>
            <li className='text-[14px] text-[#848484]'>PLOT</li>
            <li className='text-[14px] text-[#848484]'>COMMERIAL</li>
            <li className='text-[14px] text-[#848484] text-sm border-l-2 pl-1'>RENT</li>
            <li className='text-[14px] text-[#848484] text-sm border-l-2 pl-1'>AGENTS</li>
            <li className='text-[14px] text-[#848484] text-sm border-l-2 pl-1'>NEW PROJECTS</li>
        </ul>
    </div>
  )
}

export default page