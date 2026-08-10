export function Skills() {
  const categories = [
    {
      label: 'Product & UX',
      color: '#c7ff4d',
      bg: 'bg-[#c7ff4d]/10',
      border: 'border-[#c7ff4d]/20',
      dot: 'bg-[#c7ff4d]',
      skills: ['Product Thinking', 'UX Strategy', 'User Research', 'User Flows', 'Information Architecture', 'User-Centered Design'],
    },
    {
      label: 'UI & Interaction',
      color: '#60a5fa',
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/20',
      dot: 'bg-blue-400',
      skills: ['Wireframing', 'Prototyping', 'Interaction Design', 'High-Fidelity UI', 'Responsive Design', 'Visual Hierarchy', 'Accessibility'],
    },
    {
      label: 'AI Product Design',
      color: '#a78bfa',
      bg: 'bg-purple-500/10',
      border: 'border-purple-500/20',
      dot: 'bg-purple-400',
      skills: ['AI Interfaces', 'AI Chat Experiences', 'AI Dashboards', 'AI Workflows', 'Online & Offline AI', 'Data Visualization'],
    },
    {
      label: 'Design Systems',
      color: '#fb923c',
      bg: 'bg-orange-500/10',
      border: 'border-orange-500/20',
      // dot: 'bg-orange-400',
      skills: ['Component Libraries', 'Reusable Components', 'Design Patterns', 'Design Consistency', 'Developer Handoff'],
    },
  ];

  const toolbox = [
    { tool: 'Figma', note: 'Where most ideas begin.' },
    { tool: 'Photoshop', note: 'Where pixels behave.' },
    { tool: 'Illustrator', note: 'Where vectors survive.' },
    { tool: 'After Effects', note: 'Where static designs start moving.' },
    { tool: 'Premiere Pro', note: 'Where ideas become stories.' },
    { tool: 'DaVinci Resolve', note: 'Where videos get their final polish.' },
    { tool: 'Blender / Spline', note: 'When 2D isn\'t enough.' },
    { tool: 'Framer / Webflow', note: 'When design needs to feel alive.' },
    { tool: 'React / HTML / CSS', note: 'When design meets reality.' },
    { tool: 'Tailwind CSS', note: 'When styling should just work.' },
  ];

  return (
    <section id="skills" className="py-24 px-6 lg:px-12 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#c7ff4d]/5 to-transparent pointer-events-none" />

      <div className="container mx-auto relative z-10 max-w-6xl">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-[#c7ff4d] text-sm mb-4">
            My Expertise
          </div>
          <h2 className="text-4xl md:text-5xl mb-4">
            Things I'm <span className="text-[#c7ff4d]">Good At</span>
          </h2>
          <p className="text-white/50 text-base">Besides moving pixels.</p>
        </div>

        {/* Skill Category Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {categories.map((cat, i) => (
            <div
              key={i}
              className={`rounded-2xl border p-7 hover:-translate-y-1 transition-all duration-400 ${cat.bg} ${cat.border}`}
            >
              <div className="flex items-center gap-2 mb-5">
                <span className={`w-2 h-2 rounded-full ${cat.dot}`} />
                <span className="text-sm font-medium tracking-wide" style={{ color: cat.color }}>
                  {cat.label}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, j) => (
                  <span
                    key={j}
                    className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-white/80 hover:text-white hover:border-white/30 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Design Toolbox */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-sm text-white/40 uppercase tracking-widest px-4">My Design Toolbox</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {toolbox.map((item, i) => (
              <div
                key={i}
                className="group flex items-start gap-4 px-5 py-4 bg-white/[0.03] border border-white/8 rounded-xl hover:border-[#c7ff4d]/30 hover:bg-white/[0.06] transition-all duration-300"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#c7ff4d]/60 mt-2 flex-shrink-0 group-hover:bg-[#c7ff4d] transition-colors duration-300" />
                <div>
                  <span className="text-sm text-white/90 font-medium">{item.tool}</span>
                  <span className="text-white/40 text-xs"> — {item.note}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
