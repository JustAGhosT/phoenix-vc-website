# Phoenix VC Website
Repository: githubnext/workspace-blank
Description:
  ![Build Status](https://github.com/phoenix-vc/website/workflows/CI/badge.svg)
  ![Next.js](https://img.shields.io/badge/Next.js-13-black)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)

  ## Overview

  Phoenix VC's corporate website built with Next.js 13, TypeScript, and our [Phoenix Design System](https://github.com/phoenix-vc/design-system).

  ### Quick Links
  - **Production**: [phoenixvc.tech](https://phoenixvc.tech)
  - **Staging**: [staging.phoenixvc.tech](https://staging.phoenixvc.tech)
  - **Design System**: [design.phoenixvc.tech](https://design.phoenixvc.tech)

  ## Project Structure

  ```
  phoenix-vc-website/
  ├── src/
  │   ├── app/              # Next.js app router pages
  │   │   ├── page.tsx      # Home page
  │   │   ├── portfolio/    # Portfolio section
  │   │   ├── process/      # Investment process
  │   │   └── contact/      # Contact forms
  │   ├── components/       # Local components
  │   ├── styles/          # Global styles
  │   └── utils/           # Utility functions
  ├── public/              # Static assets
  └── package.json
  ```

  ## Tech Stack

  - **Framework**: Next.js 13 (App Router)
  - **Language**: TypeScript
  - **Styling**: Tailwind CSS
  - **Design System**: @phoenix-vc/design-system
  - **Package Manager**: pnpm
  - **Deployment**: Vercel

  ## Getting Started

  ### Prerequisites
  ```bash
  node >= 18.0.0
  pnpm >= 8.0.0
  ```

  ### Installation
  ```bash
  # Clone the repository
  git clone https://github.com/phoenix-vc/website.git
  cd website

  # Install dependencies
  pnpm install

  # Set up environment variables
  cp .env.example .env.local

  # Start development server
  pnpm dev
  ```

  ### Using the Design System

  ```bash
  # Install the design system
  pnpm add @phoenix-vc/design-system

  # Usage in components
  import { Button, Card } from '@phoenix-vc/design-system';
  ```

  ### Development Commands
  ```bash
  pnpm dev           # Start development server
  pnpm build         # Build for production
  pnpm start        # Start production server
  pnpm lint         # Lint code
  ```

  ## Key Features

  - **Portfolio Showcase**: Display our investments and success stories
  - **Investment Process**: Clear explanation of our investment approach
  - **Contact Forms**: Streamlined communication channels
  - **Team Profiles**: Showcase our team and expertise

  ## Deployment

  Deployments are automated via GitHub Actions and Vercel:

  1. Push to `main` triggers staging deployment
  2. Create a release to trigger production deployment

  ## Related Repositories

  - [Phoenix Design System](https://github.com/phoenix-vc/design-system)
  - [Phoenix Documentation](https://github.com/phoenix-vc/docs) (Coming in v2)

  ## Team

  - **Technical Lead**: Jurie Smit (jurie@phoenixvc.tech)
  - **Project Manager**: Eben Mare (eben@phoenixvc.tech)

  ## License

  Proprietary © 2024 Phoenix VC
