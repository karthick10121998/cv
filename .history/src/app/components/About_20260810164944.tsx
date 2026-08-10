import { Award, Heart, Coffee, Code } from 'lucide-react';
import aboutImage from 'figma:asset/e95742ed5fdb4f53532c19d5283796ec01c5d246.png';

export function About() {
  const funFacts = [
    { icon: Code, label: 'Songs Listened', value: '5000+' },
    { icon: Coffee, label: 'Cups of Coffee', value: '2000+' },
    { icon: Heart, label: 'Outdoor Games', value: '100+' },
    { icon: Award, label: 'Friends Made', value: '500+' },
  ];

  const clients = [
    { name: 'Cloudstrats', logo: 'CS' },
    { name: 'Pinaca Technologies', logo: 'PT' },
    { name: 'Aramporul Tech', logo: 'AT' },
    { name: 'Technology Transformation Group', logo: 'TG' },
    { name: 'Indian Navy / INICAI', logo: 'IN' },
    { name: 'Norwood Charity', logo: 'NC' },
    { name: 'GS Fresh', logo: 'GS' },
    { name: 'Rusticgram', logo: 'RG' },
    { name: 'PassionPro', logo: 'PP' },
  ];

  const languages = [
    { name: 'Tamil', level: 'Native' },
    { name: 'English', level: 'Professional' },
  ];

  const knowledge = [
    'AI Product Design',
    'Enterprise Application Design',
    'Mobile App Design',
    'Web Design',
    'Design Systems',
    'UX Research & Strategy',
    'Frontend Development',
    'Motion & 3D Design',
  ];

  return (
    <section id="about" className="py-24 px-6 lg:px-12 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#c7ff4d]/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto relative z-10 max-w-6xl">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-[#c7ff4d] text-sm mb-4">
            Get to know me
          </div>
          <h2 className="text-4xl md:text-5xl mb-4">
            About <span className="text-[#c7ff4d]">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative group">
              <div className="absolute -inset-6 bg-gradient-to-br from-[#c7ff4d]/20 to-blue-500/20 rounded-3xl blur-3xl group-hover:blur-2xl transition-all duration-500"></div>
              
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm">
                <img
                  src={aboutImage}
                  alt="Karthickraja"
                  className="w-full h-auto"
                />
              </div>
              
              {/* Decorative corner accents */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-l-4 border-t-4 border-[#c7ff4d] rounded-tl-2xl"></div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-r-4 border-b-4 border-[#c7ff4d] rounded-br-2xl"></div>
            </div>

            {/* Quote - Moved here for better spacing */}
            <div className="relative mt-8 p-6 bg-gradient-to-br from-[#c7ff4d]/10 to-transparent border-l-4 border-[#c7ff4d] rounded-r-xl">
              <div className="text-6xl text-[#c7ff4d]/20 absolute top-2 left-4">"</div>
              <p className="text-white/90 italic relative z-10 pl-8 text-sm md:text-base">
               I make complicated things look suspiciously simple.
              </p>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>
                UI/UX and Product Designer with 3+ years of experience designing AI products,
                enterprise applications, dashboards, and responsive web experiences. I make
                complicated things look suspiciously simple.
              </p>
              <p>
                I've worked on online and fully offline AI projects for the Indian Navy's AI
                organization, INICAI — designing interfaces where clarity isn't optional. Skilled
                in UX research, user flows, wireframing, prototyping, and design systems.
              </p>
              <p>
                I work closely with developers, AI teams, product teams, and stakeholders to
                turn complex workflows into simple, practical, and human-friendly experiences.
              </p>
            </div>

            {/* Personal Info */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Experience', value: '3+ Years' },
                { label: 'Location', value: 'Ariyalur, TN' },
                { label: 'Specialization', value: 'Available' },
                { label: 'Phone', value: '+91 8489215911' },
              ].map((info, i) => (
                <div key={i} className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:border-[#c7ff4d]/30 transition-all duration-300">
                  <div className="text-[#c7ff4d] text-xs mb-1.5 uppercase tracking-wide">{info.label}</div>
                  <div className="text-sm text-white/90">{info.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fun Facts */}
        <div className="mb-16">
          <h3 className="text-2xl mb-8">
            Fun <span className="text-[#c7ff4d]">Facts</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {funFacts.map((fact, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-[#c7ff4d]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#c7ff4d]/10 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-[#c7ff4d]/10 rounded-xl flex items-center justify-center mx-auto mb-4 transition-transform duration-500 hover:scale-110 hover:rotate-6">
                  <fact.icon className="text-[#c7ff4d]" size={20} />
                </div>
                <div className="text-3xl text-[#c7ff4d] mb-2">{fact.value}</div>
                <div className="text-white/60 text-sm">{fact.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Clients */}
        <div className="mb-16">
          <h3 className="text-2xl mb-8">
            Trusted <span className="text-[#c7ff4d]">Clients</span>
          </h3>
          
          {/* Auto-scrolling clients */}
          <div className="relative overflow-hidden py-4">
            <div className="flex gap-8 animate-scroll">
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl px-8 py-4 hover:border-[#c7ff4d]/50 transition-all duration-300"
                >
                  <div className="text-white/80 whitespace-nowrap">{client.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Languages */}
          <div>
            <h3 className="text-2xl mb-8">
              Languages
            </h3>
            <div className="flex gap-4">
              {languages.map((language, index) => (
                <div
                  key={index}
                  className="flex-1 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl p-5 text-center hover:border-[#c7ff4d]/40 transition-all duration-300"
                >
                  <div className="text-base mb-1">{language.name}</div>
                  <div className="text-[#c7ff4d] text-xs">{language.level}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Knowledge */}
          <div>
            <h3 className="text-2xl mb-8">
              What I <span className="text-[#c7ff4d]">Do</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {knowledge.map((item, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-white/70 hover:border-[#c7ff4d]/40 hover:text-white transition-all duration-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mt-16">
          <h3 className="text-2xl mb-8">
            Education & <span className="text-[#c7ff4d]">Certifications</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Advanced UI/UX Design Certification',
                institution: 'Web D School, Chennai',
                period: '2023 – 2024',
              },
              {
                title: 'Bachelor of Technology (Information Technology)',
                institution: 'Rajalakshmi Engineering College',
                period: '2016 – 2020',
              },
              {
                title: 'AZ-900: Microsoft Azure Fundamentals',
                institution: 'Microsoft Certification',
                period: 'Cloud & AI Fundamentals',
              },
              {
                title: '.NET (C#) Certification',
                institution: 'Microsoft .NET',
                period: 'Backend & Application Development',
              },
            ].map((edu, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-[#c7ff4d]/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-[#c7ff4d]/10 rounded-xl flex items-center justify-center mb-4">
                  <Award className="text-[#c7ff4d]" size={20} />
                </div>
                <h4 className="text-lg mb-2">{edu.title}</h4>
                <p className="text-white/60 text-sm mb-1">{edu.institution}</p>
                <p className="text-white/40 text-sm">{edu.period}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}