import React, { useContext } from 'react'
import { SummaryDiv, SummaryText } from '../constants'
import { IndexContext } from '../App'

function Summary() {

    const [move, setMove, mainObj, setMainObj] = useContext(IndexContext)




    return (
        <div className='bg-white ml-[3rem] w-[480px] h-[500px] mb-[2rem]'>
            <h3 className='text-3xl font-bold primary-color--100'>{SummaryText[0].h3}</h3>
            <p className='primary-color--600'>{SummaryText[0].p}</p>
            <div className='mt-[3rem]'>
                <div className='sumdiv'>
                    <div className='sumdiv2 '>
                        <p className='text-lg font-bold primary-color--100'>{mainObj.title + `(${mainObj.name ? "Monthly" : "yearli"})`}</p>
                        <span className='primary-color--600'>{"dsaa"}</span>
                        <span className='primary-color--600'>{"ds"}</span>
                        <u className='primary-color--600'>{"ds"}</u>
                        <p className='primary-color--600'>{"ds"}</p>

                    </div>

                    <div >
                        <p className='font-bold text-lg primary-color--100'>{mainObj.name ? mainObj.money: mainObj.money}</p>
                        <p>{mainObj.name ? "ds" : "ds"}</p>
                        <p>{mainObj.name ? "ds" : "ds"}</p>
                        <p className='text-xl font-extrabold primary-color--200'>{mainObj.name ? "ds" : "ds"}</p>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Summary
