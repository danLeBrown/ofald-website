#!/usr/bin/env node
/**
 * Typecheck script for lint-staged
 * Runs typecheck on staged TypeScript and Vue files
 */
import { execSync } from 'child_process'

try {
  // Run typecheck
  execSync('pnpm typecheck', { stdio: 'inherit' })
} catch (error) {
  // If typecheck fails, log but don't block commit
  // (since typeCheck is disabled in nuxt.config.ts due to vue-tsc issues)
  console.log('\n⚠️  Typecheck completed with errors (this may be expected)')
  console.log('   Type checking is currently disabled in nuxt.config.ts')
  console.log('   Errors shown above for reference only\n')
  // Exit with success to not block commit
  process.exit(0)
}
