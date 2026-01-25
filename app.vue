<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
// Ensure no auto-playing media
onMounted(() => {
  // Disable any auto-playing videos or animations
  const videos = document.querySelectorAll('video')
  videos.forEach((video) => {
    video.autoplay = false
    video.muted = false
  })

  // Respect prefers-reduced-motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReducedMotion) {
    document.documentElement.classList.add('reduce-motion')
  }
})
</script>
