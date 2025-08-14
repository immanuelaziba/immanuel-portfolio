import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, ArrowRight, Menu, X } from 'lucide-react';

const Portfolio = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      title: "QuickBrand NG",
      category: "Brand System Startup",
      description: "Instant-branding service for small businesses using lean MVP principles. Built complete brand system with Notion, Paystack, Tailwind, and Vercel.",
      tech: "Tailwind × Paystack × Notion × Vercel",
      status: "Live Product",
      liveUrl: "https://immanuelaziba.github.com/quickbrandng",
      sourceUrl: "https://github.com/immanuelaziba/quickbrandng"
    },
    {
      number: "02", 
      title: "Dev Brand Kits",
      category: "Digital Storefront",
      description: "Launched storefront with 40+ organic kit sales. HTML/CSS/JS templates, Tailwind UI kits, and Notion-ready brand templates for developers.",
      tech: "React × TailwindCSS × Paystack",
      status: "40+ Sales",
      liveUrl: "https://immanuelaziba.github.io/devbrandkits",
      sourceUrl: "https://github.com/immanuelaziba/devbrandkits"
    },
    {
      number: "03",
      title: "Blog API Backend",
      category: "GIZ Certification",
      description: "Full CRUD blog API with Node.js, Express, MongoDB, JWT authentication. Complete documentation and testing in Postman.",
      tech: "Node.js × Express × MongoDB × JWT",
      status: "Certified",
      liveUrl: "https://immanuelaziba.github.io/blog-api-v1",
      sourceUrl: "https://github.com/immanuelaziba/blog-api-v1"
    },
    {
      number: "04",
      title: "Commit Circle UI",
      category: "Component Library", 
      description: "Modular React component library with Chart.js integration. Documented in Storybook for interactive testing and developer experience.",
      tech: "React × Chart.js × Storybook",
      status: "Open Source",
      liveUrl: "https://immanuelaziba.github.io/commit-circle-ui-kit",
      sourceUrl: "https://github.com/immanuelaziba/commit-circle-ui-kit"
    },
    {
      number: "05",
      title: "SoulStack - Stoic Bible Flashcards",
      category: "Interactive Web App", 
      description: "React-based flashcard app with Tailwind styling, local storage progress tracking, and daily Stoic quote delivery. Designed for mindful learning and consistent practice.",
      tech: "React × TailwindCSS × Local Storage",
      status: "Open Source",
      liveUrl: "https://immanuelaziba.github.io/soulstack-v1",
      sourceUrl: "https://github.com/immanuelaziba/soulstack-v1"
    }
  ];

  const skills = [
    { title: "Brand Design", items: ["Design Systems", "Visual Identity", "Typography", "Brand Strategy"] },
    { title: "Frontend Development", items: ["React", "TailwindCSS", "JavaScript", "Next.js"] },
    { title: "Strategy & Systems", items: ["Product MVP", "Process Design", "Developer Tools", "UI Systems"] }
  ];

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <div className="min-h-screen bg-white text-[#303438] font-light">
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-sm border-b border-gray-100' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <img src="/immanuelaziba-logo.png" alt="Immanuel Aziba Logo" className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
              <div className="text-lg sm:text-xl font-light tracking-wide">
                <span className="font-normal">Immanuel Aziba</span>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-12 text-sm tracking-wider">
              <a href="#work" className="hover:text-[#A12121] transition-colors duration-300">WORK</a>
              <a href="#about" className="hover:text-[#A12121] transition-colors duration-300">ABOUT</a>
              <a href="#contact" className="hover:text-[#A12121] transition-colors duration-300">CONTACT</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-[#303438] hover:text-[#A12121] transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
              <div className="flex flex-col space-y-4 pt-4">
                <a 
                  href="#work" 
                  className="text-sm tracking-wider hover:text-[#A12121] transition-colors duration-300"
                  onClick={closeMenu}
                >
                  WORK
                </a>
                <a 
                  href="#about" 
                  className="text-sm tracking-wider hover:text-[#A12121] transition-colors duration-300"
                  onClick={closeMenu}
                >
                  ABOUT
                </a>
                <a 
                  href="#contact" 
                  className="text-sm tracking-wider hover:text-[#A12121] transition-colors duration-300"
                  onClick={closeMenu}
                >
                  CONTACT
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-20 sm:pt-24 pb-8 sm:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Large Typography Hero */}
          <div className="mb-8 sm:mb-16">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extralight mb-4 sm:mb-8 tracking-tighter leading-none">
              <span className="block text-[#303438]">FROM</span>
              <span className="block text-[#A12121] font-light">CONFUSED</span>
            </h1>
            <div className="flex items-center justify-center my-6 sm:my-12">
              <div className="h-px bg-gradient-to-r from-transparent via-[#C6A357] to-transparent w-16 sm:w-32"></div>
              <div className="mx-4 sm:mx-8 text-[#C6A357] text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em]">TO</div>
              <div className="h-px bg-gradient-to-r from-transparent via-[#C6A357] to-transparent w-16 sm:w-32"></div>
            </div>
            <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extralight tracking-tighter leading-none">
              <span className="block text-[#C6A357]">CONSISTENT</span>
            </h2>
          </div>

          {/* Subtitle */}
          <div className="max-w-2xl mx-auto mb-8 sm:mb-16">
            <p className="text-lg sm:text-xl font-light leading-relaxed text-[#303438]/70 mb-4 px-4 sm:px-0">
              Brand Designer × Frontend Developer × Strategy-Driven Builder
            </p>
            <p className="text-sm sm:text-base font-light leading-relaxed text-[#303438]/60 px-4 sm:px-0">
              Guiding creators through digital transformation with clarity, simplicity, and trust.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center gap-6 sm:gap-8">
            <button
              onClick={() => {
                document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group relative overflow-hidden bg-[#A12121] text-white px-8 sm:px-12 py-3 sm:py-4 text-sm tracking-wider transition-all duration-300 hover:bg-[#8B1A1A] hover:-translate-y-0.5 w-full sm:w-auto max-w-xs"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                VIEW SELECTED WORK
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
          </div>

          {/* Stats - Mobile Friendly */}
          <div className="flex items-center justify-center gap-8 sm:gap-16 text-center mt-6 sm:mt-8 px-4">
            <div>
              <div className="text-xl sm:text-2xl font-light text-[#A12121]">40+</div>
              <div className="text-xs tracking-wider text-[#303438]/60">KITS SOLD</div>
            </div>
            <div className="w-px h-8 sm:h-12 bg-[#303438]/10"></div>
            <div>
              <div className="text-xl sm:text-2xl font-light text-[#A12121]">3</div>
              <div className="text-xs tracking-wider text-[#303438]/60">PRODUCTS</div>
            </div>
            <div className="w-px h-8 sm:h-12 bg-[#303438]/10"></div>
            <div>
              <div className="text-xl sm:text-2xl font-light text-[#A12121]">5+</div>
              <div className="text-xs tracking-wider text-[#303438]/60">PROJECTS</div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 sm:py-24 lg:py-32 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extralight mb-4 sm:mb-6 tracking-tight">
              <span className="text-[#303438]">CORE</span>
              <span className="text-[#A12121] ml-2 sm:ml-4">FOCUS</span>
            </h2>
            <div className="w-16 sm:w-24 h-px bg-[#C6A357] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16">
            {skills.map((skill, index) => (
              <div key={index} className="text-center group">
                <h3 className="text-xl sm:text-2xl font-light mb-6 sm:mb-8 text-[#A12121] tracking-wide">
                  {skill.title.toUpperCase()}
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {skill.items.map((item, i) => (
                    <div key={i} className="relative">
                      <div className="text-sm font-light text-[#303438]/70 hover:text-[#A12121] transition-colors duration-300 cursor-pointer">
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
      <section id="work" className="py-16 sm:py-24 lg:py-32 bg-gray-50/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extralight mb-4 sm:mb-6 tracking-tight">
              <span className="text-[#303438]">SELECTED</span>
              <span className="text-[#A12121] ml-2 sm:ml-4">WORK</span>
            </h2>
            <div className="w-16 sm:w-24 h-px bg-[#C6A357] mx-auto"></div>
          </div>

          <div className="space-y-12 sm:space-y-16 lg:space-y-24">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group cursor-pointer"
                onMouseEnter={() => setActiveProject(index)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <div className="border-b border-gray-200 pb-6 sm:pb-8 hover:border-[#A12121] transition-all duration-500">
                  
                  {/* Mobile Layout */}
                  <div className="block lg:hidden">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-2xl sm:text-3xl font-extralight text-[#C6A357] tracking-wider">
                        {project.number}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl font-light mb-2 text-[#303438] group-hover:text-[#A12121] transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-sm text-[#A12121] mb-3 tracking-wider">
                          {project.category.toUpperCase()}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm sm:text-base font-light leading-relaxed text-[#303438]/70 mb-3">
                      {project.description}
                    </p>
                    <p className="text-xs sm:text-sm font-light text-[#303438]/60 mb-4">
                      {project.tech}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-xs sm:text-sm text-[#C6A357] tracking-wider">
                        {project.status.toUpperCase()}
                      </div>
                      <div className="flex items-center gap-4">
                        <a 
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-[#A12121] hover:text-[#8B1A1A] transition-colors duration-300 tracking-wider"
                        >
                          LIVE SITE
                        </a>
                        <a 
                          href={project.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-[#303438]/60 hover:text-[#A12121] transition-colors duration-300 tracking-wider"
                        >
                          SOURCE
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Layout */}
                  <div className="hidden lg:flex items-start justify-between">
                    <div className="flex items-start gap-12 flex-1">
                      <div className="text-4xl font-extralight text-[#C6A357] tracking-wider">
                        {project.number}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-3xl font-light mb-3 text-[#303438] group-hover:text-[#A12121] transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-sm text-[#A12121] mb-6 tracking-wider">
                          {project.category.toUpperCase()}
                        </p>
                        <p className="text-base font-light leading-relaxed text-[#303438]/70 max-w-2xl mb-4">
                          {project.description}
                        </p>
                        <p className="text-sm font-light text-[#303438]/60">
                          {project.tech}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 text-right">
                      <div className="space-y-2">
                        <div className="text-sm text-[#C6A357] mb-2 tracking-wider">
                          {project.status.toUpperCase()}
                        </div>
                        <div className="flex items-center gap-3">
                          <a 
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-[#A12121] hover:text-[#8B1A1A] transition-colors duration-300 tracking-wider"
                          >
                            LIVE SITE
                          </a>
                          <div className="w-px h-3 bg-[#303438]/20"></div>
                          <a 
                            href={project.sourceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-[#303438]/60 hover:text-[#A12121] transition-colors duration-300 tracking-wider"
                          >
                            SOURCE
                          </a>
                        </div>
                      </div>
                      <ExternalLink className={`w-6 h-6 transition-all duration-300 ${activeProject === index ? 'text-[#A12121] transform translate-x-1 -translate-y-1' : 'text-[#303438]/40'}`} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extralight mb-4 sm:mb-6 tracking-tight text-[#303438]">
              PHILOSOPHY
            </h2>
            <div className="w-16 sm:w-24 h-px bg-[#C6A357] mx-auto"></div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-lg sm:text-xl font-light leading-relaxed text-[#303438]/80 text-center mb-6 sm:mb-8">
              I believe in the power of <span className="text-[#A12121]">systematic clarity</span>. 
              Every brand deserves a foundation that developers can trust, 
              designers can expand, and creators can <span className="text-[#C6A357]">scale confidently</span>.
            </p>
            <p className="text-sm sm:text-base font-light leading-relaxed text-[#303438]/60 text-center">
              From API backends to UI kits, deployable websites to brand toolkits — 
              I help early-stage startups and creatives launch fast with lean, beautiful, scalable systems.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24 lg:py-32 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extralight mb-4 sm:mb-6 tracking-tight">
              <span className="text-[#303438]">LET'S</span>
              <span className="text-[#A12121] ml-2 sm:ml-4">CONNECT</span>
            </h2>
            <div className="w-16 sm:w-24 h-px bg-[#C6A357] mx-auto mb-6 sm:mb-8"></div>
            <p className="text-base sm:text-lg font-light text-[#303438]/70">
              Ready to transform your brand idea into a developer-ready system?
            </p>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 mb-12 sm:mb-16">
            <div className="text-center">
              <div className="mb-4">
                <Mail className="w-6 h-6 text-[#A12121] mx-auto" />
              </div>
              <p className="text-sm font-light text-[#303438]/60 mb-2 tracking-wider">EMAIL</p>
              <p className="text-sm sm:text-base font-light break-all">immanuelaziba@gmail.com</p>
            </div>
            <div className="text-center">
              <div className="mb-4">
                <Phone className="w-6 h-6 text-[#A12121] mx-auto" />
              </div>
              <p className="text-sm font-light text-[#303438]/60 mb-2 tracking-wider">PHONE</p>
              <p className="text-sm sm:text-base font-light">+234.903.152.5643</p>
            </div>
            <div className="text-center">
              <div className="mb-4">
                <MapPin className="w-6 h-6 text-[#A12121] mx-auto" />
              </div>
              <p className="text-sm font-light text-[#303438]/60 mb-2 tracking-wider">LOCATION</p>
              <p className="text-sm sm:text-base font-light">Abuja, Nigeria</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
            <a 
              href="https://github.com/immanuelaziba" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-[#303438]/60 hover:text-[#A12121] transition-colors duration-300 touch-target"
            >
              <Github className="w-5 h-5" />
              <span className="text-sm font-light tracking-wider">GITHUB</span>
            </a>
            <div className="hidden sm:block w-px h-4 bg-[#303438]/20"></div>
            <a 
              href="https://www.linkedin.com/in/immanuelaziba" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-[#303438]/60 hover:text-[#A12121] transition-colors duration-300 touch-target"
            >
              <Linkedin className="w-5 h-5" />
              <span className="text-sm font-light tracking-wider">LINKEDIN</span>
            </a>
            <div className="hidden sm:block w-px h-4 bg-[#303438]/20"></div>
            <a 
              href="mailto:immanuelaziba@gmail.com" 
              className="group flex items-center gap-2 text-[#303438]/60 hover:text-[#A12121] transition-colors duration-300 touch-target"
            >
              <Mail className="w-5 h-5" />
              <span className="text-sm font-light tracking-wider">EMAIL</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-16 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between text-sm font-light text-[#303438]/40 gap-4">
            <div className="flex items-center gap-3">
              <img src="/immanuelaziba-logo.png" alt="Immanuel Aziba Logo" className="w-6 h-6 object-contain" />
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
