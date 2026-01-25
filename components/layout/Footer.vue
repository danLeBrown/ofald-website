<template>
  <footer class="bg-gray-900 text-white mt-auto">
    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-xl font-bold mb-4">OFALD</h3>
          <p class="text-gray-400">
            Olubukola Foundation for Autism and Learning Disability - Empowering
            lives and creating an inclusive society in Nigeria.
          </p>
        </div>

        <div>
          <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
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
          <h4 class="text-lg font-semibold mb-4">Contact</h4>
          <ul class="space-y-2 text-gray-400">
            <li>Telephone: +2347031149191</li>
            <li>Email: info@ofald.net</li>
            <li>Lagos, Ibadan, Osogbo, Abuja, Nigeria</li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p class="text-gray-400 text-sm">
          © {{ currentYear }} OFALD. All rights reserved.
        </p>
        <div class="flex space-x-4 mt-4 md:mt-0">
          <NuxtLink to="/privacy" class="text-gray-400 hover:text-white text-sm transition-colors">
            Privacy Policy
          </NuxtLink>
          <NuxtLink to="/legal" class="text-gray-400 hover:text-white text-sm transition-colors">
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
