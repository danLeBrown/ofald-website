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
- Run ESLint on staged files
- Format code with Prettier
- Ensure code quality standards

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

The `crawled-website/` folder contains HTML snapshots of the original website pages. These serve as a reference guide for:

- Verifying all content has been migrated
- Extracting specific text or details
- Understanding the original structure
- Finding assets that need to be migrated

See `CONTENT_MIGRATION_GUIDE.md` for a detailed checklist of migrated content.

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
