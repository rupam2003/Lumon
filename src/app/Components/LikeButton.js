"use client"

import { useRouter } from 'next/navigation'
import React from 'react'
import { useState } from 'react'
import { GoHeart, GoHeartFill } from 'react-icons/go'
const LikeButton = ({currentUserId , post}) => {


    const [like, setlike] = useState(post.likes.includes(currentUserId) )
    const [likeCount, setlikeCount] = useState(post.likes.length )

    const router = useRouter()
    const handleLike = async (e) =>{
        e.preventDefault()
        try {
          const res = await fetch("https://socials1212.vercel.app/api/like" , {
            method: "POST",
              headers:{
                "Content-Type" : "application/json",
              },
              body:JSON.stringify({
                
                userId: currentUserId,
                postId: post._id
                
              }),
              
          })
          router.refresh()
          setlike(true)
          setlikeCount(like+1)

        } catch (error) {
          console.log(error);
          
        }
        
    }
    const handleRemoveLike = async (e) =>{
      e.preventDefault()
      try {
        const res = await fetch("https://socials1212.vercel.app/api/removeLike" , {
          method: "POST",
            headers:{
              "Content-Type" : "application/json",
            },
            body:JSON.stringify({
              
              userId: currentUserId,
              postId: post._id
              
            }),
            
        })
        router.refresh()
        setlike(false)
        setlikeCount(like-1)
        
      } catch (error) {
        console.log(error);
        
      }
      
  }
  return (

        <div className='flex'>
            {
                like
                ?<button onClick={handleRemoveLike}><GoHeartFill  className='mx-2 '/></button>
                :<button onClick={handleLike}><GoHeart className='mx-2  '/></button>
            }
            
            <h1 className='text-sm font-medium'>{likeCount}</h1>
        </div>  
    )
}

export default LikeButton