import React, { useContext } from 'react'
import { SummaryDiv, SummaryText } from '../constants'
import { IndexContext } from '../App'

function Summary() {

    const [move, setMove, mainObj, setMainObj]=useContext(IndexContext)




    return (
        <div className='bg-white ml-[3rem] w-[480px] h-[500px] mb-[2rem]'>
            <h3 className='text-3xl font-bold primary-color--100'>{SummaryText[0].h3}</h3>
            <p className='primary-color--600'>{SummaryText[0].p}</p>
            <div className='mt-[3rem]'>
                {SummaryDiv.map((item, index) => (
                    <div className='sumdiv'>
                        <div className='sumdiv2 '>
                            <p className='text-lg font-bold primary-color--100'>{SummaryDiv[index].h4}</p>
                            <span className='primary-color--600'>{SummaryDiv[index].span}</span>
                            <span className='primary-color--600'>{SummaryDiv[index].span1}</span>
                            <u className='primary-color--600'>{SummaryDiv[index].u}</u>
                            <p className='primary-color--600'>{SummaryDiv[index].total}</p>
                            
                        </div>

                        <div >
                            <p className='font-bold text-lg primary-color--100'>{mainObj.name?SummaryDiv[index].money0:SummaryDiv[index].year}</p>
                            <p>{mainObj.name?SummaryDiv[index].money:SummaryDiv[index].year1}</p>
                            <p>{mainObj.name?SummaryDiv[index].money1:SummaryDiv[index].year2}</p>
                            <p className='text-xl font-extrabold primary-color--200'>{mainObj.name?SummaryDiv[index].tomoney:SummaryDiv[index].tomoneyyr}</p>

                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default Summary
