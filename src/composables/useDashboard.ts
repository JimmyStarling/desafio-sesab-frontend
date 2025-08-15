import { onMounted, watch } from 'vue'
import { useDashboardStore } from '@/stores/dashboard'

export function useDashboard() {
  const store = useDashboardStore()

  onMounted(() => store.fetchUsers())
  watch(() => store.page, () => store.fetchUsers())

  return store
}