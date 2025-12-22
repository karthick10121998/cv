import { Palette, Code, Layers, TrendingUp } from 'lucide-react';

export function Skills() {
  const designSkills = [
    { name: 'UI/UX Design', level: 95 },
    { name: 'Web Design', level: 90 },
    { name: 'Mobile Design', level: 88 },
    { name: 'Graphic Design', level: 85 },
    { name: 'Prototyping', level: 92 },
  ];

  const softwareSkills = [
    { name: 'Figma', level: 95 },
    { name: 'Adobe XD', level: 88 },
    { name: 'Framer', level: 85 },
    { name: 'After Effects', level: 80 },
    { name: 'Webflow', level: 85 },
  ];

  const developmentSkills = [
    { name: 'HTML/CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React JS', level: 88 },
    { name: 'Tailwind CSS', level: 92 },
    { name: '.NET (C#)', level: 75 },
  ];

  const managementSkills = [
    'Agile & Scrum',
    'Team Collaboration',
    'Design Thinking',
    'Problem Solving',
    'Time Management',
    'Client Communication',
  ];

  return (
    <section id="skills" className="py-24 px-6 lg:px-12 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#c7ff4d]/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto relative z-10 max-w-6xl">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-[#c7ff4d] text-sm mb-4">
            My Expertise
          </div>
          <h2 className="text-4xl md:text-5xl mb-4">
            Professional <span className="text-[#c7ff4d]">Skills</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-12">
            {/* Design Skills */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-[#c7ff4d]/10 rounded-xl flex items-center justify-center">
                  <Palette className="text-[#c7ff4d]" size={20} />
                </div>
                <h3 className="text-xl">Design Knowledge</h3>
              </div>

              <div className="space-y-6">
                {designSkills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between mb-3">
                      <span className="text-sm group-hover:text-[#c7ff4d] transition-colors duration-300">{skill.name}</span>
                      <span className="text-[#c7ff4d] text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#c7ff4d] to-[#a8e838] transition-all duration-1000 rounded-full hover:shadow-lg hover:shadow-[#c7ff4d]/50"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Software Skills */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                  <Layers className="text-blue-500" size={20} />
                </div>
                <h3 className="text-xl">Software & Tools</h3>
              </div>

              <div className="space-y-6">
                {softwareSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-3">
                      <span className="text-sm">{skill.name}</span>
                      <span className="text-[#c7ff4d] text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-1000 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {/* Development Skills */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center">
                  <Code className="text-orange-500" size={20} />
                </div>
                <h3 className="text-xl">Development</h3>
              </div>

              <div className="space-y-6">
                {developmentSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-3">
                      <span className="text-sm">{skill.name}</span>
                      <span className="text-[#c7ff4d] text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-orange-500 to-orange-400 transition-all duration-1000 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Management Skills */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center">
                  <TrendingUp className="text-purple-500" size={20} />
                </div>
                <h3 className="text-xl">Management</h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {managementSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-lg px-4 py-3 text-sm hover:border-[#c7ff4d]/50 transition-all duration-300 flex items-center gap-2"
                  >
                    <div className="w-1.5 h-1.5 bg-[#c7ff4d] rounded-full flex-shrink-0"></div>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}