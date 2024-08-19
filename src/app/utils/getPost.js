
export const getPost = async (id) => {
    const res = await fetch(`https://socials1212.vercel.app/api/getPost/${id}`, { cache : "no-store"})
    const post = await res.json()
    return post
}