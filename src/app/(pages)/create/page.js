import CreatePost from '@/app/Components/CreatePost'
import React from 'react'
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
const Page = async () => {
  const session  = await getServerSession()
  if(!session)
    redirect("\login")
  return (
    <>
    
    <CreatePost/>
    </>
    
  )
}

export default Page
