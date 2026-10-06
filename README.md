# MENTISARA — Production-Ready Mental Health & Psychotherapy Platform

Welcome to the complete production-grade website redesign and rebrand for **Mentisara** (`mentisara.in`).

---

## 1. Project Architecture & Overview

Mentisara is a person-centred, compassionate psychotherapy practice offering structured online psychological care, cognitive behavioural therapy (CBT), and emotional resilience training.

### Key Highlights Built:
- **Calm, High-End Visual Identity**: Tailored warm neutral and deep forest green palette (`#1E3A2F`, `#FAF9F5`, `#C87A57`) with editorial typography (Playfair Display + Plus Jakarta Sans).
- **100% Mobile-First Responsive Design**: Optimized from 320px mobile screens up to 4K displays.
- **Reliable Intake System**: Full validation, anti-spam honeypot, server-side notification processing, reference IDs, and user confirmation state to solve previous submission failures.
- **Dynamic Content Layer**: Dedicated models for services, workshops, resources/articles, testimonials, and SEO structured schemas.
- **Interactive WhatsApp Floating Widget**: Auto-prefills custom inquiries with instant click-to-chat.
- **Razorpay Online Payment Ready**: Integrated order creation and HMAC-SHA256 signature verification architecture.
- **SEO & Social Graph**: Dynamic `sitemap.xml`, `robots.txt`, OpenGraph tags, and MedicalBusiness/FAQ Schema.org JSON-LD.

---

## 2. Directory Structure

```
mentisara/
├── app/
│   ├── api/
│   │   ├── appointment/route.ts      # Intake application validation & email dispatch
│   │   ├── contact/route.ts          # General inquiry handler
│   │   └── payment/
│   │       ├── create-order/route.ts # Razorpay order creation
│   │       └── verify/route.ts       # Razorpay HMAC signature verification
│   ├── about/page.tsx                # About Mentisara, clinical pillars & approach
│   ├── book-appointment/page.tsx     # Intake application & scheduling flow
│   ├── contact/page.tsx              # Contact details, map placeholder & inquiry form
│   ├── privacy-policy/page.tsx       # Privacy & data protection policy (client review)
│   ├── terms-and-conditions/page.tsx # Terms of service & crisis helpline disclaimer
│   ├── resources/
│   │   ├── page.tsx                  # Psychoeducation & blog with search & category filters
│   │   └── [slug]/page.tsx           # Dynamic article detail pages
│   ├── services/
│   │   ├── page.tsx                  # Core services catalog
│   │   └── [slug]/page.tsx           # Individual service detail pages
│   ├── workshops/page.tsx            # Group psychoeducation programs & registration
│   ├── globals.css                   # Global styles & design tokens
│   ├── layout.tsx                    # Root layout with Header, Footer, WhatsApp button & SEO
│   ├── not-found.tsx                 # Custom 404 page
│   ├── page.tsx                      # High-converting homepage
│   ├── robots.ts                     # Search engine crawler directives
│   └── sitemap.ts                    # Dynamic XML sitemap generator
├── components/
│   ├── appointment/
│   │   ├── AppointmentForm.tsx       # Multi-step intake form with validation
│   │   └── PaymentModal.tsx          # Razorpay payment popup
│   ├── home/
│   │   ├── HeroSection.tsx           # Empathetic headline, trust tags & CTAs
│   │   ├── TrustStrip.tsx            # 4 core value props
│   │   ├── AboutPreview.tsx          # "Understanding You Beyond the Surface"
│   │   ├── ServicesGrid.tsx          # 3 core factual services
│   │   ├── ApproachSection.tsx       # 4-step therapy journey
│   │   ├── ValuesSection.tsx         # 6 core practice values
│   │   ├── TestimonialSection.tsx    # Anonymized client reflections
│   │   ├── ResourcePreview.tsx       # Curated articles & insights
│   │   └── AppointmentCTA.tsx        # High-converting footer banner
│   ├── layout/
│   │   ├── Header.tsx                # Responsive navigation with mobile drawer
│   │   ├── Footer.tsx                # Comprehensive footer with legal & contact info
│   │   ├── WhatsAppButton.tsx        # Floating WhatsApp widget
│   │   └── Breadcrumbs.tsx           # Page breadcrumb component
│   └── ui/
│       ├── Accordion.tsx             # Collapsible FAQ and detail views
│       ├── Alert.tsx                 # Status notifications
│       ├── Badge.tsx                 # Status and category badges
│       ├── Button.tsx                # Accessible multi-variant buttons
│       ├── Card.tsx                  # Rounded container components
│       ├── Input.tsx                 # Validated text inputs
│       ├── Modal.tsx                 # Accessible dialog component
│       ├── Select.tsx                # Dropdowns
│       └── Textarea.tsx              # Multiline text areas
├── lib/
│   ├── analytics.ts                  # Google Analytics GA4 event dispatcher
│   ├── resources-data.ts             # Blog posts / resource repository
│   ├── services-data.ts              # Clinical services definitions & FAQs
│   ├── site-config.ts                # Site settings, contact info, SEO schemas
│   ├── testimonials-data.ts          # Client feedback data
│   ├── utils.ts                      # Utility functions (cn, date, WhatsApp URL)
│   └── workshops-data.ts             # Workshop programs catalog
├── types/
│   └── index.ts                      # TypeScript interfaces
├── .env.example                      # Documented environment variables
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## 3. Environment Variables Configuration

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

### Key Environment Variables:

| Variable | Description | Example / Default |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical website domain | `https://www.mentisara.in` |
| `CONTACT_EMAIL` | Destination email for appointment & contact submissions | `contact@mentisara.in` |
| `EMAIL_SERVICE_API_KEY` | Resend / SendGrid API Key for forwarding intake applications | `re_123456789` |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp number with country code (no `+` or spaces) | `919876543210` |
| `NEXT_PUBLIC_RAZORPAY_KEY_ID` | Razorpay Key ID (Test or Live) | `rzp_live_...` |
| `RAZORPAY_KEY_SECRET` | Razorpay Secret Key (kept secure on server) | `your_secret_here` |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 ID | `G-XXXXXXXXXX` |

