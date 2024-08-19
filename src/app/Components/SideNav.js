'use client'
import React from 'react'
import { Pacifico  } from 'next/font/google'
import { GoHome ,GoPerson, GoBookmark ,GoPlusCircle ,GoSignOut  } from "react-icons/go";
import { BsBookmark } from "react-icons/bs";
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';


const rochester = Pacifico({ 
  subsets: ["latin"],
  weight:["400"] 
});

const SideNav = () => {
  const pathname = usePathname()
  return (

    <div className={`${pathname == "/login" ? "hidden" : "md:grid"} drawer sticky top-0  hidden   drawer-open h-[100vh] w-36 mr-5  `}>
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  
  <div className="  h-[80vh] ">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className=" w-36">
      {/* Sidebar content here */}
      <h1 key={"logo"} className={`text-3xl font-bold ${rochester.className}`}></h1>

      <li key={"Home"}      className={`${pathname =="/" ? "border-black": "border-transparent hover:bg-slate-200"} my-4 p-2 border-2  rounded-full font-bold transition-colors`}><Link href={"/"} className='flex items-center '><GoHome  className=' text-2xl mr-2'/>Home</Link></li>
      <li key={"profile"}   className={`${pathname =="/profile" ? "border-black": "border-transparent hover:bg-slate-200"} my-4 p-2 border-2 rounded-full font-bold transition-colors`}><Link href={"/profile"} className=' flex items-center '><GoPerson className='text-2xl   mr-2'/>Profile</Link></li>
      <li key={"create"}    className={`${pathname =="/create" ? "border-black": "border-transparent hover:bg-slate-200"} my-4 p-2 border-2 rounded-full font-bold transition-colors`}><Link href={"/create"} className=' flex items-center '><GoPlusCircle  className='text-2xl   mr-2'/>Create</Link></li>
      <li key={"bookmark"}  className={`${pathname =="/bookmarks" ? "border-black": "border-transparent hover:bg-slate-200"} my-4 p-2 border-2 rounded-full font-bold transition-colors`}><Link href={"/bookmarks"} className='  flex items-center '><GoBookmark className='text-2xl   mr-2'/>Bookmarks</Link></li>

      <li key={"logout"}    className={` my-4 p-2 border-2 rounded-full font-bold  border-transparent hover:bg-slate-200  transition-colors`}><button onClick={signOut} className=' flex items-center '><GoSignOut  className='text-2xl   mr-2'/>Logout</button></li>

    </ul>
  </div>
</div>
  )
}
// bg-[rgba(19,20,25,255)]
export default SideNav