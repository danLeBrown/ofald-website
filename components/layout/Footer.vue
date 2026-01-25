<template>
  <footer class="bg-gray-900 text-white mt-auto">
    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <NuxtLink
            to="/"
            class="inline-block mb-4 focus:outline-none focus:ring-3 focus:ring-accent"
            aria-label="OFALD Home"
          >
            <img
              src="/images/logo-footer.png"
              alt="Olubukola Foundation for Autism and Learning Disability logo - four interlocking puzzle pieces"
              class="h-16 w-auto"
            />
          </NuxtLink>
          <p class="text-gray-300 font-body text-base">
            Olubukola Foundation for Autism and Learning Disability - Empowering
            lives and creating an inclusive society in Nigeria.
          </p>
        </div>

        <div>
          <h4 class="text-lg font-semibold mb-4 font-heading">Quick Links</h4>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/about" class="text-gray-400 hover:text-white transition-colors">
                About Us
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/pathways" class="text-gray-400 hover:text-white transition-colors">
                Pathways
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/team" class="text-gray-400 hover:text-white transition-colors">
                Our Team
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/vacancies" class="text-gray-400 hover:text-white transition-colors">
                Vacancies
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-lg font-semibold mb-4 font-heading">Contact</h4>
          <ul class="space-y-2 text-gray-300 mb-4 font-body text-base">
            <li>Telephone: <a href="tel:+2347031149191" class="hover:text-white transition-colors">+2347031149191</a></li>
            <li>Email: <a href="mailto:info@ofald.net" class="hover:text-white transition-colors">info@ofald.net</a></li>
            <li>Lagos, Ibadan, Osogbo, Abuja, Nigeria</li>
          </ul>
          <div class="flex space-x-4 mt-4">
            <a
              href="https://www.instagram.com/OFALD.NGO"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              class="text-gray-300 hover:text-white focus:outline-none focus:ring-3 focus:ring-accent"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                />
              </svg>
            </a>
            <a
              href="mailto:info@ofald.net"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
              class="text-gray-300 hover:text-white focus:outline-none focus:ring-3 focus:ring-accent"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"
                />
              </svg>
            </a>
            <a
              href="tel:+2347031149191"
              aria-label="Phone"
              class="text-gray-300 hover:text-white focus:outline-none focus:ring-3 focus:ring-accent"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M20.22 15.16l-3.79-3.79c-.91-.91-2.23-1.41-3.58-1.41s-2.67.5-3.58 1.41l-3.79 3.79c-.91.91-1.41 2.23-1.41 3.58s.5 2.67 1.41 3.58l3.79 3.79c.91.91 2.23 1.41 3.58 1.41s2.67-.5 3.58-1.41l3.79-3.79c.91-.91 1.41-2.23 1.41-3.58s-.5-2.67-1.41-3.58zm-1.41 5.17l-3.79 3.79c-.52.52-1.28.81-2.05.81s-1.53-.29-2.05-.81l-3.79-3.79c-.52-.52-.81-1.28-.81-2.05s.29-1.53.81-2.05l3.79-3.79c.52-.52 1.28-.81 2.05-.81s1.53.29 2.05.81l3.79 3.79c.52.52.81 1.28.81 2.05s-.29 1.53-.81 2.05z"
                />
                <path d="M15.5 12c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p class="text-gray-300 text-sm font-body">
          © {{ currentYear }} OFALD. All rights reserved.
        </p>
        <div class="flex space-x-4 mt-4 md:mt-0">
          <NuxtLink to="/privacy" class="text-gray-300 hover:text-white text-sm font-body focus:outline-none focus:ring-3 focus:ring-accent">
            Privacy Policy
          </NuxtLink>
          <NuxtLink to="/legal" class="text-gray-300 hover:text-white text-sm font-body focus:outline-none focus:ring-3 focus:ring-accent">
            Legal Notice
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>
