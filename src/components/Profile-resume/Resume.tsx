import React from 'react'
import GlobalWorld from '../../assets/Profile_resume/images/GlobeWorld.svg';

export default function Resume() {
  return (
    <div className='flex flex-col items-center'>
        {/* first line */}
        <div className='flex items-center gap-5'>
            <img src={GlobalWorld} alt='' />
            <h2 className=' text-[37px] capitalize font-light'>Hello ,I'm</h2>
        </div>

        {/* 2nd line */}
        <div>
            <h2 className=' text-[50px] leading-[90px] font capitalize font-semibold pl-7 '>hdhiri Mohamed nassim</h2>
            <h2 className=' text-[30px] capitalize  pl-10  '>full stack developer</h2>
        </div>
    </div>
  )
}