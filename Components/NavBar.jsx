import React from 'react'
import Image from 'next/image';


function NavBar() {
  return (
    <nav className='border-box flex justify-center w-1120 h-14 py-8 items-center '>
      <div className='flex px-4'>
        <img className="w-6 h-6" src='/reelImg.png' alt="" />
      <h1 className="text-[#222] text-center font-bold	tracking-[.34px] pr-4">Reel Talk</h1>
        <ul className='flex'>
          <li className='cursor-not-allowed text-{16px}'	>Browse</li>
          <li className='px-4 cursor-not-allowed	text-{16px}'>Community</li>
          <li className='cursor-not-allowed	text-{16px}'>Discussions</li>
        </ul>
      </div>
          <div className='flex'>
        <input className="w-[351px] px-10"type="text" placeholder='Search'/>
          </div>
          <div className='flex'>
        <button className='rounded border-black'>Login</button>
        <button className='rounded'>Signup</button>
          </div>
        
    </nav>
  )
}

export default NavBar