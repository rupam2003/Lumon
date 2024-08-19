
import User from "@/app/models/user"
import UserPost from "@/app/models/userpost"
import { connectDb } from "@/app/utils/connectDb"
import { NextResponse } from "next/server"

export async function GET(req, {params}) {
    try {

        await connectDb()
        
        const user = await User.findById(params.id)
        const posts= await UserPost.find({author: params.id}).populate("author")
        console.log(params.id);
        

        return NextResponse.json({user , posts})


    } catch (error) {
        console.log(error);
        return NextResponse.json({
            
            message : "Error fetching user"})
    }
}

