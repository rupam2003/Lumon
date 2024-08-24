import { headers } from "next/headers"

export const getCurrentUser = async () =>{
    const res = await fetch("https://lum-on.vercel.app/api/getCurrentUser" ,{ 
        headers: Object.fromEntries(headers())
       },
       { cache : "no-store"}

    )
       
      const session = await res.json()
    return session
}
