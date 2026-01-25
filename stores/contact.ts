import { defineStore } from 'pinia'

interface ContactFormData {
  name: string
  email: string
  message: string
  consent: boolean
}

export const useContactStore = defineStore('contact', {
  state: () => ({
    formData: {
      name: '',
      email: '',
      message: '',
      consent: false
    } as ContactFormData,
    isSubmitting: false,
    submitStatus: null as 'success' | 'error' | null
  }),

  actions: {
    setFormData (data: Partial<ContactFormData>) {
      this.formData = { ...this.formData, ...data }
    },

    resetForm () {
      this.formData = {
        name: '',
        email: '',
        message: '',
        consent: false
      }
      this.submitStatus = null
    },

    setSubmitting (status: boolean) {
      this.isSubmitting = status
    },

    setSubmitStatus (status: 'success' | 'error' | null) {
      this.submitStatus = status
    }
  }
})
