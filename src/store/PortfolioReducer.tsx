import React from 'react'
import { createSlice,PayloadAction } from '@reduxjs/toolkit';


interface PortfolioState{
    verif:boolean,
    count:number,
    show:boolean,
    currentSlide:'figma' | 'software' | 'mobile' | 'web';
}

const initialState : PortfolioState ={
    verif:true,
    count:0,
    show:true,
    currentSlide:'figma'
}

const portfolioSlice=createSlice(
    {
        name:"portfolio",
        initialState,
        reducers:{
            handleVerif:(state,action:PayloadAction<boolean>)=>{
                state.verif=action.payload;
            },
            higherCount:(state)=>{
                state.count+=1;
            },
            lessCount:(state)=>{
                state.count-=1;
            },
            handleCurrentSlide:(state,action:PayloadAction<'figma' | 'software' | 'mobile' | 'web'>)=>{
                state.currentSlide=action.payload;
            }
        }
    }
)
export const {
    handleVerif,
    higherCount,
    handleCurrentSlide,
    lessCount
}=portfolioSlice.actions;

export default  portfolioSlice.reducer;

// type Props = {}

