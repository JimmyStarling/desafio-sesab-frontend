<template>
  <div style="max-width:720px;margin:40px auto;background:#fff;padding:24px;border-radius:12px">
    <h2>Cadastro</h2>
    <form @submit.prevent="submit">
      <div><label>Nome</label><input v-model="form.name" required /></div>
      <div><label>E-mail</label><input v-model="form.email" type="email" required /></div>
      <div><label>CPF</label><input v-model="form.cpf" required /></div>
      <div><label>Senha</label><input v-model="form.password" type="password" required /></div>
      <div><label>Confirmar senha</label><input v-model="form.password_confirmation" type="password" required /></div>
      <div><label>Perfil (profile_id)</label><input v-model.number="form.profile_id" type="number" required /></div>

      <fieldset style="margin-top:12px">
        <legend>Endereço</legend>
        <div><label>Rua</label><input v-model="address.street" required /></div>
        <div><label>Cidade</label><input v-model="address.city" required /></div>
        <div><label>UF</label><input v-model="address.state" maxlength="2" required /></div>
        <div><label>CEP</label><input v-model="address.zip" required /></div>
      </fieldset>

      <div style="margin-top:16px"><button :disabled="loading">Cadastrar</button></div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const auth = useAuthStore()
const loading = ref(false)

const form = reactive({
  name: '', email: '', cpf: '', password: '', password_confirmation: '', profile_id: 1,
})
const address = reactive({ street: '', city: '', state: '', zip: '' })

const submit = async () => {
  loading.value = true
  try {
    await auth.register({ ...form, address: [address] })
    router.push('/dashboard')
  } finally { loading.value = false }
}
</script>
