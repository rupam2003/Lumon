export const getComments = async (postId) => {
    const res = await fetch(`https://lum-on.vercel.app/api/getComments/${postId}`, { cache : "no-store"})
    const {comments} = await res.json()
    return comments
}
