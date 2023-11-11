import React, { useEffect, useState } from 'react'
import Link from 'next/link';
// import { auth } from '../pages/_app'
// import { onAuthStateChanged } from 'firebase/auth';



function NavBar() {
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     setUser(user);
  //   });

  //   return () => unsubscribe();
  // }, []);




  return (
    <nav className='flex sm:w-375 h-[56px] lg:w-1120px items-center box-border shrink-0 py-2 border-b sm:py-4 m-0 lg:justify-center lg:flex'>
      <div className='w-full flex justify-between items-center sm:px-4 lg:justify-start lg:w-auto'>
        <Link href="/"><img className=" justify-center items-center gap-1 px-4 lg:pr-0" src='/reelImg.png' alt="" /></Link>
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

      
        {/* user ? <div className='flex items-center content-between'>
        <h1 className='ml-[16px] mr-[16px] text-base'>Watchlist</h1>
        <div style={{backgroundColor: 'gray', borderRadius: '50%', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center'}} >
        <h1 className='font-medium text-white b-roun'>{user.displayName[0]}</h1>
        </div>
        <select className="ml-[6px]" name="" id="">
          </select></div> :  */}
          
          <div className='flex'>
          <button className='hidden lg:block text-sm/[16px] rounded border border-black ml-4 py-1.5 font-semibold px-4'>Login</button>
          <button className='hidden lg:block text-sm/[16px] rounded bg-[#FFA724] font-semibold px-4 ml-4'><Link href='/UserSignIn/SignInWithEmail'>Signup</Link></button>
        </div>
      
    </nav>
  )
}



export default NavBar