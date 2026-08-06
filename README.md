# Atharva Dengre — Next.js 14 Portfolio

Sleek, high-performance portfolio website built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion** for Atharva Dengre — SAP S/4HANA MM & MDG Consultant @ IBM.

---

## ⚡ Tech Stack & Architecture

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (`.tsx` / `.ts`)
- **Styling**: Tailwind CSS + Custom CSS Variables (`globals.css`)
- **Animations**: Framer Motion & Client Hooks (`useEffect`, `IntersectionObserver`)
- **Fonts**: `next/font/google` (`Outfit`, `Archivo Black`, `Inter`, `JetBrains Mono`)
- **Deployment**: Zero-config deployment on Vercel

---

## 📂 Project Structure

```text
portfolio-website/
├── app/
│   ├── globals.css         # Global Tailwind directives & glassmorphic utilities
│   ├── layout.tsx          # Root layout with Google fonts & metadata
│   └── page.tsx            # Main page assembling all components
├── components/
│   ├── Nav.tsx             # Sticky navigation header & mobile drawer
│   ├── Hero.tsx            # Typewriter, stats counter, 3D tilt, telemetry card
│   ├── About.tsx           # Enterprise bio, toolbelt chips, education subcard
│   ├── Experience.tsx      # S2P & P2P operations timeline & 4 capability cards
│   ├── Methodology.tsx     # SAP Activate (Realize, Deploy, Run) & ASAP cards
│   ├── SapAi.tsx           # Multi-agent architecture & live interactive simulator
│   ├── Certifications.tsx  # Filterable credentials grid (SAP, IBM, Red Hat)
│   ├── Skills.tsx          # Animated skill progress meters
│   ├── Projects.tsx        # Projects & initiatives portfolio grid
│   ├── Contact.tsx         # Contact info, FormSubmit form & copy email button
│   ├── Footer.tsx          # Footer component
│   ├── FloatingControls.tsx # Glow toggle & scroll-to-top buttons
│   ├── ToastContainer.tsx  # Global toast notifications dispatcher
│   └── BgCanvas.tsx        # Interactive background particle mesh canvas
├── public/                 # Assets & public files
├── next.config.mjs         # Next.js configuration
├── tailwind.config.ts      # Tailwind color tokens & font configurations
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies & build scripts
```

---

## 🚀 Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run local development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. Test production build locally:
   ```bash
   npm run build
   npm run start
   ```

---

## ☁️ Zero-Config Vercel Deployment

Deploying this project to Vercel requires **zero configuration**:

### Option A: Via Vercel CLI (Fastest)

1. Install Vercel CLI globally (if not installed):
   ```bash
   npm install -g vercel
   ```

2. Run the deployment command in the project root:
   ```bash
   vercel
   ```

3. For production deployment:
   ```bash
   vercel --prod
   ```

---

### Option B: Via GitHub & Vercel Dashboard

1. Push this project folder to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Next.js 14 Portfolio"
   git branch -M main
   git remote add origin https://github.com/AtharvaDengre/portfolio-website.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your `portfolio-website` repository.
4. Keep all default settings (Vercel automatically detects Next.js framework) and click **"Deploy"**.

Your portfolio will be live instantly with global CDN acceleration and SSL certificates!
