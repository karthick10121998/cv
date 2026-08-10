import { Calendar, MapPin, Briefcase } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: 'UI/UX Designer',
      company: 'Cloudstrats — Indian Navy / INICAI',
      period: 'June 2026 – Present',
      location: 'India',
      achievements: [
        'Designing AI-powered applications, dashboards, and enterprise interfaces for the Indian Navy\'s AI organization, INICAI.',
        'Working on both online and fully offline AI applications for different operational environments.',
        'Creating user flows, wireframes, prototypes, high-fidelity UI, and responsive designs using Figma.',
        'Working closely with AI engineers, developers, product teams, and stakeholders to simplify complex workflows.',
        'Creating reusable UI components and design patterns for consistency across multiple applications.',
      ],
      color: '#c7ff4d',
      current: true,
    },
    {
      title: 'UI/UX Developer',
      company: 'Pinaca Technologies — Indian Navy / INICAI',
      period: 'Apr 2025 – Jun 2026',
      location: 'India',
      achievements: [
        'Designed AI-based applications, dashboards, and enterprise interfaces for Indian Navy / INICAI projects.',
        'Created user flows, wireframes, prototypes, responsive UI, and design systems using Figma and Adobe XD.',
        'Worked on both online and offline application environments based on project requirements.',
        'Collaborated with developers, AI teams, and stakeholders to improve usability and simplify complex workflows.',
        'Supported frontend implementation using React.js, HTML, CSS, and Tailwind CSS.',
      ],
      color: '#60a5fa',
      current: false,
    },
    {
      title: 'UI/UX Designer',
      company: 'Aramporul Tech Pvt Ltd — Chennai',
      period: 'Feb 2024 – Jun 2024',
      location: 'Chennai',
      achievements: [
        'Designed responsive web interfaces and improved information architecture and navigation.',
        'Created wireframes, prototypes, UI designs, and interactive components.',
        'Worked with developers to deliver consistent and user-friendly digital experiences.',
      ],
      color: '#f97316',
      current: false,
    },
    {
      title: 'Senior Software Engineer',
      company: 'Technology Transformation Group — Bangalore',
      period: 'Nov 2021 – Jul 2023',
      location: 'Bangalore',
      achievements: [
        'Redesigned enterprise interfaces across 5+ applications to improve usability and task efficiency.',
        'Worked on frontend development using modern web technologies and responsive UI.',
        'Collaborated with cross-functional teams to improve workflows and create reusable design patterns.',
      ],
      color: '#8b5cf6',
      current: false,
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 lg:px-12 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#c7ff4d]/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto relative z-10 max-w-6xl">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-[#c7ff4d] text-sm mb-4">
            Career Journey
          </div>
          <h2 className="text-4xl md:text-5xl mb-4">
            Work <span className="text-[#c7ff4d]">Experience</span>
          </h2>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#c7ff4d]/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#c7ff4d]/10 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                {/* Left Side - Main Info */}
                <div className="flex-1">
                  <div className="flex items-start gap-4 mb-4">
                    {/* Icon */}
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundColor: `${exp.color}15` }}
                    >
                      <Briefcase style={{ color: exp.color }} size={20} />
                    </div>

                    {/* Title & Company */}
                    <div className="flex-1">
                      <h3 className="text-xl mb-2 group-hover:text-[#c7ff4d] transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <p className="text-white/80 mb-3">{exp.company}</p>
                      
                      {/* Period & Location */}
                      <div className="flex flex-wrap gap-4 text-sm text-white/60">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} style={{ color: exp.color }} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} style={{ color: exp.color }} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Current Badge */}
                    {exp.current && (
                      <div className="px-3 py-1 bg-[#c7ff4d]/20 border border-[#c7ff4d]/50 rounded-full text-xs text-[#c7ff4d]">
                        Current
                      </div>
                    )}
                  </div>

                  {/* Achievements */}
                  <div className="mt-6 space-y-3 pl-[72px]">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div
                        key={achIndex}
                        className="flex items-start gap-3 text-white/70 text-sm group-hover:text-white/90 transition-colors duration-300"
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: exp.color }}
                        ></div>
                        <p>{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}