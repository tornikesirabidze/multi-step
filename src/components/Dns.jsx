import React, { useContext, useEffect, useState } from 'react'
import { OnsctDiv, OnsctText } from '../constants'
import { IndexContext } from '../App'


function Dns() {

    const [move, setMove, mainObj, setMainObj] = useContext(IndexContext)


    const adonChanger = (index) => {
        let updateobj = { ...mainObj}
        
        
        
        
        if (updateobj[1].arr.indexOf(index) == -1) {
            updateobj[1].arr.push(index)
            
        } else {
            updateobj[1].arr.splice(updateobj[1].arr.indexOf(index), 1)
        }
        if(mainObj[1].arr.includes(0)){
            updateobj[1].onlineService=mainObj[0].name ? OnsctDiv[0].span : OnsctDiv[0].year
        }
        if(mainObj[1].arr.includes(1)){
            updateobj[1].largerStorage=mainObj[0].name ? OnsctDiv[1].span : OnsctDiv[1].year
        }
        if(mainObj[1].arr.includes(2)){
            updateobj[1].custumPro=mainObj[0].name ? OnsctDiv[2].span : OnsctDiv[2].year
        }

        setMainObj(updateobj)
        // console.log(updateobj[1].arr.indexOf(index))
        // console.log(index + "ss")
        // console.log(selectIndex)
    }
    console.log(mainObj)
    
    
    
    return (
        <div className='bg-white w-full  rounded-lg p-[2rem] mb-[2rem]'>
            <h3 className='text-3xl font-bold primary-color--100'>{OnsctText[0].h3}</h3>
            <p className='primary-color--600'>{OnsctText[0].pm}</p>
            <div className='mt-[3rem] '>
                {OnsctDiv.map((item, index) => (
                    <div onClick={() => adonChanger(index)} className={`dnsdiv cursor-pointer ${mainObj[1].arr.includes(index) && "dnsdiv--border"} pl-6`}>
                        <div className='dnsdiv3'>
                            {mainObj[1].arr.includes(index) && <img src={OnsctDiv[index].img} alt="" className='img-dns w-[29px] h-[29px]' />}
                        </div>
                        <div className='dnsdiv2'>
                            <p className='font-bold primary-color--100'>{OnsctDiv[index].p}</p>
                            <p className='primary-color--600'>{OnsctDiv[index].p1}</p>
                        </div>
                        <span className='font-semibold primary-color--200'>{mainObj[0].name ? OnsctDiv[index].span : OnsctDiv[index].year}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Dns
