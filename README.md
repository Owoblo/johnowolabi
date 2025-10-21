# John Owolabi Personal Site

A classic, minimal personal site built with Next.js 14, TypeScript, and Tailwind CSS. Designed to feel intentional and quiet, not cinematic or flashy.

## Features

- **Minimal Design**: Warm color palette with abundant negative space
- **Responsive Typography**: Fluid type scale using clamp() for optimal readability
- **Accessibility**: WCAG AA compliant with proper focus management and semantic HTML
- **Performance**: Optimized for Core Web Vitals with efficient image loading and font strategies
- **SEO**: Complete meta tags, Open Graph images, and sitemap generation
- **Micro-interactions**: Subtle animations using Framer Motion (150-180ms duration)

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **Typography**: Inter (body) and Fraunces (headings) with system fallbacks
- **Animation**: Framer Motion for subtle micro-interactions
- **Content**: MDX for blog posts and highlights
- **SEO**: next-seo for meta tags and Open Graph

## Design System

### Colors
- Background: `#FAFAF7` (warm white)
- Surface: `#EAE9E4` (soft gray)
- Text: `#111215` (charcoal)
- Accent: `#4C5A3C` (olive)

### Typography
- Headings: Fraunces (serif)
- Body: Inter (grotesk)
- Line height: 1.6-1.7 for optimal readability
- Line length: 70-78 characters

### Spacing
- Scale: 2, 4, 6, 8, 12, 16, 24, 32, 48, 64px
- Generous vertical rhythm between sections

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── highlights/        # Highlights hub and categories
│   ├── journal/           # Journal posts
│   ├── contact/           # Contact page
│   └── og-image/          # Open Graph image generation
├── components/            # Reusable components
│   ├── layout/           # Header, footer, layout components
│   ├── home/             # Home page specific components
│   ├── about/            # About page components
│   ├── highlights/       # Highlights components
│   ├── journal/          # Journal components
│   └── ui/               # Base UI components
├── content/              # MDX content files
│   ├── highlights/       # Highlight category content
│   └── journal/          # Journal post content
├── lib/                  # Utility functions
└── public/               # Static assets
    └── images/           # Image assets
```

## Content Management

- **Journal Posts**: Add new posts in `content/journal/` as MDX files
- **Highlights**: Add new highlight categories in `content/highlights/`
- **Images**: Place images in `public/images/` with descriptive names

## Performance

The site is optimized for Core Web Vitals:
- **LCP**: Optimized images and font loading
- **FID**: Minimal JavaScript and efficient code splitting
- **CLS**: Explicit image dimensions and stable layouts

## Accessibility

- WCAG AA compliant color contrast ratios
- Proper semantic HTML and landmark roles
- Keyboard navigation support
- Screen reader friendly
- Respects `prefers-reduced-motion`

## Deployment

The site is ready for deployment on Vercel, Netlify, or any platform that supports Next.js.

## License

All rights reserved. This is a personal site template.
