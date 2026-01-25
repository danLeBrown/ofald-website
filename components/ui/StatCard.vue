<template>
  <div class="text-center p-6 bg-white rounded-lg shadow-md border-2 border-gray-200">
    <div class="text-3xl md:text-4xl font-heading font-bold text-accent mb-3">{{ value }}</div>
    <div class="text-gray-900 font-body text-base">{{ label }}</div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  value: string | number
  label: string
}

defineProps<Props>()
</script>
