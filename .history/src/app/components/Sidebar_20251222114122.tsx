import { Home, User, Briefcase, Award, FolderOpen, MessageSquare, Mail } from 'lucide-react';
import { useState } from 'react';

interface SidebarProps {
  activeSection: string;
}

export function Sidebar({ activeSection }: SidebarProps) {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'services', label: 'Services', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Award },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'testimonials', label: 'Testimonials', icon: MessageSquare },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const scrollToSection = (id: string) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-20 z-50 flex-col items-center justify-center">
        {/* Glassmorphism Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#0f0f0f]/80 backdrop-blur-xl border-r border-white/5"></div>
        
        {/* Navigation Items */}
        <nav className="relative z-10 flex flex-col items-center gap-2">
          {navItems.map((item) => (
            <div
              key={item.id}
              className="relative"
              onMouseEnter={() => setHoveredSection(item.id)}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <button
                onClick={() => scrollToSection(item.id)}
                className={`relative w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-[#c7ff4d] text-black shadow-lg shadow-[#c7ff4d]/20'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                <item.icon size={20} />
              </button>

              {/* Label Tooltip */}
              {(hoveredSection === item.id || activeSection === item.id) && (
                <div className="absolute left-16 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-[#1a1a1a] backdrop-blur-xl border border-white/10 rounded-lg text-sm whitespace-nowrap animate-fade-in-right shadow-xl">
                  {item.label}
                  <div className="absolute right-full top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-[#1a1a1a]"></div>
                </div>
              )}
            </div>
          ))}
        </nav>
      </aside>

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-t from-[#1a1a1a]/90 to-[#0f0f0f]/90 backdrop-blur-xl border-t border-white/10">
        <nav className="flex items-center justify-around py-2 px-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative p-2.5 rounded-xl transition-all duration-300 ${
                activeSection === item.id
                  ? 'bg-[#c7ff4d] text-black'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <item.icon size={18} />
            </button>
          ))}
        </nav>
      </div>
    </>
  );
}
