import React from 'react'
import './Loader.css';

const Loader = () => {
  return (
    
    <div>
      <div className=' my-8 flex flex-col gap-y-5'>
            <div className='loader flex gap-x-4 w-[100%] h-[50px] rounded-lg  items-center justify-center'>
    
            </div>
            <div className='loader flex items-center w-[100%] h-[30px] justify-center rounded-lg '>
                <p className=' text-slate-200 capitalize font-bold'></p>
                <div></div>
            </div>
            <p className='loader text-4xl text-slate-200 font-extrabold w-[100%] h-[45px] rounded-lg '></p>

            <div className='flex  max-phone:flex-col justify-between items-center w-[100%] gap-5'>
                <div className='loader flex flex-col p-2 rounded-lg w-[10em] h-[10em] justify-center items-center gap-y-1  '>
                    
                </div>
                <div className='loader flex flex-col p-2 rounded-lg w-[10em] h-[10em] justify-center items-center gap-y-1  '>
                    
                </div>
                <div className='loader flex flex-col p-2 rounded-lg w-[10em] h-[10em] justify-center items-center gap-y-1  '>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Loader