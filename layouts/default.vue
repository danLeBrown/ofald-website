<template>
  <div class="min-h-screen flex flex-col">
    <a href="#main-content" class="skip-link">Skip to main content</a>
    <LayoutHeader />
    <main id="main-content" class="flex-grow">
      <slot />
    </main>
    <LayoutFooter />
    <UiAccessibilityControls />
  </div>
</template>

<script setup lang="ts">
// Default layout wrapper
</script>
