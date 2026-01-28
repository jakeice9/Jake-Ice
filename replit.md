# replit.md

## Overview

This is a personal portfolio website for Jake Ice, an MBA student focused on Artificial Intelligence. The application is a single-page portfolio featuring sections for About, Skills, Experience, and Contact. The contact form allows visitors to submit messages that are stored in a PostgreSQL database.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Animations**: Framer Motion for scroll animations and entry effects
- **State Management**: TanStack React Query for server state
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript (ESM modules)
- **API Pattern**: RESTful endpoints defined in `shared/routes.ts`
- **Validation**: Zod schemas shared between client and server via `shared/` directory

### Data Storage
- **Database**: PostgreSQL
- **ORM**: Drizzle ORM with drizzle-zod for schema-to-validation integration
- **Schema Location**: `shared/schema.ts` contains all table definitions
- **Migrations**: Managed via `drizzle-kit push`

### Project Structure
- `client/` - React frontend application
- `server/` - Express backend API
- `shared/` - Shared types, schemas, and route definitions
- `script/` - Build scripts

### Key Design Decisions
1. **Shared Schema Pattern**: Database schemas are defined once in `shared/schema.ts` and used by both frontend (for type safety and validation) and backend (for database operations)
2. **Type-Safe API Routes**: Route definitions in `shared/routes.ts` include paths, methods, input schemas, and response schemas for end-to-end type safety
3. **Single Build Output**: Production build bundles server into `dist/index.cjs` and client into `dist/public/`

## External Dependencies

### Database
- **PostgreSQL**: Primary database, connection via `DATABASE_URL` environment variable
- **connect-pg-simple**: Session storage (available but not currently used)

### UI Libraries
- **shadcn/ui**: Pre-built accessible components based on Radix UI primitives
- **Radix UI**: Underlying primitive components for accessibility
- **Lucide React**: Icon library

### Development Tools
- **Vite**: Development server with HMR
- **Replit Plugins**: Runtime error overlay, cartographer, and dev banner for Replit environment