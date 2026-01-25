<template>
  <div class="py-12">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <NuxtLink
          to="/events"
          class="text-primary-600 hover:text-primary-700 mb-6 inline-block"
        >
          ← Back to Events
        </NuxtLink>

        <article v-if="event" class="prose prose-lg max-w-none">
          <h1 class="text-4xl font-bold mb-4">{{ event.title }}</h1>

          <div class="flex flex-wrap gap-4 mb-8 text-gray-600">
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
            <img :src="event.image" :alt="event.title" class="w-full rounded-lg" />
          </div>

          <div v-if="event.description" class="mb-8">
            <p class="text-xl text-gray-700">{{ event.description }}</p>
          </div>

          <ContentRenderer :value="event" />

          <div class="mt-12 bg-primary-50 p-8 rounded-lg">
            <h2 class="text-2xl font-semibold mb-4">Interested in This Event?</h2>
            <p class="text-gray-700 mb-4">
              Contact us to register or get more information about this event.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <NuxtLink to="/contact">
                <Button>Contact Us</Button>
              </NuxtLink>
              <a href="tel:+2347031149191">
                <Button variant="secondary">Call Us</Button>
              </a>
            </div>
          </div>
        </article>

        <div v-else class="text-center py-12">
          <p class="text-gray-600 text-lg">Event not found.</p>
          <NuxtLink to="/events" class="text-primary-600 hover:text-primary-700 mt-4 inline-block">
            View All Events
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { data: event } = await useAsyncData(`event-${route.params.slug}`, () =>
  queryContent('/events').where({ _path: `/events/${route.params.slug}` }).findOne()
)

const formatDate = (dateString: string) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

useSeoMeta({
  title: event.value ? `${event.value.title} - OFALD Events` : 'Event - OFALD',
  description: event.value?.description || 'OFALD Event',
  ogTitle: event.value?.title || 'OFALD Event',
  ogDescription: event.value?.description || 'OFALD Event',
  ogImage: event.value?.image || '',
})
</script>
