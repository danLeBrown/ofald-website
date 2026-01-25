<template>
  <div class="py-12">
    <div class="container mx-auto px-4">
      <div class="max-w-readable mx-auto">
        <UiBreadcrumbs />
        <h1 class="text-4xl font-bold mb-8 text-accent">
          About Olubukola Foundation
        </h1>

        <div class="mb-8">
          <p class="text-base text-gray-900 mb-6 font-body max-w-readable">
            Olubukola Foundation for Autism and Learning Disabilities (OFALD) is a dedicated
            non-profit organization committed to supporting individuals with autism and learning
            disabilities.
          </p>
          <p class="text-base text-gray-900 mb-6 font-body max-w-readable">
            Through our sponsored specialized health care, educational, and skills acquisition
            program, we aim to empower young people with autism and various physical, mental, and
            learning needs to thrive in a society hostile to their disability.
          </p>
          <p class="text-base text-gray-900 mb-8 font-body max-w-readable">
            Our goal is to create an inclusive society in Nigeria, where people with learning
            disabilities are supported to reach their potential. Join us; let us help them find
            abilities in their disabilities.
          </p>
        </div>

        <section class="mb-12">
          <h2 class="text-3xl font-bold mb-6 text-accent">
            Our Values
          </h2>
          <p class="text-base text-gray-900 mb-4 font-body max-w-readable">
            We value kindness, a person-centred approach, and bravery: we believe that change is
            attainable. We are Nigerians; we are friendly, passionate, and proud people, and we
            embrace our own regardless of their ability or disability.
          </p>
        </section>

        <section class="mb-12">
          <h2 class="text-3xl font-bold mb-6 text-accent">
            Our Mission
          </h2>
          <p class="text-base text-gray-900 font-body max-w-readable">
            The Olubukola Foundation for Autism and Learning Disability (OFALD) is devoted to
            supporting young individuals with autism and learning disabilities to shine within a
            society that dims their light.
          </p>
        </section>

        <section class="mb-12">
          <h2 class="text-3xl font-bold mb-6 text-accent">
            Operating Hours
          </h2>
          <div class="bg-gray-50 p-6 rounded-lg">
            <ul class="space-y-2 text-gray-900 font-body text-base">
              <li><strong>Mon – Fri:</strong> 09:00 – 18:00</li>
              <li><strong>Saturday:</strong> 10:00 – 16:00</li>
              <li><strong>Sunday:</strong> Closed</li>
            </ul>
          </div>
        </section>

        <div class="text-center mt-12">
          <NuxtLink to="/contact">
            <UiButton>Get In Touch</UiButton>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'About Us - OFALD',
  description:
    'Learn about Olubukola Foundation for Autism and Learning Disabilities and our mission to create an inclusive society in Nigeria.',
  ogTitle: 'About Us - OFALD',
  ogDescription:
    'Learn about Olubukola Foundation for Autism and Learning Disabilities and our mission to create an inclusive society in Nigeria.'
})
</script>
