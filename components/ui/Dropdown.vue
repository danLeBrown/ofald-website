<template>
  <div class="relative" @keydown.escape="closeDropdown">
    <button
      :id="buttonId"
      type="button"
      :aria-expanded="isOpen"
      :aria-haspopup="true"
      :aria-controls="menuId"
      @click="toggleDropdown"
      @keydown.enter.prevent="toggleDropdown"
      @keydown.space.prevent="toggleDropdown"
      @keydown.down.prevent="openAndFocusFirst"
      :class="[
        'flex items-center gap-1 py-3 px-4 rounded-md focus:outline-none focus:ring-3 focus:ring-accent min-h-[44px] font-body text-base transition-colors',
        props.isActive ? 'text-accent bg-gray-50' : 'text-gray-900 hover:text-accent hover:bg-gray-50'
      ]"
    >
      <span>{{ label }}</span>
      <svg
        class="w-4 h-4 transition-transform"
        :class="{ 'rotate-180': isOpen }"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>

    <ul
      v-if="isOpen"
      :id="menuId"
      role="menu"
      :aria-labelledby="buttonId"
      class="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg py-2 min-w-[200px] z-50"
    >
      <li
        v-for="(item, index) in items"
        :key="item.path"
        role="none"
      >
        <NuxtLink
          :to="item.path"
          role="menuitem"
          :tabindex="index === 0 ? 0 : -1"
          @click="handleItemClick"
          @keydown.enter="handleItemClick"
          @keydown.space.prevent="handleItemClick"
          @keydown.down.prevent="focusNext(index)"
          @keydown.up.prevent="focusPrevious(index)"
          :class="[
            'block py-3 px-4 rounded-md focus:outline-none focus:ring-3 focus:ring-accent min-h-[44px] font-body text-base transition-colors',
            isItemActive(item.path) ? 'text-accent bg-gray-50' : 'text-gray-900 hover:text-accent hover:bg-gray-50'
          ]"
        >
          {{ item.label }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

interface DropdownItem {
  path: string
  label: string
}

const isItemActive = (path: string) => {
  if (path === '/') {
    return route.path === '/'
  }
  return route.path.startsWith(path)
}

interface Props {
  label: string
  items: DropdownItem[]
  isActive?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isActive: false
})

const isOpen = ref(false)
const buttonId = `dropdown-button-${Math.random().toString(36).substr(2, 9)}`
const menuId = `dropdown-menu-${Math.random().toString(36).substr(2, 9)}`

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const closeDropdown = () => {
  isOpen.value = false
}

const openAndFocusFirst = () => {
  if (!isOpen.value) {
    isOpen.value = true
    nextTick(() => {
      const firstItem = document.querySelector(`#${menuId} [role="menuitem"]`) as HTMLElement
      if (firstItem) {
        firstItem.focus()
      }
    })
  }
}

const focusNext = (currentIndex: number) => {
  const menu = document.getElementById(menuId)
  if (!menu) return
  
  const items = Array.from(menu.querySelectorAll('[role="menuitem"]')) as HTMLElement[]
  const nextIndex = currentIndex + 1
  if (nextIndex < items.length) {
    items[nextIndex].focus()
  }
}

const focusPrevious = (currentIndex: number) => {
  const menu = document.getElementById(menuId)
  if (!menu) return
  
  const items = Array.from(menu.querySelectorAll('[role="menuitem"]')) as HTMLElement[]
  const prevIndex = currentIndex - 1
  if (prevIndex >= 0) {
    items[prevIndex].focus()
  } else {
    closeDropdown()
    nextTick(() => {
      const button = document.getElementById(buttonId)
      if (button) {
        button.focus()
      }
    })
  }
}

const handleItemClick = () => {
  closeDropdown()
}

// Close dropdown when clicking outside
onMounted(() => {
  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement
    if (isOpen.value && !target.closest(`#${buttonId}`) && !target.closest(`#${menuId}`)) {
      closeDropdown()
    }
  }

  document.addEventListener('click', handleClickOutside)
  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
  })
})
</script>
