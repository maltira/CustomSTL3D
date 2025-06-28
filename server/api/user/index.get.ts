export default defineEventHandler(async () => {
  const data = await useStorage('user').getItem('user.json')  // file-based runtime storage
  // console.log('[API /api/user] user =', data)
  return data
})