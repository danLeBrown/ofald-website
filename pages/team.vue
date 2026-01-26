<template>
  <div class="py-12">
    <div class="container mx-auto px-4">
      <div class="max-w-readable mx-auto">
        <UiBreadcrumbs />
        <h1 class="text-4xl font-bold mb-8 text-accent">
          OFALD Team
        </h1>

        <div class="mb-8">
          <p class="text-base text-gray-900 mb-6 font-body max-w-readable">
            At OFALD, we are proud of our diverse and dedicated team. Our staff includes
            professionals from various fields, and importantly, many of our team members have
            learning disabilities themselves. This is a core part of our mission to foster
            inclusion and demonstrate that people with disabilities can thrive in the workplace.
          </p>
        </div>

        <section class="mb-12" aria-labelledby="team-members-heading">
          <h2 id="team-members-heading" class="text-3xl font-bold mb-6 text-accent">
            Meet Our Team
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <UiCard class="text-center">
              <div class="mb-4 flex justify-center">
                <div class="w-32 h-32 rounded-full bg-gradient-to-br from-primary-100 to-accent-100 p-1 shadow-md">
                  <img
                    src="/images/team/adewumi-adeyemi.jpg"
                    alt="Photo of Adewumi Adeyemi, Founder and Executive Director at OFALD"
                    class="w-full h-full rounded-full object-cover"
                    loading="lazy"
                    onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
                  />
                  <div
                    class="w-full h-full rounded-full bg-gradient-to-br from-primary-100 to-accent-100 items-center justify-center hidden"
                    role="img"
                    aria-label="Photo of Adewumi Adeyemi"
                  >
                    <span class="text-4xl text-primary font-heading" aria-hidden="true">AA</span>
                  </div>
                </div>
              </div>
              <h3 class="text-xl font-semibold mb-2 font-heading">
                Adewumi Adeyemi
              </h3>
              <p class="text-gray-700 font-body text-base">
                Founder and Executive Director at OFALD
              </p>
            </UiCard>

            <UiCard class="text-center">
              <div class="mb-4 flex justify-center">
                <div class="w-32 h-32 rounded-full bg-gradient-to-br from-primary-100 to-accent-100 p-1 shadow-md">
                  <img
                    src="/images/team/adewale-adesina.jpg"
                    alt="Photo of Adewale Adesina, Director of Programmes at OFALD"
                    class="w-full h-full rounded-full object-cover"
                    loading="lazy"
                    onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
                  />
                  <div
                    class="w-full h-full rounded-full bg-gradient-to-br from-primary-100 to-accent-100 items-center justify-center hidden"
                    role="img"
                    aria-label="Photo of Adewale Adesina"
                  >
                    <span class="text-4xl text-primary font-heading" aria-hidden="true">AA</span>
                  </div>
                </div>
              </div>
              <h3 class="text-xl font-semibold mb-2 font-heading">
                Adewale Adesina
              </h3>
              <p class="text-gray-700 font-body text-base">
                Director of Programmes at OFALD
              </p>
            </UiCard>

            <UiCard class="text-center">
              <div class="mb-4 flex justify-center">
                <div class="w-32 h-32 rounded-full bg-gradient-to-br from-primary-100 to-accent-100 p-1 shadow-md">
                  <img
                    src="/images/team/gloria-okpanachi.jpg"
                    alt="Photo of Gloria Okpanachi, Director of Education and Outreach at OFALD"
                    class="w-full h-full rounded-full object-cover"
                    loading="lazy"
                    onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
                  />
                  <div
                    class="w-full h-full rounded-full bg-gradient-to-br from-primary-100 to-accent-100 items-center justify-center hidden"
                    role="img"
                    aria-label="Photo of Gloria Okpanachi"
                  >
                    <span class="text-4xl text-primary font-heading" aria-hidden="true">GO</span>
                  </div>
                </div>
              </div>
              <h3 class="text-xl font-semibold mb-2 font-heading">
                Gloria Okpanachi
              </h3>
              <p class="text-gray-700 font-body text-base">
                Director of Education and Outreach at OFALD
              </p>
            </UiCard>

            <UiCard class="text-center">
              <div class="mb-4 flex justify-center">
                <div class="w-32 h-32 rounded-full bg-gradient-to-br from-primary-100 to-accent-100 p-1 shadow-md">
                  <img
                    src="/images/team/tosin-kolapo.jpg"
                    alt="Photo of Dr. Tosin Kolapo, Director of Health Outreach and Programmes at OFALD"
                    class="w-full h-full rounded-full object-cover"
                    loading="lazy"
                    onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
                  />
                  <div
                    class="w-full h-full rounded-full bg-gradient-to-br from-primary-100 to-accent-100 items-center justify-center hidden"
                    role="img"
                    aria-label="Photo of Dr. Tosin Kolapo"
                  >
                    <span class="text-4xl text-primary font-heading" aria-hidden="true">TK</span>
                  </div>
                </div>
              </div>
              <h3 class="text-xl font-semibold mb-2 font-heading">
                Tosin Kolapo (Dr)
              </h3>
              <p class="text-gray-700 font-body text-base">
                Director of Health Outreach and Programmes at OFALD
              </p>
            </UiCard>
          </div>
        </section>

        <section class="mb-12">
          <h2 class="text-3xl font-bold mb-6 text-accent">
            Our Commitment to Inclusion
          </h2>
          <p class="text-base text-gray-900 mb-4 font-body max-w-readable">
            At OFALD, we practice what we preach. Many of our staff members have learning
            disabilities, which helps us:
          </p>
          <ul class="list-disc list-inside space-y-3 text-gray-900 mb-6 font-body text-base">
            <li>Create a truly inclusive work environment</li>
            <li>Better understand the needs of those we serve</li>
            <li>Provide role models for young people with disabilities</li>
            <li>Demonstrate that people with disabilities can have successful careers</li>
          </ul>
        </section>

        <section class="mb-12">
          <h2 class="text-3xl font-bold mb-6 text-accent">
            Our Partners
          </h2>
          <p class="text-base text-gray-900 mb-4 font-body max-w-readable">
            We work with a network of professionals and organizations:
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <UiCard>
              <h3 class="text-xl font-semibold mb-3">
                Healthcare Professionals
              </h3>
              <p class="text-gray-900 font-body text-base">
                Doctors, speech and language therapists, psychologists, and physiotherapists from
                Nigeria and around the world.
              </p>
            </UiCard>
            <UiCard>
              <h3 class="text-xl font-semibold mb-3">
                Educational Specialists
              </h3>
              <p class="text-gray-900 font-body text-base">
                Special education teachers and educational consultants who help design our
                programs.
              </p>
            </UiCard>
            <UiCard>
              <h3 class="text-xl font-semibold mb-3">
                Research Partners
              </h3>
              <p class="text-gray-900 font-body text-base">
                Research institutions at home and abroad working to improve the lives of people with
                learning disabilities.
              </p>
            </UiCard>
            <UiCard>
              <h3 class="text-xl font-semibold mb-3">
                Community Organizations
              </h3>
              <p class="text-gray-900 font-body text-base">
                Local and international organizations that help us expand our reach and
                effectiveness.
              </p>
            </UiCard>
          </div>
        </section>

        <section class="mb-12 bg-primary-50 p-8 rounded-lg border-l-4 border-accent">
          <h2 class="text-3xl font-bold mb-6 text-accent">
            Join Our Team
          </h2>
          <p class="text-base text-gray-900 mb-4 font-body max-w-readable">
            We are always looking for passionate individuals who share our commitment to creating an
            inclusive society. Whether you have a learning disability or not, if you're dedicated
            to our mission, we'd love to hear from you.
          </p>
          <div class="text-center mt-6">
            <NuxtLink to="/vacancies">
              <UiButton>View Available Positions</UiButton>
            </NuxtLink>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'OFALD Team - OFALD',
  description:
    'Meet the OFALD team and learn about our commitment to inclusion and supporting people with learning disabilities.',
  ogTitle: 'OFALD Team - OFALD',
  ogDescription:
    'Meet the OFALD team and learn about our commitment to inclusion and supporting people with learning disabilities.'
})
</script>
