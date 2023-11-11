import React, { useEffect, useState } from 'react'
function Buttons({name, email, password}) {
    const [buttonColor, setButtonColor] = useState('bg-gray-600')
    const [buttonColor2, setButtonColor2] = useState('text-slate-400')

    useEffect(() => {
        if (name && email && password) {
            setButtonColor('bg-orange-300')
            setButtonColor2('text-white')
        } else {
            'bg-gray-600'
        }
    }, [name, email, password])

  return (
      <div className='flex w-[343px] justify-between pt-0'>
          <button className='flex w-[160px] h-10.5 justify-center items-center gap-2.5 rounded-lg
                        border-white border-2 text-base text-[#FFFFFFEB] font-semibold p-2.5 mb-8 cursor-pointer'>Back</button>

          <button className={`flex w-[160px] h-10.5 justify-center items-center gap-2.5 rounded-lg
                        border-white border-none bg-gray-600  text-base text-slate-400 font-semibold p-2.5 mb-8 cursor-pointer ${buttonColor} ${buttonColor2}     
                `}
          >Next</button> 
      </div>
  )
}

export default Buttons