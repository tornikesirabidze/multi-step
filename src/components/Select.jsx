import React, { useContext, useState } from 'react'
import { SelectDiv, selectText } from '../constants'
import { IndexContext } from '../App'

function Select() {

    const [first, setfirst] = useState(false)
    const [seldiv, setSeldiv] = useState([0])
    const [move, setMove, mainObj, setMainObj] = useContext(IndexContext)

    
    const selectDiv = (index) => {
        let activearr = [seldiv]
        activearr.push(index)
        setSeldiv(activearr)
        console.log(activearr)
    }


    const handleSwitch = () => {
        if (!mainObj.isanimation) {
            let updateobj = { ...mainObj }
            updateobj.name = true
            updateobj.isanimation = true
            setMainObj(updateobj)
            console.log(mainObj)
            console.log(mainObj.isanimation)
        } else {
            let updateobj = { ...mainObj }
            updateobj.name = false
            updateobj.isanimation = false
            setMainObj(updateobj)
            console.log(mainObj)


        }
    }
    // console.log(mainObj[0]="ssssss")

    return (
        <div className='bg-white ml-[3rem] w-[450px] h-[500px] mb-[2rem]'>
            <h3 className='text-3xl font-bold primary-color--100'>{selectText[0].h3}</h3>
            <p className='primary-color--600'>{selectText[0].p}</p>
            <div className='flex gap-3 mt-[1rem]'>
                {SelectDiv.map((item, index) => (
                    <div onClick={() => selectDiv(index)} className={`seldiv ${seldiv.includes(index) && "select--div"}`}>
                        <img src={SelectDiv[index].img} alt="" />
                        <p className='mt-[3rem] font-semibold primary-color--100'>{SelectDiv[index].span}</p>
                        <p className=' primary-color--600'> {mainObj.name ? SelectDiv[index].money : SelectDiv[index].year}</p>
                        {!mainObj.name && <p className='font-sans primary-color--100 relative'>2 months free</p>}
                    </div>
                ))}
            </div>
            <div className='flex gap-3 justify-center bg-blue-100 rounded-md py-[10px] mt-[30px] '>
                <h4 className={`${!mainObj.isanimation ? "primary-color--600" : "primary-color--100"} font-bold`}>Monthly</h4>
                <div onClick={() => handleSwitch()} className='bg-black w-[50px] cursor-pointer h-[25px] rounded-full flex justify-start items-center'>
                    <div className={`${!mainObj.isanimation ? "translate-x-[21px]" : "translate-x-0"} w-[20px] transition-all h-[20px]  ml-1  bg-white rounded-full`} />
                </div>
                <h4 className={`${!mainObj.isanimation ? "primary-color--100" : "primary-color--600"} font-bold`}>Yearly</h4>
            </div>

        </div>
    )
}

export default Select
