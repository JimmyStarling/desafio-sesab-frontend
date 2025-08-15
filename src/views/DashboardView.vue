<template>
  <div class="dashboard-container">
    <h2>Dashboard</h2>
    <p>Você está autenticado.</p>

    <DashboardActions @filtrar="dashboard.filtrar" @novo="novoUser" />

    <div class="filter-section">
      <input v-model="dashboard.filters.nome" placeholder="Nome" />
      <input v-model="dashboard.filters.cpf" placeholder="CPF" />
      <input v-model="dashboard.filters.inicio" placeholder="Início" />
      <input v-model="dashboard.filters.fim" placeholder="Fim" />
    </div>

    <UsersTable
      :users="dashboard.users"
      :loading="dashboard.loading"
      @detalhar="detalhar"
      @editar="editar"
      @excluir="excluir"
    />

    <Pagination
      :page="dashboard.page"
      :totalPages="dashboard.totalPages"
      @changePage="dashboard.changePage"
    />

    <p v-if="dashboard.error" class="error">{{ dashboard.error }}</p>

    <Modal
      :show="showModal"
      :title="modalTitle"
      :showActions="modalAction !== 'detalhar'"
      @close="closeModal"
      @confirm="confirmAction"
    >
      <template v-if="modalAction === 'detalhar' && detailData">
        <pre>{{ detailData }}</pre>
      </template>

      <template v-else-if="modalAction === 'editar' || modalAction === 'novo'">
        <input v-model="formData.name" placeholder="Nome" />
        <input v-model="formData.email" placeholder="E-mail" />
        <input v-model="formData.cpf" placeholder="CPF" />
        <input v-model="formData.password" placeholder="Senha" type="password" />
        <input
          v-model="formData.password_confirmation"
          placeholder="Confirme a senha"
          type="password"
        />
        <input
          v-model.number="formData.profile_id"
          placeholder="ID Perfil"
          type="number"
        />
        <div v-for="(addr, index) in formData.address" :key="index">
          <input v-model="addr.street" placeholder="Rua" />
          <input v-model="addr.city" placeholder="Cidade" />
          <input v-model="addr.state" placeholder="Estado" />
          <input v-model="addr.zip" placeholder="CEP" />
        </div>
      </template>

      <template v-else-if="modalAction === 'excluir'">
        Tem certeza que deseja excluir o usuário {{ selectedUserId }}?
      </template>
    </Modal>
  </div>
</template>

<script lang="ts" setup>
import { useDashboard } from '@/composables/useDashboard'
import { useDashboardActions } from '@/composables/useDashboardActions'
import DashboardActions from '@/components/Dashboard/DashboardActions.vue'
import UsersTable from '@/components/Dashboard/UsersTable.vue'
import Pagination from '@/components/Dashboard/Pagination.vue'
import Modal from '@/components/Dashboard/Modal.vue'

const dashboard = useDashboard()
const {
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
} = useDashboardActions(dashboard)
</script>