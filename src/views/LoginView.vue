<template>
  <div class="h-screen flex flex-col justify-center items-center bg-white p-6 rounded-xl shadow">
    <h2 class="text-3xl font-bold mb-6">Login</h2>
    <form @submit.prevent="submit" class="space-y-4">
      <div>
        <label class="block mb-1 text-sm font-medium text-gray-700">E-mail</label>
        <input
          v-model="email"
          type="email"
          required
          autocomplete="email"
          class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease-in-out focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
        />
      </div>
      <div>
        <label class="block mb-1 text-sm font-medium text-gray-700">Senha</label>
        <input
          v-model="password"
          type="password"
          required
          autocomplete="current-password"
          class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease-in-out focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
        />
      </div>
      <div class="flex items-center gap-2 mt-3">
        <input
          id="remember"
          v-model="remember"
          type="checkbox"
          class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
        <label for="remember" class="text-sm text-gray-700">Lembrar de mim</label>
      </div>
      <div class="flex gap-3 mt-4">
        <button
          :disabled="loading"
          class="px-8 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition disabled:opacity-50"
        >
          Entrar
        </button>
        <router-link to="/register">
          <button
            type="button"
            class="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition"
          >
            Cadastro
          </button>
        </router-link>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const email = ref('')
const password = ref('')
const remember = ref(true)
const loading = ref(false)
const auth = useAuthStore()
const router = useRouter()

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
