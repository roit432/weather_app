import React from 'react'
import errorImg from "../assets/error.png";

const ErrorComponent = () => {
  return (
    <div className='flex justify-center items-center mt-4'>
      <img className='max-phone:h-[200px] max-phone:w-[200px]' src={errorImg} height="350px" width="350px" alt="" />
    </div>
  )
}

export default ErrorComponent
