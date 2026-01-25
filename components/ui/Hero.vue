<template>
  <section class="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
    <div class="container mx-auto px-4">
      <div class="max-w-3xl">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">
          {{ title }}
        </h1>
        <p class="text-xl mb-8 text-gray-100">
          {{ description }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4">
          <NuxtLink to="/contact">
            <Button>Get Involved</Button>
          </NuxtLink>
          <NuxtLink to="/about">
            <Button variant="secondary">Learn More</Button>
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
