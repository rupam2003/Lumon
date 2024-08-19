import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'
import SideNav from './Components/SideNav'
import Card from './Components/Card'
import { getCurrentUser } from './utils/getCurrentUser'
const Page = async () => {

  const session  = await getServerSession()
  if(!session)
    redirect("\login")

  const res = await fetch("https://socials1212.vercel.app/api/getPosts",{cache:"no-store"})
  const {posts} = await res.json()
  const user = await getCurrentUser()
  console.log(posts);
  return (
    <>
    <h1 className='m-3 text-xl font-bold'>Home  </h1>
    <div className='flex flex-col items-center '>
      
      
      {
      posts.map((e)=>{
          return <Card key={e._id} currentUser= {user}  post = {e}/>
        })
      }
      
      
      <h1>{session?.user?.name}</h1>
      
      <Link href={"/create"}>create</Link>
      
    </div>
    </>
    
  )
}

export default Page
