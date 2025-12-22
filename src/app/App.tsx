import { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'services', 'skills', 'experience', 'projects', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 300;

      // Check if we're at the very top
      if (window.scrollY < 200) {
        setActiveSection('home');
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            return;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen">
      {/* Left Sidebar Navigation */}
      <Sidebar activeSection={activeSection} />

      {/* Main Content Area */}
      <div className="lg:ml-24">
        {/* Sticky Hero Section */}
        <div className="sticky top-0 h-screen z-10">
          <Hero />
        </div>

        {/* Scrollable Content Sections */}
        <div className="relative z-20 bg-[#0f0f0f]">
          <About />
          <Services />
          <Skills />
          <Experience />
          <Projects />
          <Testimonials />
          <Contact />
        </div>
      </div>
    </div>
  );
}