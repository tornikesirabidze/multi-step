import React, { useContext, useEffect, useState } from 'react'
import { OnsctDiv, OnsctText } from '../constants'
import { IndexContext } from '../App'


function Dns() {

    const [adon, setAdon] = useState([])
    const [move, setMove, mainObj, setMainObj]=useContext(IndexContext)
    

    const adonChanger = (index) => {
        let selectIndex = [...adon]
        if (adon.indexOf(index) == -1) {
            selectIndex.push(index)

        } else {
            selectIndex.splice(adon.indexOf(index), 1)
        }

        setAdon(selectIndex)
        // console.log(adon.indexOf(index))
        // console.log(index + "ss")
        // console.log(selectIndex)
    }



    return (
        <div className='bg-white ml-[3rem] w-[480px] h-[500px] mb-[2rem]'>
            <h3 className='text-3xl font-bold primary-color--100'>{OnsctText[0].h3}</h3>
            <p className='primary-color--600'>{OnsctText[0].pm}</p>
            <div className='mt-[3rem]  '>
                {OnsctDiv.map((item, index) => (
                    <div onClick={() => adonChanger(index)} className={`dnsdiv cursor-pointer ${adon.includes(index) && "dnsdiv--border"}`}>
                        <div className='dnsdiv3'>
                            {adon.includes(index) && <img src={OnsctDiv[index].img} alt="" className='img-dns w-[29px] h-[29px]' />}
                        </div>
                        <div className='dnsdiv2'>
                            <p className='font-bold primary-color--100'>{OnsctDiv[index].p}</p>
                            <p className='primary-color--600'>{OnsctDiv[index].p1}</p>
                        </div>
                        <span className='font-semibold primary-color--200'>{mainObj.name?OnsctDiv[index].span:OnsctDiv[index].year}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Dns
