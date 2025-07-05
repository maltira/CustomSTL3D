export interface User {
  id: string
  email: string
  password: string
  registered_at: string
  is_admin: boolean
  wishlist: string[]
  cart: {
    product_id: string
    added_at: string
  }[]
  purchases: {
    product_id: string
    price: string
    currency: string
    purchased_at: string
    download_url: string
  }[]
}