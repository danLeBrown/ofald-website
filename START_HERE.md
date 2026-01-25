# 🚀 Starting a New Agent Session?

## Quick Start Prompt

Copy and paste this into a new agent session:

```
I'm working on the OFALD Website Revamp project. Before implementing any features, please:

1. Read `.cursorrules` - Contains all project guidelines, accessibility requirements (WCAG AAA), code quality standards, component conventions, and development workflow

2. Read `README.md` - Project overview, tech stack, features, and setup instructions

3. Read `/Users/brown/.cursor/plans/ofald_website_revamp_7f33a840.plan.md` - Complete project plan with implementation details

4. Read `ACCESSIBILITY_IMPLEMENTATION.md` - Full accessibility implementation (if making UI changes)

5. Understand that:
   - WCAG AAA accessibility compliance is MANDATORY
   - Pre-commit hooks enforce code quality (ESLint, Prettier, TypeScript)
   - All commits must pass linting/formatting checks
   - Use Tailwind CSS with custom colors: primary (#104927), accent (#00bf62)
   - Fonts: Lexend Deca (headings), Atkinson Hyperlegible (body)
   - All interactive elements must be minimum 44x44px
   - Follow component naming: UiButton, LayoutHeader, etc.

6. Before implementing:
   - Check `.cursorrules` for relevant guidelines
   - Verify accessibility requirements
   - Ensure TypeScript strict mode compliance
   - Test that `pnpm build` succeeds

Please acknowledge you've read these standards before proceeding.
```

## Key Files Reference

- **`.cursorrules`** - Project standards and guidelines ⭐ PRIMARY SOURCE
- **`README.md`** - Project documentation
- **Plan file** - `/Users/brown/.cursor/plans/ofald_website_revamp_7f33a840.plan.md`
- **`ACCESSIBILITY_IMPLEMENTATION.md`** - Accessibility details
- **`migration-guide/`** - Content migration documentation

## Critical Requirements

✅ **Accessibility**: WCAG AAA compliance mandatory  
✅ **Code Quality**: Pre-commit hooks prevent broken commits  
✅ **TypeScript**: Strict mode enabled  
✅ **Standards**: Follow `.cursorrules` for all conventions  

---

*This file helps new agent sessions understand the project context and standards.*
