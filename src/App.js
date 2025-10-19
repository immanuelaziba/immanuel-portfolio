import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      number: "01",
      title: "Dev Brand Kits Storefront",
      category: "Fullstack Product",
      description: "Digital storefront built with React and TailwindCSS with Paystack payment integration. Automated delivery system for UI kits and brand assets. Achieved 40 sales in first month with zero paid advertising.",
      tech: "React × TailwindCSS × Paystack API",
      status: "40+ Sales",
      liveUrl: "https://devbrandkits.com",
      sourceUrl: "https://github.com/immanuelaziba/dev-brand-kits"
    },
    {
      number: "02", 
      title: "QuickBrand NG",
      category: "MVP Development",
      description: "Rapid-branding MVP platform for entrepreneurs and small teams. Implemented reusable UI components and responsive landing sections. Used by early adopters as visual starter for brand identity.",
      tech: "React × TailwindCSS × Netlify",
      status: "Live MVP",
      liveUrl: "https://quickbrand.ng",
      sourceUrl: "https://github.com/immanuelaziba/quickbrand-ng"
    },
    {
      number: "03",
      title: "Blog API Backend",
      category: "GIZ Certification",
      description: "Production-ready blog API with secure authentication, validation, and media uploads. RESTful architecture following MVC principles. Earned GIZ certification after deployment and presentation.",
      tech: "Node.js × Express × MongoDB × JWT",
      status: "Certified",
      liveUrl: "https://blog-api-demo.herokuapp.com",
      sourceUrl: "https://github.com/immanuelaziba/blog-api-backend"
    },
    {
      number: "04",
      title: "Chart UI Kit",
      category: "Design-to-Code System", 
      description: "Reusable chart component kit for dashboards and product interfaces. Focused on motion, layout clarity, and developer-friendly structure. Shared as plug-and-play UI resource.",
      tech: "React × TailwindCSS × Framer Motion",
      status: "Open Source",
      liveUrl: "https://chart-ui-kit.netlify.app",
      sourceUrl: "https://github.com/immanuelaziba/chart-ui-kit"
    }
  ];

  const skills = [
    { title: "Frontend Engineering", items: ["React", "Next.js", "JavaScript ES6", "TailwindCSS"] },
    { title: "Backend & APIs", items: ["Node.js", "Express.js", "MongoDB", "REST APIs"] },
    { title: "UI & Product Systems", items: ["Component Architecture", "Framer Motion", "MVP Development", "Human-Centered Design"] }
  ];

  return (
    <div className="min-h-screen bg-[#EAE8E2] text-[#303438] font-light">
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#EAE8E2]/95 backdrop-blur-sm border-b border-[#303438]/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 md:py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 md:space-x-4">
              <img src="/logo.png" alt="Immanuel Aziba Logo" className="w-6 h-6 md:w-8 md:h-8 object-contain" />
              <div className="text-base md:text-xl font-light tracking-wide">
                <span className="font-normal">Immanuel Aziba</span>
              </div>
            </div>
            <div className="flex items-center space-x-6 md:space-x-12 text-xs md:text-sm tracking-wide">
              <a href="#work" className="hover:text-[#C6A357] transition-colors duration-300">Work</a>
              <a href="#about" className="hover:text-[#C6A357] transition-colors duration-300">About</a>
              <a href="#contact" className="text-[#C6A357] border-b border-[#C6A357] pb-1">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-24 md:pt-32 pb-16 px-6 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          
          {/* Large Typography Hero */}
          <div className="mb-12 md:mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light mb-6 md:mb-8 tracking-tight leading-tight">
              <span className="block text-[#303438]">I'm Immanuel Aziba —</span>
              <span className="block text-[#C6A357] font-normal mt-2">a software engineer</span>
              <span className="block text-[#303438] mt-2">with a design edge.</span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="max-w-2xl mx-auto mb-12 md:mb-16 px-4">
            <p className="text-base md:text-xl font-light leading-relaxed text-[#303438]/80">
              I build human-centered digital products with clarity, clean UI, and thoughtful engineering.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center gap-6 md:gap-8">
            <a href="#work" className="group relative overflow-hidden bg-[#C6A357] text-[#303438] px-8 md:px-12 py-3 md:py-4 rounded-lg text-xs md:text-sm font-medium tracking-wide transition-all duration-300 hover:bg-[#B39347] hover:-translate-y-0.5 shadow-soft">
              <span className="relative z-10 flex items-center gap-3">
                VIEW SELECTED WORK
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
            
            {/* Stats - Minimal */}
            <div className="flex items-center gap-8 md:gap-16 text-center mt-6 md:mt-8">
              <div>
                <div className="text-xl md:text-2xl font-normal text-[#C6A357]">40+</div>
                <div className="text-[10px] md:text-xs tracking-wider text-[#303438]/60">KITS SOLD</div>
              </div>
              <div className="w-px h-10 md:h-12 bg-[#303438]/10"></div>
              <div>
                <div className="text-xl md:text-2xl font-normal text-[#C6A357]">3</div>
                <div className="text-[10px] md:text-xs tracking-wider text-[#303438]/60">PRODUCTS SHIPPED</div>
              </div>
              <div className="w-px h-10 md:h-12 bg-[#303438]/10"></div>
              <div>
                <div className="text-xl md:text-2xl font-normal text-[#C6A357]">GIZ</div>
                <div className="text-[10px] md:text-xs tracking-wider text-[#303438]/60">CERTIFIED</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Minimal */}
      <section className="py-20 md:py-32 border-t border-[#303438]/10">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-light mb-4 md:mb-6 tracking-tight text-[#303438]">
              Core Focus
            </h2>
            <div className="w-16 md:w-24 h-px bg-[#C6A357] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {skills.map((skill, index) => (
              <div key={index} className="text-center group">
                <h3 className="text-base md:text-lg font-medium mb-6 md:mb-8 text-[#C6A357] tracking-wide">
                  {skill.title}
                </h3>
                <div className="space-y-3 md:space-y-4">
                  {skill.items.map((item, i) => (
                    <div key={i} className="relative">
                      <div className="text-sm font-light text-[#303438]/70 hover:text-[#C6A357] transition-colors duration-300 cursor-pointer">
                        {item}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="py-20 md:py-32 bg-[#303438]/[0.02]">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-light mb-4 md:mb-6 tracking-tight text-[#303438]">
              Selected Work
            </h2>
            <div className="w-16 md:w-24 h-px bg-[#C6A357] mx-auto"></div>
          </div>

          <div className="space-y-16 md:space-y-24">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group cursor-pointer"
                onMouseEnter={() => setActiveProject(index)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between border-b border-[#303438]/10 pb-6 md:pb-8 hover:border-[#C6A357] transition-all duration-500">
                  
                  {/* Project Number & Title */}
                  <div className="flex items-start gap-6 md:gap-12 flex-1 mb-4 md:mb-0">
                    <div className="text-2xl md:text-4xl font-light text-[#C6A357] tracking-wide">
                      {project.number}
                    </div>
                    <div className="flex-1">
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <h3 className="text-xl md:text-3xl font-normal mb-2 md:mb-3 text-[#303438] group-hover:text-[#C6A357] transition-colors duration-300">
                          {project.title}
                        </h3>
                      </a>
                      <p className="text-xs md:text-sm text-[#A12121] mb-4 md:mb-6 tracking-wide font-medium">
                        {project.category}
                      </p>
                      <p className="text-sm md:text-base font-light leading-relaxed text-[#303438]/70 mb-3 md:mb-4">
                        {project.description}
                      </p>
                      <p className="text-xs md:text-sm font-light text-[#303438]/60">
                        {project.tech}
                      </p>
                    </div>
                  </div>

                  {/* Status & Links */}
                  <div className="flex items-center justify-between md:justify-end gap-4 md:gap-6 ml-12 md:ml-0">
                    <div className="space-y-1 md:space-y-2">
                      <div className="text-xs md:text-sm text-[#C6A357] mb-1 md:mb-2 tracking-wide font-medium">
                        {project.status}
                      </div>
                      <div className="flex items-center gap-2 md:gap-3">
                        <a 
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[10px] md:text-xs text-[#A12121] hover:text-[#8B1A1A] transition-colors duration-300 tracking-wide"
                        >
                          LIVE SITE
                        </a>
                        <div className="w-px h-3 bg-[#303438]/20"></div>
                        <a 
                          href={project.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[10px] md:text-xs text-[#303438]/60 hover:text-[#C6A357] transition-colors duration-300 tracking-wide"
                        >
                          SOURCE
                        </a>
                      </div>
                    </div>
                    <ExternalLink className={`w-5 h-5 md:w-6 md:h-6 transition-all duration-300 ${activeProject === index ? 'text-[#C6A357] transform translate-x-1 -translate-y-1' : 'text-[#303438]/40'}`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Minimal */}
      <section id="about" className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-light mb-4 md:mb-6 tracking-tight text-[#303438]">
              About
            </h2>
            <div className="w-16 md:w-24 h-px bg-[#C6A357] mx-auto"></div>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-5 md:space-y-6">
            <p className="text-base md:text-lg font-light leading-relaxed text-[#303438]/80">
              Work happens where design and engineering overlap. The goal isn't to ship features — it's to ship things people actually understand and want to use. That means clean UI, readable code, and products that don't feel like work.
            </p>
            <p className="text-base md:text-lg font-light leading-relaxed text-[#303438]/80">
              I'm a software engineer with a design edge, and I build digital products with clarity and intention. I care about how interfaces feel — not just how they're built. My approach combines clean engineering, usability, and visual refinement.
            </p>
            <p className="text-base md:text-lg font-light leading-relaxed text-[#303438]/70">
              I've worked on UI systems, landing pages, digital brand kits, and product experiences that reflect both structure and taste. To me, engineering isn't just code — it's communication, flow, and the ability to make something usable without friction.
            </p>
            <p className="text-base md:text-lg font-light leading-relaxed text-[#303438]/70">
              My philosophy is rooted in <span className="text-[#C6A357] font-normal">human-centered engineering</span>. I believe tech should adapt to people, not the other way around. That means clean interfaces, intuitive layouts, and systems that respect user attention.
            </p>
            <p className="text-base md:text-lg font-light leading-relaxed text-[#303438]/70">
              Right now, I'm building and refining digital products that sit at the intersection of usability, design clarity, and solid development — with a focus on impact, not noise.
            </p>
          </div>
        </div>
      </section>-[#C6A357] font-normal">human-centered engineering</span>. I believe tech should adapt to people, not the other way around. That means clean interfaces, intuitive layouts, and systems that respect user attention.
            </p>
            <p className="text-lg font-light leading-relaxed text-[#303438]/70">
              Right now, I'm building and refining digital products that sit at the intersection of usability, design clarity, and solid development — with a focus on impact, not noise.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 border-t border-[#303438]/10">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-light mb-4 md:mb-6 tracking-tight text-[#303438]">
              Let's Connect
            </h2>
            <div className="w-16 md:w-24 h-px bg-[#C6A357] mx-auto mb-6 md:mb-8"></div>
            <p className="text-base md:text-lg font-light text-[#303438]/70">
              Open to discussing projects, collaborations, or just connecting.
            </p>
          </div>

          {/* Contact Info - Minimal Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-16">
            <div className="text-center">
              <div className="mb-3 md:mb-4">
                <Mail className="w-5 h-5 md:w-6 md:h-6 text-[#C6A357] mx-auto" />
              </div>
              <p className="text-xs md:text-sm font-medium text-[#303438]/60 mb-2 tracking-wide">EMAIL</p>
              <a href="mailto:immanuelaziba@gmail.com" className="text-sm md:text-base font-light hover:text-[#C6A357] transition-colors break-all">immanuelaziba@gmail.com</a>
            </div>
            <div className="text-center">
              <div className="mb-3 md:mb-4">
                <Phone className="w-5 h-5 md:w-6 md:h-6 text-[#C6A357] mx-auto" />
              </div>
              <p className="text-xs md:text-sm font-medium text-[#303438]/60 mb-2 tracking-wide">PHONE</p>
              <a href="tel:+2349031525643" className="text-sm md:text-base font-light hover:text-[#C6A357] transition-colors">+234.903.152.5643</a>
            </div>
            <div className="text-center">
              <div className="mb-3 md:mb-4">
                <MapPin className="w-5 h-5 md:w-6 md:h-6 text-[#C6A357] mx-auto" />
              </div>
              <p className="text-xs md:text-sm font-medium text-[#303438]/60 mb-2 tracking-wide">LOCATION</p>
              <p className="text-sm md:text-base font-light">Abuja, Nigeria</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            <a 
              href="https://github.com/immanuelaziba" 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-[#303438]/60 hover:text-[#C6A357] transition-colors duration-300"
            >
              <Github className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-xs md:text-sm font-light tracking-wide">GitHub</span>
            </a>
            <div className="w-px h-4 bg-[#303438]/20"></div>
            <a 
              href="https://linkedin.com/in/immanuelaziba" 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-[#303438]/60 hover:text-[#C6A357] transition-colors duration-300"
            >
              <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-xs md:text-sm font-light tracking-wide">LinkedIn</span>
            </a>
            <div className="w-px h-4 bg-[#303438]/20"></div>
            <a 
              href="mailto:immanuelaziba@gmail.com" 
              className="group flex items-center gap-2 text-[#303438]/60 hover:text-[#C6A357] transition-colors duration-300"
            >
              <Mail className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-xs md:text-sm font-light tracking-wide">Email</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer - Ultra Minimal */}
      <footer className="py-12 md:py-16 border-t border-[#303438]/10">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs md:text-sm font-light text-[#303438]/40">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Immanuel Aziba Logo" className="w-5 h-5 md:w-6 md:h-6 object-contain" />
              <span>Immanuel Aziba</span>
            </div>
            <div>
              <span>© 2025 — Built with intention</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;

