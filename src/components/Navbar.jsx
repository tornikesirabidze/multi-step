import React, { useContext } from 'react'
import { Desbar } from '../assets'
import { navbar } from '../constants'
import Button from './Button'
import { IndexContext } from '../App'

function Navbar() {
    
    const [move, setMove] = useContext(IndexContext)


    const handleMove=(index)=>{
        setMove(index)
    }
    console.log(move)
    
    


    return (

        
        <div className='nav-bg w-full flex justify-center text-center'>
            <div className='mt-[10px] mr-[2rem]'>
                {navbar.map((item, index) => (
                    <ul onClick={()=>handleMove(index)} className='flex mt-[5px] items-center justify-start '>
                    
                        <Button >{index+1}</Button>
                        <div className=''>
                            <li className='step  mt-[1.5rem]'>{item.li}</li>
                            <li className='text-white'>{item.h4}</li>
                        </div>

                    </ul>
                ))}

            </div>
        </div>



    )
}

export default Navbar