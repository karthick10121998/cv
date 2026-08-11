import { useState, useEffect } from "react";
import {
  Download,
  Send,
  Linkedin,
  Dribbble,
  Instagram,
  Mail,
} from "lucide-react";
import profileImage from "figma:asset/4770fda97463ab6bf6756bc775069b68d961c6c1.png";

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    "UI/UX Designer",
    "Product Designer",
    "AI Product Designer",
    "Web Designer",
    "Poster Designer",
    "Logo Designer",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-full min-h-screen flex items-center justify-center relative overflow-hidden pt-8 pb-24 lg:py-0">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#c7ff4d]/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
            <div className="space-y-5 lg:space-y-6">
              <div className="inline-block px-4 py-2 sm:px-5 sm:py-2.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
                <span
                  className="text-[#c7ff4d] transition-all duration-500"
                  key={currentRole}
                >
                  {roles[currentRole]}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
                Hey, I'm
                <br />
                <span className="text-[#c7ff4d]">Karthickraja</span>
              </h1>

              <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-xl">
                Some people design screens. I enjoy solving the little
                frustrations behind them—turning complex ideas, AI products, and
                messy workflows into experiences that simply feel right.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="/src/imports/Design_Resume_Karthickraja.pdf"
                download="Karthickraja_Resume.pdf"
                className="group px-8 py-4 bg-[#c7ff4d] text-black rounded-full hover:bg-[#d4ff70] transition-all duration-300 shadow-lg shadow-[#c7ff4d]/20 hover:shadow-[#c7ff4d]/40 hover:-translate-y-1 flex items-center gap-2"
              >
                Download CV
                <Download size={18} className="group-hover:animate-bounce" />
              </a>

              <button
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-4 border-2 border-white/20 rounded-full hover:border-[#c7ff4d] hover:text-[#c7ff4d] transition-all duration-300 hover:-translate-y-1 flex items-center gap-2"
              >
                Contact Me
                <Send size={18} />
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2 lg:pt-4">
              <span className="text-white/50 text-sm">Follow:</span>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/karthickraja-velmurugan-10dec1998"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center hover:bg-[#c7ff4d] hover:text-black hover:border-[#c7ff4d] transition-all duration-300 hover:-translate-y-1"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>

                <a
                  href="https://dribbble.com/Carthee123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center hover:bg-[#c7ff4d] hover:text-black hover:border-[#c7ff4d] transition-all duration-300 hover:-translate-y-1"
                  aria-label="Dribbble"
                >
                  <Dribbble size={18} />
                </a>

                <a
                  href="https://behance.net/cartheeraja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center hover:bg-[#c7ff4d] hover:text-black hover:border-[#c7ff4d] transition-all duration-300 hover:-translate-y-1"
                  aria-label="Behance"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.07 6.35H15.18V5.09h4.89v1.26zm-2.85 11.77c1.07 0 1.92-.32 2.51-.95.59-.63.89-1.43.89-2.4 0-1.06-.3-1.89-.91-2.48-.61-.59-1.41-.88-2.41-.88-1.01 0-1.82.29-2.43.88-.61.58-.92 1.4-.92 2.48s.31 1.89.92 2.48c.61.59 1.42.88 2.43.88.82 0 1.48-.17 1.98-.52.51-.35.86-.82 1.06-1.42h-1.63c-.12.27-.32.49-.6.65-.28.16-.61.24-1 .24-.55 0-.99-.16-1.32-.47-.33-.32-.51-.76-.54-1.33h5.37c.02-.14.03-.34.03-.59 0-1.36-.37-2.43-1.11-3.19-.74-.77-1.73-1.15-2.98-1.15-1.25 0-2.27.39-3.05 1.18-.78.78-1.17 1.83-1.17 3.15 0 1.32.38 2.37 1.15 3.15.77.78 1.81 1.17 3.13 1.17zm-8.17-.05c.8 0 1.45-.23 1.97-.68.51-.45.77-1.06.77-1.82 0-.59-.16-1.06-.47-1.43-.31-.37-.82-.65-1.52-.84.54-.18.94-.44 1.2-.77.26-.34.39-.76.39-1.27 0-.73-.25-1.3-.76-1.72-.51-.42-1.18-.63-2.01-.63H4.5v9.16h4.55zm-.23-5.21h-2.3V10.3h2.3c.38 0 .68.1.9.29.22.19.33.46.33.81 0 .36-.11.63-.34.82-.23.19-.53.28-.89.28zm.1 3.64h-2.4v-2.53h2.4c.42 0 .76.11 1.01.32.25.21.37.52.37.91 0 .4-.12.71-.37.93-.25.22-.59.33-1.01.33z" />
                  </svg>
                </a>

                {/* <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center hover:bg-[#c7ff4d] hover:text-black hover:border-[#c7ff4d] transition-all duration-300 hover:-translate-y-1"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a> */}

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=karthickrajavelmurugan10@gmail.com&su=Portfolio%20Enquiry&body=Hello%20Karthickraja,"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center hover:bg-[#c7ff4d] hover:text-black hover:border-[#c7ff4d] transition-all duration-300 hover:-translate-y-1"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end h-screen lg:h-auto lg:min-h-[600px]">
            {/* Profile Image Section */}
            <div className="relative w-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
              {/* Decorative Glow - Top Right */}
              <div
                className="
      absolute
      -top-6
      -right-4
      sm:-top-8
      sm:-right-8
      w-24
      h-24
      sm:w-32
      sm:h-32
      bg-[#c7ff4d]/10
      rounded-full
      blur-2xl
      animate-pulse
      pointer-events-none
    "
              />

              {/* Decorative Glow - Bottom Left */}
              <div
                className="
      absolute
      -bottom-6
      -left-4
      sm:-bottom-8
      sm:-left-8
      w-28
      h-28
      sm:w-40
      sm:h-40
      bg-blue-500/10
      rounded-full
      blur-2xl
      animate-pulse
      pointer-events-none
    "
                style={{ animationDelay: "1s" }}
              />

              {/* Main Image Wrapper */}
              <div
                className="
      relative
      w-full
      max-w-[240px]
      sm:max-w-[300px]
      md:max-w-[360px]
      lg:max-w-[420px]
      xl:max-w-[460px]

      aspect-[3/4]

      rounded-[1.5rem]
      sm:rounded-[2rem]

      overflow-hidden

      border-2
      border-white/10

      bg-gradient-to-br
      from-white/10
      to-white/5

      p-1

      shadow-2xl

      transition-all
      duration-700

      hover:scale-[1.02]
    "
              >
                {/* Inner Image Container */}
                <div
                  className="
        relative
        w-full
        h-full

        rounded-[1.3rem]
        sm:rounded-[1.8rem]

        overflow-hidden

        bg-gradient-to-br
        from-[#1a1a1a]
        to-[#0f0f0f]

        flex
        items-center
        justify-center
      "
                >
                  {/* Profile Image */}
                  <img
                    src={profileImage}
                    alt="Karthickraja"
                    className="
          block
          w-full
          h-full
          object-contain
          object-center
        "
                  />
                </div>
              </div>

              {/* Top Left Corner Accent */}
              {/* <div
                className="
      absolute
      top-[-10px]
      left-1/2
      -translate-x-1/2

      w-12
      h-12

      sm:w-16
      sm:h-16

      border-l-2
      border-t-2

      border-[#c7ff4d]/50

      rounded-tl-2xl

      pointer-events-none
    "
              /> */}

              {/* Bottom Right Corner Accent */}
              {/* <div
                className="
      absolute
      bottom-[-10px]
      left-1/2
      -translate-x-1/2

      w-12
      h-12

      sm:w-16
      sm:h-16

      border-r-2
      border-b-2

      border-[#c7ff4d]/50

      rounded-br-2xl

      pointer-events-none
    "
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
