import React, { useState } from 'react'

function Input({ name, setName, email, setEmail, password, setPassword }) {
    const [inputColor, setInputColor] = useState('border-neutral-600')

    function changeInputColor() {
        setInputColor('border-orange-300')
    }

    function namefilledInput(e) {
        setName(e.target.value)
        changeInputColor()
    }
    function emailfilledInput(e) {
        setEmail(e.target.value)
        changeInputColor()
    }
    function passwordfilledInput(e) {
        setPassword(e.target.value)
        changeInputColor()
    }

  return (
      <div className='mt-10 flex flex-col'>
              <input className={`required focus:outline-none focus:border-orange-300 focus:ring-0 flex w-[320px] py-0 pl-[24px] pr-[12] gap-[10px] items-center
                   h-[48px] rounded-lg border-neutral-600 bg-gray-700 text-[#6D6D6D] text-white font-semibold textborder-solid border-2 ${inputColor}`}
                  type="text"
                  placeholder='First name'
                  value={name}
                  onChange={namefilledInput} />

              <input className={`required focus:outline-none focus:border-orange-300 focus:ring-0 flex w-[320px] py-0 pl-[24px] pr-[12] gap-[10px] items-center
                   h-[48px] rounded-lg border-neutral-600 bg-gray-700 text-[#6D6D6D] text-[#6D6D6D] text-white font-semibold border-solid border-2 my-[24px] ${inputColor}`}
                  type="Email"
                  placeholder='Email'
                  value={email}
                  onChange={emailfilledInput} />

              <div className='flex items-center relative'>
                  <input className={`required focus:outline-none focus:border-orange-300 focus:ring-0 flex w-[320px] py-0 pl-[24px] pr-[12] gap-[10px] items-center
                   h-[48px] rounded-lg border-neutral-600 bg-gray-700 text-[#6D6D6D] text-[#6D6D6D] text-white font-semibold border-solid border-2 ${inputColor}`}
                      type="password"
                      placeholder='Password'
                      value={password}
                      onChange={passwordfilledInput} />

                  <img className=" absolute  right-2 w-[24px] h-[24px] flex-shrink-0" src="/password.png" alt="" />
              </div>
              </div>
  )
}

export default Input