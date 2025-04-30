# Frontend Intern Project

A modern React application built with Vite, TailwindCSS, and React Router.

## Features

- Fast development with Vite and HMR (Hot Module Replacement)
- Modern UI components with TailwindCSS
- Responsive design
- Client-side routing with React Router
- UI components with Radix UI primitives

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd frontendintern
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the app for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check for code issues

## Project Structure

```
frontendintern/
├── public/            # Static assets
├── src/
│   ├── assets/        # Images, fonts, etc.
│   ├── components/    # Reusable UI components
│   ├── lib/           # Utility functions and helpers
│   ├── screens/       # Main application screens
│   ├── BlogPage/      # Blog page components
│   ├── Categories/    # Category-related components
│   ├── Contact/       # Contact page components
│   ├── App.jsx        # Main application component
│   └── index.jsx      # Entry point
├── index.html         # HTML template
├── vite.config.js     # Vite configuration
├── tailwind.config.js # TailwindCSS configuration
└── package.json       # Project dependencies and scripts
```

## Technologies

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [Radix UI](https://www.radix-ui.com/)

## License

This project is licensed under the MIT License - see the LICENSE file for details.
