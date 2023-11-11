import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Input from '../../Components/Input'
import Buttons from '../../Components/Buttons'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from '/firebase.js';
// import { auth, db } from '/pages/_app'

import { doc, setDoc } from "firebase/firestore"; 
import { useRouter } from 'next/router';




function SignInWithEmail() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const Router = useRouter();

    const handleSubmit = async (event) => {
        console.log("this clicked")
        event.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            const user = userCredential.user;
            await updateProfile(user, { displayName: name });
            Router.push('/LoggedIn/User')
            console.log(user)

            await setDoc(doc(db, "users", user.uid), {
                displayName: name,
                email: email,
                password: password,
                
            });
            console.log(user)
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        }
    }


  return (
    <form onSubmit={handleSubmit}>
      <section className='flex h-screen box-border bg-black w-375px flex-col items-center gap-14 py-12 px-4'>
          <div className='flex items-center flex-col'>
            <img src="/ProgressBar.png" alt="" />
              <h1 className='text-[#FFFFFFEB] text-center text-[28px] font-medium tracking-[-0.02625rem] mt-[56px]'>Create your account</h1>
              <p className='text-[#FFFFFFEB] text-center text-sm font-normal tracking-[0.00438rem] mt-4'>
                  By continuing, you agree to our <span className='text-[#FFA724] font-semibold'><Link href="/Terms">Terms of Service</Link></span> and <Link href="/Private"><span className='text-[#FFA724] font-semibold'> Privacy Policy.</span></Link></p>
              
              <Input name={name} setName={setName}
                  email={email} setEmail={setEmail}
                  password={password} setPassword={setPassword} />
          </div>
        <Buttons type="submit" name={name} email={email} password={password}/>
      </section>
      </form>
  )
}

export default SignInWithEmail
