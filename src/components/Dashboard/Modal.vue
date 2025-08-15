<template>
  <div v-if="show" class="modal-overlay">
    <div class="modal-container">
      <header>
        <h3>{{ title }}</h3>
        <button @click="$emit('close')">✖</button>
      </header>
      <main>
        <slot />
      </main>
      <footer v-if="showActions">
        <button @click="$emit('close')">Cancelar</button>
        <button @click="$emit('confirm')">Confirmar</button>
      </footer>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  show: boolean
  title: string
  showActions?: boolean
}>()
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-container {
  background: #fff;
  padding: 1rem;
  border-radius: 8px;
  width: 500px;
  max-width: 90%;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
footer {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
}
</style>
