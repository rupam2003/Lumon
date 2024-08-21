
import Comment from "@/app/models/comments"
import UserPost from "@/app/models/userpost"
import User from "@/app/models/user"
import { connectDb } from "@/app/utils/connectDb"
import { NextResponse } from "next/server"

export async function GET(req, {params}) {
    try {

        await connectDb()
        
        const comments= await Comment.find({post: params.postId}).populate("author","name image")
        return NextResponse.json({comments})


    } catch (error) {
        console.log(error);
        return NextResponse.json({
            
            message : "Error fetching comments"})
    }
}

