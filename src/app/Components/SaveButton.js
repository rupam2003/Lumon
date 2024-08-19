"use client"

import { useRouter } from 'next/navigation'
import React from 'react'
import { useState } from 'react'
import { GoHeart, GoHeartFill , GoBookmark ,GoBookmarkFill } from 'react-icons/go'
const SaveButton = ({currentUser , postId}) => {


    const [saved, setsaved] = useState(currentUser.likes.includes(postId) )
  console.log(postId);
  
    const router = useRouter()
    const handleLike = async (e) =>{
        e.preventDefault()
        try {
          const res = await fetch("https://socials1212.vercel.app/api/save" , {
            method: "POST",
              headers:{
                "Content-Type" : "application/json",
              },
              body:JSON.stringify({
                
                userId: currentUser._id,
                postId: postId
                
              }),
              
          })
          router.refresh()
          setsaved(true)

        } catch (error) {
          console.log(error);
          
        }
        
    }
    const handleRemoveLike = async (e) =>{
      e.preventDefault()
      try {
        const res = await fetch("https://socials1212.vercel.app/api/unsave" , {
          method: "POST",
            headers:{
              "Content-Type" : "application/json",
            },
            body:JSON.stringify({
              
              userId: currentUser._id,
              postId: postId
              
            }),
            
        })
        router.refresh()
        setsaved(false)
         
      } catch (error) {
        console.log(error);
        
      }
      
  }
  return (

        <div className='flex'>
            {
                saved
                ?<button onClick={handleRemoveLike}><GoBookmarkFill  className='mx-2 '/></button>
                :<button onClick={handleLike}><GoBookmark className='mx-2  '/></button>
            }
            
        </div>  
    )
}

export default SaveButton