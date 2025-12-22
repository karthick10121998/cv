import { Mail, Phone, MapPin, Send, Linkedin, Dribbble, Instagram } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:karthickrajavelmurrugan10@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'karthickrajavelmurrugan10@gmail.com',
      link: 'mailto:karthickrajavelmurrugan10@gmail.com',
      color: '#c7ff4d',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8489215911',
      link: 'tel:+918489215911',
      color: '#60a5fa',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bengaluru, Karnataka, India',
      link: null,
      color: '#f97316',
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/karthickraja-velmurugan-10dec1998',
      color: '#0077b5',
    },
    {
      icon: Dribbble,
      label: 'Dribbble',
      link: 'https://dribbble.com/Carthee123',
      color: '#ea4c89',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      link: 'https://instagram.com',
      color: '#e4405f',
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 lg:px-12 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#c7ff4d]/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto relative z-10 max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-[#c7ff4d] text-sm mb-4">
            Let's Connect
          </div>
          <h2 className="text-4xl md:text-5xl mb-4">
            Get In <span className="text-[#c7ff4d]">Touch</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing!
          </p>
        </div>

        <div>
          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-[#c7ff4d]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#c7ff4d]/10 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 transition-transform duration-500 hover:scale-110 hover:rotate-6"
                  style={{ backgroundColor: `${info.color}15` }}
                >
                  <info.icon style={{ color: info.color }} size={20} />
                </div>
                <div className="text-white/50 text-sm mb-2">{info.label}</div>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-white hover:text-[#c7ff4d] transition-colors duration-300 text-sm break-all"
                  >
                    {info.value}
                  </a>
                ) : (
                  <div className="text-white text-sm">{info.value}</div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10 mb-16">
            <h3 className="text-2xl mb-8 text-center">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-white/70 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-[#c7ff4d] focus:outline-none transition-all duration-300 text-white"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-white/70 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-[#c7ff4d] focus:outline-none transition-all duration-300 text-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm text-white/70 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-[#c7ff4d] focus:outline-none transition-all duration-300 text-white"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-white/70 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-[#c7ff4d] focus:outline-none transition-all duration-300 text-white resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#c7ff4d] text-black rounded-xl hover:bg-[#d4ff70] transition-all duration-300 shadow-lg shadow-[#c7ff4d]/20 hover:shadow-[#c7ff4d]/40 hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>

          {/* Social Links & CTA */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {/* Social Links */}
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl mb-6">Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:border-[#c7ff4d] hover:bg-[#c7ff4d]/10 hover:-translate-y-1 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon size={20} className="text-white/70 hover:text-[#c7ff4d]" />
                  </a>
                ))}
              </div>
            </div>

            {/* CTA Box */}
            <div className="bg-gradient-to-br from-[#c7ff4d]/10 to-blue-500/10 border border-[#c7ff4d]/30 rounded-2xl p-8">
              <h3 className="text-xl mb-3">Ready to Start?</h3>
              <p className="text-white/70 text-sm mb-4">
                I'm currently available for freelance work and full-time opportunities.
              </p>
              <a
                href="https://karthickraja-design-folio.lovable.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-[#c7ff4d] text-black rounded-xl hover:bg-[#d4ff70] transition-all duration-300 hover:-translate-y-1 text-sm"
              >
                View Full Portfolio
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-white/50 text-sm">
          <p>© 2024 Karthickraja. All rights reserved.</p>
          <p className="mt-2">Designed & Built with passion</p>
        </div>
      </div>
    </section>
  );
}