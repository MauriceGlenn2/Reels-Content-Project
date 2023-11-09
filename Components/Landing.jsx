import React from 'react'
import Image from 'next/image';
import Link from 'next/link';


function Landing() {
    return (
        <section className='flex h-screen box-border bg-black w-375px flex-col items-center gap-14 py-12 px-4'>
            <div className='flex items-center flex-col'>
                <img className="" src="/progress bar_mobile_web.png" alt="" />
                <h1 className='text-[#FFFFFFEB] text-center text-lg font-medium mt-14 tracking-[-0.02625rem]'>Create your account</h1>
                <p className='text-[#FFFFFFEB] text-center text-sm	font-normal tracking-[0.00438rem] mt-4'>
                    By continuing, you agree to our <span className='text-[#FFA724] font-semibold'>Terms of Service</span> and <span className='text-[#FFA724] font-semibold'> <Link href="/Terms">Privacy Policy.</Link></span></p>
                <div className='mt-10 flex flex-col'>
                    <button className='flex w-256 h-12 justify-center items-center gap-2.5 rounded-lg
                     border-white border-2 text-base text-[#FFFFFFEB] font-semibold p-2.5'><img className="mr-2.5 w-4 h-4.5 flex-shrink-0" src="/Vector.svg" alt="" />Continue with Apple</button>
                    <button className='flex w-256 h-12 justify-center items-center gap-2.5 rounded-lg
                     border-white border-2 text-base text-[#FFFFFFEB] font-semibold p-2.5 my-4'><img className="mr-2.5 w-4 h-4" src="/Google logo.svg" alt="" />Continue with Google</button>
                    <button className='flex w-256 h-12 justify-center items-center gap-2.5 rounded-lg
                     border-white border-2 text-base text-[#FFFFFFEB] font-semibold p-2.5'><img className="mr-2.5 w-4 h-4" src="/XMLID_17_.png" alt="" />Continue with Facebook</button>
                    <button className='flex w-256 h-12 justify-center items-center gap-2.5 rounded-lg
                     border-white border-2 text-base text-[#FFFFFFEB] font-semibold p-2.5 my-8'>Continue with Email</button>
                    <p className='my-14 text-sm text-[#FFFFFFEB] font-normal tracking-[0.00438rem] text-center'>Already have an account?<span className='text-[#FFA724]'> Log in</span></p>
                    <div className='flex w-86 items-center justify-center'>
                        <button className='flex w-40 h-10.5 justify-center items-center gap-2.5 rounded-lg
                        border-white border-2 text-base text-[#FFFFFFEB] font-semibold p-2.5 my-8 cursor-not-allowed'>Cancel</button>
                   </div>
                </div>
            </div>
        </section>
    )
}

export default Landing
