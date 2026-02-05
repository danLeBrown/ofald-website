<template>
  <div class="py-12">
    <div class="container mx-auto px-4">
      <div class="max-w-readable mx-auto">
        <UiBreadcrumbs />
        <h1 class="text-4xl font-bold mb-8 text-accent">
          Understanding Autism and Learning Disability
        </h1>

        <div class="mb-8">
          <p class="text-base text-gray-900 mb-6 font-body max-w-readable">
            Understanding autism and learning disabilities is crucial for creating an inclusive and
            supportive society. At OFALD, we are committed to raising awareness and providing
            accurate information about these conditions.
          </p>
        </div>

        <section class="mb-12">
          <h2 class="text-3xl font-bold mb-6 text-accent">
            What is a Learning Disability?
          </h2>
          <p class="text-base text-gray-900 mb-4 font-body max-w-readable">
            A learning disability is a reduced intellectual ability and difficulty with everyday
            activities. It affects someone for their whole life and can impact how they learn,
            communicate, and interact with others.
          </p>
          <p class="text-base text-gray-900 mb-4 font-body max-w-readable">
            People with learning disabilities may have difficulty with:
          </p>
          <ul class="list-disc list-inside space-y-3 text-gray-900 mb-4 font-body text-base">
            <li>Understanding new or complex information</li>
            <li>Learning new skills</li>
            <li>Coping independently</li>
            <li>Social interactions</li>
          </ul>
        </section>

        <section class="mb-12">
          <h2 class="text-3xl font-bold mb-6 text-accent">
            What is Autism?
          </h2>
          <p class="text-base text-gray-900 mb-4 font-body max-w-readable">
            Autism, or Autism Spectrum Disorder (ASD), is a developmental disorder that affects
            communication, social interaction, and behavior. It is called a "spectrum" disorder
            because it affects people in different ways and to varying degrees.
          </p>
          <p class="text-base text-gray-900 mb-4 font-body max-w-readable">
            Common characteristics include:
          </p>
          <ul class="list-disc list-inside space-y-3 text-gray-900 mb-4 font-body text-base">
            <li>Difficulties with social communication and interaction</li>
            <li>Repetitive behaviors and restricted interests</li>
            <li>Sensory sensitivities</li>
            <li>Unique strengths and abilities</li>
          </ul>
        </section>

        <section class="mb-12">
          <h2 class="text-3xl font-bold mb-6 text-accent">
            Types of Learning Disabilities
          </h2>
          <p class="text-gray-900 font-body text-base mb-6 max-w-readable">
            Learning disabilities are usually measured and classified based on their severity.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <UiCard>
              <h3 class="text-xl font-semibold mb-3">
                Mild Learning disability
              </h3>
              <p class="text-gray-900 font-body text-base">
                People may achieve good independence with some support. Many can learn basic
                literacy and numeracy, hold supported or open employment, and manage daily life
                with guidance from family or services.
              </p>
            </UiCard>
            <UiCard>
              <h3 class="text-xl font-semibold mb-3">
                Moderate Learning disability
              </h3>
              <p class="text-gray-900 font-body text-base">
                More support is needed for daily living, communication, and learning. With the
                right help, people can learn practical and self-care skills and may take part in
                supported work or day activities.
              </p>
            </UiCard>
            <UiCard>
              <h3 class="text-xl font-semibold mb-3">
                Severe learning disability
              </h3>
              <p class="text-gray-900 font-body text-base">
                Significant support is needed across most areas of life. Communication is often
                limited or non-verbal. People can still learn routines and preferences with
                consistent, person-centred support.
              </p>
            </UiCard>
            <UiCard>
              <h3 class="text-xl font-semibold mb-3">
                Profound and multiple learning disability
              </h3>
              <p class="text-gray-900 font-body text-base">
                Very high support needs, often with additional physical or sensory impairments.
                Full-time care is typically required. Support focuses on comfort, communication,
                and quality of life in line with the person’s needs and preferences.
              </p>
            </UiCard>
          </div>
        </section>

        <section class="mb-12 bg-primary-50 p-8 rounded-lg border-l-4 border-accent">
          <h2 class="text-3xl font-bold mb-6 text-accent">
            How OFALD Helps
          </h2>
          <p class="text-base text-gray-900 mb-4 font-body max-w-readable">
            At OFALD, we provide comprehensive support for individuals with autism and learning
            disabilities:
          </p>
          <ul class="list-disc list-inside space-y-3 text-gray-900 font-body text-base">
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
    'Learn about autism and learning disabilities. Understanding these conditions is key to creating an inclusive society.'
})
</script>
