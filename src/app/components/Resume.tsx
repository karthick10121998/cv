import { Download, Calendar, MapPin, Mail, Phone, Award, Briefcase, GraduationCap } from 'lucide-react';

export function Resume() {
  const personalInfo = {
    name: 'Karthickraja Velmurugan',
    title: 'UI/UX Designer · Product Designer · AI Product Designer',
    email: 'karthickrajavelmurugan10@gmail.com',
    phone: '+91 8489215911',
    location: 'Ariyalur, Tamil Nadu, India',
    freelance: 'Available',
  };

  const experience = [
    {
      title: 'UI/UX Designer',
      company: 'Cloudstrats — Indian Navy / INICAI',
      period: 'June 2026 – Present',
      location: 'India',
      current: true,
      description: [
        'Designing AI-powered applications, dashboards, and enterprise interfaces for the Indian Navy\'s AI organization, INICAI.',
        'Working on both online and fully offline AI applications for different operational environments.',
        'Creating reusable UI components and design patterns for consistency across multiple applications.',
      ],
    },
    {
      title: 'UI/UX Developer',
      company: 'Pinaca Technologies — Indian Navy / INICAI',
      period: 'Apr 2025 – Jun 2026',
      location: 'India',
      current: false,
      description: [
        'Designed AI-based applications, dashboards, and enterprise interfaces for Indian Navy / INICAI projects.',
        'Created user flows, wireframes, prototypes, responsive UI, and design systems using Figma and Adobe XD.',
        'Supported frontend implementation using React.js, HTML, CSS, and Tailwind CSS.',
      ],
    },
    {
      title: 'UI/UX Designer',
      company: 'Aramporul Tech Pvt Ltd — Chennai',
      period: 'Feb 2024 – Jun 2024',
      location: 'Chennai',
      current: false,
      description: [
        'Designed responsive web interfaces and improved information architecture and navigation.',
        'Created wireframes, prototypes, UI designs, and interactive components.',
        'Worked with developers to deliver consistent and user-friendly digital experiences.',
      ],
    },
    {
      title: 'Senior Software Engineer',
      company: 'Technology Transformation Group — Bangalore',
      period: 'Nov 2021 – Jul 2023',
      location: 'Bangalore',
      current: false,
      description: [
        'Redesigned enterprise interfaces across 5+ applications to improve usability and task efficiency.',
        'Worked on frontend development using modern web technologies and responsive UI.',
        'Collaborated with cross-functional teams to create reusable design patterns.',
      ],
    },
  ];

  const education = [
    {
      degree: 'Advanced UI/UX Design Certification',
      institution: 'Web D School, Chennai',
      period: '2023 – 2024',
    },
    {
      degree: 'Bachelor of Technology — Information Technology',
      institution: 'Rajalakshmi Engineering College',
      period: '2016 – 2020',
    },
  ];

  const certifications = [
    'Advanced UI/UX Designer',
    'AZ-900: Microsoft Azure Fundamentals',
    '.NET (C#) Certification',
  ];

  const skills = {
    productUx: ['Product Thinking', 'UX Strategy', 'User-Centered Design', 'User Research', 'Information Architecture', 'User Flows'],
    aiDesign: ['AI Interfaces', 'AI Chat Experiences', 'AI Dashboards', 'AI Workflows', 'Online & Offline AI Products', 'Data Visualization'],
    tools: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'After Effects', 'Premiere Pro', 'DaVinci Resolve', 'Blender / Spline'],
    frontend: ['HTML · CSS · JavaScript', 'React.js', 'Tailwind CSS', 'Bootstrap', 'Git · GitHub'],
  };

  const languages = [
    { name: 'Tamil', level: 'Native' },
    { name: 'English', level: 'Professional' },
  ];

  return (
    <section id="resume" className="py-24 px-6 lg:px-12 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#c7ff4d]/5 to-transparent pointer-events-none" />

      <div className="container mx-auto relative z-10 max-w-6xl">
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-[#c7ff4d] text-sm mb-4">
              The Journey So Far
            </div>
            <h2 className="text-4xl md:text-5xl mb-4">
              Professional <span className="text-[#c7ff4d]">Journey</span>
            </h2>
          </div>

          <div className="flex gap-3 flex-wrap">
            <a
              href="/src/imports/Karthick_Professional_Resume.pdf"
              download="Karthick_Professional_Resume.pdf"
              className="group px-5 py-3 bg-[#c7ff4d] text-black rounded-xl hover:bg-[#d4ff70] transition-all duration-300 shadow-lg shadow-[#c7ff4d]/20 hover:-translate-y-1 flex items-center gap-2 text-sm"
            >
              Professional CV
              <Download size={16} className="group-hover:animate-bounce" />
            </a>
            <a
              href="/src/imports/Design_Resume_Karthickraja.pdf"
              download="Design_Resume_Karthickraja.pdf"
              className="group px-5 py-3 bg-white/5 border border-white/20 text-white rounded-xl hover:border-[#c7ff4d] hover:text-[#c7ff4d] transition-all duration-300 hover:-translate-y-1 flex items-center gap-2 text-sm"
            >
              Design Resume
              <Download size={16} />
            </a>
          </div>
        </div>

        {/* Personal Info Card */}
        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl mb-1">{personalInfo.name}</h3>
          <p className="text-[#c7ff4d] text-sm mb-6">{personalInfo.title}</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-center gap-3 text-sm">
              <Mail className="text-[#c7ff4d] flex-shrink-0" size={15} />
              <a href={`mailto:${personalInfo.email}`} className="hover:text-[#c7ff4d] transition-colors truncate">
                {personalInfo.email}
              </a>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Phone className="text-[#c7ff4d] flex-shrink-0" size={15} />
              <span>{personalInfo.phone}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <MapPin className="text-[#c7ff4d] flex-shrink-0" size={15} />
              <span>{personalInfo.location}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Briefcase className="text-[#c7ff4d] flex-shrink-0" size={15} />
              <span>Freelance: {personalInfo.freelance}</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Left Column — Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-[#c7ff4d]/10 rounded-xl flex items-center justify-center">
                <Briefcase className="text-[#c7ff4d]" size={18} />
              </div>
              <h3 className="text-xl">Work Experience</h3>
            </div>

            <div className="space-y-4">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-[#c7ff4d]/40 transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <h4 className="text-base font-medium">{exp.title}</h4>
                    {exp.current && (
                      <span className="flex-shrink-0 px-2 py-0.5 text-[10px] bg-[#c7ff4d]/20 border border-[#c7ff4d]/40 text-[#c7ff4d] rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-white/60 text-sm mb-2">{exp.company}</p>
                  <div className="flex items-center gap-4 text-xs text-white/40 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} />
                      {exp.location}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-white/55">
                        <span className="w-1 h-1 bg-[#c7ff4d] rounded-full mt-1.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-10">
            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#c7ff4d]/10 rounded-xl flex items-center justify-center">
                  <GraduationCap className="text-[#c7ff4d]" size={18} />
                </div>
                <h3 className="text-xl">Education</h3>
              </div>

              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-[#c7ff4d]/40 transition-all duration-300"
                  >
                    <h4 className="text-sm font-medium mb-1">{edu.degree}</h4>
                    <p className="text-white/60 text-xs mb-1">{edu.institution}</p>
                    <p className="text-white/40 text-xs">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#c7ff4d]/10 rounded-xl flex items-center justify-center">
                  <Award className="text-[#c7ff4d]" size={18} />
                </div>
                <h3 className="text-xl">Certifications</h3>
              </div>

              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl px-5 py-3.5 hover:border-[#c7ff4d]/40 transition-all duration-300 flex items-center gap-3"
                  >
                    <span className="w-1.5 h-1.5 bg-[#c7ff4d] rounded-full flex-shrink-0" />
                    <p className="text-sm text-white/70">{cert}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#c7ff4d]/10 rounded-xl flex items-center justify-center">
                  <Award className="text-[#c7ff4d]" size={18} />
                </div>
                <h3 className="text-xl">Languages</h3>
              </div>

              <div className="flex gap-3">
                {languages.map((lang, index) => (
                  <div
                    key={index}
                    className="flex-1 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl p-4 text-center"
                  >
                    <p className="text-sm font-medium mb-1">{lang.name}</p>
                    <p className="text-xs text-[#c7ff4d]">{lang.level}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skills Tags */}
        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8">
          <h3 className="text-xl mb-6">Core Skills</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { label: 'Product & UX', color: '#c7ff4d', items: skills.productUx },
              { label: 'AI Product Design', color: '#a78bfa', items: skills.aiDesign },
              { label: 'Design Tools', color: '#60a5fa', items: skills.tools },
              { label: 'Frontend', color: '#fb923c', items: skills.frontend },
            ].map((group, gi) => (
              <div key={gi}>
                <p className="text-xs mb-3 font-medium" style={{ color: group.color }}>{group.label}</p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item, ii) => (
                    <span
                      key={ii}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/70"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
