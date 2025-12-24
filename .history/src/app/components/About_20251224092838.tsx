import { Award, Heart, Coffee, Code } from 'lucide-react';
import aboutImage from '../../assets/src\assets\20251111_030129.jpg';

export function About() {
  const funFacts = [
    { icon: Code, label: 'Songs Listened', value: '5000+' },
    { icon: Coffee, label: 'Cups of Coffee', value: '2000+' },
    { icon: Heart, label: 'Outdoor Games', value: '100+' },
    { icon: Award, label: 'Friends Made', value: '500+' },
  ];

  const clients = [
    { name: 'Pinaca Technologies', logo: 'PT' },
    { name: 'Aramporu Tech', logo: 'AT' },
    { name: 'THETTG', logo: 'TG' },
    { name: 'Rustricgram', logo: 'RG' },
    { name: 'The Baking Cakes', logo: 'BC' },
    { name: 'Rudratic', logo: 'RD' },
    { name: 'FitMatch', logo: 'FM' },
  ];

  const languages = [
    { name: 'Tamil', level: 100 },
    { name: 'English', level: 90 },
    { name: 'Kannada', level: 50 },
  ];

  const knowledge = [
    'Mobile App Design',
    'Web Design',
    'Poster Design',
    'Package Design',
    'Logo Design',
    'Video Editing',
    'Coding & Development',
    'UI/UX Prototyping',
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
                Don't Just Steal The Style, Steal The Thinking Behind The Style
              </p>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>
                I'm a UI/UX designer with 3+ years of experience creating designs that feel clear, 
                honest, and easy to use. My journey started with curiosity and a love for solving 
                problems through design.
              </p>
              <p>
                Working on projects for the Indian Navy has taught me discipline, focus, and the 
                value of every small detail. I believe good design isn't about decoration — it's 
                about making people's lives easier and helping them trust what they use every day.
              </p>
              <p>
                I'm passionate about creating user experiences that not only look great but also 
                solve real problems and improve people's daily interactions with technology.
              </p>
            </div>

            {/* Personal Info */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <div className="text-[#c7ff4d] text-sm mb-1">Age:</div>
                <div className="text-lg">27</div>
              </div>
              <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <div className="text-[#c7ff4d] text-sm mb-1">Residence:</div>
                <div className="text-lg">Bengaluru</div>
              </div>
              <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <div className="text-[#c7ff4d] text-sm mb-1">Freelance:</div>
                <div className="text-lg">Available</div>
              </div>
              <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <div className="text-[#c7ff4d] text-sm mb-1">Address:</div>
                <div className="text-lg">Bengaluru, Karnataka</div>
              </div>
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
              Language <span className="text-[#c7ff4d]">Skills</span>
            </h3>
            <div className="space-y-6">
              {languages.map((language, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-3">
                    <span className="text-sm">{language.name}</span>
                    <span className="text-[#c7ff4d] text-sm">{language.level}%</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#c7ff4d] to-[#a8e838] transition-all duration-1000"
                      style={{ width: `${language.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Knowledge */}
          <div>
            <h3 className="text-2xl mb-8">
              Additional <span className="text-[#c7ff4d]">Knowledge</span>
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {knowledge.map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 text-sm hover:border-[#c7ff4d]/50 transition-all duration-300 flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 bg-[#c7ff4d] rounded-full"></div>
                  {item}
                </div>
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
                period: '2023 - 2024',
              },
              {
                title: 'Bachelor of Technology - IT',
                institution: 'Rajalakshmi Engineering College',
                period: '2016 - 2020',
              },
              {
                title: 'Google UX Design Certificate',
                institution: 'Google Career Certificates',
                period: 'Human-Computer Interaction & Wireframing',
              },
              {
                title: 'UI/UX Prototyping Masterclass',
                institution: 'Adobe XD & Figma & Framer',
                period: 'Motion & Interaction Design',
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