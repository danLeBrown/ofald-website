# Agent Session Initialization Prompt

Use this prompt when starting a new agent session for the OFALD Website Revamp project:

---

## Initialization Prompt

```
I'm working on the OFALD Website Revamp project. Before implementing any features or making changes, please:

1. **Read and understand the project standards:**
   - Read `.cursorrules` - Contains all project guidelines, accessibility requirements (WCAG AAA), code quality standards, component conventions, and development workflow
   - Read `README.md` - Project overview, tech stack, features, and getting started guide
   - Read `/Users/brown/.cursor/plans/ofald_website_revamp_7f33a840.plan.md` - Complete project plan with implementation details and todos
   - Read `ACCESSIBILITY_IMPLEMENTATION.md` - Full accessibility implementation details (if making UI changes)

2. **Understand the project context:**
   - This is a Nuxt 3 + TypeScript + Tailwind CSS project for an NGO website
   - WCAG AAA accessibility compliance is MANDATORY for all features
   - Code quality is enforced via pre-commit hooks (ESLint, Prettier, TypeScript checking)
   - All commits must pass linting and formatting checks

3. **Before implementing any feature:**
   - Check `.cursorrules` for relevant guidelines
   - Verify accessibility requirements are met
   - Ensure code follows TypeScript strict mode
   - Use Tailwind CSS utility classes (custom colors: `primary` #104927, `accent` #00bf62)
   - Follow component naming conventions (UiButton, LayoutHeader, etc.)
   - Use fonts: Lexend Deca (headings) and Atkinson Hyperlegible (body)

4. **Code quality requirements:**
   - Run `pnpm lint` and `pnpm typecheck` before committing
   - Pre-commit hooks will automatically check code quality
   - Never commit code with linting errors
   - All interactive elements must be minimum 44x44px (touch-friendly)
   - All text must meet WCAG AAA contrast ratios (7:1 minimum)

5. **Project structure:**
   - Components: `components/layout/` and `components/ui/`
   - Pages: `pages/`
   - Composables: `composables/`
   - Stores: `stores/`
   - Content: `content/events/` (Nuxt Content)
   - Migration docs: `migration-guide/`

6. **When making changes:**
   - Always maintain accessibility standards
   - Follow the existing code patterns and conventions
   - Update relevant documentation if needed
   - Test that `pnpm build` succeeds
   - Ensure pre-commit hooks will pass

Please acknowledge that you've read and understood these standards before proceeding with any implementation.
```

---

## Quick Reference Checklist

Before implementing any feature, ensure:

- [ ] Read `.cursorrules` for project standards
- [ ] Read `README.md` for project overview
- [ ] Read plan file for implementation context
- [ ] Check accessibility requirements (WCAG AAA)
- [ ] Verify code quality standards (linting, typechecking)
- [ ] Follow component naming conventions
- [ ] Use correct fonts and colors
- [ ] Ensure touch-friendly interactive elements (44x44px)
- [ ] Test build succeeds (`pnpm build`)
- [ ] Pre-commit hooks will pass

---

## Key Files to Reference

1. **`.cursorrules`** - Primary source of truth for all project standards
2. **`README.md`** - Project documentation and setup
3. **`/Users/brown/.cursor/plans/ofald_website_revamp_7f33a840.plan.md`** - Complete project plan
4. **`ACCESSIBILITY_IMPLEMENTATION.md`** - Accessibility details
5. **`migration-guide/CONTENT_MIGRATION_GUIDE.md`** - Content migration reference
6. **`.lintstagedrc.js`** - Pre-commit hook configuration
7. **`package.json`** - Available scripts and dependencies

---

## Important Reminders

- **Accessibility is non-negotiable** - All features must be WCAG AAA compliant
- **Code quality is enforced** - Pre-commit hooks prevent broken commits
- **TypeScript strict mode** - All code must be properly typed
- **Consistency matters** - Follow existing patterns and conventions
- **Documentation** - Update docs when adding features
