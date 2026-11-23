# Haram Pak Travel Website

A modern, premium travel website for Haram Pak Pvt Ltd, specializing in Hajj, Umrah, and international travel services from Pakistan.

## Features

### Pages
- **Home**: Hero section, quick inquiry form, services overview, why choose us, FAQs
- **About Us**: Company story, values, and service offerings
- **Umrah Packages**: Filterable package listings with detailed information
- **Hajj Services**: Comprehensive Hajj information and services
- **Hotels**: Accommodation options in Makkah and Madinah
- **Flights**: Flight inquiry form for booking assistance
- **Services**: Additional travel services (international tours, domestic travel, etc.)
- **Gallery**: Image gallery (framework ready for licensed images)
- **Contact**: Multi-channel contact information and inquiry form

### Design
- **Brand Colors**:
  - Deep Emerald Green: #063B32
  - Rich Midnight Green: #062A26
  - Muted Gold: #C5A46D
  - Warm Ivory: #FAF8F3
- Premium, elegant design with Islamic aesthetic
- Fully responsive and mobile-friendly
- Smooth animations and transitions
- Accessible components

### Technology Stack
- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Framer Motion (ready for animations)
- Lucide React icons
- React Hook Form with Zod validation (ready for forms)

### Key Features
- **WhatsApp Integration**: Floating WhatsApp button on all pages
- **Lead Generation**: Contact forms redirect to WhatsApp for direct communication
- **SEO Optimized**: Meta tags, semantic HTML, and proper structure
- **Performance**: Optimized images, code splitting, and static generation
- **Accessibility**: ARIA labels, keyboard navigation, proper contrast

## Getting Started

### Prerequisites
- Node.js 20.9+
- npm or yarn

### Installation

1. Clone the repository:
```bash
cd harampak-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Configuration

### Site Configuration
Edit `/lib/constants.ts` to update:
- Company contact information
- WhatsApp number
- Navigation menu
- Social media links

Set `NEXT_PUBLIC_PILGRIM_PORTAL_URL` to the HTTPS address of the separate portal when it is ready. Until then, `/pilgrim-portal/` directs visitors to booking support. Confirm contact details, current package terms and the scope of the reported success rate before public launch.

## Content Guidelines

### Verified Information Only
- Do not add pricing without verification
- Do not claim specific partnerships or approvals without verification
- All testimonials must be genuine
- Hotel distances and amenities must be confirmed
- Package details should be verified with current offerings

### Image Requirements
- Use only licensed images (see `/cursor/stores/self/internal/image-credits.md`)
- Images should be:
  - High resolution (1600-2400px wide for heroes)
  - Optimized (WebP/AVIF format)
  - Properly attributed
  - Respectful of sacred sites

## Project Structure

```
harampak-website/
├── app/                  # Next.js app directory
│   ├── about/           # About page
│   ├── contact/         # Contact page
│   ├── flights/         # Flight booking page
│   ├── gallery/         # Gallery page
│   ├── hajj/            # Hajj services page
│   ├── hotels/          # Hotels page
│   ├── services/        # Other services page
│   ├── umrah/           # Umrah packages page
│   ├── layout.tsx       # Root layout with header/footer
│   ├── page.tsx         # Homepage
│   └── globals.css      # Global styles
├── components/          # React components
│   ├── home/           # Homepage components
│   ├── layout/         # Layout components (Header, Footer)
│   ├── ui/             # shadcn/ui components
│   └── whatsapp-button.tsx
├── lib/                # Utility functions
│   ├── constants.ts    # Site configuration
│   └── utils.ts        # Helper functions
└── public/             # Static assets
    └── images/         # Image files
```

## Important Notes

### Content Verification
- All company information marked as "pending verification"
- Contact details should be confirmed before launch
- Service offerings should be verified with management
- Pricing and availability information requires confirmation

### No Fake Content
- No placeholder or lorem ipsum text
- No fabricated testimonials or reviews
- No invented statistics or claims
- No copyrighted or watermarked images

### WhatsApp Integration
The site uses WhatsApp as the primary communication channel:
- Floating button on all pages
- Contact forms pre-fill WhatsApp messages
- Package inquiries open WhatsApp with context
- Number configured in `/lib/constants.ts`

## Deployment

For the private review artifact, run:

```bash
HARAM_PAK_STATIC_EXPORT=1 NEXT_PUBLIC_PRIVATE_REVIEW=1 npm run build
```

Deploy `out/` using owner-only access at the hosting provider. The review build also sets noindex. Use the regular build for the approved public deployment, with the appropriate canonical site origin.

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms
The site is a standard Next.js application and can be deployed to:
- Netlify
- AWS Amplify
- Digital Ocean
- Any Node.js hosting

## License
This website is proprietary software developed for Haram Pak Pvt Ltd.

## Support
For technical issues or questions about this website, contact the development team.

For travel inquiries, please use the contact information provided on the website.
