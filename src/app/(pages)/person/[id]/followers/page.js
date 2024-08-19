import React from 'react'
import Image from 'next/image'
import FollowBtn from '@/app/Components/FollowBtn'
import { getCurrentUser } from '@/app/utils/getCurrentUser'
import Link from 'next/link'
const Page = async ({params}) => {
  
  const currentUser = await getCurrentUser()
  const res = await fetch(`https://socials1212.vercel.app/api/getFollowers/${params.id}`,{cache:"no-store"})
  
  const {name,followers} = await res.json()
  console.log(name);
  
  return (
    <>  
        <h1 className='m-3 text-xl font-bold'>{name}'s Followers</h1>

    {
      followers.map((e) =>{ 
        return <Link href={`/person/${e._id}`} className='flex items-center py-2 justify-between rounded-md hover:bg-slate-200'>
            <div className='flex items-center gap-2 '>
                <figure className='min-w-[40px] w-[40px] ml-2'>
                  <Image className='  rounded-full'
                  priority 
                  style={{ width: '100%', height: 'auto' }} 
                  width={0} 
                  height={0} 
                  src={e.image} 
                  alt='profile-pic'/>
                </figure>
                <h1 className='font-semibold'>{e.name}</h1>
            </div>
           
            <FollowBtn personToFollow={e._id} currentUser={currentUser._id} following={currentUser.following.includes(e._id)}/>

          </Link> 
      })
    }

    </>
   
  )
}

export default Page