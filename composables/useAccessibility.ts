export const useAccessibility = () => {
  const calmMode = useState('calm-mode', () => false)
  const highContrast = useState('high-contrast', () => false)

  const toggleCalmMode = () => {
    calmMode.value = !calmMode.value
    if (calmMode.value) {
      document.documentElement.classList.add('calm-mode')
    } else {
      document.documentElement.classList.remove('calm-mode')
    }
  }

  const toggleHighContrast = () => {
    highContrast.value = !highContrast.value
    if (highContrast.value) {
      document.documentElement.classList.add('high-contrast')
    } else {
      document.documentElement.classList.remove('high-contrast')
    }
  }

  return {
    calmMode: readonly(calmMode),
    highContrast: readonly(highContrast),
    toggleCalmMode,
    toggleHighContrast
  }
}
