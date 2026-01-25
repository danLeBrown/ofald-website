<template>
  <div class="py-12">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold mb-8 text-accent">Understanding Autism and Learning Disability</h1>

        <div class="prose prose-lg max-w-none mb-8">
          <p class="text-lg text-gray-700 mb-6">
            Understanding autism and learning disabilities is crucial for creating an inclusive and
            supportive society. At OFALD, we are committed to raising awareness and providing
            accurate information about these conditions.
          </p>
        </div>

        <section class="mb-12">
          <h2 class="text-3xl font-bold mb-6 text-accent">What is a Learning Disability?</h2>
          <p class="text-lg text-gray-700 mb-4">
            A learning disability is a reduced intellectual ability and difficulty with everyday
            activities. It affects someone for their whole life and can impact how they learn,
            communicate, and interact with others.
          </p>
          <p class="text-lg text-gray-700 mb-4">
            People with learning disabilities may have difficulty with:
          </p>
          <ul class="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Understanding new or complex information</li>
            <li>Learning new skills</li>
            <li>Coping independently</li>
            <li>Social interactions</li>
          </ul>
        </section>

        <section class="mb-12">
          <h2 class="text-3xl font-bold mb-6 text-accent">What is Autism?</h2>
          <p class="text-lg text-gray-700 mb-4">
            Autism, or Autism Spectrum Disorder (ASD), is a developmental disorder that affects
            communication, social interaction, and behavior. It is called a "spectrum" disorder
            because it affects people in different ways and to varying degrees.
          </p>
          <p class="text-lg text-gray-700 mb-4">Common characteristics include:</p>
          <ul class="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Difficulties with social communication and interaction</li>
            <li>Repetitive behaviors and restricted interests</li>
            <li>Sensory sensitivities</li>
            <li>Unique strengths and abilities</li>
          </ul>
        </section>

        <section class="mb-12">
          <h2 class="text-3xl font-bold mb-6 text-accent">Types of Learning Disabilities</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <UiCard>
              <h3 class="text-xl font-semibold mb-3">Down Syndrome</h3>
              <p class="text-gray-700">
                A genetic condition caused by an extra chromosome 21, leading to developmental
                delays and intellectual disability.
              </p>
            </UiCard>
            <UiCard>
              <h3 class="text-xl font-semibold mb-3">Cerebral Palsy</h3>
              <p class="text-gray-700">
                A group of disorders affecting movement, muscle tone, and posture, often caused by
                brain damage before or during birth.
              </p>
            </UiCard>
            <UiCard>
              <h3 class="text-xl font-semibold mb-3">Epilepsy</h3>
              <p class="text-gray-700">
                A neurological disorder characterized by recurrent seizures, which can affect
                learning and development.
              </p>
            </UiCard>
            <UiCard>
              <h3 class="text-xl font-semibold mb-3">Other Conditions</h3>
              <p class="text-gray-700">
                Including Angelman Syndrome, Tourette's Syndrome, and other developmental
                conditions.
              </p>
            </UiCard>
          </div>
        </section>

        <section class="mb-12 bg-primary-50 p-8 rounded-lg border-l-4 border-accent">
          <h2 class="text-3xl font-bold mb-6 text-accent">How OFALD Helps</h2>
          <p class="text-lg text-gray-700 mb-4">
            At OFALD, we provide comprehensive support for individuals with autism and learning
            disabilities:
          </p>
          <ul class="list-disc list-inside space-y-2 text-gray-700">
            <li>Specialized educational programs tailored to individual needs</li>
            <li>Skills acquisition training for independence</li>
            <li>Healthcare support and consultations</li>
            <li>Community awareness campaigns to reduce stigma</li>
            <li>Research initiatives to improve quality of life</li>
          </ul>
        </section>

        <div class="text-center mt-12">
          <NuxtLink to="/contact">
            <UiButton>Contact Us for More Information</UiButton>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'About Learning Disability - OFALD',
  description:
    'Learn about autism and learning disabilities. Understanding these conditions is key to creating an inclusive society.',
  ogTitle: 'About Learning Disability - OFALD',
  ogDescription:
    'Learn about autism and learning disabilities. Understanding these conditions is key to creating an inclusive society.',
})
</script>
