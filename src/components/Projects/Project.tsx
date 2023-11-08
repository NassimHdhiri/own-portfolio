import React from 'react'
import ProjectMenu from './ProjectMenu'
import ProjectTitle from './ProjectTitle'
import ProjectsView from './ProjectsView'



export default function Project() {
  return (
    <div className=' grid justify-center gap-y-12'>
      <ProjectTitle/>
      <ProjectMenu/>
      {/* <ProjectSingle/> */}
      <ProjectsView/>
    </div>
  )
}