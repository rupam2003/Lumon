'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { VscSend } from "react-icons/vsc";
const CommentInput = ({userId , postId}) => {
    const router = useRouter()
    const [comment, setComment] = useState("")
    const [isLoading, setisLoading] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault()
        setisLoading(true)
        try {
            const response = await fetch(`https://socials1212.vercel.app/api/createComment` , {
                method: "POST",
                headers:{
                  "Content-Type" : "application/json",
                },
                body:JSON.stringify({
                  
                  userId,
                  postId,
                  title:comment,
                  
                }),
              }) 
              setisLoading(false)
              setComment("")
              router.refresh()
        } catch (error) {
            console.log(error)
            setisLoading(false)
            
        }
       
    }

    return (
    <form className='flex gap-2 justify-center my-3'>
        <input
            value={comment}
         placeholder='Write a comment...' 
         onChange={(e) =>setComment(e.target.value)}  
         className='input input-bordered input-primary w-[80%] ' />
        {
            
        }
        <button onClick={handleSubmit} 
        className={` btn btn-primary btn-outline ${isLoading? "btn-disabled":""}  `}>
        {
            isLoading
            ?<span className='loading loading-spinner '></span>
           :<><VscSend className='text-2xl'/></>
        }
        </button>
    </form>
  )
}

export default CommentInput