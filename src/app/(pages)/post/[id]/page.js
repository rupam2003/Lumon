import Card from '@/app/Components/Card'
import CommentInput from '@/app/Components/CommentInput'
import { getComments } from '@/app/utils/getComments'
import { getCurrentUser } from '@/app/utils/getCurrentUser'
import { getDate } from '@/app/utils/getDate'
import { getPost } from '@/app/utils/getPost'
import React from 'react'

const Page = async ({params}) => {
    



    const post = await getPost(params.id)
    const currentUser = await getCurrentUser()
    const comments = await getComments(params.id)
    return (


    <div>
        <h1 className='m-3 text-xl font-bold'>Post</h1>
        <Card 
        key={post._id}
        post={post} 
        currentUser={currentUser} 
        />

        <CommentInput 
        userId={currentUser._id}
        postId={post._id}
        />


<h1 className='m-3 text-lg font-bold'>{comments.length} Comments </h1>
{/* All comments */}
        {comments.length === 0
        ?<h1 className='text-center font-semibold' >Be the first to comment</h1>
        :comments.map((e)=>{
          return <div className='flex gap-3 py-3 border-b-[1px] border-[rgb(219, 219, 219)]'>
            <figure className='min-w-[30px] w-[30px] ml-2'>
              <img className='  rounded-full'
              style={{ width: '100%', height: 'auto' }} 
              width={0} 
              height={0} 
              src={e.author.image} 
              alt='profile-pic'/>
             
          </figure>
        
          <div >
            <h1 className='text-sm  font-bold'>{e.author.name} &#8226; <span className='font-semibold'>{getDate(e.createdAt)}</span></h1>
           
            <h1 className=' font-semibold'>{e.title}</h1>
          </div>
          </div>
        })

        }
        
    </div>
  )
}

export default Page
