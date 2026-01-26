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

## Image Processing

This project uses macOS built-in tools for image processing and optimization. The workflow below documents the standard process for resizing images and generating favicons.

### Prerequisites

- macOS (for `sips` and `identify` commands)
- ImageMagick (optional, for `identify` command) - Install with `brew install imagemagick`
- Or use `sips` which is built into macOS

### Checking Image Properties

Before processing, check the image dimensions and format:

```bash
# Check file type and dimensions (macOS built-in)
file path/to/image.png

# Get detailed dimensions (macOS built-in)
sips -g pixelWidth -g pixelHeight path/to/image.png

# Alternative: Use ImageMagick identify (if installed)
identify path/to/image.png
```

### Resizing Images

Use `sips` (macOS built-in) to resize images while maintaining aspect ratio:

```bash
# Resize to specific height (width auto-adjusts to maintain aspect ratio)
sips -Z 120 path/to/original.png --out path/to/resized.png

# Resize to specific width (height auto-adjusts)
sips -Z 200 path/to/original.png --out path/to/resized.png

# Examples from logo processing:
sips -Z 120 assets/images/original-logo.png --out public/images/logo-navbar.png
sips -Z 80 assets/images/original-logo.png --out public/images/logo-footer.png
```

**Note**: The `-Z` flag resizes to fit within the specified dimension while maintaining aspect ratio.

### Generating Favicons

Create multiple favicon sizes for different devices:

```bash
# Create directory for favicons
mkdir -p public/favicons

# Generate standard favicon sizes
sips -Z 16 assets/images/original-logo.png --out public/favicons/favicon-16x16.png
sips -Z 32 assets/images/original-logo.png --out public/favicons/favicon-32x32.png
sips -Z 48 assets/images/original-logo.png --out public/favicons/favicon-48x48.png

# Generate Apple touch icon (180x180 for iOS)
sips -Z 180 assets/images/original-logo.png --out public/favicons/apple-touch-icon.png

# Copy one size as favicon.ico (browsers will use PNG if .ico not available)
cp public/favicons/favicon-32x32.png public/favicon.ico
```

### Complete Workflow Example

Here's the complete workflow used for processing the logo:

```bash
# 1. Check original image
file assets/images/original-logo.png
sips -g pixelWidth -g pixelHeight assets/images/original-logo.png

# 2. Create output directories
mkdir -p public/images public/favicons

# 3. Generate optimized versions
sips -Z 120 assets/images/original-logo.png --out public/images/logo-navbar.png
sips -Z 80 assets/images/original-logo.png --out public/images/logo-footer.png

# 4. Generate favicons
sips -Z 16 assets/images/original-logo.png --out public/favicons/favicon-16x16.png
sips -Z 32 assets/images/original-logo.png --out public/favicons/favicon-32x32.png
sips -Z 48 assets/images/original-logo.png --out public/favicons/favicon-48x48.png
sips -Z 180 assets/images/original-logo.png --out public/favicons/apple-touch-icon.png

# 5. Create favicon.ico
cp public/favicons/favicon-32x32.png public/favicon.ico
```

### Image Organization

- **Original images**: Store in `assets/images/` (processed by Vite during build)
- **Optimized/public images**: Store in `public/images/` (served as static assets)
- **Favicons**: Store in `public/favicons/` and `public/` root

### Best Practices

1. **Always keep originals**: Never overwrite original images in `assets/images/`
2. **Check dimensions first**: Verify image size before processing
3. **Use appropriate sizes**: 
   - Navbar logos: 100-150px height
   - Footer logos: 60-100px height
   - Favicons: 16x16, 32x32, 48x48, 180x180
4. **Test after resizing**: Verify images display correctly in the browser
5. **Optimize file size**: Consider using tools like `pngquant` or `imagemin` for further optimization if needed

### Alternative Tools (Cross-platform)

If not on macOS, consider:
- **ImageMagick**: `convert input.png -resize 120x output.png`
- **Sharp** (Node.js): Can be added as a dev dependency for automated processing
- **Online tools**: Use services like Squoosh or TinyPNG for optimization

## Deployment

The site can be deployed to any platform that supports Node.js:

- **Vercel**: Automatic deployment from Git
- **Netlify**: Automatic deployment from Git
- **Traditional hosting**: Build with `pnpm build` and serve the `.output` directory

## License

Copyright © OFALD. All rights reserved.
