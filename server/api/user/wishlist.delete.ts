export default defineEventHandler(async (event) => {
    const { product_id } = await readBody<{ product_id: string }>(event)
    const userRaw = await useStorage('user').getItem('user.json')
    const user = userRaw as { wishlist: string[] }

    user!.wishlist = user!.wishlist.filter((id: string) => id !== product_id)
    await useStorage('user').setItem('user.json', user)

    return { success: true }
})