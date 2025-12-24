import { useState } from 'react';
import { ExternalLink, Lock, ChevronDown } from 'lucide-react';

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const categories = [
    'All',
    'UI/UX Design',
    'Mobile App Design',
    'Web App Design',
    'Logo Design',
    'Poster Design',
    'Package Design',
    'Video Editing',
  ];

  const projects = [
    {
      title: 'Defence AI Projects',
      category: 'UI/UX Design',
      description: 'Designed secure and easy-to-use systems for defence operations',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
      tags: ['Government', 'Security', 'AI'],
      confidential: true,
    },
    {
      title: 'Norwood Charity',
      category: 'UI/UX Design',
      description: 'Improved donation flow and user engagement',
      image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&q=80',
      tags: ['Charity', 'Web Design', 'UX'],
      confidential: false,
    },
    {
      title: 'GS Fresh & Rustifarm',
      category: 'Web App Design',
      description: 'Enhanced shopping experience with better retention',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80',
      tags: ['E-Commerce', 'Mobile', 'Web'],
      confidential: false,
    },
    {
      title: 'PIMS (Talkback)',
      category: 'Mobile App Design',
      description: 'Simplified dashboards for healthcare workers',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
      tags: ['Healthcare', 'Dashboard', 'Enterprise'],
      confidential: false,
    },
    {
      title: 'PassionPro',
      category: 'Web App Design',
      description: 'Enhanced user interface and workflow optimization',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      tags: ['SaaS', 'Productivity', 'Web'],
      confidential: false,
    },
    {
      title: 'FitMatch Brand Identity',
      category: 'Logo Design',
      description: 'Complete brand identity and logo design system',
      image: '/src/assets/iPhone 13 Pro.png',
      tags: ['Branding', 'Logo', 'Identity'],
      confidential: false,
    },
    {
      title: 'Event Marketing Campaign',
      category: 'Poster Design',
      description: 'Eye-catching poster designs for promotional campaigns',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      tags: ['Marketing', 'Print', 'Graphics'],
      confidential: false,
    },
    {
      title: 'Product Package Design',
      category: 'Package Design',
      description: 'Modern package designs for consumer products',
      image: '/src/assets/iPhone 15 Pro.png',
      tags: ['Package', 'Print', 'Branding'],
      confidential: false,
    },
    {
      title: 'Brand Promotional Video',
      category: 'Video Editing',
      description: 'Professional video editing with motion graphics',
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80',
      tags: ['Video', 'Motion', 'Animation'],
      confidential: false,
    },
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 px-6 lg:px-12 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto relative z-10 max-w-6xl">
        {/* Header with Filter Dropdown */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-[#c7ff4d] text-sm mb-4">
              My Portfolio
            </div>
            <h2 className="text-4xl md:text-5xl mb-4">
              Featured <span className="text-[#c7ff4d]">Projects</span>
            </h2>
          </div>

          {/* Custom Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-3 px-6 py-3 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl hover:border-[#c7ff4d]/50 transition-all duration-300 min-w-[200px] justify-between"
            >
              <span className="text-sm">{selectedCategory}</span>
              <ChevronDown 
                size={18} 
                className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-full min-w-[240px] bg-[#1a1a1a] backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden animate-fade-in z-50">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSelectedCategory(category);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full text-left px-6 py-3 text-sm transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-[#c7ff4d]/10 text-[#c7ff4d] border-l-2 border-[#c7ff4d]'
                        : 'hover:bg-white/5 text-white/70 hover:text-white'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-[#c7ff4d]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#c7ff4d]/10 animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                
                {project.confidential && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-red-500/80 backdrop-blur-sm rounded-full text-xs flex items-center gap-1">
                    <Lock size={12} />
                    Confidential
                  </div>
                )}
                
                <div className="absolute top-4 left-4 px-3 py-1 bg-[#c7ff4d]/80 backdrop-blur-sm rounded-full text-xs text-black">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl mb-3 group-hover:text-[#c7ff4d] transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-white/70 text-sm mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-white/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Button */}
                {!project.confidential && (
                  <button className="w-full py-2.5 border border-white/10 rounded-xl hover:border-[#c7ff4d] hover:text-[#c7ff4d] hover:bg-[#c7ff4d]/5 transition-all duration-300 flex items-center justify-center gap-2 text-sm group/btn">
                    <span>View Details</span>
                    <ExternalLink size={14} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <div className="text-white/40 text-lg">No projects found in this category</div>
          </div>
        )}
      </div>
    </section>
  );
}