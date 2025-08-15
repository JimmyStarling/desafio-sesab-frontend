import axios from 'axios'
import router from '@/router'
import { useAuthStore } from '@/stores/auth'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
})

api.interceptors.request.use((config) => {
  const auth = useAuthStore()
  if (auth?.token) config.headers.Authorization = `Bearer ${auth.token}`
  return config
})

api.interceptors.response.use(r => r, (error) => {
  if (error.response?.status === 401) {
    const auth = useAuthStore()
    auth.logout()
    router.replace('/login')
  }
  return Promise.reject(error)
})

export default api