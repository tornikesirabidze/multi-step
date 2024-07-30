import React from 'react'

function Button(props) {

  return (
    <div className='flex flex-col justify-start items-center gap-[30px] mt-5 text-white pr-[1rem] '>
      <div className='w-[45px] h-[45px] border rounded-full flex justify-center items-center cursor-pointer '>{props.children}</div>
    </div>
  )
}

export default Button