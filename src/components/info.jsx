import React, { useContext, useState } from 'react'
import { InfoText } from '../constants'
import { IndexContext } from '../App'

function Info() {

    const [move, setMove, mainObj, setMainObj] = useContext(IndexContext)
    
    const newMainobj=[...mainObj]
    const [formValue, setFormValue]=useState({
        name:"",
        email:"",
        number:""
    })
    const handleOchange=(e)=>{
        const{name,value}=e.target
        setFormValue({...formValue,[name]:value})
        newMainobj[2]=formValue
        setMainObj(newMainobj)
        
        console.log(name)
    }
    


    return (
        <div className='bg-white rounded-lg p-[2rem] '>

            <div className='flex flex-col gap-2'>
                <h3 className='text-3xl font-bold primary-color--100'>{InfoText[0].h3}</h3>
                <p className='primary-color--600'>{InfoText[0].p}</p>
            </div>
            <form action="/" method='GET'  className='flex flex-col mt-[2rem] gap-8'>
                {InfoText.map((item, index) => (
                    (index !==0 &&

                    <div>
                        <label for={item.label} className='font-thin primary-color--100'>{[item.h3]}</label>
                        {mainObj[2][item.label]!==""?
                         <input 
                         onChange={handleOchange} 
                         value={formValue[item]}
                        type={item.type} name={item.label} id={item.label} placeholder={item.plHolder} className='border pl-5 pr-5 w-full' />
                         :<input 
                         onChange={handleOchange} 
                         value={formValue[item]}
                        type={item.type} name={item.label} id={item.label} placeholder={item.plHolder} className='border border-red-500 pl-5 pr-5 w-full' />
                         }

                    </div>
                    )



                ))}
            </form>
        </div>
    )
}

export default Info
