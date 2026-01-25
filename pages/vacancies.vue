<template>
  <div class="py-12">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold mb-8">Vacancies at OFALD</h1>

        <div class="prose prose-lg max-w-none mb-8">
          <p class="text-lg text-gray-700 mb-6">
            We are always looking for passionate individuals to join our team. At OFALD, we believe
            in creating an inclusive workplace where people with and without disabilities can work
            together to make a difference.
          </p>
        </div>

        <section class="mb-12">
          <h2 class="text-3xl font-bold mb-6">Current Opportunities</h2>
          <div class="space-y-6">
            <UiCard>
              <h3 class="text-2xl font-semibold mb-3">Volunteer Positions</h3>
              <p class="text-gray-700 mb-4">
                We regularly have volunteer opportunities available. Volunteers play a crucial role
                in helping us deliver our programs and services. Whether you can commit to a few
                hours a week or more, we'd love to hear from you.
              </p>
              <p class="text-gray-700">
                <strong>Requirements:</strong> Passion for our mission, willingness to learn, and
                commitment to inclusion.
              </p>
            </UiCard>

            <UiCard>
              <h3 class="text-2xl font-semibold mb-3">Staff Positions</h3>
              <p class="text-gray-700 mb-4">
                We have partnered with many private and public organizations to support people with
                learning disabilities in finding jobs that fit around their needs. At OFALD, many
                of our staff have a learning disability.
              </p>
              <p class="text-gray-700 mb-4">
                We are always looking to hire—do you know anyone with learning disabilities looking
                for a job? Please reach out to us.
              </p>
            </UiCard>

            <UiCard>
              <h3 class="text-2xl font-semibold mb-3">Professional Roles</h3>
              <p class="text-gray-700 mb-4">
                We seek professionals in various fields including:
              </p>
              <ul class="list-disc list-inside space-y-2 text-gray-700">
                <li>Special Education Teachers</li>
                <li>Healthcare Professionals (Doctors, Therapists, Psychologists)</li>
                <li>Program Coordinators</li>
                <li>Research Associates</li>
                <li>Administrative Staff</li>
              </ul>
            </UiCard>
          </div>
        </section>

        <section class="mb-12">
          <h2 class="text-3xl font-bold mb-6">Why Work at OFALD?</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <UiCard>
              <h3 class="text-xl font-semibold mb-3">Inclusive Environment</h3>
              <p class="text-gray-700">
                We practice true inclusion - many of our staff have learning disabilities, creating
                a diverse and supportive workplace.
              </p>
            </UiCard>
            <UiCard>
              <h3 class="text-xl font-semibold mb-3">Meaningful Work</h3>
              <p class="text-gray-700">
                Make a real difference in the lives of young people with autism and learning
                disabilities.
              </p>
            </UiCard>
            <UiCard>
              <h3 class="text-xl font-semibold mb-3">Professional Development</h3>
              <p class="text-gray-700">
                Access to training and support to enhance your skills in the care sector.
              </p>
            </UiCard>
            <UiCard>
              <h3 class="text-xl font-semibold mb-3">Flexible Opportunities</h3>
              <p class="text-gray-700">
                We offer various roles and flexible arrangements to fit different needs and
                schedules.
              </p>
            </UiCard>
          </div>
        </section>

        <section class="mb-12 bg-primary-50 p-8 rounded-lg">
          <h2 class="text-3xl font-bold mb-6">How to Apply</h2>
          <p class="text-lg text-gray-700 mb-4">
            If you're interested in joining our team, please contact us. We welcome applications
            from people with and without disabilities. We believe that diversity makes us stronger
            and helps us better serve our community.
          </p>
          <div class="text-center mt-6">
            <NuxtLink to="/contact">
              <Button>Contact Us About Opportunities</Button>
            </NuxtLink>
          </div>
        </section>

        <section class="mb-12">
          <h2 class="text-3xl font-bold mb-6">Training Opportunities</h2>
          <p class="text-lg text-gray-700 mb-4">
            We also offer trainings and support to individuals who are interested in the learning
            disability and autism support career pathways. With our globally certified online and
            face-to-face trainings, enhance your employability within the care sector around the
            world.
          </p>
          <p class="text-lg text-gray-700">
            Our up-to-date and globally standard facilities and equipment make our practical classes
            more knowledgeable and insightful.
          </p>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Vacancies at OFALD - OFALD',
  description:
    'Join the OFALD team. We offer inclusive employment opportunities for people with and without disabilities.',
  ogTitle: 'Vacancies at OFALD - OFALD',
  ogDescription:
    'Join the OFALD team. We offer inclusive employment opportunities for people with and without disabilities.',
})
</script>
