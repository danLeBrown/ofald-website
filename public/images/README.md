# Images Directory

This directory contains static images for the OFALD website.

## Structure

- `events/` - Event images and photos
- `logo/` - Logo files and branding assets

## Asset Migration

Images from the original website should be placed in the appropriate subdirectories:
- Event images: `public/images/events/`
- Logo and branding: `public/images/logo/`
- General images: `public/images/`

## Usage in Components

Images in the `public/` directory can be referenced directly:
```vue
<img src="/images/events/example.jpg" alt="Event" />
```
