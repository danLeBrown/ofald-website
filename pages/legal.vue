<template>
  <div class="py-12">
    <div class="container mx-auto px-4">
      <div class="max-w-readable mx-auto">
        <UiBreadcrumbs />
        <h1 class="text-4xl font-bold mb-8 text-accent">
          Legal Notice
        </h1>

        <div>
          <section class="mb-8">
            <h2 class="text-2xl font-semibold mb-4">
              Organization Information
            </h2>
            <p class="text-gray-900 mb-4 font-body text-base max-w-readable">
              <strong>Olubukola Foundation for Autism and Learning Disability (OFALD)</strong>
            </p>
            <p class="text-gray-900 mb-4 font-body text-base max-w-readable">
              A non-profit organization committed to supporting individuals with autism and learning
              disabilities in Nigeria.
            </p>
            <p class="text-gray-900 font-body text-base max-w-readable">
              Contact: <a href="mailto:info@ofald.net" class="text-accent">info@ofald.net</a>
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold mb-4">
              Website Usage
            </h2>
            <p class="text-gray-900 mb-4 font-body text-base max-w-readable">
              The information on this website is provided for general informational purposes only.
              While we strive to keep the information up to date and correct, we make no
              representations or warranties of any kind, express or implied, about the
              completeness, accuracy, reliability, or suitability of the information.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold mb-4">
              Intellectual Property
            </h2>
            <p class="text-gray-900 mb-4 font-body text-base max-w-readable">
              All content on this website, including text, graphics, logos, and images, is the
              property of OFALD or its content suppliers and is protected by copyright and other
              intellectual property laws.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold mb-4">
              Limitation of Liability
            </h2>
            <p class="text-gray-900 mb-4 font-body text-base max-w-readable">
              OFALD shall not be liable for any direct, indirect, incidental, special, or
              consequential damages arising out of or in connection with the use of this website.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold mb-4">
              External Links
            </h2>
            <p class="text-gray-900 mb-4 font-body text-base max-w-readable">
              Our website may contain links to external websites. We are not responsible for the
              content or privacy practices of these external sites.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold mb-4">
              Governing Law
            </h2>
            <p class="text-gray-900 font-body text-base max-w-readable">
              This legal notice is governed by the laws of Nigeria. Any disputes arising from the
              use of this website shall be subject to the exclusive jurisdiction of the Nigerian
              courts.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold mb-4">
              Contact
            </h2>
            <p class="text-gray-900 font-body text-base max-w-readable">
              For any legal inquiries, please contact us at:
            </p>
            <p class="text-gray-900 mt-2 font-body text-base max-w-readable">
              Email: <a href="mailto:info@ofald.net" class="text-accent">info@ofald.net</a><br>
              Phone: <a href="tel:+2347031149191" class="text-accent">+2347031149191</a>
            </p>
          </section>

          <p class="text-gray-700 text-sm mt-8 font-body">
            Last updated: {{ new Date().toLocaleDateString() }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Legal Notice - OFALD',
  description: 'OFALD Legal Notice - Terms of use and legal information for our website.',
  ogTitle: 'Legal Notice - OFALD',
  ogDescription: 'OFALD Legal Notice - Terms of use and legal information for our website.'
})
</script>
