<template>
  <div class="py-12">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold mb-8">Contact Us</h1>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <!-- Contact Information -->
          <div>
            <h2 class="text-2xl font-semibold mb-6">Get In Touch</h2>
            <p class="text-gray-700 mb-8">
              We'd love to hear from you. Whether you have questions about our programs, want to
              get involved, or need support, we're here to help.
            </p>

            <div class="space-y-6">
              <div>
                <h3 class="text-lg font-semibold mb-2">Telephone</h3>
                <a href="tel:+2347031149191" class="text-primary-600 hover:text-primary-700">
                  +2347031149191
                </a>
              </div>

              <div>
                <h3 class="text-lg font-semibold mb-2">Email</h3>
                <a
                  href="mailto:info@ofald.net"
                  class="text-primary-600 hover:text-primary-700"
                >
                  info@ofald.net
                </a>
              </div>

              <div>
                <h3 class="text-lg font-semibold mb-2">Address</h3>
                <p class="text-gray-700">
                  Lagos, Ibadan, Osogbo, Abuja, Nigeria<br />
                  <span class="text-sm text-gray-600">86 3rd Ave, Abuja, Federal Capital Territory</span>
                </p>
              </div>

              <div>
                <h3 class="text-lg font-semibold mb-2">Operating Hours</h3>
                <ul class="text-gray-700 space-y-1">
                  <li><strong>Mon – Fri:</strong> 09:00 – 18:00</li>
                  <li><strong>Saturday:</strong> 10:00 – 16:00</li>
                  <li><strong>Sunday:</strong> Closed</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div>
            <h2 class="text-2xl font-semibold mb-6">Send Us a Message</h2>
            <UiContactForm />
          </div>
        </div>

        <!-- Additional Information -->
        <section class="mt-12 bg-gray-50 p-8 rounded-lg">
          <h2 class="text-2xl font-semibold mb-4">Ways to Get Involved</h2>
          <p class="text-gray-700 mb-4">
            There are lots of ways you can get involved at OFALD:
          </p>
          <ul class="list-disc list-inside space-y-2 text-gray-700">
            <li>
              Do you know anyone with autism and learning disabilities who could benefit from our
              programs and pathways? Please recommend us to them.
            </li>
            <li>
              Consider volunteering (please visit our
              <NuxtLink to="/vacancies" class="text-primary-600 hover:text-primary-700">
                Vacancy page
              </NuxtLink>
              for available volunteering roles).
            </li>
            <li>
              By making donations to help OFALD reach more people with learning disabilities, you
              are investing in a better and more abled life for our service users and their
              families.
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Contact Us - OFALD',
  description:
    'Get in touch with OFALD. Contact us via phone, email, or use our contact form. We\'re here to help.',
  ogTitle: 'Contact Us - OFALD',
  ogDescription:
    'Get in touch with OFALD. Contact us via phone, email, or use our contact form. We\'re here to help.',
})
</script>
