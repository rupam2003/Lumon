import User from "@/app/models/user"
import UserPost from "@/app/models/userpost"
import { connectDb } from "@/app/utils/connectDb"
import { NextResponse } from "next/server"

export async function GET() {
    try {

        await connectDb()
        
        const posts = await UserPost.find().populate("author")
        console.log(posts);
        

        return NextResponse.json({posts})


    } catch (error) {
        console.log(error);
        return NextResponse.json({
            
            message : "Error fetching post"})
    }
}

