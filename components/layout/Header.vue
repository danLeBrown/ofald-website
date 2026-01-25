<template>
  <header class="bg-white shadow-md sticky top-0 z-50">
    <nav class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between gap-4">
        <NuxtLink
          to="/"
          class="flex-shrink-0 focus:outline-none focus:ring-3 focus:ring-accent"
          aria-label="OFALD Home"
        >
          <img
            src="/images/logo-navbar.png"
            alt="Olubukola Foundation for Autism and Learning Disability logo - four interlocking puzzle pieces"
            class="h-12 w-auto max-w-[150px]"
          />
        </NuxtLink>
        
        <button
          @click="toggleMenu"
          class="md:hidden p-3 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-3 focus:ring-accent min-h-[44px] min-w-[44px] flex-shrink-0"
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

        <!-- Desktop Navigation -->
        <ul
          class="hidden md:flex md:items-center md:gap-2 lg:gap-4 flex-1 justify-end"
        >
          <li>
            <NuxtLink
              to="/"
              :class="[
                'block py-3 px-4 rounded-md focus:outline-none focus:ring-3 focus:ring-accent min-h-[44px] font-body text-base whitespace-nowrap transition-colors',
                isActive('/') ? 'text-accent bg-gray-50' : 'text-gray-900 hover:text-accent hover:bg-gray-50'
              ]"
            >
              Home
            </NuxtLink>
          </li>
          <li>
            <UiDropdown
              label="About"
              :items="aboutLinks"
              :is-active="hasActiveChild(aboutLinks)"
            />
          </li>
          <li>
            <UiDropdown
              label="OFALD"
              :items="ofaldLinks"
              :is-active="hasActiveChild(ofaldLinks)"
            />
          </li>
          <li>
            <NuxtLink
              to="/vacancies"
              :class="[
                'block py-3 px-4 rounded-md focus:outline-none focus:ring-3 focus:ring-accent min-h-[44px] font-body text-base whitespace-nowrap transition-colors',
                isActive('/vacancies') ? 'text-accent bg-gray-50' : 'text-gray-900 hover:text-accent hover:bg-gray-50'
              ]"
            >
              Vacancies
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/events"
              :class="[
                'block py-3 px-4 rounded-md focus:outline-none focus:ring-3 focus:ring-accent min-h-[44px] font-body text-base whitespace-nowrap transition-colors',
                isActive('/events') ? 'text-accent bg-gray-50' : 'text-gray-900 hover:text-accent hover:bg-gray-50'
              ]"
            >
              Events
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/contact"
              :class="[
                'block py-3 px-4 rounded-md focus:outline-none focus:ring-3 focus:ring-accent min-h-[44px] font-body text-base whitespace-nowrap transition-colors',
                isActive('/contact') ? 'text-accent bg-gray-50' : 'text-gray-900 hover:text-accent hover:bg-gray-50'
              ]"
            >
              Contact
            </NuxtLink>
          </li>
        </ul>

        <!-- Mobile Navigation -->
        <ul
          :class="[
            'md:hidden',
            isMenuOpen ? 'block absolute top-full left-0 right-0 bg-white shadow-lg p-4 z-50' : 'hidden',
          ]"
        >
          <li>
            <NuxtLink
              to="/"
              :class="[
                'block py-3 px-4 rounded-md focus:outline-none focus:ring-3 focus:ring-accent min-h-[44px] font-body text-base transition-colors',
                isActive('/') ? 'text-accent bg-gray-50' : 'text-gray-900 hover:text-accent hover:bg-gray-50'
              ]"
              @click="closeMenu"
            >
              Home
            </NuxtLink>
          </li>
          <li>
            <div class="py-3 px-4 font-body text-base font-semibold text-gray-900">
              About
            </div>
            <ul class="pl-4">
              <li v-for="link in aboutLinks" :key="link.path">
                <NuxtLink
                  :to="link.path"
                  :class="[
                    'block py-2 px-4 rounded-md focus:outline-none focus:ring-3 focus:ring-accent min-h-[44px] font-body text-base transition-colors',
                    isActive(link.path) ? 'text-accent bg-gray-50' : 'text-gray-700 hover:text-accent hover:bg-gray-50'
                  ]"
                  @click="closeMenu"
                >
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>
          </li>
          <li>
            <div class="py-3 px-4 font-body text-base font-semibold text-gray-900">
              OFALD
            </div>
            <ul class="pl-4">
              <li v-for="link in ofaldLinks" :key="link.path">
                <NuxtLink
                  :to="link.path"
                  :class="[
                    'block py-2 px-4 rounded-md focus:outline-none focus:ring-3 focus:ring-accent min-h-[44px] font-body text-base transition-colors',
                    isActive(link.path) ? 'text-accent bg-gray-50' : 'text-gray-700 hover:text-accent hover:bg-gray-50'
                  ]"
                  @click="closeMenu"
                >
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>
          </li>
          <li>
            <NuxtLink
              to="/vacancies"
              :class="[
                'block py-3 px-4 rounded-md focus:outline-none focus:ring-3 focus:ring-accent min-h-[44px] font-body text-base transition-colors',
                isActive('/vacancies') ? 'text-accent bg-gray-50' : 'text-gray-900 hover:text-accent hover:bg-gray-50'
              ]"
              @click="closeMenu"
            >
              Vacancies
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/events"
              :class="[
                'block py-3 px-4 rounded-md focus:outline-none focus:ring-3 focus:ring-accent min-h-[44px] font-body text-base transition-colors',
                isActive('/events') ? 'text-accent bg-gray-50' : 'text-gray-900 hover:text-accent hover:bg-gray-50'
              ]"
              @click="closeMenu"
            >
              Events
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/contact"
              :class="[
                'block py-3 px-4 rounded-md focus:outline-none focus:ring-3 focus:ring-accent min-h-[44px] font-body text-base transition-colors',
                isActive('/contact') ? 'text-accent bg-gray-50' : 'text-gray-900 hover:text-accent hover:bg-gray-50'
              ]"
              @click="closeMenu"
            >
              Contact
            </NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const route = useRoute()
const isMenuOpen = ref(false)

const aboutLinks = [
  { path: '/about', label: 'About Us' },
  { path: '/learning-disability', label: 'About Learning Disability' },
]

const ofaldLinks = [
  { path: '/pathways', label: 'OFALD Pathways' },
  { path: '/team', label: 'OFALD Team' },
]

const isActive = (path: string) => {
  if (path === '/') {
    return route.path === '/'
  }
  return route.path.startsWith(path)
}

const hasActiveChild = (links: Array<{ path: string; label: string }>) => {
  return links.some(link => isActive(link.path))
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>
