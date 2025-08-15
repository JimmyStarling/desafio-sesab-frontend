<template>
  <div style="max-width:420px;margin:40px auto;background:#fff;padding:24px;border-radius:12px">
    <h2>Login</h2>
    <form @submit.prevent="submit">
      <div><label>E-mail</label><input v-model="email" type="email" required autocomplete="email" /></div>
      <div><label>Senha</label><input v-model="password" type="password" required autocomplete="current-password" /></div>
      <div style="margin-top:12px;display:flex;gap:8px;align-items:center">
        <input id="remember" v-model="remember" type="checkbox" style="width:auto" />
        <label for="remember">Lembrar de mim</label>
      </div>
      <div style="margin-top:16px;display:flex;gap:8px">
        <button :disabled="loading">Entrar</button>
        <router-link to="/register"><button type="button">Cadastro</button></router-link>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const email = ref(''); const password = ref(''); const remember = ref(true); const loading = ref(false)
const auth = useAuthStore(); const router = useRouter()

const submit = async () => {
  loading.value = true
  try {
    await auth.login({ email: email.value, password: password.value })
    router.push('/dashboard')
  } finally {
    loading.value = false
  }
}
</script>
