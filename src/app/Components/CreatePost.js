"use client"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'

const CreatePost = () => {
  
    const {data: session} = useSession();
    const router = useRouter()
    const [error, seterror] = useState("")
    const [title, settitle] = useState("")
    const [image, setimage] = useState("")
    const [isLoading, setisLoading] = useState(false)

    // Image upload to cloudinary 
    const submitImage = async (e) => {
      e.preventDefault()
      setisLoading(true)
      try {

        if(!title){
          seterror("Please select title")
          setisLoading(false)
          return
        }

        if(!image)
          {
              seterror("Please select an Image")
              setisLoading(false)
              return
          }
  
        const data = new FormData()
        data.append("file",image)
        data.append("upload_preset","ml_default")
        data.append("cloud_name","dm26tlhv6")
         
        const res = await fetch("https://api.cloudinary.com/v1_1/dm26tlhv6/upload",{
          method:"post",
          body:data
        })
        const imgData = await res.json()
        console.log(imgData.url);
  
        //post creation in mongodb
          const response = await fetch(`https://socials1212.vercel.app/api/createPost` , {
            method: "POST",
            headers:{
              "Content-Type" : "application/json",
            },
            body:JSON.stringify({
              
              email:session?.user?.email,
              title,
              image:imgData.url
              
            }),
          })
         
          router.push("/")
        router.refresh()
         
          console.log(response);
  
      } catch (error) {
        console.log(error);
        setisLoading(false)
      }
      
    }
  return (

    <div className='flex flex-col items-center'>
    {/* post preview */}
    <h1 className='font-bold'>Post preview</h1>
    {session
    ?    <div key={"preview"} className='w-full py-5 border-b-[1px] border-[rgb(219, 219, 219)] shadow-slate-200  flex justify-center'>
        <figure className='min-w-[35px] w-[35px] ml-2'>
            <Image className='  rounded-full' 
              style={{ width: '100%', height: 'auto' }} 
              width={0} 
              height={0} 
              src={session?.user?.image} 
              alt='profile-pic'/>
          </figure>


        <section className='w-full flex flex-col pl-2 mr-3'>
          
            <div className='flex'>
              <h1 className='text-sm font-bold mr-1'>{session?.user?.name}</h1>
              <h1 className='text-sm font-[450]'>&#8226;10 Jul 2003</h1>
              
            </div>
            <h1 className='text-sm font-[450] max-w-[70%] overflow-hidden '>{title || <pre>  </pre>}</h1>

            <figure className=' w-full shadow rounded-xl my-2 '>
        { image === ""
            ?<figure className='w-auto h-[250px] ml-2'>
           
          </figure>


            :
              <Image 
                priority
                sizes='100vw' 
                style={{ width: 'auto', height: 'auto' ,  }} 
                draggable={false} 
                className='rounded-xl object-contain' 
                src={
                    URL.createObjectURL(image)
                } 
                width={0} 
                height={0} 
                alt='post-image'/>
            
        }
        </figure>
        </section>

    </div>
    :<></>
    }
    


    <form className='flex flex-col w-[80%]' >
       
        <input placeholder='Write the title for your post...' onChange={(e) =>settitle(e.target.value)}  className='input input-bordered input-primary w-full my-3' value={title}/>
        <input
          accept="image/png, image/jpeg"  
          className='file-input file-input-bordered file-input-primary w-full ' 
        onChange={(e) =>{
            if(!e.target.files[0])
                {
                    setimage("")
                    return
                } 
            setimage(e.target.files[0])
        }
            
        } 
        type='file'/>

        <h1 className='text-center'>{error}</h1>
        <button className={`btn btn-outline btn-primary my-3 ${isLoading? "btn-disabled":""}`} onClick={submitImage}>
         {
          isLoading
          ?<span className='loading loading-spinner '></span>
         :<>UPLOAD</>
        } 
          
          
          
        </button>
        
        
        
        
    </form> 
    
    </div>
  )
}

export default CreatePost
