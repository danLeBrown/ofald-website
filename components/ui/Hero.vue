<template>
  <section class="bg-gradient-to-r from-primary-800 to-primary-900 text-white py-20">
    <div class="container mx-auto px-4">
      <div class="max-w-3xl">
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
          {{ title }}
        </h1>
        <p class="text-lg md:text-xl mb-8 text-gray-100 font-body">
          {{ description }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4">
          <NuxtLink to="/contact">
            <UiButton>Get Involved</UiButton>
          </NuxtLink>
          <NuxtLink to="/about">
            <UiButton variant="secondary">Learn More</UiButton>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  title: string
  description: string
}

defineProps<Props>()
</script>
