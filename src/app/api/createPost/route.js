import User from "@/app/models/user"
import UserPost from "@/app/models/userpost"
import { connectDb } from "@/app/utils/connectDb"
import { NextResponse } from "next/server"

export async function POST(req) {
    try {

        await connectDb()
        const {email,title,image} = await req.json()
        const user = await User.findOne({email})
        console.log(user);
        const post = await UserPost.create(
            {
                author : user._id,
                title :title,
                image :image
            }
        )

        return NextResponse.json({
           post,
            message : "post created"})


    } catch (error) {
        console.log(error);
        return NextResponse.json({
            
            message : "Error creating post"})
    }
}

