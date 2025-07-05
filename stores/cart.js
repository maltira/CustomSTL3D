import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    count: 0
  }),
  actions: {
    increment() {
      this.count++
      console.log('cart_count:', this.value)
    },
    decrement() {
      this.count--
      console.log('cart_count:', this.value)
    },
    setCount(value) {
      this.count = value
      console.log('cart_count:', this.value)
    },
  }
})