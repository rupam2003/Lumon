
import User from "@/app/models/user"
import UserPost from "@/app/models/userpost"
import { connectDb } from "@/app/utils/connectDb"
import { NextResponse } from "next/server"

export async function GET(req, {params}) {
    try {

        await connectDb()
        
        const user = await User.findById(params.userId).populate({
            path: "likes",
            populate: { path: "author" },
          })
     
       

        return NextResponse.json({saved:user.likes})


    } catch (error) {
        console.log(error);
        return NextResponse.json({
            
            message : "Error fetching user"})
    }
}

