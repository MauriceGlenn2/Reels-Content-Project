import React from 'react'
import Image from 'next/image';


function NavBar() {
  return (
    <nav className='flex sm:w-375 h-[56px] lg:w-1120px items-center box-border shrink-0 py-2 border-b sm:py-4 m-0 lg:justify-center lg:flex'>
      <div className='w-full flex justify-between items-center sm:px-4 lg:justify-start lg:w-auto'>
        <img className=" justify-center items-center gap-1 px-4 lg:pr-0" src='/reelImg.png' alt="" />
        <div className='flex items-center gap-4 px-4 '>
          <button className='flex justify-center items-center gap-2.5 rounded border-none	bg-[#FFA724] text-base font-semibold	px-4 py-1.5 lg:hidden'>Get started</button>
          <img className='lg:hidden' src="/hamburger.png" alt="" />
        </div>
        <h1 className="hidden lg:block text-[#222] text-center font-bold	tracking-[.34px]">Reel Talk</h1>
        <ul className='hidden lg:block lg:flex'>
          <li className='cursor-not-allowed text-{16px} font-normal ml-4'>Browse</li>
          <li className='cursor-not-allowed text-{16px} font-normal ml-4'>Community</li>
          <li className='cursor-not-allowed text-{16px} font-normal ml-4'>Discussions</li>
        </ul>
      </div>
      <div className='relative lg:w-[351px] flex items-center'>
        <img className="hidden lg:block absolute top-1/2 left-2 transform -translate-y-1/2 w-4 h-4 flex-shrink-0 mr-2.5	" src="/search icon.png" alt="" />
        <input className="hidden lg:block gap-2.5	py-1 pl-7 w-full px-4  bg-slate-200 rounded" type="text" placeholder='Search' />
      </div>
      <div className='flex'>
        <button className='hidden lg:block text-sm/[16px] rounded border border-black ml-4 py-1.5 font-semibold px-4'>Login</button>
        <button className='hidden lg:block text-sm/[16px] rounded bg-[#FFA724] font-semibold px-4 ml-4 '>Signup</button>


      </div>
    </nav>
  )
}



export default NavBar

// < nav className = 'border-box flex justify-center w-1120 h-14 py-8 items-center m-auto' >
//     <div className='flex px-4'>
//       <img className="w-6 h-6" src='/reelImg.png' alt="" />
//       <h1 className="text-[#222] text-center font-bold	tracking-[.34px] pr-4 hidden sm:block">Reel Talk</h1>
//       <ul className='flex'>
//         <li className='cursor-not-allowed text-{16px} hidden sm:block'>Browse</li>
//         <li className='px-4 cursor-not-allowed	text-{16px} hidden sm:block'>Community</li>
//         <li className='cursor-not-allowed	text-{16px} hidden sm:block'>Discussions</li>
//       </ul>
//     </div>
//     <div className='relative w-[351px] flex items-center'>
//       <img className="absolute top-1/2 left-2 transform -translate-y-1/2 w-4 h-4 flex-shrink-0 mr-2.5	" src="/search icon.png" alt="" />
//       <input className="gap-2.5	py-1 pl-7 w-full px-4  bg-slate-200 rounded hidden sm:block" type="text" placeholder='Search' />
//     </div>
//     <div className='flex'>
//       <button className='text-sm/[16px] rounded border border-black ml-4 py-1.5 font-semibold px-4 hidden sm:block'>Login</button>
//       <button className='text-sm/[16px] rounded bg-[#FFA724] font-semibold px-4 ml-4 hidden sm:block'>Signup</button>
//       <button className='text-sm/[16px] rounded bg-[#FFA724] font-semibold px-4 ml-4 sm:hidden items-center'>Get Started</button>
//       <img className='hidden sm:block' src="/hamburger.png" alt="" />
//     </div>
//   </ >