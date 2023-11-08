import React from 'react';
import ImageNassim from '../../../assets/Profile_resume/images/imagenassim1.svg';
import BookmarkRibbon from '../../../assets/Profile_resume/images/BookmarkRibbon.svg';
import Crownd from '../../../assets/Profile_resume/images/Crownd.svg';
import LightningBolt from '../../../assets/Profile_resume/images/LightningBolt.svg';
import MagnifyGlass from '../../../assets/Profile_resume/images/MagnifyGlass.svg';

import SandGlass from '../../../assets/Profile_resume/images/SandGlass.svg';
import StarRotate from '../../../assets/Profile_resume/images/StarRotate1.svg';
import RectangleNassim from '../../../assets/Profile_resume/images/Rectanglenassim.svg';

export default function Picture() {
  return (
    <div className=' relative  h-[610px] w-[400px]  '>
      {/* motifs */}
        {/* save */}
        <img className="  absolute  bottom-28 right-7" src={BookmarkRibbon} alt="nassim's pic"/>
        {/* King */}
        <img className=" absolute right-7 top-24" src={Crownd} alt="nassim's pic"/>
        
        {/* LIGHT BOLT */}
        <img className=" absolute left-2 bottom-28" src={LightningBolt} alt="nassim's pic"/>
        
        {/* SEARCH */}
        <img className=" absolute left-44 bottom-12 " src={MagnifyGlass} alt="nassim's pic"/>
        
        {/* STAR */}
        <img className=" absolute top-24 left-2" src={StarRotate} alt="nassim's pic"/>
        
        {/* time */}
        <img className=" absolute top-10 left-44" src={SandGlass} alt="nassim's pic"/>
        
        {/* rectangle Gris background */}
        <img className=" absolute left-16 top-12 w-[304px] h-[502px]"  src={RectangleNassim} alt=""/>

        {/* Nassim picture */}
        <img className=" absolute left-7  top-14 w-[326px] h-[486px] " src={ImageNassim} alt="nassim's pic"/>

    </div>
  )
}