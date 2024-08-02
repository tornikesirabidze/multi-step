import React, { useContext, useState } from 'react'
import { IndexContext } from '../App'

function NavBtn() {

    const [move, setMove]=useContext(IndexContext)
    
    console.log(move+"ss")
    
    // console.log(move+"sd")
    const pageMove=(move)=>{
        if(move>=0 && move<3){
            setMove(move+1)
        }

    }
    const pageDown=(move)=>{
        if(move>0){
            setMove(move-1)
        }

    
    }
    return (
        <div className='navbtn flex justify-between items-center h-[70px] w-[480px] '>
            <button onClick={()=>pageDown(move)} className=' back w-[120px] h-[45px]  '>Go Back</button>
            <button onClick={()=>pageMove(move)} className='next w-[120px] h-[45px] bg-black '>Next Step</button>
        </div>
    )
}

export default NavBtn