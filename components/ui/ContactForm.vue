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
    
    <div v-if="submitStatus" :class="[
      'p-4 rounded-lg',
      submitStatus === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
    ]">
      {{ submitStatus === 'success' ? 'Message sent successfully!' : 'Failed to send message. Please try again.' }}
    </div>
    
    <Button type="submit" :disabled="isSubmitting" variant="primary">
      {{ isSubmitting ? 'Sending...' : 'Send' }}
    </Button>
  </form>
</template>

<script setup lang="ts">
const form = reactive({
  name: '',
  email: '',
  message: '',
  consent: false,
})

const isSubmitting = ref(false)
const submitStatus = ref<'success' | 'error' | null>(null)

const handleSubmit = async () => {
  isSubmitting.value = true
  submitStatus.value = null
  
  // TODO: Implement actual form submission
  // For now, simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  submitStatus.value = 'success'
  isSubmitting.value = false
  
  // Reset form after success
  if (submitStatus.value === 'success') {
    form.name = ''
    form.email = ''
    form.message = ''
    form.consent = false
  }
}
</script>
