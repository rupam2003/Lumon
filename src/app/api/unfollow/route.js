import User from "@/app/models/user"
import UserPost from "@/app/models/userpost"
import { connectDb } from "@/app/utils/connectDb"
import { NextResponse } from "next/server"

export async function POST(req) {
    try {

        await connectDb()
        const {currentUser , userToUnfollow } = await req.json()
       
        
       
        await User.findOneAndUpdate({_id:currentUser},{$pull:{following:userToUnfollow}})
        await User.findOneAndUpdate({_id:userToUnfollow},{$pull:{followers:currentUser}})
        console.log("done");
        return NextResponse.json({
         
            message : "Unfollow request done" })


    } catch (error) {
        console.log(error);
        return NextResponse.json({
            
            message : "Error in Unfollow request "})
    }
}

