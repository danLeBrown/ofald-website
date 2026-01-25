<template>
  <form @submit.prevent="handleSubmit" class="space-y-8">
    <div>
      <label for="name" class="block font-body text-base font-semibold text-gray-900 mb-3">
        Name <span class="text-red-600 font-bold">(required)</span>
      </label>
      <input
        id="name"
        v-model="form.name"
        type="text"
        required
        aria-required="true"
        aria-describedby="name-error"
        :aria-invalid="errors.name ? 'true' : 'false'"
        class="w-full px-4 py-3 text-base border-2 border-gray-400 rounded-lg focus:ring-3 focus:ring-accent focus:border-accent min-h-[48px] font-body"
      />
      <div v-if="errors.name" id="name-error" role="alert" class="mt-2 text-red-600 font-body text-sm">
        {{ errors.name }}
      </div>
    </div>
    
    <div>
      <label for="email" class="block font-body text-base font-semibold text-gray-900 mb-3">
        Email <span class="text-red-600 font-bold">(required)</span>
      </label>
      <input
        id="email"
        v-model="form.email"
        type="email"
        required
        aria-required="true"
        aria-describedby="email-error"
        :aria-invalid="errors.email ? 'true' : 'false'"
        class="w-full px-4 py-3 text-base border-2 border-gray-400 rounded-lg focus:ring-3 focus:ring-accent focus:border-accent min-h-[48px] font-body"
      />
      <div v-if="errors.email" id="email-error" role="alert" class="mt-2 text-red-600 font-body text-sm">
        {{ errors.email }}
      </div>
    </div>
    
    <div>
      <label for="message" class="block font-body text-base font-semibold text-gray-900 mb-3">
        Message <span class="text-red-600 font-bold">(required)</span>
      </label>
      <textarea
        id="message"
        v-model="form.message"
        required
        aria-required="true"
        aria-describedby="message-error"
        :aria-invalid="errors.message ? 'true' : 'false'"
        rows="6"
        class="w-full px-4 py-3 text-base border-2 border-gray-400 rounded-lg focus:ring-3 focus:ring-accent focus:border-accent font-body"
      />
      <div v-if="errors.message" id="message-error" role="alert" class="mt-2 text-red-600 font-body text-sm">
        {{ errors.message }}
      </div>
    </div>
    
    <div class="flex items-start gap-3">
      <input
        id="consent"
        v-model="form.consent"
        type="checkbox"
        required
        aria-required="true"
        class="mt-1 w-6 h-6 min-w-[44px] min-h-[44px] cursor-pointer"
      />
      <label for="consent" class="font-body text-base text-gray-900 flex-1">
        I hereby agree that this data will be stored and processed for the purpose of establishing contact. I am aware that I can revoke my consent at any time.
        <span class="text-red-600 font-bold">(required)</span>
      </label>
    </div>
    
    <div v-if="submitStatus === 'success'" class="p-4 bg-green-50 border border-green-200 rounded-lg">
      <p class="text-green-800">Message was successfully sent!</p>
    </div>

    <div v-if="submitStatus === 'error'" class="p-4 bg-red-50 border border-red-200 rounded-lg">
      <p class="text-red-800">Message could not be sent. Please try again later.</p>
    </div>

    <div v-if="submitStatus === 'success'" class="p-4 bg-green-50 border-2 border-green-600 rounded-lg" role="alert">
      <p class="text-green-900 font-body font-bold">✓ Message was successfully sent!</p>
    </div>

    <div v-if="submitStatus === 'error'" class="p-4 bg-red-50 border-2 border-red-600 rounded-lg" role="alert">
      <p class="text-red-900 font-body font-bold">✗ Message could not be sent. Please try again later.</p>
    </div>

    <UiButton type="submit" :disabled="isSubmitting" class="min-h-[48px] min-w-[120px]">
      {{ isSubmitting ? 'Sending...' : 'Send Message' }}
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

const errors = reactive({
  name: '',
  email: '',
  message: '',
})

const submitStatus = ref<'idle' | 'success' | 'error'>('idle')
const isSubmitting = ref(false)

const validateForm = () => {
  errors.name = ''
  errors.email = ''
  errors.message = ''

  if (!form.name.trim()) {
    errors.name = 'Name is required'
  }

  if (!form.email.trim()) {
    errors.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address'
  }

  if (!form.message.trim()) {
    errors.message = 'Message is required'
  }

  return !errors.name && !errors.email && !errors.message
}

const handleSubmit = async () => {
  if (!validateForm()) {
    return
  }

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

// Real-time validation (non-intrusive)
watch(() => form.name, () => {
  if (form.name && errors.name) {
    errors.name = ''
  }
})

watch(() => form.email, () => {
  if (form.email && errors.email) {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errors.email = ''
    }
  }
})

watch(() => form.message, () => {
  if (form.message && errors.message) {
    errors.message = ''
  }
})
</script>
