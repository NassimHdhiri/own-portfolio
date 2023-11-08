import React from 'react'
import ProjectSingle from '../ProjectSingle'


export default function ProjectSoftware() {
  return (
    <div className='flex flex-col'>
      <p>Project software</p>
      <div className='grid grid-cols-3 wrap gap-4 justify-center'>
          <ProjectSingle/>
          <ProjectSingle/>
          <ProjectSingle/>
          <ProjectSingle/>
          <ProjectSingle/>
          <ProjectSingle/>
      </div>
    </div>
  )
}