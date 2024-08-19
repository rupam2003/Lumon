'use client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useState } from 'react'
const FollowBtn = ({personToFollow , currentUser , following}) => {

  console.log(personToFollow);
  const router = useRouter()
  const userId =  currentUser

  const [follow, setfollow] = useState(following)
 
   
  const handleFollow = async (e) =>{
        e.preventDefault()
        try {
          const res = await fetch("https://socials1212.vercel.app/api/follow" , {
            method: "POST",
              headers:{
                "Content-Type" : "application/json",
              },
              body:JSON.stringify({
                
                currentUser: currentUser,
                userToFollow: personToFollow
                
              }),
              
          })
          
          setfollow(true)
          router.refresh()
        } catch (error) {
          console.log(error);
          
        }
        
    }
    const handleUnfollow = async (e) =>{
      e.preventDefault()
      try {
        const res = await fetch("https://socials1212.vercel.app/api/unfollow" , {
          method: "POST",
            headers:{
              "Content-Type" : "application/json",
            },
            body:JSON.stringify({
              
              currentUser: currentUser,
              userToUnfollow: personToFollow
              
            }),
            
        })
        
        setfollow(false)
        router.refresh()
        
      } catch (error) {
        console.log(error);
        
      }
      
  }

  return (
    <>
    {
      !userId 
      ?   <button className=' w-16 bg-blue-300 text-sm font-semibold rounded-lg mt-2 px-3 py-2'>...</button> 
      : (!follow )
      ?<button onClick={handleFollow} className='btn btn-primary  btn-sm  btn-outline text-sm font-semibold mr-2 '>Follow</button>
      :<button onClick={handleUnfollow} className= 'btn btn-error btn-sm btn-outline  text-sm font-semibold mr-2 '>Unfollow</button>
    }
    
    {/* {follow?"hi":"bi"} */}
    </>
    

  )
}

export default FollowBtn