import React, { useContext } from 'react'
import { OnsctDiv, SummaryDiv, SummaryText } from '../constants'
import { IndexContext } from '../App'

function Summary() {

    const [move, setMove, mainObj, setmainObj] = useContext(IndexContext)

    const handlesummer = () => {
        let sum = ""
        sum += mainObj[0]["money"]
        // for (let i in mainObj[1]) {
        //     if (mainObj[1][i] != null && i !== "id" && i !== "arr") {

        //         sum += mainObj[1][i]
        //     }
        // }
        for (let i of mainObj[1]["arr"]) {
            for (let word in mainObj[1]) {
                if (word !== "id" && word !== "arr") {
                    console.log(word)
                    if (mainObj[1]["arr"].includes([1])) {
                        sum += eval(`${mainObj[1][word]}*-1`)
                    }
                    else {
                        sum += mainObj[1][word]
                    }

                }
            }
        }
        console.log(eval(sum))
    }
    handlesummer()



    return (
        <div className='bg-white rounded-lg p-[2rem] h-[450px] flex flex-col justify-start mb-[2rem] '>
            <h3 className='text-3xl font-bold primary-color--100'>{SummaryText[0].h3}</h3>
            <p className='primary-color--600'>{SummaryText[0].p}</p>
            <div className='mt-[3rem]'>
                <div className='sumdiv'>
                    <div className='sumdiv2 '>
                        <p className='text-lg font-bold primary-color--100'>{mainObj[0].title + `(${mainObj[0].name ? "Monthly" : "yearli"})`}</p>
                        <span className='primary-color--600'>{mainObj[1].arr.includes(0) && OnsctDiv[0].p}</span>
                        <span className='primary-color--600'>{mainObj[1].arr.includes(1) && OnsctDiv[1].p}</span>
                        <span className='primary-color--600'>{mainObj[1].arr.includes(2) && OnsctDiv[2].p}</span>
                        <p className='primary-color--600'>{"Total"}</p>

                    </div>

                    <div >
                        <p className='font-bold text-lg primary-color--100'>{mainObj[0].name ? mainObj[0].money : mainObj[0].money}</p>
                        <p>{mainObj[1].arr.includes(0) && mainObj[0].name ? OnsctDiv[0].span : mainObj[1].arr.includes(0) && OnsctDiv[0].year}</p>
                        <p>{mainObj[1].arr.includes(1) && mainObj[0].name ? OnsctDiv[1].span : mainObj[1].arr.includes(1) && OnsctDiv[1].year}</p>
                        <p>{mainObj[1].arr.includes(2) && mainObj[0].name ? OnsctDiv[1].span : mainObj[1].arr.includes(2) && OnsctDiv[2].year}</p>
                        <p className='text-xl font-extrabold primary-color--200'>{mainObj[0].name ? "dd" : "ds"}</p>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Summary
