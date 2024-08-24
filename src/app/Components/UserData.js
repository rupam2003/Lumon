import { headers } from 'next/headers'
import React from 'react'
import FollowBtn from './FollowBtn'
import Image from 'next/image'
import { getCurrentUser } from '../utils/getCurrentUser'
import Link from 'next/link'

const UserData = async ({user , date }) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];  
  const month = parseInt(date[5]+date[6])
  const currentUser = await getCurrentUser()
  // const res = await fetch("https://lum-on.vercel.app//api/getCurrentUser" ,{ 
  //   headers: Object.fromEntries(headers())
  //  })
  // const session = await res.json()
  // console.log(session);

    
  return (
    <>
    <div className='flex m-4'>
      <figure className='w-[80px] mr-4 '>
            <Image className='  rounded-full' 
              style={{ width: '100%', height: 'auto' }} 
              width={0} 
              height={0} 
              src={user.image} 
              alt='profile-pic'/>
          </figure>
    <div>
      <h1 className='text-lg font-semibold'>{user.name}</h1>
      <h1 className='text font-[450] mb-2'>Joined on  {date[8]+date[9]} {months[month-1]} {date[2]+date[3]}</h1>
      
      <FollowBtn currentUser = {currentUser._id} personToFollow = {user._id} following ={user.followers.includes(currentUser._id)}/>
    </div>
    
      </div> 
      <div className=' border-t-[1px] border-[rgb(219, 219, 219)] grid grid-cols-2  w-full  '>
        <Link href={`/person/${user._id}/followers`} className='py-1 text-center font-semibold hover:bg-slate-300 transition-colors '><span className='font-bold'>{user.followers.length}</span><br/> Followers</Link>
        <Link href={`/person/${user._id}/following`} className='py-1 text-center font-semibold hover:bg-slate-300 transition-colors'><span className='font-bold'>{user.following.length}</span><br/> Following</Link>
      </div>
      
      </>
  )
}

export default UserData