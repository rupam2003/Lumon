import Comment from "@/app/models/comments"

import { connectDb } from "@/app/utils/connectDb"
import { NextResponse } from "next/server"

export async function POST(req) {
    try {

        await connectDb()
        const {userId,postId,title} = await req.json()
       
       
        const post = await Comment.create(
            {
                author : userId,
                post:postId,
                title :title,
                
            }
        )

        return NextResponse.json({
           post,
            message : "Comment created"})


    } catch (error) {
        console.log(error);
        return NextResponse.json({
            
            message : "Error creating comment"})
    }
}

