import React from 'react'
import pic1 from '../../assets/Projects/images/pic1.svg'

// type Props = {}

export default function ProjectSingle() {
  return (
    <div className='flex flex-col w-[250px] gap-y-4 bg-gray-400 p-6 rounded-3xl'>
                <img src={pic1} alt=''/>
    
                {/* buttons */}
                <a href='www.github.com' className='p-2 border-black border-2 rounded-full bg-black text-white hover:bg-gray-700'>
                    Github
                </a>
    </div>
  )
}


{/* <div className='figma grid grid-cols-3 gap-4 w-[800px] m-auto'>
           
</div> */}