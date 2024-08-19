import User from "@/app/models/user"
import UserPost from "@/app/models/userpost"
import { connectDb } from "@/app/utils/connectDb"
import { NextResponse } from "next/server"

export async function POST(req) {
    try {

        await connectDb()
        const {currentUser , userToFollow } = await req.json()
        const follow = await User.findById(userToFollow)
        const followedBy = await User.findById(currentUser)
        
       
        await User.findOneAndUpdate({_id:currentUser},{$push:{following:userToFollow}})
        await User.findOneAndUpdate({_id:userToFollow},{$push:{followers:currentUser}})
        return NextResponse.json({
         
            message : "follow request done" })


    } catch (error) {
        console.log(error);
        return NextResponse.json({
            
            message : "Error in follow request "})
    }
}

