# K-HACK Development Guidelines

## Build & Development Commands
- `pnpm dev` - Start development server
- `pnpm build` - Build production version
- `pnpm preview` - Preview production build
- `pnpm lint` - Run Biome linter
- `pnpm format` - Format code with Biome

## Tech Stack
- Astro v5.3.0 (framework)
- TypeScript (strict mode)
- Tailwind CSS v4.0.8
- Biome (linting/formatting)

## Code Style Guidelines
- **Formatting**: Use double quotes, tab indentation
- **Components**: PascalCase for components (.astro)
- **Variables**: camelCase for variables and functions
- **Imports**: Keep organized, group related imports
- **Error Handling**: Use fallback mechanisms (e.g., default images) 
- **TypeScript**: Maintain strict typing, avoid `any`
- **CSS**: Use Tailwind classes, maintain responsive design
- **Content**: Support bilingual (Japanese primary) content

## Repository Structure
- `/src/components` - UI components
- `/src/layouts` - Page layouts
- `/src/pages` - Route definitions
- `/src/content` - Blog/news content
- `/src/data` - Structured data (team members, etc.)
- `/src/assets` - Static assets (images)