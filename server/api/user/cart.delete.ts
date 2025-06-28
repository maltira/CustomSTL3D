export default defineEventHandler(async (event) => {
    const { product_id } = await readBody<{ product_id: string }>(event)
    const userRaw = await useStorage('user').getItem('user.json')
    const user = userRaw as { cart: { product_id: string; added_at: string }[]; }

    user!.cart = user!.cart.filter((item: any) => item.product_id !== product_id)
    await useStorage('user').setItem('user.json', user)

    return { success: true }
})