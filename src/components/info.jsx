import React from 'react'
import { InfoText } from '../constants'

function Info() {
    return (
        <div className='bg-white ml-[3rem] w-[] h-[500px] mb-[2rem]'>

            <div className='flex flex-col gap-2'>
                <h3 className='text-3xl font-bold primary-color--100'>{InfoText[0].h3}</h3>
                <p className='primary-color--600'>{InfoText[0].p}</p>
            </div>
            <form action="/" method='GET'  className='flex flex-col mt-[2rem] gap-8'>
                {InfoText.map((item, index) => (
                    (index !==0 &&

                    <div>
                        <label for={item.h3} className='font-thin primary-color--100'>{[item.label]}</label>
                        <input type={item.type} name={item.h3} id={item.h3} placeholder={item.plHolder} className='border pl-5 pr-5 w-full' />

                    </div>
                    )



                ))}
            </form>
        </div>
    )
}

export default Info