---

## 4. How to Run Locally

1. **Install dependencies**:
   ```bash
   npm install --legacy-peer-deps
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Validate production build**:
   ```bash
   npm run build
   npm run start
   ```

---

## 5. How to Deploy to Production (e.g. Vercel)

1. Push this repository to GitHub / GitLab.
2. In [Vercel](https://vercel.com):
   - Click **Add New Project** → Import repository.
   - Set Framework Preset to **Next.js**.
   - Under **Environment Variables**, paste all keys from `.env.example`.
   - Click **Deploy**.

---

## 6. How to Connect the Existing `mentisara.in` Domain

To retain `www.mentisara.in` without downtime:
1. In your Vercel project settings:
   - Navigate to **Settings** → **Domains**.
   - Add `mentisara.in` and `www.mentisara.in`.
2. In your DNS Provider (GoDaddy / Namecheap / Cloudflare / Google Domains):
   - **A Record**: Host `@` → `76.76.21.21`
   - **CNAME Record**: Host `www` → `cname.vercel-dns.com`
3. SSL Certificates will auto-provision automatically within 5 minutes.

---

## 7. How Email Submission Works (Fixing the Previous Issue)

The previous website failed because application submissions were not reliably captured and delivered. Mentisara now uses a 4-tier intake process:

1. **Client-side & Server-side Validation**: Verifies name, valid email format, telephone number, service, and consent before submission.
2. **Anti-Spam Honeypot**: Silently discards automated bot traffic without blocking genuine users.
3. **Structured API Endpoint** (`/app/api/appointment/route.ts`):
   - Formats complete intake data (client name, contact preference, preferred date/time slot, and primary concerns).
   - Generates a unique reference ID (e.g. `MTS-123456`).
   - Dispatches formatted HTML notification directly to `CONTACT_EMAIL` via Resend / SMTP API.
4. **Transparent Client Response**: Displays exact reference number and next steps without giving false promises of immediate automated confirmation.

---

## 8. How to Configure WhatsApp

The floating WhatsApp button and consultation links dynamically construct a prefilled message.
- To update the target WhatsApp number, edit `NEXT_PUBLIC_WHATSAPP_NUMBER` in your `.env.local` or hosting provider environment settings.

---

## 9. How to Configure Razorpay Payment

- Set `NEXT_PUBLIC_RAZORPAY_KEY_ID` and `RAZORPAY_KEY_SECRET` in `.env.local`.
- If set to default test mode, the system operates in test simulation mode, verifying the checkout lifecycle without charging real money.
- When live credentials are added, the checkout modal seamlessly processes UPI, Credit/Debit cards, and NetBanking.

---

## 10. How to Update Website Content & Services

All core practice content is separated from the UI logic for easy maintenance:
- **Services & Clinical Focus**: [`lib/services-data.ts`](file:///c:/Users/Lenovo/Desktop/Mentisara/lib/services-data.ts)
- **Workshops & Group Programs**: [`lib/workshops-data.ts`](file:///c:/Users/Lenovo/Desktop/Mentisara/lib/workshops-data.ts)
- **Blog Articles & Resources**: [`lib/resources-data.ts`](file:///c:/Users/Lenovo/Desktop/Mentisara/lib/resources-data.ts)
- **Testimonials**: [`lib/testimonials-data.ts`](file:///c:/Users/Lenovo/Desktop/Mentisara/lib/testimonials-data.ts)
- **Contact & Practice Hours**: [`lib/site-config.ts`](file:///c:/Users/Lenovo/Desktop/Mentisara/lib/site-config.ts)

---

## 11. Remaining Client Information Required Before Launch

1. **Email Delivery Provider API Key**: Create a free/pro account on [Resend.com](https://resend.com) and add the API key to `EMAIL_SERVICE_API_KEY`.
2. **Real WhatsApp Business Number**: Provide the client's official WhatsApp number for `NEXT_PUBLIC_WHATSAPP_NUMBER`.
3. **Razorpay Live Credentials**: If online payments are desired upfront, provide `RAZORPAY_KEY_ID` and `RAZORPAY_KEY_SECRET`.
4. **Google Analytics 4 Measurement ID**: Provide `G-XXXXXXXXXX` for tracking intake submissions and visitor metrics.
5. **Therapist / Team Profiles (Optional)**: If individual practitioner bios are desired on the About page in the future.
6. **Real Client Testimonials (Optional)**: Replace initial sample placeholders in `lib/testimonials-data.ts`.
