import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    count: 1
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
    }
  }
})