import React from 'react';
import CheckSvg from '../../../assets/Profile_experiences/images/Subtract.svg';

type Props={kind:boolean}

export default function ExpAcademicOther({kind}:Props) {

    const skillsM=[
        'dart',
        'flutter',
        'jest'
      ]
    
      const SkillsPM=[
        'scrum',
        'jira',
        'git & github'
      ]

  return (
    <div className=' h-[300px] gap-8  w-[350px] bg-white z-10   flex flex-col  bg-opacity-40 rounded-[42px] gap-y-4  p-7 pt-9  border-4 border-gray-400'>
                  <label className='capitalize text-2xl mb-5 pt-2'>{(kind)?"Project Management":"Mobile Development"}</label>
                <div className='ml-5 flex flex-col gap-4'>
                    {
                      ((kind)?SkillsPM:skillsM).map((val,index)=>{
                      return(
                        <div className='flex gap-7 items-center pl-9 ' key={index}>
                          <img src={CheckSvg} alt="" />
                          <label className='text-[22px]'>{val}</label>
                        </div>
                      )
                    })
                      
                    }
                  </div> 
              </div>
  )
}