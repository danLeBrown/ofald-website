<template>
  <button
    :type="type"
    :class="[
      'px-6 py-3 rounded-lg font-semibold transition-colors',
      variant === 'primary'
        ? 'bg-primary text-white hover:bg-primary-700'
        : 'bg-gray-200 text-gray-800 hover:bg-gray-300',
      disabled && 'opacity-50 cursor-not-allowed',
    ]"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
interface Props {
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary'
  disabled?: boolean
}

withDefaults(defineProps<Props>(), {
  type: 'button',
  variant: 'primary',
  disabled: false,
})
</script>
