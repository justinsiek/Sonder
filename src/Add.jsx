import React from 'react'
import { Link } from 'react-router-dom';


export default function Add () {
  return (
    <div className="w-screen h-screen bg-[#E0D0C2] flex justify-center items-center">
        <div className="w-[80%] h-[90%] bg-orange-50 rounded-3xl relative">
            <Link to="./text" target="_self">
                <div className='absolute w-[200px] h-[60px] rounded-[90px] flex items-center justify-center bg-[#84A29F] z-10 bottom-6 right-8'>
                    <p className='font-bold text-2xl'>Next</p>
                </div>
            </Link>
            <div className="h-[60px] relative flex top-7 left-7 justify-between">
                <div className='flex'>
                    <div className='w-[60px] h-[60px] bg-[#84A29F] rounded-full flex items-center justify-center mr-5'>
                        <p className='text-black font-bold  text-2xl'>1</p>
                    </div>
                    <Link to="./text" target="_self">
                        <div className='w-[60px] h-[60px] bg-[#E0D1C2] rounded-full flex items-center justify-center'>
                            <p className='text-black font-bold  text-2xl'>2</p>
                        </div>
                    </Link>
                </div>
                <Link to="./feed" target="_self">
                    <div className='w-[200px] h-[60px] mr-[60px] bg-[#E0D1C2] rounded-[90px] flex items-center justify-center'>
                        <p className='text-black font-bold text-2xl'>Cancel</p>                
                    </div>
                </Link>
            </div>
            <div className="h-[60px] relative top-14 left-8 flex justify-between">
                <p className='text-black font-bold text-5xl'>Upload an Image</p>
          </div>
          <div className='bg-[#D2E0EE] h-[450px] w-[1000px] mx-auto mt-[100px] flex flex-col justify-center items-center font-bold'>
            <h1 className='text-4xl text-gray-400'>Drag and drop images here</h1>
          </div>
        </div>
     </div>
  )
}
