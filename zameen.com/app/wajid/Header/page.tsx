import React from 'react'
import { IoHomeSharp } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { FaPlus, FaUser } from 'react-icons/fa';
import { PiGearSixBold } from 'react-icons/pi';

export default function page() {
  return (
    <>
    
        <div className='h-[50px] w-[100%] flex justify-between bg-[#33A137]'>
            <div className='h-[100%] w-[600px] flex items-center  '>
                <IoHomeSharp className='text-[30px] text-white ml-5 '/>
                    <ul  className='ml-2 flex justify-around gap-6 items-center'>
                        <li className='text-sm font-semibold text-white'>PROPERTIES</li>
                        <li className='text-sm font-semibold text-white'>PLOT FINDER</li>
                        <li className='text-sm font-semibold text-white'>AREA GUIDES</li>
                        <li className='text-sm font-semibold text-white'> BLOG</li>
                        <li className='text-sm font-semibold text-white'> TOOLS </li>
                        <li className='text-sm font-semibold text-white'> MAPS</li>
                        </ul>
            </div>
            <div className='h-[100%] w-[550px] flex justify-around items-center  '>
                <div className='h-[30px] w-[130px] rounded-sm border flex items-center justify-evenly'>
                    <p className='text-white text-[15px]'>Product ID</p>
                      <IoIosSearch className='text-lg'/>  
                </div>
                <div className='h-[30px] w-[140px] rounded-sm bg-[white]  flex items-center justify-evenly'>
                      <FaPlus className='text-md'/>  
                    <p className=' text-[13px]'> Add Property</p>
                </div>
                 <div className='h-[30px] w-[50px] rounded-sm  flex items-center justify-evenly'>
                        <img className='h-[100%] w-[100%]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKf9lGXAegFW9b_As30EbJtXV9w7a4dkxdqLSQu_sqdCJncFyLrqy2w6Z_ZOCumrlqDsw&usqp=CAU" alt="" />
                </div>
                <div className='h-[30px] w-[110px] rounded-sm flex items-center justify-evenly'>
                      <PiGearSixBold className='text-xl text-white'/>  
                      <FaUser className='text-xl text-white'/>  
                </div>
                
                



            </div>



        </div>
    </>

  )
}
