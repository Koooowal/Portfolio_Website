import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import ParticlesBackground from "./components/ParticlesBackground";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      {/* Particles Background as a fixed background */}
      <div className="fixed inset-0 z-0">
        <ParticlesBackground />
      </div>
      
      {/* All content in a wrapper with higher z-index */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navbar with full width */}
        <Navbar />
        
        {/* Main Content */}
        <div className="container px-12 py-4 mx-auto mt-24">
          <HeroSection />
          <AchievementsSection />
          <AboutSection />
          <ProjectsSection />
          <EmailSection />
        </div>
        
        <Footer />
      </div>
    </main>
  );
}