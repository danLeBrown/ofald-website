<template>
  <header class="bg-white shadow-md sticky top-0 z-50">
    <nav class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <NuxtLink to="/" class="text-2xl font-bold text-accent font-heading focus:outline-none focus:ring-3 focus:ring-accent">
          OFALD
        </NuxtLink>
        
        <button
          @click="toggleMenu"
          class="md:hidden p-3 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-3 focus:ring-accent min-h-[44px] min-w-[44px]"
          :aria-label="isMenuOpen ? 'Close menu' : 'Open menu'"
          :aria-expanded="isMenuOpen"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              v-if="!isMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <ul
          :class="[
            'md:flex md:items-center md:space-x-6',
            isMenuOpen ? 'block absolute top-full left-0 right-0 bg-white shadow-lg p-4' : 'hidden',
          ]"
        >
          <li v-for="link in navLinks" :key="link.path">
            <NuxtLink
              :to="link.path"
              class="block py-3 px-4 text-gray-900 hover:text-accent hover:bg-gray-50 rounded-md focus:outline-none focus:ring-3 focus:ring-accent min-h-[44px] font-body text-base"
              @click="closeMenu"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const isMenuOpen = ref(false)

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/learning-disability', label: 'About Learning Disability' },
  { path: '/pathways', label: 'OFALD Pathways' },
  { path: '/team', label: 'OFALD Team' },
  { path: '/vacancies', label: 'Vacancies' },
  { path: '/events', label: 'Events' },
  { path: '/contact', label: 'Contact' },
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>
