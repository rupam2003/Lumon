"use client"
import React from 'react'
import Link from 'next/link'
import { GoHome ,GoPerson, GoBookmark ,GoPlusCircle ,GoSignOut  } from "react-icons/go";
import { BsBookmark } from "react-icons/bs";

import { signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';

const BottomNav = () => {
  const pathname =  usePathname()
  return (
    <nav>
      <ul className="md:hidden flex justify-evenly py-1  glass shadow fixed left-0 right-0 bottom-0 w-full ">
      

      <li key={"Home"} className= {`${pathname =="/" ? "bg-black text-white":"hover:bg-slate-200"} p-2 rounded-full font-bold transition-colors `}><Link href={"/"} className=' flex flex-col items-center '><GoHome  className='  text-2xl'/></Link></li>
      <li key={"profile"} className={`${pathname =="/profile" ? "bg-black text-white":"hover:bg-slate-200"} p-2 rounded-full font-bold transition-colors`}><Link href={"/profile"} className=' flex flex-col items-center '><GoPerson className='text-2xl'/></Link></li>
      <li key={"create"} className={`${pathname =="/create" ? "bg-black text-white":"hover:bg-slate-200"} p-2 rounded-full font-bold transition-colors`}><Link href={"/create"} className=' flex flex-col items-center '><GoPlusCircle  className='text-2xl'/></Link></li>

      <li key={"bookmark"} className={`${pathname =="/bookmarks" ? "bg-black text-white":"hover:bg-slate-200"} p-2 rounded-full font-bold transition-colors`}><Link href={"/bookmarks"} className='  flex flex-col items-center '><GoBookmark className='text-2xl'/></Link></li>
      <li key={"logout"} className={`${pathname =="" ? "bg-black text-white":"hover:bg-slate-200"} p-2 rounded-full font-bold transition-colors`}><button onClick={signOut} className=' flex flex-col items-center '><GoSignOut  className='text-2xl'/></button></li>

    </ul>
    </nav>
    
  )
}

export default BottomNav