<template>
  <div class="text-center p-6 bg-white rounded-lg shadow-md">
    <div class="text-4xl font-bold text-accent mb-2">{{ value }}</div>
    <div class="text-gray-600">{{ label }}</div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  value: string | number
  label: string
}

defineProps<Props>()
</script>
