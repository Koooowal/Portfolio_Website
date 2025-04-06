# Portfolio Website

A modern, responsive portfolio website built with Next.js and React, showcasing projects, skills, and professional experience in an interactive design.

![Portfolio Website Screenshot](/images/projects/1.png)

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Interactive UI**: Animated components using Framer Motion
- **Particle Background**: Interactive particle system background
- **Project Filtering**: Filter projects by category
- **Contact Form**: Functional contact form using Resend API
- **Modern Styling**: Tailwind CSS for sleek, modern UI components
- **Dynamic Typography**: Animated typing effect in hero section

## Technologies Used

- **Next.js 15.2.4**: React framework for production
- **React 19.1.0**: UI library
- **Tailwind CSS 3.3.0**: Utility-first CSS framework
- **Framer Motion 12.6.2**: Animation library
- **Resend 4.2.0**: Email API for contact form
- **React-TSParticles 2.12.2**: Interactive particle system
- **React-Type-Animation 3.2.0**: Text typing animation effect
- **Heroicons 2.2.0**: Icon set

## Getting Started

### Prerequisites

- Node.js (18.x or higher recommended)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/Koooowal/Portfolio_Website.git
cd Portfolio_Website
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Set up environment variables
Create a `.env.local` file in the root directory and add:
```
RESEND_API_KEY=your_resend_api_key
FROM_EMAIL=your_email@example.com
```

4. Run the development server
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
├── public/
│   ├── images/
│   │   ├── projects/
│   │   ├── about-image.png
│   │   └── hero-image.png
│   ├── cv.pdf
│   ├── github-icon.svg
│   └── linkedin-icon.svg
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── send/
│   │   │       └── route.js
│   │   ├── components/
│   │   │   ├── AboutSection.jsx
│   │   │   ├── AchievementsSection.jsx
│   │   │   ├── EmailSection.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── MenuOverlay.jsx
│   │   │   ├── NavLink.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── ParticlesBackground.jsx
│   │   │   ├── ProjectCard.jsx
│   │   │   ├── ProjectTag.jsx
│   │   │   ├── ProjectsSection.jsx
│   │   │   └── TabButton.jsx
│   │   ├── globals.css
│   │   ├── layout.js
│   │   └── page.js
├── .env.local
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── README.md
```

## Key Components

- **HeroSection**: Introduction with animated text and profile image
- **AchievementsSection**: Displays tech stack and skills
- **AboutSection**: Information about education, skills, and experience with tabbed interface
- **ProjectsSection**: Showcases projects with filtering capability
- **EmailSection**: Contact form with email functionality
- **ParticlesBackground**: Interactive animated background

## Deployment

This project can be deployed on Vercel, Netlify, or any other hosting platform that supports Next.js.

```bash
npm run build
# or
yarn build
```

## Environment Variables

The following environment variables are required:

- `RESEND_API_KEY`: API key from Resend for email functionality
- `FROM_EMAIL`: Email address to send from for the contact form

## Customization

### Adding New Projects

Edit the `projectsData` array in `ProjectsSection.jsx`:

```jsx
const projectsData = [
  {
    id: [unique_id],
    title: "Project Title",
    description: "Project description",
    image: "/images/projects/image.png",
    tag: ["All", "Category"],
    gitUrl: "https://github.com/username/repo",
    previewUrl: "https://project-demo.com",
  },
  // Add more projects here
];
```

### Updating About Information

Modify the content in `AboutSection.jsx` to update your personal information, education, and skills.

### Changing Tech Stack

Update the `achievementsList` array in `Achieveme