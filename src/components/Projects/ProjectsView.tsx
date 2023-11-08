import React from 'react'
import ProjectSingle from './ProjectSingle'
import Pagination from './Pagination'
import ProjectFigma from './Types/ProjectFigma'
import ProjectMobile from './Types/ProjectMobile'
import ProjectSoftware from './Types/ProjectSoftware'
import ProjectWeb from './Types/ProjectWeb'
import {useSelector} from 'react-redux'
import { AppState } from '../../store'

export default function ProjectsView() {
    const {currentSlide} = useSelector((state:AppState)=>state.home);
  return (
    <>

        { (currentSlide =="figma" ) && <ProjectFigma/>}
        { (currentSlide =="mobile" ) && <ProjectMobile/>}
        { (currentSlide =="software" ) && <ProjectSoftware/>}
        { (currentSlide =="web" ) && <ProjectWeb/>}
        
        <div className='m-auto'>
            <Pagination/>
        </div>
        
    </>
    
  )
}