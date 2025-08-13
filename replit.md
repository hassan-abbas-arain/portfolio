# Overview

This is a comprehensive professional portfolio website for Hassan Abbas, an AI Engineer and Machine Learning Specialist. The application is a full-stack web application built with React frontend and Express.js backend, showcasing professional experience, projects, skills, certifications, and soft skills in artificial intelligence and machine learning. The portfolio includes contact functionality, CV download capability, and a modern dark-themed design with updated content from Hassan's latest CV.

## Recent Updates (January 2025)
- Updated professional photo to latest version
- Enhanced experience section with detailed project descriptions from current role at Teknoloje Solutions
- Added comprehensive certificates section showcasing 5+ professional certifications
- Included soft skills section highlighting professional qualities beyond technical expertise
- Updated skills section with latest technologies including LangChain, RAG, Vector Embeddings, FAISS
- Enhanced projects section with 4 major projects including detailed technology stacks
- Updated CV download endpoint to serve the most recent CV version
- Added SEO optimization with proper meta tags and descriptions
- Enhanced footer with updated copyright year and professional title

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **UI Components**: Extensive use of shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with a dark theme design system using CSS custom properties
- **State Management**: TanStack React Query for server state management
- **Routing**: Wouter for client-side routing (lightweight alternative to React Router)
- **Form Handling**: React Hook Form with Zod for form validation

## Backend Architecture
- **Runtime**: Node.js with Express.js web framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful endpoints for contact form submission and CV download
- **Request Logging**: Custom middleware for API request/response logging
- **Error Handling**: Centralized error handling middleware
- **File Serving**: Static file serving for CV downloads

## Development Architecture
- **Build System**: Vite for frontend bundling with custom aliases and asset handling
- **Development Server**: Hot module replacement (HMR) with custom Vite integration
- **TypeScript**: Strict TypeScript configuration with path mapping for clean imports
- **Code Quality**: ESM modules throughout the codebase for modern JavaScript standards

## Database Schema Design
The application includes Drizzle ORM configuration for PostgreSQL with a basic user schema containing:
- User ID (UUID primary key)
- Username (unique text field)  
- Password (text field)
- Zod schema validation for type safety

The database setup suggests future authentication features, though currently the portfolio operates with static content and form submissions.

## UI/UX Design System
- **Design Language**: Modern, professional dark theme with blue accent colors
- **Component Library**: Comprehensive shadcn/ui components including forms, dialogs, navigation, and layout components
- **Typography**: Multiple font families including Inter, DM Sans, Fira Code, and Geist Mono
- **Responsive Design**: Mobile-first approach with Tailwind CSS responsive utilities
- **Accessibility**: Radix UI primitives ensure proper ARIA attributes and keyboard navigation

# External Dependencies

## Core Framework Dependencies
- **React Ecosystem**: React 18+ with TypeScript, React DOM, and React Query for state management
- **Build Tools**: Vite for development and build processes, esbuild for server bundling
- **Backend Framework**: Express.js with TypeScript support via tsx

## UI and Styling
- **Component Library**: Extensive shadcn/ui component collection built on Radix UI
- **Styling**: Tailwind CSS with PostCSS for processing
- **Icons**: Font Awesome for icons and Lucide React for component icons
- **Animations**: Framer Motion integration through Radix UI components

## Database and ORM
- **Database**: PostgreSQL with Neon serverless database driver
- **ORM**: Drizzle ORM with Drizzle Kit for migrations and schema management
- **Validation**: Zod for runtime type validation and schema definition

## Development Tools
- **Replit Integration**: Custom Replit plugins for development environment integration
- **Session Management**: Connect-pg-simple for PostgreSQL session storage (configured but not actively used)
- **Utility Libraries**: clsx and class-variance-authority for conditional styling, date-fns for date handling

## Third-Party Services
- **Font Loading**: Google Fonts for typography (Architects Daughter, DM Sans, Fira Code, Geist Mono)
- **External Scripts**: Replit development banner for environment detection
- **Asset Management**: Custom asset handling through Vite with attached_assets directory for CV storage