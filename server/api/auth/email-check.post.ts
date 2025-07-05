import { z } from 'zod'

const bodySchema = z.object({
  email: z.string().email()
})

export default defineEventHandler(async (event) => {
  const { email } = await readValidatedBody(event, bodySchema.parse)
  const storage = useStorage('user')
  const users = (await storage.getItem('users.json')) as any[] || []

  const exists = users.some(user => user.email === email)

  return { exists } // true или false
})