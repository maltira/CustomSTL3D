import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    count: 0
  }),
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    },
    setCount(value) {
      this.count = value
    },
    async initialize() {
      try {
        const res = await fetch('/api/user')
        const user = await res.json()
        console.log(user)
        if (user?.cart && Array.isArray(user.cart)) {
          this.count = user.cart.length
        } else {
          this.count = 0
        }
      } catch (error) {
        console.error('Ошибка при инициализации корзины:', error)
      }
    },
  }
})