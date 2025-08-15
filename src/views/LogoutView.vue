<template>
    <div class="logout-view">
        <h1>Você acabou de sair</h1>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
    setTimeout(() => {
        router.replace({ name: 'LoginView' })
    }, 1500) // 1.5 seconds delay
})
</script>

<style scoped>
.logout-view {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-family: sans-serif;
}
</style>