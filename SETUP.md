# Setup Instructions

## Quick Start

Follow these steps to get your Spreadsheet Agent Next.js application up and running:

### 1. Install Dependencies

Open your terminal and navigate to the project directory:

```bash
cd "/Users/shubhamlohakare/Desktop/WinningStrategy Website/spreadsheet-agent-nextjs"
npm install
```

This will install all required packages:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- And all necessary development dependencies

### 2. Run Development Server

Once installation is complete, start the development server:

```bash
npm run dev
```

Your application will be available at: **http://localhost:3000**

### 3. Build for Production

When you're ready to deploy, create a production build:

```bash
npm run build
npm start
```

## Deployment to Vercel (Recommended)

Since this matches the WinningStrategy.ai tech stack (which uses Vercel), deployment is straightforward:

### Option 1: Deploy via Vercel CLI

```bash
npm install -g vercel
vercel
```

### Option 2: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Import your repository
5. Vercel will auto-detect Next.js and configure everything
6. Click "Deploy"

Your site will be live in minutes with automatic HTTPS, CDN, and continuous deployment!

## Customization

### Update Colors

Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  primary: {
    DEFAULT: '#14B8A6', // Your primary teal color
    dark: '#0F766E',
  },
  // Add more custom colors
}
```

### Modify Components

All components are in the `components/` directory. Each is a standalone React component that you can easily customize.

### Add New Pages

Create new pages in the `app/` directory. For example:
- `app/about/page.tsx` → `/about` route
- `app/pricing/page.tsx` → `/pricing` route

## Project Architecture

This application follows Next.js 14 best practices:

- **App Router**: Modern routing system with layouts and server components
- **TypeScript**: Full type safety throughout the codebase
- **Tailwind CSS**: Utility-first CSS with custom configurations
- **Framer Motion**: Smooth animations and transitions
- **Component-based**: Modular, reusable components
- **Responsive**: Mobile-first design that works on all devices

## Troubleshooting

### Port Already in Use

If port 3000 is taken, use a different port:

```bash
npm run dev -- -p 3001
```

### Node Version

Ensure you're using Node.js 18 or higher:

```bash
node --version
```

### Clear Cache

If you encounter build issues:

```bash
rm -rf .next node_modules
npm install
npm run dev
```

## Need Help?

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Support](https://vercel.com/support)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

