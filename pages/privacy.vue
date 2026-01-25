<template>
  <div class="py-12">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold mb-8">Privacy Policy</h1>

        <div class="prose prose-lg max-w-none">
          <section class="mb-8">
            <h2 class="text-2xl font-semibold mb-4">Introduction</h2>
            <p class="text-gray-700 mb-4">
              Olubukola Foundation for Autism and Learning Disability (OFALD) is committed to
              protecting your privacy. This Privacy Policy explains how we collect, use, and
              safeguard your personal information when you visit our website or interact with our
              services.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p class="text-gray-700 mb-4">We may collect the following types of information:</p>
            <ul class="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Personal information you provide when contacting us (name, email, message)</li>
              <li>Information about how you use our website</li>
              <li>Any other information you choose to provide to us</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p class="text-gray-700 mb-4">We use the information we collect to:</p>
            <ul class="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Respond to your inquiries and provide support</li>
              <li>Send you updates about our programs and events (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold mb-4">Data Storage and Security</h2>
            <p class="text-gray-700 mb-4">
              We take appropriate measures to protect your personal information. However, no method
              of transmission over the internet is 100% secure, and we cannot guarantee absolute
              security.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold mb-4">Your Rights</h2>
            <p class="text-gray-700 mb-4">
              You have the right to:
            </p>
            <ul class="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold mb-4">Contact Us</h2>
            <p class="text-gray-700 mb-4">
              If you have questions about this Privacy Policy or wish to exercise your rights,
              please contact us at:
            </p>
            <p class="text-gray-700">
              Email: <a href="mailto:info@ofald.net" class="text-primary-600">info@ofald.net</a><br />
              Phone: <a href="tel:+2347031149191" class="text-primary-600">+2347031149191</a>
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold mb-4">Changes to This Policy</h2>
            <p class="text-gray-700">
              We may update this Privacy Policy from time to time. We will notify you of any changes
              by posting the new Privacy Policy on this page.
            </p>
          </section>

          <p class="text-gray-600 text-sm mt-8">
            Last updated: {{ new Date().toLocaleDateString() }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Privacy Policy - OFALD',
  description: 'OFALD Privacy Policy - Learn how we collect, use, and protect your personal information.',
  ogTitle: 'Privacy Policy - OFALD',
  ogDescription: 'OFALD Privacy Policy - Learn how we collect, use, and protect your personal information.',
})
</script>
