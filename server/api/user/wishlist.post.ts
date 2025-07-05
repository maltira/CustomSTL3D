// server/api/user/wishlist.post.ts
import { z } from 'zod'
import type { User } from '~/types/user'

const schema = z.object({
  product_id: z.string().min(1)
})

export default defineEventHandler(async (event) => {
  const session = await getUserSession(event)
  if (!session?.user) {
    throw createError({ statusCode: 401, message: 'Not authorized' })
  }
  const user = session.user as User
  const { product_id } = await readValidatedBody(event, schema.parse)

  const storage = useStorage('user')
  const users = await storage.getItem('users.json') as any[] || []

  const userIndex = users.findIndex(u => u.id === user.id)
  if (userIndex === -1) {
    throw createError({ statusCode: 404, message: 'User not found' })
  }

  const wishlist = users[userIndex].wishlist || []
  if (!wishlist.includes(product_id)) {
    wishlist.push(product_id)
    users[userIndex].wishlist = wishlist
    await storage.setItem('users.json', users)
  }

  await setUserSession(event, { user: users[userIndex] })

  return { success: true, wishlist: users[userIndex].wishlist }
})
