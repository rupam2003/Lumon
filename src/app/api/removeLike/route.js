import User from "@/app/models/user"
import UserPost from "@/app/models/userpost"
import { connectDb } from "@/app/utils/connectDb"
import { NextResponse } from "next/server"

export async function POST(req) {
    try {

        await connectDb()
        const {userId , postId } = await req.json()
        
        
       
        await UserPost.findOneAndUpdate({_id:postId},{$pull:{likes:userId}})
        return NextResponse.json({
         
            message : " remove like request done" })


    } catch (error) {
        console.log(error);
        return NextResponse.json({
            
            message : "Error in remove like request "})
    }
}

