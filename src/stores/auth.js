import axios from 'axios'
import {
  defineStore
} from 'pinia'

export const useAuthStore = defineStore('user', {
  state: () => ({
    token: localStorage.getItem('token') || null,
    role: localStorage.getItem('role') || null
  }),
  actions: {
    setUser(token, role) {
      this.token = token
      this.role = role
      localStorage.setItem('token', token)
      localStorage.setItem('role', role)
    },
    async logout() {
      try {
        if (this.token) {
          await axios.post('http://127.0.0.1:8000/api/logout', {}, {
            headers: {
              Authorization: `Bearer ${this.token}`
            }
          })
        }
      } catch (error) {
        console.log(error);
      } finally {
        this.token = null
        this.role = null
        localStorage.removeItem('token')
        localStorage.removeItem('role')
      }
    }
  }
})