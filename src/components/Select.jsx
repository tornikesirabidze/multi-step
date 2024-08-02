import React from 'react'
import { SelectDiv, selectText } from '../constants'

function Select() {

    return (
        <div className='bg-white ml-[3rem] w-[450px] h-[500px] mb-[2rem]'>
            <h3 className='text-3xl font-bold primary-color--100'>{selectText[0].h3}</h3>
            <p className='primary-color--600'>{selectText[0].p}</p>
            <div className='flex gap-3 mt-[1rem]'>
                {SelectDiv.map((item, index) => (

                    <div className='seldiv'>
                        <img src={SelectDiv[index].img} alt="" />
                        <p className='mt-[3rem] font-semibold primary-color--100'>{SelectDiv[index].span}</p>
                        <p className=' primary-color--600'> {SelectDiv[index].money}</p>
                        <p className='font-sans primary-color--100'>2 months free</p>
                    </div>







                ))}
            </div>

        </div>
    )
}

export default Select
