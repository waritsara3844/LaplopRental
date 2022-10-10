import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';


export const useCounterStore = defineStore('database', {
  state: () => ({
    counter: 0
  }),

  getters: {
    doubleCount (state) {
      return state.counter * 2
    }
  },

  actions: {
    increment () {
      this.counter++
    }
  }
})
