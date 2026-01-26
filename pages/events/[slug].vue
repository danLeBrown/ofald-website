<template>
  <div class="py-12">
    <div class="container mx-auto px-4">
      <div class="max-w-readable mx-auto">
        <UiBreadcrumbs />

        <article v-if="event" class="max-w-none">
          <h1 class="text-4xl font-bold mb-4 text-accent font-heading">
            {{ event.title }}
          </h1>

          <div class="flex flex-wrap gap-4 mb-8 text-gray-900 font-body text-base">
            <span v-if="event.date">
              <strong>Date:</strong> {{ formatDate(event.date) }}
            </span>
            <span v-if="event.time">
              <strong>Time:</strong> {{ event.time }}
            </span>
            <span v-if="event.location">
              <strong>Location:</strong> {{ event.location }}
            </span>
            <span v-if="event.category">
              <strong>Category:</strong> {{ event.category }}
            </span>
          </div>

          <div v-if="event.image" class="mb-8">
            <img :src="event.image" :alt="event.title || 'Event image'" class="w-full rounded-lg">
          </div>

          <div v-if="event.description" class="mb-8">
            <p class="text-lg text-gray-900 font-body max-w-readable">
              {{ event.description }}
            </p>
          </div>

          <ContentRenderer :value="event" />

          <div class="mt-12 bg-primary-50 p-8 rounded-lg border-l-4 border-accent">
            <h2 class="text-2xl font-semibold mb-4 font-heading">
              Interested in This Event?
            </h2>
            <p class="text-gray-900 mb-4 font-body text-base">
              Contact us to register or get more information about this event.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <NuxtLink to="/contact">
                <UiButton>Contact Us</UiButton>
              </NuxtLink>
              <a href="tel:+2347031149191">
                <UiButton variant="secondary">Call Us</UiButton>
              </a>
            </div>
          </div>
        </article>

        <div v-else class="text-center py-12">
          <p class="text-gray-900 text-lg font-body">
            Event not found.
          </p>
          <NuxtLink to="/events" class="text-accent hover:text-accent-light mt-4 inline-block font-body text-base focus:outline-none focus:ring-3 focus:ring-accent">
            View All Events
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const slug = Array.isArray(route.params.slug) ? route.params.slug.join('/') : route.params.slug
const { data: event } = await useAsyncData(`event-${slug}`, () =>
  queryContent('/events').where({ _path: `/events/${slug}` }).findOne()
)

const formatDate = (dateString: string | undefined) => {
  if (!dateString) { return '' }
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

useSeoMeta({
  title: event.value ? `${event.value.title} - OFALD Events` : 'Event - OFALD',
  description: event.value?.description || 'OFALD Event',
  ogTitle: event.value?.title || 'OFALD Event',
  ogDescription: event.value?.description || 'OFALD Event',
  ogImage: event.value?.image || ''
})
</script>
