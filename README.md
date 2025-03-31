# KoowalDev Portfolio Website

A modern, responsive portfolio website built with Next.js and Tailwind CSS, showcasing my projects, skills, and experience as a web developer.

![Portfolio Website Preview](/images/projects/1.png)

## 🚀 Features

- **Interactive UI** with animations powered by Framer Motion
- **Responsive design** that works on all devices
- **Dynamic typing effect** on the hero section
- **Particle background** with interactive elements
- **Project filtering** by category
- **Contact form** with email functionality
- **Tab-based navigation** in the About section
- **Tech stack display** with icons
- **Downloadable CV** option
- **Social media links** integration

## 💻 Tech Stack

- **Frontend Framework:** Next.js
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion, React Type Animation
- **Interactive Background:** TSParticles
- **Icon Libraries:** React Icons, Heroicons
- **UI Components:** Custom components

## 📋 Project Structure
├── app/                  # Next.js app directory
│   ├── components/       # React components
│   │   ├── AboutSection.jsx
│   │   ├── AchievementsSection.jsx
│   │   ├── EmailSection.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── MenuOverlay.jsx
│   │   ├── Navbar.jsx
│   │   ├── NavLink.jsx
│   │   ├── ParticlesBackground.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── ProjectTag.jsx
│   │   └── TabButton.jsx
│   ├── globals.css       # Global styles
│   ├── layout.js         # Root layout
│   └── page.js           # Main page component
├── public/               # Static assets
│   ├── images/           # Image directory
│   │   ├── about-image.png
│   │   ├── hero-image.png
│   │   └── projects/     # Project thumbnails
│   ├── github-icon.svg
│   ├── linkedin-icon.svg
│   └── cv.pdf            # Downloadable resume

## 🛠️ Main Components

- **HeroSection:** Introduction with animated typing effect and profile image
- **AchievementsSection:** Tech stack display with icons
- **AboutSection:** Tab-based section showing education, skills, and experience
- **ProjectsSection:** Filterable grid of projects with descriptions and links
- **EmailSection:** Contact form with social media links
- **ParticlesBackground:** Interactive animated background

## 📱 Responsive Design

The website is fully responsive with:
- Mobile-first approach
- Adaptive layouts for different screen sizes
- Hamburger menu for mobile navigation
- Optimized images and performance

## ✨ Animation Features

- Animated text typing using React Type Animation
- Motion effects with Framer Motion for scroll animations
- Interactive particles background with hover effects
- Smooth transitions between project filters
- Gradient border animations around profile image

## 🔧 Setup and Installation

1. Clone the repository
  `git clone https://github.com/Koooowal/Portfolio_Website.git`
2. Navigate to the project directory
  `cd Portfolio_Website`
3. Install dependencies
  `npm install`
4. Run the development server
  `npm run dev`
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📧 Contact Form Setup

The contact form is set up to send emails through an API route. To configure it:

1. Create an API endpoint at `/api/send`
2. Set up your email service provider credentials
3. Handle form submission in the EmailSection component

## 🎨 Customization

- Update personal information in component files
- Replace images in the `/public/images/` directory
- Modify project data in `ProjectsSection.jsx`
- Update tech stack icons in `AchievementsSection.jsx`
- Change color scheme by modifying Tailwind theme values

## 🔗 Links

- [GitHub Repository](https://github.com/Koooowal/Portfolio_Website)
- [Live Website](https://koowaldev.com/)