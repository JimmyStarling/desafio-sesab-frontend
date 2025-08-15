<template>
  <div class="dashboard-actions">
    <button @click="logout" class="logout-btn">Sair</button>
    <button @click="$emit('novo')" class="novo-btn">Novo</button>
    <button @click="$emit('filtrar')" class="filtrar-btn">Filtrar</button>
  </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const router = useRouter()
const auth = useAuthStore()

function logout() {
  auth.logout()
  router.push({ name: 'LogoutView' })
}
</script>
