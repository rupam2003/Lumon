"use client"
import { signIn, signOut } from 'next-auth/react'
import React from 'react'
import { FaGoogle } from "react-icons/fa6";

const Page = () => {
  
  return (
    <div className=' flex justify-center mt-12'>

        <button className='btn  btn-primary btn-outline btn-wide text-xl font-bold' onClick={() => signIn("google")}>
        <FaGoogle />

          Sign In with Google</button>
        <br></br>

    </div>
  )
}

export default Page