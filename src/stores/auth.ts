import { defineStore } from 'pinia'
import api from '@/utils/api'

export interface AuthUser {
  id: number; name: string; email: string; cpf?: string; profile_id?: number
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token') || '',
    user: null as AuthUser | null,
  }),
  getters: {
    isAuthenticated: (s) => !!s.token,
  },
  actions: {
    async login(payload: { email: string; password: string }) {
      const { data } = await api.post('/login', payload)
      this.token = data.access_token
      this.user = data.user
      localStorage.setItem('token', this.token)
    },
    async register(payload: any) {
      const { data } = await api.post('/register', payload)
      this.token = data.access_token
      this.user = data.user
      localStorage.setItem('token', this.token)
    },
    logout() {
      this.token = ''; this.user = null; localStorage.removeItem('token')
    },
  },
})
