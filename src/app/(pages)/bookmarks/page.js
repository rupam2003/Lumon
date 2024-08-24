import User from '@/app/models/user'
import { getCurrentUser } from '@/app/utils/getCurrentUser'
import React from 'react'
import Card from '@/app/Components/Card'

const Page = async () => {

    const currentUser = await getCurrentUser()
    const res = await fetch(`https://lum-on.vercel.app//api/getSavedPosts/${currentUser._id}`)
    const { saved } = await res.json()
  return (

    <div>
    <h1 className='m-3 text-xl font-bold'>Bookmarks</h1>
    
    {
        saved.length == 0
        ?<h1 className='text-center mt-20'>You haven't bookmarked any posts yet</h1>

      :saved.map((e)=>{
          return <Card key={e._id} currentUser= {currentUser}  post = {e}/>
        })
    }
    </div>
  )
}

export default Page