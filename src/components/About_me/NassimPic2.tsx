import React from 'react'
import NassimPic from '../../assets/Profile_about_me/images/imagenassim.svg'



export default function NassimPic2() {
  return (
    <div className='relative'>
    <img className="absolute -left-2 -top-1 " src={NassimPic} width={375} alt="" />
    <div className=' bg-gray-400 bg-opacity-50 w-[375px] h-[400px] rounded-[72px]' ></div>
  </div>
    
  )
}