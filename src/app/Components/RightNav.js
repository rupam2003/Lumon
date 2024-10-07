import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getServerSession } from 'next-auth'
const RightNav = async () => {

  const res = await fetch(`https://lum-on.vercel.app/api/getUsers`,{cache:"no-store"})
  const {users} = await res.json()
  console.log(users);
  const session = await getServerSession()
  if(!session)
    return <></>
  
  return (

    <div className=" drawer sticky top-0  md:grid hidden drawer-open h-[100vh]  w-44  " >
  
  <div className=" h-[80vh]">
    <ul className="  w-44 ">
      {/* Sidebar content here */}

      <h1 className='text-sm font-bold m-3'>Suggested accounts</h1>
      {
        users.map((user) =>{
          return <Link href={`/person/${user._id}`} className='hover:bg-slate-200 transition-colors transi   rounded flex items-center font-semibold text-sm '>
                    <figure className='min-w-[30px] w-[30px] m-2'>
                        <Image className='  rounded-full' 
                          style={{ width: '100%', height: 'auto' }} 
                          width={0} 
                          height={0} 
                          src={user.image} 
                          alt='profile-pic'/>
                    </figure>
                    <h1 className='truncate mr-2  text-nowrap '>{user.name}</h1>

                  </Link>
        })
      }
      
    </ul>
  </div>
</div>
  )
}

export default RightNav
