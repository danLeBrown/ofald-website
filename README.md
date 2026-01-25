# OFALD Website Revamp

A modern, accessible website for Olubukola Foundation for Autism and Learning Disability (OFALD), built with Nuxt 3, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Nuxt 3 (Vue 3)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Pinia
- **Content Management**: Nuxt Content
- **Package Manager**: pnpm
- **Bundler**: Vite (built into Nuxt 3)

## Features

- Server-Side Rendering (SSR)
- TypeScript support with strict mode
- Responsive design with Tailwind CSS
- Content management for events via Nuxt Content
- SEO optimized with meta tags and sitemap
- Code quality tools (ESLint, Prettier, Husky)
- Pre-commit hooks for code standards
- **WCAG AAA compliant accessibility** - Full accessibility implementation with:
  - Accessible typography (Lexend Deca + Atkinson Hyperlegible fonts)
  - High contrast mode toggle
  - Calm mode (disable animations)
  - Keyboard navigation support
  - Screen reader optimization
  - Touch-friendly interactive elements (44x44px minimum)
  - Reduced motion support
  - Accessible forms with clear validation

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (install with `npm install -g pnpm`)

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Project Structure

```
olfad-revamp/
├── assets/          # Images, fonts, CSS
├── components/      # Vue components
│   ├── layout/     # Layout components
│   └── ui/         # UI components
├── composables/    # Vue composables
├── content/        # Nuxt Content markdown files
│   └── events/     # Event content
├── layouts/        # Nuxt layouts
├── migration-guide/ # Content migration documentation
│   ├── crawled-website/  # Original website HTML snapshots
│   ├── CONTENT_MIGRATION_GUIDE.md
│   └── CROSS_CHECK_SUMMARY.md
├── pages/          # Route pages
├── public/         # Static assets
├── stores/         # Pinia stores
└── types/          # TypeScript definitions
```

## Code Quality

### Linting

```bash
# Run ESLint
pnpm lint

# Fix ESLint issues
pnpm lint:fix
```

### Formatting

```bash
# Format code with Prettier
pnpm format

# Check formatting
pnpm format:check
```

### Type Checking

```bash
# Run TypeScript type check
pnpm typecheck
```

## Pre-commit Hooks

Husky is configured to run lint-staged on commit, which will:
- Run ESLint on staged files (with auto-fix)
- Format code with Prettier
- Run TypeScript type checking (for .ts and .vue files)
- **Prevent commits** if linting or formatting fails

This ensures that broken code is never committed to the repository.

### Automated Quality Checks

After any file change, the pre-commit hooks automatically:
1. **Lint** all staged `.js`, `.ts`, `.vue` files
2. **Format** all staged files with Prettier
3. **Type check** all staged `.ts` and `.vue` files

You can also run checks manually:
```bash
pnpm check        # Run all checks (lint + typecheck + format check)
pnpm check:fix    # Fix all issues (lint:fix + format)
```

### Cursor IDE Rules

The project includes `.cursorrules` file with comprehensive guidelines for:
- Code quality standards
- Accessibility requirements (WCAG AAA)
- Component conventions
- Development workflow
- File organization
- Tech stack details

This file is committed to the repository and helps maintain consistency across the team. Cursor IDE will automatically reference these rules when providing suggestions.

## Content Management

Events are managed through Nuxt Content. Add new events by creating markdown files in `content/events/`:

```markdown
---
title: Event Title
date: 2026-01-01
time: '10:00 AM'
location: 'Location'
description: 'Event description'
---

Event content here...
```

## Content Migration

The `migration-guide/` folder contains:
- `crawled-website/` - HTML snapshots of the original website pages
- `CONTENT_MIGRATION_GUIDE.md` - Detailed checklist of migrated content
- `CROSS_CHECK_SUMMARY.md` - Summary of content verification

These serve as a reference guide for:
- Verifying all content has been migrated
- Extracting specific text or details
- Understanding the original structure
- Finding assets that need to be migrated

## Accessibility

The website is built with WCAG AAA compliance in mind. Key accessibility features include:

- **Typography**: Lexend Deca (headings) and Atkinson Hyperlegible (body) fonts for maximum readability
- **Color Contrast**: All text meets WCAG AAA contrast ratios (7:1 minimum)
- **Keyboard Navigation**: Full keyboard navigation support with visible focus indicators
- **Screen Readers**: Proper ARIA labels and semantic HTML throughout
- **Accessibility Controls**: Floating controls for Calm Mode and High Contrast Mode
- **Forms**: Accessible form design with clear labels, error messages, and validation
- **Touch Targets**: All interactive elements meet 44x44px minimum size
- **Reduced Motion**: Respects `prefers-reduced-motion` media query

See `ACCESSIBILITY_IMPLEMENTATION.md` for complete details.

## SEO

- All pages include proper meta tags via `useSeoMeta`
- Sitemap available at `/sitemap.xml`
- Robots.txt configured at `/robots.txt`

## Deployment

The site can be deployed to any platform that supports Node.js:

- **Vercel**: Automatic deployment from Git
- **Netlify**: Automatic deployment from Git
- **Traditional hosting**: Build with `pnpm build` and serve the `.output` directory

## License

Copyright © OFALD. All rights reserved.
