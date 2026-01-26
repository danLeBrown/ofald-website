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
            >
          </NuxtLink>
          <p class="text-gray-300 font-body text-base">
            Olubukola Foundation for Autism and Learning Disability - Empowering
            lives and creating an inclusive society in Nigeria.
          </p>
        </div>

        <div>
          <h4 class="text-lg font-semibold mb-4 font-heading">
            Quick Links
          </h4>
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
          <h4 class="text-lg font-semibold mb-4 font-heading">
            Contact
          </h4>
          <ul class="space-y-2 text-gray-300 mb-4 font-body text-base">
            <li>Telephone: <a href="tel:+2347031149191" class="hover:text-white transition-colors">+2347031149191</a></li>
            <li>Email: <a href="mailto:info@ofald.net" class="hover:text-white transition-colors">info@ofald.net</a></li>
            <li>Lagos, Ibadan, Osogbo, Abuja, Nigeria</li>
          </ul>
          <ClientOnly>
            <div class="flex space-x-4 mt-4">
              <a
                href="https://www.facebook.com/OFALD.NGO"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                class="text-gray-300 hover:text-white focus:outline-none focus:ring-3 focus:ring-accent w-11 h-11 flex items-center justify-center"
              >
                <FontAwesomeIcon :icon="['fab', 'facebook']" class="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/OFALD.NGO"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                class="text-gray-300 hover:text-white focus:outline-none focus:ring-3 focus:ring-accent w-11 h-11 flex items-center justify-center"
              >
                <FontAwesomeIcon :icon="['fab', 'instagram']" class="w-6 h-6" />
              </a>
              <a
                href="mailto:info@ofald.net"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
                class="text-gray-300 hover:text-white focus:outline-none focus:ring-3 focus:ring-accent w-11 h-11 flex items-center justify-center"
              >
                <FontAwesomeIcon :icon="['fas', 'envelope']" class="w-6 h-6" />
              </a>
              <a
                href="tel:+2347031149191"
                aria-label="Phone"
                class="text-gray-300 hover:text-white focus:outline-none focus:ring-3 focus:ring-accent w-11 h-11 flex items-center justify-center"
              >
                <FontAwesomeIcon :icon="['fas', 'phone']" class="w-6 h-6" />
              </a>
            </div>
            <template #fallback>
              <div class="flex space-x-4 mt-4">
                <a
                  href="https://www.facebook.com/OFALD.NGO"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  class="text-gray-300 hover:text-white focus:outline-none focus:ring-3 focus:ring-accent w-11 h-11 flex items-center justify-center"
                >
                  <span class="w-6 h-6" aria-hidden="true">f</span>
                </a>
                <a
                  href="https://www.instagram.com/OFALD.NGO"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  class="text-gray-300 hover:text-white focus:outline-none focus:ring-3 focus:ring-accent w-11 h-11 flex items-center justify-center"
                >
                  <span class="w-6 h-6" aria-hidden="true">📷</span>
                </a>
                <a
                  href="mailto:info@ofald.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Email"
                  class="text-gray-300 hover:text-white focus:outline-none focus:ring-3 focus:ring-accent w-11 h-11 flex items-center justify-center"
                >
                  <span class="w-6 h-6" aria-hidden="true">✉</span>
                </a>
                <a
                  href="tel:+2347031149191"
                  aria-label="Phone"
                  class="text-gray-300 hover:text-white focus:outline-none focus:ring-3 focus:ring-accent w-11 h-11 flex items-center justify-center"
                >
                  <span class="w-6 h-6" aria-hidden="true">📞</span>
                </a>
              </div>
            </template>
          </ClientOnly>
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
