import Link from 'next/link'
import React, { useEffect, useState } from 'react'



function SignInWithEmail() {
    const [inputColor, setInputColor] = useState('border-neutral-600')
    const [buttonColor, setButtonColor] = useState('bg-gray-600')
    const [buttonColor2, setButtonColor2] = useState('text-slate-400')
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if(name && email && password) {
            setButtonColor('bg-orange-300')
            setButtonColor2('text-white')
        } else {
            'bg-gray-600'
        }
    }, [name, email, password])
    function changeInputColor() {
        setInputColor('border-orange-300')
    }

    function namefilledInput (e){
        setName(e.target.value)
        changeInputColor()
    }
    function emailfilledInput (e){
        setEmail(e.target.value)
        changeInputColor()
    }
    function passwordfilledInput (e){
        setPassword(e.target.value)
        changeInputColor()
    }


  return (
      <section className='flex h-screen box-border bg-black w-375px flex-col items-center gap-14 py-12 px-4'>
          <div className='flex items-center flex-col'>
            <img src="/ProgressBar.png" alt="" />
              <h1 className='text-[#FFFFFFEB] text-center text-[28px] font-medium tracking-[-0.02625rem] mt-[56px]'>Create your account</h1>
              <p className='text-[#FFFFFFEB] text-center text-sm font-normal tracking-[0.00438rem] mt-4'>
                  By continuing, you agree to our <span className='text-[#FFA724] font-semibold'><Link href="/Terms">Terms of Service</Link></span> and <Link href="/Private"><span className='text-[#FFA724] font-semibold'> Privacy Policy.</span></Link></p>
               <div className='mt-10 flex flex-col'>
                  <form onSubmit="">
                  <input className={`required focus:outline-none focus:border-orange-300 focus:ring-0 flex w-[320px] py-0 pl-[24px] pr-[12] gap-[10px] items-center
                   h-[48px] rounded-lg border-neutral-600 bg-gray-700 text-[#6D6D6D] text-white font-semibold textborder-solid border-2 ${inputColor}`}
                   type="text" 
                   placeholder='First name' 
                    value = {name}
                      onChange={namefilledInput}/>
                  
                  <input className={`required focus:outline-none focus:border-orange-300 focus:ring-0 flex w-[320px] py-0 pl-[24px] pr-[12] gap-[10px] items-center
                   h-[48px] rounded-lg border-neutral-600 bg-gray-700 text-[#6D6D6D] text-[#6D6D6D] text-white font-semibold border-solid border-2 my-[24px] ${inputColor}`} 
                   type="Email" 
                   placeholder='Email'
                      value={email}
                      onChange={emailfilledInput}/>
                 
                 <div className='flex items-center relative'>
                      <input className={`required focus:outline-none focus:border-orange-300 focus:ring-0 flex w-[320px] py-0 pl-[24px] pr-[12] gap-[10px] items-center
                   h-[48px] rounded-lg border-neutral-600 bg-gray-700 text-[#6D6D6D] text-[#6D6D6D] text-white font-semibold border-solid border-2 ${inputColor}`}
                   type="password" 
                   placeholder='Password'
                value={password}
                onChange={passwordfilledInput}/>
                   
                   <img className=" absolute  right-2 w-[24px] h-[24px] flex-shrink-0" src="/password.png" alt="" />
                   
                 </div>
                  <p className='mt-14 text-sm text-[#FFFFFFEB] font-normal tracking-[0.00438rem] text-center'>Already have an account?<span className='text-[#FFA724]'> Log in</span></p>
              </div>
          </div>
          <div className='flex w-[343px] justify-between pt-0'>
              <button className='flex w-[160px] h-10.5 justify-center items-center gap-2.5 rounded-lg
                        border-white border-2 text-base text-[#FFFFFFEB] font-semibold p-2.5 mb-8 cursor-pointer'><Link href="/">Back</Link></button>

              <Link href="/LoggedIn/User"><button className={`flex w-[160px] h-10.5 justify-center items-center gap-2.5 rounded-lg
                        border-white border-none bg-gray-600  text-base text-slate-400 font-semibold p-2.5 mb-8 cursor-pointer ${buttonColor} ${buttonColor2}     
                `} 
              >Next</button> </Link>
          </div>
      </form>
      </section>
  )
}

export default SignInWithEmail
