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
    'Poster Design',
    'Video Editing',
  ];

  const projects = [
    {
      title: 'Indian Navy / INICAI — AI Projects',
      category: 'UI/UX Design',
      description: 'Simple AI. Designed AI interfaces, dashboards, workflows, and information-heavy applications for online and fully offline defence environments.',
      image: 'https://images.unsplash.com/photo-1625838144804-300f3907c110?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80',
      tags: ['AI Product', 'Enterprise', 'INICAI'],
      confidential: true,
    },
    {
      title: 'PIMS (Talkback)',
      category: 'Mobile App Design',
      description: 'Clear Flows. Designed dashboards and workflows with clear information hierarchy and simpler task flows for enterprise users.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80',
      tags: ['Dashboard', 'Enterprise', 'Workflow'],
      confidential: false,
    },
    {
      title: 'GS Fresh Web App',
      category: 'Web App Design',
      description: 'Easy Shopping. Designed e-commerce flows focused on product discovery, shopping experience, and responsive UI.',
      image: 'https://images.unsplash.com/photo-1601972602237-8c79241e468b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80',
      tags: ['E-Commerce', 'Shopping', 'Responsive'],
      confidential: false,
    },
    {
      title: 'Norwood Charity',
      category: 'UI/UX Design',
      description: 'Easy Donations. Redesigned donation flow and navigation to create a simpler, more accessible user experience.',
      image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80',
      tags: ['Charity', 'Web Design', 'UX'],
      confidential: false,
    },
    {
      title: 'Rusticgram',
      category: 'Web App Design',
      description: 'Clean UI. Designed a responsive social platform with clean navigation and reusable UI components.',
      image: 'https://images.unsplash.com/photo-1579869847557-1f67382cc158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80',
      tags: ['Social Platform', 'Responsive', 'UI Components'],
      confidential: false,
    },
    {
      title: 'PassionPro',
      category: 'Web App Design',
      description: 'Clean UI. Designed task-based dashboards with simple navigation and easy-to-understand interfaces.',
      image: 'https://images.unsplash.com/photo-1642132652866-6fa262d3161f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80',
      tags: ['SaaS', 'Productivity', 'Dashboard'],
      confidential: false,
    },
    {
      title: 'Social Media Campaigns',
      category: 'Poster Design',
      description: 'Eye-catching poster designs for promotional campaigns with compelling visual storytelling.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80',
      tags: ['Marketing', 'Print', 'Graphics'],
      confidential: false,
    },
    {
      title: 'Project & Product Video Content',
      category: 'Video Editing',
      description: 'Professional video editing with motion graphics using After Effects, Premiere Pro, and DaVinci Resolve.',
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80',
      tags: ['Video', 'Motion', 'After Effects'],
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
              My Design Superpowers
            </div>
            <h2 className="text-4xl md:text-4xl mb-4">
              THE STUFF I CAN <span className="text-[#c7ff4d]">ACTUALLY SHOW</span>
            </h2>
            <h4 className="text-md text-white/50 mb-4">Some of my professional work stays behind the NDA. The work below is my personal and shareable design work, covering UI/UX, visual design, and creative experiments.</h4>

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
                <h3 className="text-xl mb-3 group-hover:text-[#c7ff4d] transition-colors duration-300 ">
                  {project.title}
                </h3>
                
                <p className="text-white/70 text-sm mb-4 text-justify">
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
                {/* {!project.confidential && (
                  <button className="w-full py-2.5 border border-white/10 rounded-xl hover:border-[#c7ff4d] hover:text-[#c7ff4d] hover:bg-[#c7ff4d]/5 transition-all duration-300 flex items-center justify-center gap-2 text-sm group/btn">
                    <span>View Details</span>
                    <ExternalLink size={14} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                )} */}
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