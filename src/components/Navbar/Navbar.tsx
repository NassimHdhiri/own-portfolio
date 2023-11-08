import React from 'react';


export default function Navbar() {
  return (
    <nav className=' sticky top-2 flex items-center justify-between  p-4 pt-0 z-50 bg-white h-14 shadow-lg shadow-slate-400'> 
        <h1 className='ml-12 font-bold text-2xl hover:cursor-pointer mt-2'>Hdhiri Med Nassim</h1>
          <ul className=' absolute -right-5 pr-2 flex justify-around w-2/6 top-3'>
              <li className='hover:font-semibold hover:underline hover:cursor-pointer -ml-2'>home</li>
              <li className='hover:font-semibold hover:underline hover:cursor-pointer'>about</li>
              <li className='hover:font-semibold hover:underline hover:cursor-pointer'>portfolio</li>
              <li className='hover:font-semibold hover:underline hover:cursor-pointer'>contact</li>
          </ul>
    </nav>
  )
}
