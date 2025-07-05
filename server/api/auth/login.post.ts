import { z } from 'zod'

const bodySchema = z.object({
  email: z.string().email(),
  password: z.string()
})

export default defineEventHandler(async (event) => {
  const { email, password } = await readValidatedBody(event, bodySchema.parse)
  const storage = useStorage('user')
  const users = (await storage.getItem('users.json')) as any[] || []

  const existingUser = users.find(u => u.email === email)
  
  if (existingUser) {
    if (existingUser.password !== password) {
      throw createError({ statusCode: 401, message: 'Incorrect email or password' })
    }

    await setUserSession(event, { user: {id: existingUser.id, email: existingUser.id}})
    return { user: existingUser }
  }
  throw createError({
    statusCode: 401,
    message: 'The user does not exist'
  })
})
