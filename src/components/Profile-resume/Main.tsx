import React from 'react'
import Picture from './Picture/Picture'
import Resume from './Resume'
import ProfilBtns from './ProfilBtns'



export default function Main() {
  return (
    <div className='grid grid-cols-12 mt-9 z-30'>
        <div className='col-start-1 col-end-6'>
            <Picture/>
        </div>
       <div className='col-start-6 col-end-12 flex flex-col items-center justify-center gap-y-16'>
            <div className='ml-16 grid-rows-6  h-[600px] w-[600px] relative'>
              <div className='p-6'></div>
              <div  className=' absolute top-40 row-start-1 row-end-4'>
                  <Resume/>
              </div>
              <div className=' p-4'></div>
              <div className=' p-4'></div>
              <div className='absolute bottom-28 left-28 row-start-4 row-end-6 justify-center items-center mt-12'>
                <ProfilBtns/>
              </div>
            </div>
       </div>
    </div>
  )
}