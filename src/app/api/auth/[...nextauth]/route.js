
import User from "@/app/models/user";
import { connectDb } from "@/app/utils/connectDb";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";


export const authOptions = {providers: [
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
  ],
  callbacks: {
    async signIn({user , account }){
      

      try {
        await connectDb()
        const userExists = await User.findOne({ email : user.email })
        
        if (!userExists)
        {
          await User.create({
            name : user.name,
            email : user.email,
            image: user.image 
          })
          console.log("user Created");
        }
        return user
        
        
      } catch (error) {
        console.log(error);
       return null
      }
    },
    async redirect({ url, baseUrl }) {
      return baseUrl
    },
    async session({ session}) {
      try {

        await connectDb()
        const user = await User.findOne({ email : session?.user?.email })
        session.user.id = user._id;
      } catch (error) {
        console.log(error);
      }
      
     
      
      return session;
    }
  }
}

const handler = NextAuth(authOptions)

export {handler as GET , handler as POST}
