<template>
  <div class="py-12">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold mb-8">Upcoming Events at OFALD</h1>

        <div class="prose prose-lg max-w-none mb-8">
          <p class="text-lg text-gray-700 mb-6">
            Stay updated with our upcoming events, awareness campaigns, training sessions, and
            community activities. We regularly host events to raise awareness, provide support, and
            bring our community together.
          </p>
        </div>

        <!-- Events from Nuxt Content -->
        <section class="mb-12">
          <h2 class="text-3xl font-bold mb-6">Upcoming Events</h2>
          <div v-if="events.length > 0" class="space-y-6">
            <UiCard v-for="event in events" :key="event._path" class="hover:shadow-lg transition-shadow">
              <div class="flex flex-col md:flex-row gap-4">
                <div v-if="event.image" class="md:w-48 flex-shrink-0">
                  <img
                    :src="event.image"
                    :alt="event.title"
                    class="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div class="flex-grow">
                  <h3 class="text-2xl font-semibold mb-2">{{ event.title }}</h3>
                  <div class="flex flex-wrap gap-4 mb-3 text-sm text-gray-600">
                    <span v-if="event.date">
                      <strong>Date:</strong> {{ formatDate(event.date) }}
                    </span>
                    <span v-if="event.time">
                      <strong>Time:</strong> {{ event.time }}
                    </span>
                    <span v-if="event.location">
                      <strong>Location:</strong> {{ event.location }}
                    </span>
                  </div>
                  <p class="text-gray-700 mb-4">{{ event.description }}</p>
                  <NuxtLink
                    v-if="event._path"
                    :to="event._path"
                    class="text-primary-600 hover:text-primary-700 font-semibold"
                  >
                    Learn More →
                  </NuxtLink>
                </div>
              </div>
            </UiCard>
          </div>
          <div v-else class="text-center py-12 bg-gray-50 rounded-lg">
            <p class="text-gray-600 text-lg">No upcoming events at the moment.</p>
            <p class="text-gray-600 mt-2">Check back soon for updates!</p>
          </div>
        </section>

        <section class="mb-12">
          <h2 class="text-3xl font-bold mb-6">Event Categories</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <UiCard>
              <h3 class="text-xl font-semibold mb-3">Awareness Campaigns</h3>
              <p class="text-gray-700">
                Community-based events to raise awareness about autism and learning disabilities,
                reduce stigma, and promote understanding.
              </p>
            </UiCard>
            <UiCard>
              <h3 class="text-xl font-semibold mb-3">Training Sessions</h3>
              <p class="text-gray-700">
                Professional development and skills training for individuals interested in the care
                sector.
              </p>
            </UiCard>
            <UiCard>
              <h3 class="text-xl font-semibold mb-3">Health Outreach</h3>
              <p class="text-gray-700">
                Free health consultations and check-ups for people with autism and learning
                disabilities.
              </p>
            </UiCard>
            <UiCard>
              <h3 class="text-xl font-semibold mb-3">Community Gatherings</h3>
              <p class="text-gray-700">
                Social events and gatherings to bring together families, individuals, and supporters
                of OFALD.
              </p>
            </UiCard>
          </div>
        </section>

        <section class="mb-12 bg-primary-50 p-8 rounded-lg">
          <h2 class="text-3xl font-bold mb-6">Stay Connected</h2>
          <p class="text-lg text-gray-700 mb-4">
            Want to be notified about upcoming events? Contact us to be added to our mailing list or
            follow us for updates.
          </p>
          <div class="text-center mt-6">
            <NuxtLink to="/contact">
              <Button>Get Event Updates</Button>
            </NuxtLink>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: events } = await useAsyncData('events', () =>
  queryContent('/events').where({ _partial: false }).sort({ date: 1 }).find()
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
</script>

<script setup lang="ts">
useSeoMeta({
  title: 'Upcoming Events at OFALD - OFALD',
  description:
    'Stay updated with OFALD events, awareness campaigns, training sessions, and community activities.',
  ogTitle: 'Upcoming Events at OFALD - OFALD',
  ogDescription:
    'Stay updated with OFALD events, awareness campaigns, training sessions, and community activities.',
})
</script>
