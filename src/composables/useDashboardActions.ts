import { ref } from 'vue'
import api from '@/utils/api'

export function useDashboardActions(dashboard: any) {
  const showModal = ref(false)
  const modalTitle = ref('')
  const modalAction = ref<'detalhar' | 'editar' | 'novo' | 'excluir' | null>(null)
  const selectedUserId = ref<number | null>(null)
  const formData = ref<any>({
    name: '',
    email: '',
    cpf: '',
    password: '',
    password_confirmation: '',
    profile_id: 1,
    address: [{ street: '', city: '', state: '', zip: '' }]
  })
  const detailData = ref<any>(null)

  function resetForm() {
    formData.value = {
      name: '',
      email: '',
      cpf: '',
      password: '',
      password_confirmation: '',
      profile_id: 1,
      address: [{ street: '', city: '', state: '', zip: '' }]
    }
  }

  async function fetchUserDetail(id: number, forEdit = false) {
    const { data } = await api.get(`/users/${id}`)
    if (forEdit) {
      formData.value = { ...data, password: '', password_confirmation: '' }
    } else {
      detailData.value = data
    }
    showModal.value = true
  }

  function detalhar(user: { id: number }) {
    modalTitle.value = 'Detalhes do Usuário'
    modalAction.value = 'detalhar'
    selectedUserId.value = user.id
    fetchUserDetail(user.id)
  }

  function editar(user: { id: number }) {
    modalTitle.value = 'Editar Usuário'
    modalAction.value = 'editar'
    selectedUserId.value = user.id
    fetchUserDetail(user.id, true)
  }

  function excluir(user: { id: number }) {
    modalTitle.value = 'Excluir Usuário'
    modalAction.value = 'excluir'
    selectedUserId.value = user.id
    showModal.value = true
  }

  function novoUser() {
    modalTitle.value = 'Novo Usuário'
    modalAction.value = 'novo'
    resetForm()
    showModal.value = true
  }

  function closeModal() {
    showModal.value = false
  }

  async function confirmAction() {
    if (modalAction.value === 'editar' && selectedUserId.value) {
      await api.put(`/users/${selectedUserId.value}`, formData.value)
      dashboard.fetchUsuarios()
    }
    if (modalAction.value === 'novo') {
      await api.post(`/users`, formData.value)
      dashboard.fetchUsuarios()
    }
    if (modalAction.value === 'excluir' && selectedUserId.value) {
      await api.delete(`/users/${selectedUserId.value}`)
      dashboard.fetchUsuarios()
    }
    showModal.value = false
  }

  return {
    showModal,
    modalTitle,
    modalAction,
    selectedUserId,
    formData,
    detailData,
    detalhar,
    editar,
    excluir,
    novoUser,
    closeModal,
    confirmAction
  }
}
