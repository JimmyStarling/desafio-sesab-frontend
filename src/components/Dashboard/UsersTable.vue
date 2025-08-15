<template>
  <table class="users-table">
    <thead>
      <tr>
        <th>Id</th>
        <th>Data cadastro</th>
        <th>Nome</th>
        <th>CPF</th>
        <th>e-mail</th>
        <th>Perfil</th>
        <th>Ação</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users" :key="user.id">
        <td>{{ user.id }}</td>
        <td>{{ formatarData(user.created_at) }}</td>
        <td>{{ user.nome || user.name }}</td>
        <td>{{ user.cpf }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.profile.name }}</td>
        <td>
          <button @click="$emit('detalhar', user)">Detalhar</button>
          <button @click="$emit('editar', user)">Editar</button>
          <button @click="$emit('excluir', user)">Excluir</button>
        </td>
      </tr>
      <tr v-if="!users.length && !loading">
        <td colspan="7">Nenhum usuário encontrado.</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
interface Profile {
  name: string
}

interface Users {
  id: number
  name: string
  email: string
  cpf: string
  profile: Profile
  created_at: string
  address: any[]
}

defineProps<{
  users: Users[]
  loading: boolean
}>()

const formatarData = (dataIso?: string) => {
  if (!dataIso) return ''
  const [ano, mes, dia] = dataIso.split('T')[0].split('-')
  return `${dia}/${mes}/${ano.slice(2)}`
}
</script>