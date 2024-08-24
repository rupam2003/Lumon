import React from 'react'
import Image from 'next/image'
import Card from '@/app/Components/Card'
import FollowBtn from '@/app/Components/FollowBtn'
import UserData from '@/app/Components/UserData'
import { getCurrentUser } from '@/app/utils/getCurrentUser'
const Page = async ({params}) => {
  
  
  const res = await fetch(`https://lum-on.vercel.app//api/getUser/${params.id}`,{ cache: 'no-store' })
  const {user , posts} = await res.json()
  
  const date = user.createdAt
  
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];  
  const month = parseInt(date[5]+date[6])
  const currentUser = await getCurrentUser()
  return (
    <div>
      
      <UserData user = {user} date={date}/>
      
    <h1 className='px-3 pt-2 font-bold border-t-[1px] border-[rgb(219, 219, 219)]'>{user.name}'s posts...</h1>
      {
        posts.map((e)=>{
            return <Card key={e._id} currentUser={currentUser} post = {e}/>
          })
        }
    
    </div>
  )
}

export default Page