# 🧑‍💻 Chace Nielson Portfolio

Welcome to the codebase for **Chace Nielson’s developer portfolio** — a site showcasing my full-stack and game development experience, selected projects, technology stack, and contact information.

Built with **React + Vite** and deployed through **Vercel**.

> 📍 Live site: [chacenielson.com](https://chacenielson.com)

---

## 📑 Table of Contents

* [Technologies Used](#technologies-used)
* [Features](#features)
* [Installation](#installation)
* [Environment Variables](#environment-variables)
* [Running the Project](#running-the-project)
* [Testing the Build](#testing-the-build)
* [Project Structure](#project-structure)
* [Google Analytics](#google-analytics)
* [Contact](#contact)
* [Deployment](#deployment)

---

## Technologies Used

### 🧱 Core

* **React** v19+
* **Vite** v5+
* **Tailwind CSS** v4

### 📦 Libraries

* `react-router-dom` — Routing and modal navigation
* `framer-motion` — Animations and transitions
* `react-ga4` — Google Analytics integration
* `emailjs-com` — Contact form messaging
* `blurhash` — Image loading effects
* `react-icons` — UI and social icons

[⬆ Back to Top](#-chace-nielson-portfolio)

---

## Features

### 💡 Modal-Based Routing

Project modals are linked using query parameters such as:

```text
?project=id
```

This allows individual projects to be linked directly without navigating away from the main portfolio page.

### 📨 EmailJS Contact Form

Visitors can send messages directly through the portfolio using EmailJS.

### 📊 Google Analytics

Google Analytics 4 tracks page views and selected user interactions in production.

### 🎨 Framer Motion Animations

Reusable animations provide smooth fades, transitions, staggered content, and interactive UI effects.

### ⚡ Vite Development & Builds

Vite provides fast local development, hot module replacement, and optimized production builds.

[⬆ Back to Top](#-chace-nielson-portfolio)

---

## Installation

Clone the repository and install the project dependencies:

```bash
npm install
```

[⬆ Back to Top](#-chace-nielson-portfolio)

---

## Environment Variables

Create a `.env` file in the project root.

```env
VITE_APP_ENVIRONMENT=development

# EmailJS
VITE_APP_EMAILJS_SERVICE_ID=service_...
VITE_APP_EMAILJS_TEMPLATE_ID=template_...
VITE_APP_EMAILJS_USER_ID=user_...

# Google Analytics
VITE_APP_VERSION=2.0.0
VITE_GOOGLE_MEASUREMENT_ID=G-XXXXXXX
```

> Environment values are excluded from Git and configured separately for development and deployment environments.

[⬆ Back to Top](#-chace-nielson-portfolio)

---

## Running the Project

Start the local Vite development server:

```bash
npm run dev
```

[⬆ Back to Top](#-chace-nielson-portfolio)

---

## Testing the Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

[⬆ Back to Top](#-chace-nielson-portfolio)

---

## Project Structure

### `src/`

```text
src/
├── components/
│   ├── analytics/          # Google Analytics integration
│   ├── animations/         # Reusable motion components
│   ├── buttons/            # Custom buttons and styles
│   ├── contact/            # Contact form and utilities
│   ├── footer/             # Footer and social components
│   ├── homeSections/       # Homepage sections
│   ├── navbar/             # Desktop and mobile navigation
│   ├── photoGallery/       # Gallery grid and image viewer
│   ├── projects/           # Project cards, filters, and carousels
│   ├── routing/            # Router, layouts, and error boundaries
│   ├── testing/            # Development and debugging utilities
│   └── uiElements/         # Generic reusable UI components
│
├── data/
│   ├── iconData/           # Technology and category icons
│   ├── pageData/           # Page and section content
│   ├── projects/           # Project metadata
│   ├── techStacks/         # Technology groupings
│   └── nav/                # Navigation data
│
├── global-styles/          # Shared animation and effect styles
├── pages/                  # React Router pages
├── utils/                  # Shared utility functions
├── index.css               # Tailwind and global styles
├── App.jsx                 # Main application wrapper
└── main.jsx                # Application entry point
```

### `public/`

```text
public/
├── backgrounds/            # Section backgrounds
├── logos/                  # Personal and project logos
├── icons/                  # SVG and UI icons
└── manifest.json           # PWA and application metadata
```

[⬆ Back to Top](#-chace-nielson-portfolio)

---

## Google Analytics

Analytics are initialized through `react-ga4` and enabled in production.

### How It Works

* `useGoogleAnalytics.js` initializes Google Analytics
* `AnalyticsProvider.jsx` tracks page views
* `useAnalyticsEvent.js` handles custom analytics events

### Example

```js
const trackEvent = useAnalyticsEvent();

trackEvent("Button", "Click", "Hero CTA", 1);
```

The following environment variable is required:

```env
VITE_GOOGLE_MEASUREMENT_ID=G-XXXXXXX
```

[⬆ Back to Top](#-chace-nielson-portfolio)

---

## Contact

* 🌐 **Portfolio:** [chacenielson.com](https://chacenielson.com)
* 📧 **Email:** [chacen@shaw.ca](mailto:chacen@shaw.ca)

For collaboration inquiries, development opportunities, or project questions, feel free to reach out.

[⬆ Back to Top](#-chace-nielson-portfolio)

---

## Deployment

### Vercel

The portfolio is continuously deployed through **[Vercel](https://vercel.com/)** using GitHub integration.

Production deployments are automatically triggered when changes are pushed to the configured production branch.

To build and deploy manually:

```bash
npm run build
vercel --prod
```

Make sure all required environment variables are configured in the Vercel project settings before deploying.

[⬆ Back to Top](#-chace-nielson-portfolio)
