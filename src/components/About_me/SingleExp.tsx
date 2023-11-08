import React from 'react'
import Graduation from '../../assets/Profile_about_me/images/GraduationCap.svg'


export default function SingleExp() {
  return (
    <div className='bg-[#D9D9D9] bg-opacity-50 rounded-[42px] w-[281px] h-[138px] flex flex-col justify-center border-2 border-[#C9B8B8]'>
          {/* svg */}
          <img className='m-auto' src={Graduation} width={33} height={33} alt=''/>
          <h4 className='capitalize font-semibold'>Experience</h4>
          <p className='capitalize'>+2 years</p>
          <p className='capitalize'>full stack development</p>
        </div>
  )
}