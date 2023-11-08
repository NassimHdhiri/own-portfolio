import React from 'react'
import ExpSocialPic from '../../../assets/Profile_about_me/images/section-social-experiences.png' 
import ExpSocialTitle from './ExpSocialTitle'
import ExpSocialPicEnactus from './ExpSocialPicEnactus'
import ExpSocialCoachIsg from './ExpSocialCoachIsg'

export default function ExpSocial() {
  return (
    <div className='grid grid-rows-2 justify-center'>
        <div className=' row-span-1' >
          <ExpSocialTitle/>
        </div>
        
        <div className=' row-span-2 -mt-14'>
          <div className='flex justify-between gap-10 '>
            <ExpSocialPicEnactus/>
            <ExpSocialCoachIsg/>
          </div>
        </div>
    </div>
  )
}