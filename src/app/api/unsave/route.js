import User from "@/app/models/user"
import UserPost from "@/app/models/userpost"
import { connectDb } from "@/app/utils/connectDb"
import { NextResponse } from "next/server"

export async function POST(req) {
    try {

        await connectDb()
        const {userId , postId } = await req.json()
        
        
       
        await User.findOneAndUpdate({_id:userId},{$pull:{likes:postId}})
        

        return NextResponse.json({
         
            message : "unsave request done" })


    } catch (error) {
        console.log(error);
        return NextResponse.json({
            
            message : "Error in unsave request "})
    }
}

