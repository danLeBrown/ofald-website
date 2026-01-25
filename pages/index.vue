<template>
  <div>
    <UiHero
      title="Empowering Lives at Olubukola Foundation"
      description="Supporting individuals with autism and learning disabilities to thrive in a society that embraces their abilities."
    />

    <!-- Statistics Section -->
    <section class="py-12 md:py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 text-accent">
          Our Impact
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <UiStatCard value="20" label="Proposed No. of people to be empowered in 2026" />
          <UiStatCard value="200" label="Trainings to be delivered" />
          <UiStatCard value="15" label="Nationwide Community based awareness raising events" />
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="py-12 md:py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold mb-6 text-center text-accent">
            About Olubukola Foundation
          </h2>
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
          <div class="text-center">
            <NuxtLink to="/about">
              <UiButton>Learn More About Us</UiButton>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-12 md:py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 text-accent">
          Who do we work with?
        </h2>
        <div class="max-w-4xl mx-auto mb-8">
          <p class="text-base text-gray-900 mb-6 font-body max-w-readable">
            We offer services to young people with Autism and Learning Disability. Some of these
            services include:
          </p>
          <ul class="list-disc list-inside space-y-3 text-gray-900 mb-8 font-body text-base max-w-readable">
            <li>
              Bringing quality and flexible healthcare and support to people with learning
              disabilities.
            </li>
            <li>Research into Learning Disability and Autism in Nigeria.</li>
            <li>
              Starting a learning disability register in Nigeria to ensure accountability and for
              future research purpose.
            </li>
            <li>
              Working to raise awareness to reduce the stigmatization and abuse of people with
              autism and learning disabilities.
            </li>
            <li>Day Centres for young people with autism and Learning disability</li>
          </ul>
        </div>

        <div class="max-w-4xl mx-auto">
          <h3 class="text-2xl font-semibold mb-4">
            Who would benefit from our services?
          </h3>
          <ul class="list-disc list-inside space-y-3 text-gray-900 font-body text-base max-w-readable">
            <li>
              Young people with learning disabilities (Down syndrome, Cerebral Palsy, Angelman
              Syndrome, Tourette's Syndrome, Epilepsy and others) between the ages of 14 and 21.
            </li>
            <li>Parents of young people with autism and learning disabilities.</li>
            <li>Young people with autism between the ages of 14 and 21.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Key Initiatives Section -->
    <section class="py-12 md:py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 text-accent">
          Our Key Initiatives
        </h2>
        <p class="text-center text-gray-900 mb-12 max-w-readable mx-auto font-body text-base">
          Discover with us core initiatives and programs designed to empower young individuals
          with autism and learning disabilities. Each of these highlights showcase our commitment
          to enhancing and promoting overall better standards of living for people with
          disabilities, thus fostering an inclusive future in Nigeria.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <UiCard>
            <h3 class="text-2xl font-semibold mb-4 font-heading">
              Specialised Educational Programs
            </h3>
            <p class="text-gray-900 mb-4 font-body text-base">
              Fostering an inclusive educational system in Nigeria. By enrolling people with autism
              and learning disabilities in free special education programs, we are giving them a
              chance at a brighter, non-isolated future.
            </p>
            <p class="text-gray-900 font-body text-base">
              People with Learning Disability and Autism have the right to quality education
              catered around their needs.
            </p>
          </UiCard>

          <UiCard>
            <h3 class="text-2xl font-semibold mb-4 font-heading">
              Skills Acquisition Training
            </h3>
            <p class="text-gray-900 mb-4 font-body text-base">
              Practical training programs aimed at enhancing employability and independence,
              preparing young people with learning disabilities for an independent future.
            </p>
            <p class="text-gray-900 font-body text-base">
              Skills like pottery, painting, cooking, dancing, music, and crafting, among others,
              will be taught for free.
            </p>
          </UiCard>

          <UiCard>
            <h3 class="text-2xl font-semibold mb-4 font-heading">
              Community Awareness Campaigns
            </h3>
            <p class="text-gray-900 mb-4 font-body text-base">
              Raising awareness and promoting understanding of autism and learning disabilities.
              Our aim is to remove the stigma associated with learning disability and encourage
              families with LD children and relatives that they are seen and respected.
            </p>
            <p class="text-gray-900 font-body text-base">
              People with Autism in Nigeria deserve to be treated with respect and dignity- they
              have the right to be seen, heard and accepted.
            </p>
          </UiCard>

          <UiCard>
            <h3 class="text-2xl font-semibold mb-4 font-heading">
              Collaborations and Partnerships
            </h3>
            <p class="text-gray-900 mb-4 font-body text-base">
              Working with local and International organisations to expand our reach, programmes
              and effectiveness.
            </p>
            <p class="text-gray-900 font-body text-base">
              We are also looking to partner with local hospitals, educational facilities and
              institutions, churches and the community to ensure we do all we can to provide better
              support and care to young people with Autism and learning disabilities.
            </p>
          </UiCard>
        </div>
      </div>
    </section>

    <!-- Additional Services -->
    <section class="py-12 md:py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <UiCard>
            <h3 class="text-xl font-semibold mb-3 font-heading">
              OFALD Health Outreach
            </h3>
            <p class="text-gray-900 mb-3 font-body text-base">
              OFALD in partnership with doctors, speech and language therapists, psychologists, and
              physiotherapists from all around Nigeria and the rest of the world, offers free
              consultations and bi-annual health checks for people with autism and learning
              disabilities.
            </p>
            <p class="text-gray-900 font-body text-base">
              We also have free and highly subsidized packages that cater to the mental health needs
              of parents and immediate families of our service users.
            </p>
          </UiCard>

          <UiCard>
            <h3 class="text-xl font-semibold mb-3">
              Job Opportunities
            </h3>
            <p class="text-gray-900 font-body text-base">
              We have partnered with many private and public organizations to support people with
              learning disabilities in finding jobs that fit around their needs. At OFALD, many of
              our staff have a learning disability; this is to foster inclusion and to help them
              have an independent future.
            </p>
          </UiCard>

          <UiCard>
            <h3 class="text-xl font-semibold mb-3">
              Trainings
            </h3>
            <p class="text-gray-900 font-body text-base">
              We offer trainings and support to individuals who are interested in the learning
              disability and autism support career pathways. With our globally certified online and
              face-to-face trainings, enhance your employability within the care sector around the
              world.
            </p>
          </UiCard>
        </div>
      </div>
    </section>

    <!-- Research Institute -->
    <section class="py-12 md:py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <UiCard>
            <h2 class="text-3xl font-bold mb-6 text-accent">
              OFALD RESEARCH INSTITUTE
            </h2>
            <p class="text-gray-900 mb-4 font-body text-base">
              At OFALD, we are partnering with research institutions at home and abroad to look into
              ways that people with learning disabilities and autism can be supported to live better
              quality lives.
            </p>
            <p class="text-gray-900 font-body text-base">
              Due to limited research in this regard, especially in Africa, people with learning
              disabilities, epilepsy, and autism in Nigeria generally have low life expectancy. At
              OFALD, we are looking to change this through extensive scientific and social
              research.
            </p>
          </UiCard>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-12 md:py-16 bg-primary text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-6 text-white">
          Get Involved
        </h2>
        <p class="text-lg md:text-xl mb-8 max-w-readable mx-auto font-body">
          There are lots of ways you can get involved at OFALD. Do you know anyone with autism and
          learning disabilities who could benefit from our programs and pathways? Please recommend
          us to them; you can help pave the way to a more inclusive future in Nigeria and a better
          quality of life for them.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/contact">
            <UiButton variant="secondary">
              Contact Us
            </UiButton>
          </NuxtLink>
          <NuxtLink to="/vacancies">
            <UiButton variant="secondary">
              View Vacancies
            </UiButton>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'OFALD - Empowering Lives at Olubukola Foundation',
  description:
    'Supporting individuals with autism and learning disabilities in Nigeria. Join us in creating an inclusive society.',
  ogTitle: 'OFALD - Empowering Lives at Olubukola Foundation',
  ogDescription:
    'Supporting individuals with autism and learning disabilities in Nigeria. Join us in creating an inclusive society.',
  ogType: 'website',
  twitterCard: 'summary_large_image'
})
</script>
