# Content Migration Guide

This document serves as a reference for migrating content from the original website (stored in `crawled-website/`) to the new Nuxt.js website.

## Crawled Website Files

The `crawled-website/` folder contains HTML snapshots of all pages from the original website:

- `index.html` - Home page
- `about-us.html` - About Us page
- `about-learning-disability.html` - Learning Disability information page
- `ofald-pathways.html` - OFALD Pathways page
- `ofald-team.html` - Team page
- `vacancies-at-ofald.html` - Vacancies page
- `upcoming-events-at-ofald.html` - Events page
- `contact-us.html` - Contact page
- `privacy-policy.html` - Privacy Policy
- `legal-notice.html` - Legal Notice

## Content Verification Checklist

Use this checklist to verify all content has been migrated:

### Home Page (`pages/index.vue`)
- [x] Hero section with mission statement
- [x] Statistics (20, 200, 15)
- [x] About Olubukola Foundation section
- [x] "Who do we work with?" section
- [x] Services list
- [x] Key Initiatives (4 cards)
- [x] Health Outreach, Job Opportunities, Trainings
- [x] OFALD Research Institute section
- [x] Get Involved call-to-action

### About Page (`pages/about.vue`)
- [x] Foundation description
- [x] Mission statement
- [x] Values section
- [x] Operating hours

### Learning Disability Page (`pages/learning-disability.vue`)
- [x] Introduction to learning disabilities
- [x] What is a Learning Disability?
- [x] What is Autism?
- [x] Types of learning disabilities (Down syndrome, Cerebral Palsy, etc.)
- [x] How OFALD helps

### Pathways Page (`pages/pathways.vue`)
- [x] Educational Pathway
- [x] Skills Acquisition Pathway
- [x] Healthcare Pathway
- [x] Employment Pathway
- [x] Who can access pathways
- [x] How to get started

### Team Page (`pages/team.vue`)
- [x] Team description
- [x] Commitment to inclusion
- [x] Partners (healthcare, educational, research, community)
- [x] Join our team section

### Vacancies Page (`pages/vacancies.vue`)
- [x] Volunteer positions
- [x] Staff positions
- [x] Professional roles
- [x] Why work at OFALD
- [x] How to apply
- [x] Training opportunities

### Events Page (`pages/events.vue`)
- [x] Events listing (using Nuxt Content)
- [x] Event categories
- [x] Stay connected section
- [x] Dynamic event pages (`pages/events/[...slug].vue`)

### Contact Page (`pages/contact.vue`)
- [x] Contact information (phone, email, address)
- [x] Operating hours
- [x] Contact form
- [x] Ways to get involved

### Privacy Policy (`pages/privacy.vue`)
- [x] Introduction
- [x] Information we collect
- [x] How we use information
- [x] Data storage and security
- [x] Your rights
- [x] Contact information

### Legal Notice (`pages/legal.vue`)
- [x] Organization information
- [x] Website usage
- [x] Intellectual property
- [x] Limitation of liability
- [x] External links
- [x] Governing law

## Key Content Elements to Verify

### Contact Information
- **Telephone**: +2347031149191
- **Email**: info@ofald.net
- **Address**: Lagos, Ibadan, Osogbo, Abuja, Nigeria

### Operating Hours
- **Mon – Fri**: 09:00 – 18:00
- **Saturday**: 10:00 – 16:00
- **Sunday**: Closed

### Statistics
- **20**: Proposed No. of people to be empowered in 2026
- **200**: Trainings to be delivered
- **15**: Nationwide Community based awareness raising events

### Services Offered
1. Bringing quality and flexible healthcare and support
2. Research into Learning Disability and Autism in Nigeria
3. Starting a learning disability register in Nigeria
4. Working to raise awareness to reduce stigmatization
5. Day Centres for young people with autism and Learning disability

### Key Initiatives
1. Specialised Educational Programs
2. Skills Acquisition Training
3. Community Awareness Campaigns
4. Collaborations and Partnerships

### Target Audience
- Young people with learning disabilities (14-21 years)
- Young people with autism (14-21 years)
- Parents of young people with autism and learning disabilities

## Assets to Migrate

### Images
- Logo files → `public/images/logo/`
- Event photos → `public/images/events/`
- General images → `public/images/`

### Other Assets
- Favicon → `public/favicon.ico`
- Any PDFs or documents → `public/documents/`

## Notes

- All text content has been migrated from the original website
- The new website uses a modern, clean design with Tailwind CSS
- Content is organized in a more structured, accessible way
- SEO has been optimized with proper meta tags
- The website is fully responsive and mobile-friendly

## Next Steps

1. Review each page against the original HTML files
2. Extract and add any missing images/assets
3. Verify all contact information is correct
4. Test the contact form with actual backend integration
5. Review and update any content that may have changed
6. Add any additional content or sections as needed
