<template>
  <nav aria-label="Breadcrumb" class="mb-6">
    <ol class="flex flex-wrap items-center gap-2 font-body text-base">
      <li>
        <NuxtLink to="/" class="text-accent hover:underline focus:outline-none focus:ring-3 focus:ring-accent">
          Home
        </NuxtLink>
      </li>
      <li v-for="(crumb, index) in crumbs" :key="index" class="flex items-center">
        <span class="mx-2 text-gray-600" aria-hidden="true">/</span>
        <NuxtLink
          v-if="index < crumbs.length - 1"
          :to="crumb.path"
          class="text-accent hover:underline focus:outline-none focus:ring-3 focus:ring-accent"
        >
          {{ crumb.label }}
        </NuxtLink>
        <span v-else class="text-gray-900 font-semibold" aria-current="page">
          {{ crumb.label }}
        </span>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
interface Breadcrumb {
  label: string
  path: string
}

const route = useRoute()
const crumbs = computed<Breadcrumb[]>(() => {
  const pathSegments = route.path.split('/').filter(Boolean)
  const breadcrumbs: Breadcrumb[] = []

  let currentPath = ''
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`
    const label = segment
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')

    breadcrumbs.push({
      label,
      path: currentPath,
    })
  })

  return breadcrumbs
})
</script>
