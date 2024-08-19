import User from "@/app/models/user"
import UserPost from "@/app/models/userpost"
import { connectDb } from "@/app/utils/connectDb"
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server"

export async function GET() {
    try {

        await connectDb()
        const session = await getServerSession()
        
        if(!session)
            return NextResponse.json("sorryfdf")
        const data = await User.findOne({email:session.user.email})
        console.log(data);
        

        return NextResponse.json(data)


    } catch (error) {
        console.log(error);
        return NextResponse.json({
            
            message : "Error fetching post"})
    }
}

