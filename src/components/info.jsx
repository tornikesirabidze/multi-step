import React from 'react'
import { InfoText } from '../constants'

function Info() {
    return (
        <div className='bg-white ml-[3rem] w-[450px] h-[500px] mb-[2rem]'>
            <div>
                {InfoText.map((item, index) => (
                    <div>
                        <div className='flex flex-col gap-2'>
                            <h3 className='text-3xl font-bold primary-color--100'>{InfoText[index].h3}</h3>
                            <p className='primary-color--600'>{InfoText[index].p}</p>
                        </div>
                        <div >
                            <ul className='flex flex-col mt-[1rem] gap-12'>
                                <div>
                                    <li className='font-thin primary-color--100'>{InfoText[index].li1}</li>
                                    <input type="text" className='border w-full' />

                                </div>
                                <div>
                                    <li className='font-thin primary-color--100'>{InfoText[index].li2}</li>
                                    <input type="text" className='border w-full ' />

                                </div>
                                <div>

                                    <li className='font-thin primary-color--100'>{InfoText[index].li3}</li>
                                    <input type="text" className='border w-full' />
                                </div>
                            </ul>
                        </div>

                    </div>


                ))}
            </div>
        </div>
    )
}

export default Info
