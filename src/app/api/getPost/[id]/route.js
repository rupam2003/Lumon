import User from "@/app/models/user"
import UserPost from "@/app/models/userpost"
import { connectDb } from "@/app/utils/connectDb"
import { NextResponse } from "next/server"

export async function GET(req , {params}) {
    try {
        await connectDb()
        
        const post = await UserPost.findById(params.id).populate("author")
        console.log(post);
        return NextResponse.json(post)


    } catch (error) {
        console.log(error);
        return NextResponse.json({
            
            message : "Error fetching post"})
    }
}

