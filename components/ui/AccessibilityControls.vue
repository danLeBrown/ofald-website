<template>
  <div class="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
    <button
      @click="toggleCalmMode"
      :aria-pressed="calmMode"
      aria-label="Toggle calm mode (disable animations)"
      class="px-4 py-3 bg-white border-2 border-primary rounded-lg shadow-lg hover:bg-gray-50 active:bg-gray-100 focus:outline-none focus:ring-3 focus:ring-accent min-h-[48px] min-w-[180px]"
    >
      <span class="font-body text-base font-semibold">
        {{ calmMode ? '🎨 Calm Mode: ON' : '🎨 Calm Mode: OFF' }}
      </span>
    </button>
    <button
      @click="toggleHighContrast"
      :aria-pressed="highContrast"
      aria-label="Toggle high contrast mode"
      class="px-4 py-3 bg-white border-2 border-primary rounded-lg shadow-lg hover:bg-gray-50 active:bg-gray-100 focus:outline-none focus:ring-3 focus:ring-accent min-h-[48px] min-w-[180px]"
    >
      <span class="font-body text-base font-semibold">
        {{ highContrast ? '🔆 High Contrast: ON' : '🔆 High Contrast: OFF' }}
      </span>
    </button>
  </div>
</template>

<script setup lang="ts">
const { calmMode, highContrast, toggleCalmMode, toggleHighContrast } = useAccessibility()
</script>
