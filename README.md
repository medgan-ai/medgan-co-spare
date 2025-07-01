# MedGAN - AI-Powered Innovation Platform

A modern, beautiful React web application showcasing AI solutions with a stunning purple-blue color palette.

## 🎨 Color Palette

This website uses a beautiful color scheme from [ColorHunt](https://colorhunt.co/palette/1230ae6c48c5c68fe6fff7f7):

- **Cream** (`#FFF7F7`) - Light background and subtle elements
- **Light Purple** (`#C68FE6`) - Secondary highlights and accents
- **Purple** (`#6C48C5`) - Primary interactive elements
- **Dark Blue** (`#1230AE`) - Primary buttons and strong accents

## �️ Database Integration

This application is fully integrated with **Supabase** for backend functionality:

### Database Tables

- **newsletter_subscriptions** - Email newsletter signups
- **contact_submissions** - Contact form submissions  
- **testimonials** - Client testimonials and reviews
- **website_stats** - Real-time website statistics
- **page_views** - Analytics and page tracking
- **blog_posts** - Blog content management
- **job_postings** - Career opportunities
- **job_applications** - Job application submissions
- **case_studies** - Portfolio case studies
- **admin_users** - Administrative user management

### Features with Database Integration

- ✅ **Newsletter Subscription** - Stores emails in database
- ✅ **Contact Forms** - Saves inquiries to database
- ✅ **Dynamic Testimonials** - Fetches client reviews from database
- ✅ **Live Statistics** - Real-time stats counter with database updates
- ✅ **Page Analytics** - Tracks page views and user behavior
- 🔄 **Fallback System** - Uses static data if database is unavailable

### Environment Setup

1. Copy the environment template:
   ```bash
   cp .env.example .env
   ```

2. Update the environment variables with your Supabase credentials:
   ```bash
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

## �🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher) or Bun
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd medgan-co-spare
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:8080](http://localhost:8080)

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful UI components
- **Radix UI** - Accessible primitives
- **Supabase** - Backend services
- **Google Generative AI** - AI integration
- **React Query** - Data fetching
- **Lucide React** - Icons

## 🎨 Design System

### Color Usage

- **Primary Actions**: Dark Blue (`#1230AE`)
- **Secondary Actions**: Purple (`#6C48C5`)
- **Highlights**: Light Purple (`#C68FE6`)
- **Backgrounds**: Cream (`#FFF7F7`)

### Components

- Glass morphism effects with purple accents
- Gradient backgrounds using the color palette
- Hover states with smooth transitions
- Modern typography with Inter font family

## 📱 Features

- Responsive design for all devices
- Dark/light mode support
- Smooth animations and transitions
- AI-powered chatbot integration
- Modern glass morphism UI effects
- SEO optimized

## 🌐 Live Demo

The application runs on `http://localhost:8080` in development mode.

## 📝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
