import User from "@/app/models/user";
import { connectDb } from "@/app/utils/connectDb";
import { NextResponse } from "next/server";

export async function GET(req , {params}) {
    
    try {
        await connectDb()
        const user = await User.findById(params.userId).populate("followers","_id name email image")
        
        return NextResponse.json({
            _id:user._id,
            name:user.name,
            email:user.email,
            followers:user.followers})
    } catch (error) {
        console.log(error);
        
    }


}