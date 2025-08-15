import { defineStore } from 'pinia'
import api from '@/utils/api'

interface Profile {
  id: number
  name: string
}

interface Address {
  id: number
  street: string
  city: string
  state: string
  zip: string
}

interface User {
  id: number
  nome: string
  email: string
  cpf: string
  profile: Profile
  created_at: string
  address: Address[]
}

interface Filters {
  nome: string
  cpf: string
  inicio: string
  fim: string
}

export const useDashboardStore = defineStore('dashboard', {
  state: () => ({
    users: [] as User[],
    page: 1,
    totalPages: 1,
    loading: false,
    error: null as string | null,
    filters: {
      nome: '',
      cpf: '',
      inicio: '',
      fim: ''
    } as Filters
  }),
  actions: {
    async fetchUsers() {
      this.loading = true
      this.error = null
      try {
        const params = {
          page: this.page,
          name: this.filters.nome || undefined,
          cpf: this.filters.cpf || undefined,
          inicio: this.filters.inicio || undefined,
          fim: this.filters.fim || undefined
        }
        const { data } = await api.get('/users', { params })

        this.users = (data.data || []).map((u: any) => ({
          id: u.id,
          nome: u.name,
          email: u.email,
          cpf: u.cpf,
          profile: u.profile,
          created_at: u.created_at,
          address: u.address || []
        }))

        this.totalPages = data.last_page || 1
      } catch (err: any) {
        this.error = err.message || 'Erro ao carregar usuários'
      } finally {
        this.loading = false
      }
    },
    changePage(newPage: number) {
      if (newPage >= 1 && newPage <= this.totalPages) {
        this.page = newPage
        this.fetchUsers()
      }
    },
    filtrar() {
      this.page = 1
      this.fetchUsers()
    }
  }
})
