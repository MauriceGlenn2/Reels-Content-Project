
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
// import { auth, db } from '/firebase.js';
// import { auth, db } from '../pages/_app'
import { doc, setDoc } from "firebase/firestore"; 
import { auth } from '@/Firebase';

  function user() {
    const [inputColor, setInputColor] = useState('border-neutral-600')
    const [buttonColor, setButtonColor] = useState('bg-gray-600')
    const [buttonColor2, setButtonColor2] = useState('text-slate-400')
    const [bday, setBday] = useState("");


    useEffect(() => {
      if (bday) {
        setButtonColor('bg-orange-300')
        setButtonColor2('text-white')
      } else {
        'bg-gray-600'
      }
    }, [bday])

    function changeInputColor() {
      setInputColor('border-orange-300')
    }

    function bdayfilledInput(e) {
      setBday(e.target.value)
      changeInputColor()
    }


    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const user = auth.currentUser;
        await setDoc(doc(db, "users", user.uid), {
          bday: bday,
        }, { merge: true });
      } catch (error) {
        console.log(error);
      }
    }


      return (
        <form onSubmit={handleSubmit}>
        <section className='flex h-screen box-border bg-black w-375px lg:w-744px flex-col items-center gap-14 py-12 px-6'>
        <img src="/progress bar2.png" alt="" />
          <div className='flex items-center flex-col my-[56]'>
            <h1 className='text-[28px] text-white text-center'>
                Welcome {auth.displayName} <br />Mind sharing your birthdate?
            </h1>
            <p className='pt-[10px] text-white text-center text-[16px] font-normal'>To personalize your content recommendations and to ensure it’s all  age-appropriate, could you kindly share your date of birth with us?</p>
            <input className={`required focus:outline-none focus:border-orange-300 focus:ring-0 flex w-[320px] py-0 pl-[24px] pr-[12] gap-[10px] items-center
                   h-[48px] rounded-lg border-neutral-600 bg-gray-700 text-[#6D6D6D] text-white font-semibold border-solid border-2 my-[24px] ${inputColor}`}
              type="text"
              placeholder='MM/DD/YYYY'
              value={bday}
              onChange={bdayfilledInput} />
              <img src="/frame 3072.png" alt="" />
              <div className='flex items-center justify-between mt-[56px]'>
            <button className='flex w-[160px] h-10.5 justify-center items-center gap-2.5 rounded-lg
                        border-white border-2 text-base text-[#FFFFFFEB] font-semibold p-2.5 mb-8 cursor-pointer'><Link href="/">Back</Link></button>
            <button type="submit" className={`flex w-[160px] h-10.5 justify-center items-center gap-2.5 rounded-lg ml-[32px]
                        border-white border-none bg-gray-600  text-base text-slate-400 font-semibold p-2.5 mb-8 cursor-pointer ${buttonColor} ${buttonColor2}     
                `}
            >Next</button>
            </div>
          </div>
        </section>
        </form>

         

  )
}

export default user