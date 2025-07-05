import { z } from 'zod'

const bodySchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
})

export default defineEventHandler(async (event) => {
    const { email, password } = await readValidatedBody(event, bodySchema.parse)
    const storage = useStorage('user')
    const users = await storage.getItem('users.json') as any[] || []

    if (users.find(u => u.email === email)) {
        throw createError({
            statusCode: 400,
            message: 'The user with this email already exists'
        })
    }

    const newUser = {
        id: `user_${Math.random().toString(16).substring(2, 9)}`,
        email,
        password,
        registered_at: new Date().toISOString(),
        is_admin: false,
        wishlist: [],
        cart: [],
        purchases: []
    }

    users.push(newUser)
    await storage.setItem('users.json', users)

     // Устанавливаем сессию
    await setUserSession(event, { user: newUser })
    return { user: newUser }
})
