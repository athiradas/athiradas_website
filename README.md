# Athira Das - Personal Portfolio Website

A modern, dark-themed personal portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Modern Dark Theme**: Inspired by sarah.dev and brittanychiang.com
- **Responsive Design**: Mobile-first approach with smooth animations
- **Blog System**: Markdown-based blog with syntax highlighting
- **SEO Optimized**: Comprehensive metadata, OpenGraph, and structured data
- **Performance**: Built with Next.js 14 App Router for optimal performance

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: Markdown (gray-matter, remark, rehype)
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Build for production:

```bash
npm run build
```

Start production server:

```bash
npm start
```

## Content Management

### Adding Blog Posts

1. Create a new `.md` file in `content/blog/`
2. Add frontmatter with required fields:

```markdown
---
title: "Your Post Title"
description: "Brief description"
date: "2024-01-15"
author: "Athira Das"
tags: ["tag1", "tag2"]
featured: true
---

Your content here...
```

### Updating Experience

Edit `content/experience.ts` to update your work history.

### Updating Coaching Information

Edit `content/coaching.ts` to update coaching details.

## Customization

### Profile Photo

Replace `public/images/profile.jpg` with your professional photo.

### Social Links

Update social media URLs in `components/layout/SocialLinks.tsx`.

### Resume

Add your resume PDF to `public/resume.pdf`.

### Colors

Modify the color scheme in `tailwind.config.ts`.

## Deployment

### Deploy to Vercel

The easiest way to deploy is with Vercel:

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and deploy

### Environment Variables

Update the domain in:
- `app/layout.tsx` (metadata.openGraph.url)
- `app/sitemap.ts`
- `app/robots.ts`

## Project Structure

```
athiradas_website/
├── app/                    # Next.js app directory
│   ├── blog/              # Blog pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/
│   ├── ui/                # Reusable UI components
│   ├── sections/          # Page sections
│   ├── layout/            # Layout components
│   └── blog/              # Blog components
├── content/
│   ├── blog/              # Markdown blog posts
│   ├── experience.ts      # Experience data
│   └── coaching.ts        # Coaching info
├── lib/                   # Utility functions
├── public/               # Static assets
└── types/                # TypeScript types
```

## SEO

- Sitemap: Automatically generated at `/sitemap.xml`
- Robots.txt: Automatically generated at `/robots.txt`
- Structured Data: JSON-LD schema for Person
- OpenGraph: Social media preview images

## Performance

- Image optimization with Next.js Image
- Font optimization with next/font
- Static generation for blog posts
- Code splitting and lazy loading

## License

All rights reserved.

## Contact

- Website: [athiradas.com](https://athiradas.com)
- LinkedIn: [athiradas](https://www.linkedin.com/in/athiradas)
- Email: [Your email]

---

Built with ❤️ using Next.js and Tailwind CSS
