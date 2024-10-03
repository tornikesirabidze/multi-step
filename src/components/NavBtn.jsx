import React, { useContext, useState } from 'react'
import { IndexContext } from '../App'

function NavBtn() {

    const [next, setNext]=useContext(IndexContext)
    
    // console.log(move+"ss")
    
    // console.log(move+"sd")
    const pageMove=(next)=>{
        if(next>=0 && next<4){
            setNext(next+1)
        }


    }
    const pageDown=(next)=>{
        if(next>0){
            setNext(next-1)
        }

    
    }
 
    
    return (
        <div className='navbtn bg-white  flex justify-between items-center  '>
            <button onClick={()=>pageDown(next)} className=' back w-[120px] h-[45px]  '>Go Back</button>
            <button onClick={()=>pageMove(next)} className='next w-[120px] h-[45px] bg-black '>Next Step</button>
        </div>
    )
}

export default NavBtn