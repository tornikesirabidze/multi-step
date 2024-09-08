import React, { useContext } from 'react'
import { Desbar } from '../assets'
import { navbar } from '../constants'
import Button from './Button'
import { IndexContext } from '../App'
import NavBtn from './NavBtn'

function Navbar() {

    const [move, setMove] = useContext(IndexContext)


    const handleMove = (index) => {
        setMove(index)


    }
    // console.log(move)

    // const colorChange=()=>{
    //     if(move===0){
    //       return "bg-white"
    //     }
    //   }




    return (

        <div>

            <div className='nav-bg flex justify-center text-center'>
                <div className='mt-[10px] flex sm:flex-col flex-row mr-[2rem]'>
                    {navbar.map((item, index) => (
                        <ul onClick={() => handleMove(index)} className=' main--btn flex mt-[5px] cursor-pointer w-full items-center justify-start '>
                            <Button className={move == index && "primary-color--bg--400"}>{index + 1}</Button>

                            <div className=''>
                                <li className='step  mt-[1.5rem]'>{item.li}</li>
                                <li className='text-white'>{item.h4}</li>
                            </div>

                        </ul>
                    ))}


                </div>
            </div>
        </div>




    )
}

export default Navbar