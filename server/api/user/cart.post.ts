export default defineEventHandler(async (event) => {
    const { product_id } = await readBody<{ product_id: string; quantity: number }>(event)
    const userRaw = await useStorage('user').getItem('user.json')
    const user = userRaw as { cart: { product_id: string; added_at: string }[]; }

    const existing = user!.cart.find((item: any) => item.product_id === product_id)

    if (!existing) {
        user.cart.push({
            product_id: product_id,
            added_at: new Date().toISOString()
        })
        await useStorage('user').setItem('user.json', user)
    }
    console.log('\ncart: ', user.cart)
    return { success: true }
})