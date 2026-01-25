<template>
  <button
    :type="type"
    :class="[
      'px-6 py-3 rounded-lg font-heading font-semibold min-h-[48px] min-w-[120px] focus:outline-none focus:ring-3 focus:ring-accent focus:ring-offset-2',
      variant === 'primary'
        ? 'bg-primary text-white hover:bg-primary-700 active:bg-primary-900'
        : 'bg-gray-200 text-gray-900 hover:bg-gray-300 active:bg-gray-400 border-2 border-gray-400',
      disabled && 'opacity-50 cursor-not-allowed',
    ]"
    :disabled="disabled"
    :aria-disabled="disabled"
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
