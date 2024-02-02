import React from 'react'
import { BiFolder, BiFolderOpen, BiSolidMegaphone} from 'react-icons/bi'

const page = () => {
  return (
    <div className='bg-white text-black w-[100%] p-10'>
        <h1 className='font-bold text-2xl'>Zameen Community</h1>
        <div className='flex items-center justify-between p-5'>
            <div className='flex items-center gap-4'>
            <div className='flex gap-2 items-center'>
                <BiSolidMegaphone className='text-green-600'/>
                <p>News</p>
            </div>
            <button className=' text-blue-700 hover:underline'>Veiw all Cities</button>
            <div className='flex gap-2 items-center'>
                <BiFolder className='text-green-600'/>
                <p>News</p>
            </div>
            </div>



            <div className='flex items-center gap-4'>
           
            <button className=' text-blue-700 hover:underline'>Veiw all Cities</button>
            <div className='flex gap-2 items-center'>
                <BiFolderOpen className='text-green-600'/>
                <p>Forums</p>
            </div>
            <button className=' text-blue-700 hover:underline'>Veiw all Cities</button>

            </div>
            
        </div>




        <div className='flex gap-3 p-5'>
            <div className='w-[20%]'>

            <div className='flex gap-3'>
                <img style={{height: '70px',width:'50px',borderRadius: '7px'}} src="https://media.zameen.com/thumbnails/245784709-400x300.webp" alt="" />
                <div>
                    <p className='text-md'>Jinnah Square presents free...</p>
                    <p className='text-gray-400'>1 February 2024</p>
                </div>
            </div>
            <div className='flex mt-3 gap-3'>
                <img style={{height: '70px',width:'50px',borderRadius:'7px'}} src="https://media.zameen.com/thumbnails/245784710-400x300.webp" alt="" />
                <div>
                    <p>LHR's Band Road Corridor Projects...</p>
                    <p className='text-gray-400'>1 February 2024</p>
                </div>
            </div>
            </div>



            <div className='w-[20%]'>
                <img className='h-[60%] w-[100%] rounded-xl' src="https://zameenblog.s3.amazonaws.com/blog/wp-content/uploads/2023/09/image_2023_09_04T11_49_42_183Z.jpg" alt="" />
                <p>Tax Reforms, Promos, Architectural Brilliance...</p>
            </div>

            <div className='w-[20%]'>
                <img className='h-[60%] rounded-xl' src="https://zameenblog.s3.amazonaws.com/blog/wp-content/uploads/2021/09/airportgwa.jpg" alt="" />
                <p>The Dawn of a New Era:Gawadar International...</p>
            </div>

            <div className='w-[20%]'>
                <img className='h-[60%] w-[100%] rounded-xl' src="https://zameenblog.s3.amazonaws.com/blog/wp-content/uploads/2024/01/Blog-Cover-1440x625-3.jpg" alt="" />
                <p>Star Your Dream Business in the UAE for Just AED 16500 ...</p>
            </div>


            <div className='w-[20%]'>
                <div className='bg-[rgb(240,240,240)] rounded-lg py-3 px-3'>
                    <p className='text-sm font-semibold'>Buying Property</p>
                    <p className='text-gray-600 text-sm'>11k Topics | 2 New Topics</p>
                </div>

                <div className='bg-[rgb(240,240,240)] rounded-lg py-3 px-3 mt-4'>
                    <p className='text-sm font-semibold'>Renting Property</p>
                    <p className='text-gray-600 text-sm'>556 Topics | 2 New Topics</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default page