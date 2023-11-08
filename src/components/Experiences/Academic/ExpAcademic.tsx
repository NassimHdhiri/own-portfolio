import ExpAcademicSingle from './ExpAcademicSingle';
import ExpAcademicOther from './ExpAcademicOther';
import ExpAcademicTitle from './ExpAcademicTitle';



export default function ExpAcademic() {


  return (
    <div className='grid grid-rows-3 justify-center gap-7'>
      <div className=' row-span-1'>
          <ExpAcademicTitle/>
      </div>
    
      <div className=' row-span-2'>
        <div className='flex gap-10 justify-center'>
          <ExpAcademicSingle verif={true}/>
          <ExpAcademicSingle verif={false}/>
        </div>
      </div>
      
      
      {/* other */}
      <div className=' row-span-3 '>
          <div className=' bg-gray-100 h-96 flex flex-col gap-5 items-center p-9 rounded-[42px] shadow-lg shadow-gray-400  justify-center'>
              <h2 className=' text-[35px] -mt-5'>Other</h2>
              <div className='flex gap-28 justify-center -mt-6'>
                  <ExpAcademicOther kind={true}/>
                  <ExpAcademicOther kind={false}/>
              </div>
          </div>
      </div>
      
    </div>
  );
}
