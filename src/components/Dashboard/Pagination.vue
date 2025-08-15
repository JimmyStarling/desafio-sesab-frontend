<template>
  <div class="pagination">
    <button :disabled="page === 1" @click="$emit('changePage', page - 1)">Anterior</button>
    <span>Página {{ page }} de {{ totalPages }}</span>
    <button :disabled="page === totalPages" @click="$emit('changePage', page + 1)">Próxima</button>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  page: number
  totalPages: number
}>()
</script>