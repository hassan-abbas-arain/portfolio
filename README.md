# Hassan Abbas - AI Engineer Portfolio

A comprehensive professional portfolio website showcasing Hassan's expertise in AI engineering, machine learning, and computer vision.

## Features

- **Modern Design**: Dark-themed responsive design with smooth animations
- **Professional Sections**: Hero, About, Skills, Projects, Experience, Certifications, Soft Skills
- **Contact Form**: Functional contact form with backend integration
- **CV Download**: Direct download of latest CV/resume
- **SEO Optimized**: Proper meta tags and Open Graph integration

## Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for build tooling and development server
- **Tailwind CSS** for styling
- **shadcn/ui** component library
- **Wouter** for client-side routing
- **TanStack React Query** for state management
- **React Hook Form** with Zod validation

### Backend
- **Express.js** with TypeScript
- **RESTful API** endpoints
- **File serving** for CV downloads
- **CORS enabled** for development

## Getting Started

### Prerequisites
- Node.js 18 or higher (Download from: https://nodejs.org/)
- npm (comes with Node.js)

### Installation

#### Option 1: Easy Windows Setup (Recommended)
1. **Download Node.js** from https://nodejs.org/ and install it
2. **Extract/copy the portfolio folder** to your desired location
3. **Double-click `install-dependencies.bat`** to install dependencies
4. **Double-click `start-dev.bat`** to start the development server
5. **Open your browser** to `http://localhost:5000`

#### Option 2: Manual Setup
1. **Open Command Prompt or PowerShell** in the project folder
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Start the development server**
   ```bash
   npm run dev
   ```
4. **Open your browser** to `http://localhost:5000`

### Available Scripts

- `npm run dev` - Start development server (both frontend and backend)
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/         # Page components
│   │   ├── lib/           # Utility libraries
│   │   └── hooks/         # Custom React hooks
│   └── index.html         # HTML template
├── server/                # Backend Express server
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API routes
│   └── vite.ts           # Vite integration
├── shared/               # Shared TypeScript types
├── attached_assets/      # Static assets (CV, images)
└── package.json         # Dependencies and scripts
```

## Development

### Running in VS Code (Windows)

1. **Install VS Code** from https://code.visualstudio.com/
2. **Open the project folder in VS Code** (File > Open Folder)
3. **Install recommended extensions** (VS Code will suggest them automatically):
   - ES7+ React/Redux/React-Native snippets
   - Tailwind CSS IntelliSense
   - TypeScript Importer
   - Prettier - Code formatter
   - ESLint

4. **Open the integrated terminal** (Ctrl + `)
5. **Run the development command**:
   ```bash
   npm install
   npm run dev
   ```

### Windows-Specific Files
- `install-dependencies.bat` - Double-click to install all dependencies
- `start-dev.bat` - Double-click to start the development server

### Environment Setup

The project uses:
- **TypeScript** for type safety
- **ESM modules** throughout
- **Path aliases** configured in `tsconfig.json`
- **Hot Module Replacement** for fast development

### API Endpoints

- `POST /api/contact` - Contact form submission
- `GET /api/download-cv` - Download CV file

## Customization

### Adding New Sections
1. Create component in `client/src/components/`
2. Import and add to `client/src/pages/home.tsx`
3. Update navigation in `client/src/components/navigation.tsx`

### Updating Content
- **Personal Info**: Update `client/src/components/hero.tsx`
- **Skills**: Modify `client/src/components/skills.tsx`
- **Projects**: Edit `client/src/components/projects.tsx`
- **Experience**: Update `client/src/components/experience.tsx`

### Styling
- **Colors**: Modify CSS variables in `client/src/index.css`
- **Components**: Use Tailwind classes and shadcn/ui components
- **Responsive**: Mobile-first responsive design built-in

## Deployment

The project is configured for easy deployment on platforms like:
- **Replit** (current setup)
- **Vercel**
- **Netlify**
- **Heroku**

## Assets

- **CV**: Place latest CV in `attached_assets/` directory
- **Images**: Professional photos and project screenshots
- **Icons**: Font Awesome icons used throughout

## Contact

For questions about this portfolio:
- **Email**: hassanabbas2975@gmail.com
- **LinkedIn**: [hassan-abbas-arain](https://linkedin.com/in/hassan-abbas-arain)
- **GitHub**: [hassan-abbas-arain](https://github.com/hassan-abbas-arain)

---

© 2025 Hassan Abbas. All rights reserved.