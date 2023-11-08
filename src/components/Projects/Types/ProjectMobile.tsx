import ProjectSingle from '../ProjectSingle'


export default function ProjectMobile() {
  return (
    <div className='flex flex-col'>
      <p>Project mobile</p>
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