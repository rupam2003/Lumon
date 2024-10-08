import React from 'react'
import Image from 'next/image'
import { GoHeart ,GoComment ,GoBookmark } from "react-icons/go";
import LikeButton from './LikeButton';
import SaveButton from './SaveButton';
import Link from 'next/link';
import { getDate } from '../utils/getDate';


const Card = ({post , currentUser}) => {
  
  console.log(post);
  const date = getDate(post.createdAt)
  const img_url = post.image.slice(0,48) + "/w_600/q_auto:best" + post.image.slice(48)
  
  return (
    <div key={post._id} className='w-full py-5 border-b-[1px] border-[rgb(219, 219, 219)] shadow-slate-200  flex justify-center'>
        <figure className='min-w-[35px] w-[35px] ml-2'>
            <img className='  rounded-full'
               
              style={{ width: '100%', height: 'auto' }} 
              width={0} 
              height={0} 
              src={post.author.image} 
              alt='profile-pic'/>
             
          </figure>


        <section className='w-full flex flex-col pl-2 mr-3'>
          
            <div className='flex'>
              <h1 className='text-sm font-bold mr-1'>{post.author.name}</h1>
              <h1 className='text-sm font-[450]'>&#8226;  {date}</h1>
              
            </div>
            <h1 className='text-sm font-[450]'>{post.title}</h1>

            <figure className=' w-full  md:h-[350px] h-[200px] bg-slate-100 relative shadow-lg  rounded-xl my-2 '>
        { post.image === ""
            ?<></>

            :
              <Image 
                priority
                sizes='100vw' 
                // style={{ width: 'auto', height: 'auto' ,  }} 
                draggable={false} 
                className='rounded-xl object-contain' 
                src={img_url} 
                fill
                // width={0} 
                // height={0} 
                alt='post-image'/>
            
        }
        </figure>
        <div className='flex text-xl mt-1 gap-20'>
          
          <LikeButton currentUserId={currentUser._id} post = {post}/>
          
          <Link className='rounded-full p-2 hover:bg-slate-300 transition-colors' href={`/post/${post._id}`}><GoComment className=''/></Link>
          <SaveButton currentUser={currentUser} postId = {post._id}/>
          
        </div>
        
        </section>
      
        
       
        
    
    
    
    </div>
  )
}

export default Card
