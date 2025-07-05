import { User } from "~/types/user"
export default defineEventHandler(async (event) => {
  const session = await getUserSession(event)

  if (!session?.user) {
    throw createError({
      statusCode: 401,
      message: 'Unauthorized'
    })
  }

  const userSession = session.user as User
  const storage = useStorage('user')
  const users = await storage.getItem('users.json') as any[] || []
  const user = users.find(u => u.id === userSession.id)

  if (!user) {
    throw createError({ statusCode: 404, message: 'User not found' })
  }
  
  return user
})