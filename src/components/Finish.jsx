import React from 'react'
import { Thankyou } from '../assets'

function Finish() {
    return (
        <div className="bg-white rounded-lg  sm:p-[2rem] p-[4rem]" >
            <div className='flex flex-col justify-center items-center gap-5 text-center'>
                <div>
                    <img src={Thankyou} alt="" />
                </div>
                <h4 className='text-3xl font-bold primary-color--100'>Thank you</h4>
                <p className='primary-color--600'>Thanks for confirming your subscription! We hope you have funusing our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
            </div>
        </div>
    )
}

export default Finish
