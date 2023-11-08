import React from 'react'
import { useDispatch } from "react-redux";
import { higherCount,lessCount } from '../../store/PortfolioReducer';


// type Props = {}

export default function Test() {
    const dispatch=useDispatch();

    const handleCountPlus=()=>{
        dispatch(higherCount())
    }

    const handleCountMinus=()=>{
        dispatch(lessCount())
    }

  return (
    <div>
        <div onClick={handleCountPlus}>+</div>
    
        <div onClick={handleCountMinus}>-</div>
    </div>

    
  )
}