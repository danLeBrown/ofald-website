module.exports = {
  // Lint and format JavaScript, TypeScript, and Vue files
  '*.{js,ts,vue}': [
    'eslint --fix',
    'prettier --write'
  ],
  // Format other files
  '*.{json,md,yml,yaml}': ['prettier --write'],
  // Typecheck TypeScript and Vue files
  // Note: This runs typecheck but won't block commits if it fails
  // (since typeCheck is disabled in nuxt.config.ts, but we still want to see errors)
  '*.{ts,vue}': [
    () => {
      try {
        const { execSync } = require('child_process')
        execSync('pnpm typecheck', { stdio: 'inherit' })
      } catch (error) {
        console.log('\n⚠️  Typecheck found errors (shown above)')
        console.log('   Note: Type checking is disabled in nuxt.config.ts')
        console.log('   Commit will proceed, but please review type errors\n')
        // Don't block commit
        return true
      }
    }
  ]
}
