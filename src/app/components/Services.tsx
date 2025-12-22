import { Lightbulb, Smartphone, Globe, Layout, Video, FileImage, CreditCard, Code2 } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Lightbulb,
      title: 'Logo Design',
      description: 'Creating unique and memorable brand identities that capture your business essence and stand out in the market.',
      color: '#c7ff4d',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Design',
      description: 'Designing intuitive and engaging mobile interfaces that provide seamless user experiences on iOS and Android.',
      color: '#60a5fa',
    },
    {
      icon: Globe,
      title: 'Website Design',
      description: 'Crafting beautiful, responsive websites that convert visitors into customers with modern design principles.',
      color: '#f97316',
    },
    {
      icon: Layout,
      title: 'Web Application Design',
      description: 'Building complex web applications with user-centered design approach that solves real business problems.',
      color: '#8b5cf6',
    },
    {
      icon: Video,
      title: 'Video Editing',
      description: 'Creating compelling video content with professional editing, motion graphics, and visual storytelling.',
      color: '#ec4899',
    },
    {
      icon: FileImage,
      title: 'Poster Design',
      description: 'Designing eye-catching posters and marketing materials that communicate your message effectively.',
      color: '#14b8a6',
    },
    {
      icon: CreditCard,
      title: 'Business Card Design',
      description: 'Creating professional business cards that make lasting first impressions and reflect your brand identity.',
      color: '#f59e0b',
    },
    {
      icon: Code2,
      title: 'Coding & Development',
      description: 'Building modern web applications using ReactJS, Tailwind CSS, and .NET (C#) with clean, maintainable code.',
      color: '#6366f1',
    },
  ];

  return (
    <section id="services" className="py-24 px-6 lg:px-12 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto relative z-10 max-w-6xl">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-[#c7ff4d] text-sm mb-4">
            What I Offer
          </div>
          <h2 className="text-4xl md:text-5xl mb-4">
            My <span className="text-[#c7ff4d]">Services</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl">
            Comprehensive design and development solutions tailored to your needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                style={{ backgroundColor: `${service.color}15` }}
              >
                <service.icon style={{ color: service.color }} size={24} />
              </div>

              {/* Title */}
              <h3 className="text-lg mb-3 group-hover:text-[#c7ff4d] transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}