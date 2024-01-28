import React from 'react'
import { Link } from 'react-router-dom';


export default function Confirm () {
  return (
    <div className="w-screen h-screen bg-[#E0D0C2] flex justify-center items-center">
        <div className="w-[80%] h-[90%] bg-orange-50 rounded-3xl relative">
            <div className="h-[60px] relative top-14 left-14 flex">
                <p className='text-black font-bold text-5xl'>Ready to share?</p>
            </div>
            <Link to="./feed" target="_self">
                <div className='w-[200px] h-[60px] mr-[60px] bg-[#E0D1C2] rounded-[90px] flex items-center justify-center absolute bottom-10 left-14'>
                    <p className='text-black font-bold text-2xl'>Cancel</p>                
                </div>
            </Link>
            <Link to="./feed" target="_self">
                <div className='w-[200px] h-[60px] mr-[60px] bg-[#84A29F] rounded-[90px] flex items-center justify-center absolute bottom-10 right-0'>
                    <p className='text-black font-bold text-2xl'>Post</p>                
                </div>
            </Link>
            <div className='bg-[#D2E0EE] h-[300px] w-[300px] mx-auto mt-[100px] flex flex-col justify-center items-center font-bold'>
            <h1 className='text-4xl text-gray-400'>(Image)</h1>
            </div>
            <div className='w-[300px] mt-10 mx-auto flex flex-col justify-center items-center font-bold'>
                <h1 className='text-4xl text-gray-400'>(Text)</h1> 
            </div>

            
        </div>
    </div>
  )
}
