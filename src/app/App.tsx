import { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Resume } from './components/Resume';
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
      const sections = ['about', 'resume', 'services', 'skills', 'experience', 'projects', 'testimonials', 'contact'];
      const viewportMidpoint = window.innerHeight * 0.35;

      // Check if we're at the very top
      if (window.scrollY < 200) {
        setActiveSection('home');
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= viewportMidpoint && rect.bottom >= viewportMidpoint) {
            setActiveSection(section);
            return;
          }
        }
      }

      // If no section spans the focus line, use the nearest visible section.
      let closestSection = sections[0];
      let closestDistance = Number.POSITIVE_INFINITY;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        const distance = Math.abs(rect.top - viewportMidpoint);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestSection = section;
        }
      }

      setActiveSection(closestSection);
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
        <div className="relative min-h-screen lg:sticky lg:top-0 lg:h-screen z-10">
          <Hero />
        </div>

        {/* Scrollable Content Sections */}
        <div className="relative z-20 bg-[#0f0f0f]">
          <About />
          <Resume />
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
