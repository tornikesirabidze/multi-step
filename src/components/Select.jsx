import React, { useContext, useEffect, useState } from 'react'
import { SelectDiv, selectText } from '../constants'
import { IndexContext } from '../App'

function Select() {

    const [first, setfirst] = useState(false)
    const [seldiv, setSeldiv] = useState([0])
    const [move, setMove, mainObj, setmainObj] = useContext(IndexContext)




    const selectDiv = (index) => {
        let activearr = [seldiv]
        let updateobj = { ...mainObj }
        updateobj[0].money = mainObj[0].name ? SelectDiv[index].money : SelectDiv[index].year
        updateobj[0].id = index
        activearr.push(index)
        setSeldiv(activearr)
        setmainObj(updateobj)
    }


    const handleSwitch = () => {
        if (!mainObj[0].isanimation) {
            let updateobj = { ...mainObj }
            updateobj[0].name = true
            updateobj[0].isanimation = true
            updateobj[0].money = SelectDiv[mainObj[0].id].money
            setmainObj(updateobj)
            console.log(mainObj[0])
            console.log(mainObj[0].isanimation)
        } else {
            let updateobj = { ...mainObj }
            updateobj[0].name = false
            updateobj[0].isanimation = false
            updateobj[0].money = SelectDiv[mainObj[0].id].year
            setmainObj(updateobj)
            console.log(mainObj[0])
        }
        console.log(updateobj[0])
    }
    console.log(mainObj[0].id)
    return (
        <div className=' bg-white w-full  rounded-lg p-[2rem]  mb-[2rem]'>
            <h3 className='text-3xl font-bold primary-color--100'>{selectText[0].h3}</h3>
            <p className='primary-color--600'>{selectText[0].p}</p>
            <div className='flex gap-3 sm:flex-row flex-col mt-[1rem]'>
                {SelectDiv.map((item, index) => (
                    <div cla onClick={() => selectDiv(index)} className={`seldiv ${mainObj[0].id === index && "select--div" } `}>
                        <img src={SelectDiv[index].img} alt="" />
                        <div className=''>
                            <p className='sm:mt-[3rem] mt-[0] font-semibold primary-color--100'>{SelectDiv[index].span}</p>
                            <p className=' primary-color--600'> {mainObj[0].name ? SelectDiv[index].money : SelectDiv[index].year}</p>
                            {!mainObj[0].name ? <p className='font-sans primary-color--100 relative'>2 months free</p> : undefined}
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex gap-3  justify-center bg-blue-100 rounded-md py-[10px] mt-[30px] '>
                <h4 className={`${!mainObj[0].isanimation ? "primary-color--600" : "primary-color--100"} font-bold`}>Monthly</h4>
                <div onClick={() => handleSwitch()} className='bg-black w-[50px] cursor-pointer h-[25px] rounded-full flex justify-start items-center'>
                    <div className={`${!mainObj[0].isanimation ? "translate-x-[21px]" : "translate-x-0"} w-[20px] transition-all h-[20px]  ml-1  bg-white rounded-full`} />
                </div>
                <h4 className={`${!mainObj[0].isanimation ? "primary-color--100" : "primary-color--600"} font-bold`}>Yearly</h4>
            </div>

        </div>
    )
}

export default Select
