<template>
  <form @submit.prevent="handleSubmit" class="space-y-6">
    <div>
      <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
        Name <span class="text-red-500">*</span>
      </label>
      <input
        id="name"
        v-model="form.name"
        type="text"
        required
        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        placeholder="Your name"
      />
    </div>
    
    <div>
      <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
        Email <span class="text-red-500">*</span>
      </label>
      <input
        id="email"
        v-model="form.email"
        type="email"
        required
        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        placeholder="your.email@example.com"
      />
    </div>
    
    <div>
      <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
        Message <span class="text-red-500">*</span>
      </label>
      <textarea
        id="message"
        v-model="form.message"
        required
        rows="6"
        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        placeholder="Your message"
      />
    </div>
    
    <div class="flex items-start">
      <input
        id="consent"
        v-model="form.consent"
        type="checkbox"
        required
        class="mt-1 mr-2"
      />
      <label for="consent" class="text-sm text-gray-700">
        I hereby agree that this data will be stored and processed for the purpose of establishing contact. I am aware that I can revoke my consent at any time.
        <span class="text-red-500">*</span>
      </label>
    </div>
    
    <div v-if="submitStatus === 'success'" class="p-4 bg-green-50 border border-green-200 rounded-lg">
      <p class="text-green-800">Message was successfully sent!</p>
    </div>

    <div v-if="submitStatus === 'error'" class="p-4 bg-red-50 border border-red-200 rounded-lg">
      <p class="text-red-800">Message could not be sent. Please try again later.</p>
    </div>

    <div class="text-sm text-gray-500">
      <span class="text-red-500">*</span> Please fill in all the required fields.
    </div>

    <UiButton type="submit" :disabled="isSubmitting">
      {{ isSubmitting ? 'Sending...' : 'Send' }}
    </UiButton>
  </form>
</template>

<script setup lang="ts">
const form = reactive({
  name: '',
  email: '',
  message: '',
  consent: false,
})

const submitStatus = ref<'idle' | 'success' | 'error'>('idle')
const isSubmitting = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  submitStatus.value = 'idle'

  try {
    // TODO: Replace with actual API endpoint when backend is ready
    // For now, simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // In production, this would be:
    // const response = await $fetch('/api/contact', {
    //   method: 'POST',
    //   body: form
    // })

    submitStatus.value = 'success'
    form.name = ''
    form.email = ''
    form.message = ''
    form.consent = false
  } catch (error) {
    submitStatus.value = 'error'
    console.error('Error submitting form:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>
