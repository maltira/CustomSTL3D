export default defineEventHandler(async (event) => {
    const body = await readBody<{ product_id: string }>(event)
    const userRaw = await useStorage('user').getItem('user.json')
    
    const user = userRaw as { wishlist: string[] }

    if (!user!.wishlist.includes(body.product_id)) {
        user!.wishlist.push(body.product_id)
        await useStorage('user').setItem('user.json', user)
    }
    console.log('\nwishlist: ', user.wishlist)
    return { success: true }
})