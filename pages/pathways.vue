<template>
  <div class="py-12">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold mb-8">OFALD Pathways</h1>

        <div class="prose prose-lg max-w-none mb-8">
          <p class="text-lg text-gray-700 mb-6">
            OFALD Pathways is our comprehensive program designed to support young people with
            autism and learning disabilities on their journey to independence and fulfillment.
          </p>
        </div>

        <section class="mb-12">
          <h2 class="text-3xl font-bold mb-6">Our Pathway Programs</h2>

          <div class="space-y-8">
            <UiCard>
              <h3 class="text-2xl font-semibold mb-4">Educational Pathway</h3>
              <p class="text-gray-700 mb-4">
                Our specialized educational programs are designed to provide quality education
                tailored to the unique needs of each individual. We focus on:
              </p>
              <ul class="list-disc list-inside space-y-2 text-gray-700">
                <li>Individualized learning plans</li>
                <li>Specialized teaching methods</li>
                <li>Inclusive classroom environments</li>
                <li>Life skills development</li>
              </ul>
            </UiCard>

            <UiCard>
              <h3 class="text-2xl font-semibold mb-4">Skills Acquisition Pathway</h3>
              <p class="text-gray-700 mb-4">
                Practical training programs that prepare young people for independent living and
                employment:
              </p>
              <ul class="list-disc list-inside space-y-2 text-gray-700">
                <li>Pottery and crafts</li>
                <li>Painting and art</li>
                <li>Cooking and nutrition</li>
                <li>Dancing and music</li>
                <li>Other vocational skills</li>
              </ul>
            </UiCard>

            <UiCard>
              <h3 class="text-2xl font-semibold mb-4">Healthcare Pathway</h3>
              <p class="text-gray-700 mb-4">
                Comprehensive healthcare support including:
              </p>
              <ul class="list-disc list-inside space-y-2 text-gray-700">
                <li>Free consultations with specialists</li>
                <li>Bi-annual health checks</li>
                <li>Mental health support for families</li>
                <li>Access to speech and language therapy</li>
                <li>Physiotherapy services</li>
              </ul>
            </UiCard>

            <UiCard>
              <h3 class="text-2xl font-semibold mb-4">Employment Pathway</h3>
              <p class="text-gray-700 mb-4">
                Supporting individuals in finding meaningful employment:
              </p>
              <ul class="list-disc list-inside space-y-2 text-gray-700">
                <li>Job placement assistance</li>
                <li>Workplace support and accommodations</li>
                <li>Career development programs</li>
                <li>Partnerships with inclusive employers</li>
              </ul>
            </UiCard>
          </div>
        </section>

        <section class="mb-12 bg-gray-50 p-8 rounded-lg">
          <h2 class="text-3xl font-bold mb-6">Who Can Access Our Pathways?</h2>
          <p class="text-lg text-gray-700 mb-4">
            Our pathways are designed for:
          </p>
          <ul class="list-disc list-inside space-y-2 text-gray-700">
            <li>Young people with learning disabilities aged 14-21</li>
            <li>Young people with autism aged 14-21</li>
            <li>Parents and families seeking support</li>
            <li>Individuals interested in care career pathways</li>
          </ul>
        </section>

        <section class="mb-12">
          <h2 class="text-3xl font-bold mb-6">How to Get Started</h2>
          <div class="space-y-4 text-gray-700">
            <p class="text-lg">
              If you or someone you know could benefit from our pathways, we encourage you to reach
              out to us. Our team will work with you to determine the best pathway for your needs
              and create a personalized support plan.
            </p>
            <p class="text-lg">
              All our programs are designed to be accessible and inclusive, with many services
              offered free of charge or at highly subsidized rates.
            </p>
          </div>
        </section>

        <div class="text-center mt-12">
          <NuxtLink to="/contact">
            <Button>Get Started with OFALD Pathways</Button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'OFALD Pathways - OFALD',
  description:
    'Discover our comprehensive pathway programs designed to support young people with autism and learning disabilities.',
  ogTitle: 'OFALD Pathways - OFALD',
  ogDescription:
    'Discover our comprehensive pathway programs designed to support young people with autism and learning disabilities.',
})
</script>
