import type { User } from '~/types/user'

export default defineEventHandler(async (event) => {
    const session = await getUserSession(event)
    if (!session?.user) {
        throw createError({ statusCode: 401, message: 'Not authorized' })
    }
    const storage = useStorage('user')
    const user = session.user as User
    if (!user) throw createError({ statusCode: 404, message: 'User not found' })
        
    return user.wishlist
})
