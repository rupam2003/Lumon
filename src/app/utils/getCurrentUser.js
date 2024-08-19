import { headers } from "next/headers"

export const getCurrentUser = async () =>{
    const res = await fetch("https://socials1212.vercel.app/api/getCurrentUser" ,{ 
        headers: Object.fromEntries(headers())
       },
       { cache : "no-store"}

    )
       
      const session = await res.json()
    return session
}
