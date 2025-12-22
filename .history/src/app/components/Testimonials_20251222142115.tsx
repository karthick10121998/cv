import { Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: '',
      position: 'Project Manager',
      company: 'Pinaca Technologies',
      content: 'Great designer who delivers quality work on time. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Praveen Kumar',
      position: 'CEO',
      company: 'Aramporu Tech',
      content: 'Professional and creative. Understood our needs perfectly.',
      rating: 5,
    },
    {
      name: 'Arun Patel',
      position: 'Product Lead',
      company: 'THETTG',
      content: 'Excellent attention to detail and user-focused approach.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 px-6 lg:px-12 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto relative z-10 max-w-6xl">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-[#c7ff4d] text-sm mb-4">
            Client Feedback
          </div>
          <h2 className="text-4xl md:text-5xl mb-4">
            What Clients <span className="text-[#c7ff4d]">Say</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-[#c7ff4d]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#c7ff4d]/10 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-[#c7ff4d] text-[#c7ff4d]" />
                ))}
              </div>

              {/* Content */}
              <p className="text-white/70 mb-6 text-sm leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="pt-4 border-t border-white/10">
                <div className="mb-1">{testimonial.name}</div>
                <div className="text-white/50 text-xs">
                  {testimonial.position}, {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}