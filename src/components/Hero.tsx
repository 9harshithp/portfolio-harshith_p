import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail, Sparkles, Cpu, Cloud, Code, Zap } from 'lucide-react';
import profileImage from '@/assets/harshith-profile.jpg';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const roles = ['AI Engineer', 'Cloud Architect', 'Full-Stack Developer', 'Tech Innovator'];
  
  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const techIcons = [
    { Icon: Cpu, delay: '0s', position: 'top-10 left-20' },
    { Icon: Cloud, delay: '1s', position: 'top-32 right-16' },
    { Icon: Code, delay: '2s', position: 'bottom-32 left-16' },
    { Icon: Zap, delay: '0.5s', position: 'bottom-16 right-32' },
    { Icon: Sparkles, delay: '1.5s', position: 'top-64 left-64' }
  ];

  return (
    <section id="home" className="min-h-screen bg-hero-gradient relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-white/10 to-tech-accent/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-tech-accent/20 to-tech-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-tech-secondary/20 to-white/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Animated Tech Icons */}
        {techIcons.map(({ Icon, delay, position }, index) => (
          <div
            key={index}
            className={`absolute ${position} opacity-20 animate-float`}
            style={{ animationDelay: delay }}
          >
            <Icon size={32} className="text-white animate-pulse-glow" />
          </div>
        ))}

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)',
            backgroundSize: '20px 20px'
          }}></div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen">
          {/* Enhanced Left Content */}
          <div className={`lg:w-1/2 text-white space-y-8 transition-all duration-1000 ${isVisible ? 'animate-slide-in-left opacity-100' : 'opacity-0'}`}>
            <div className="space-y-6">
              {/* Greeting with Animation */}
              <div className="flex items-center gap-3 animate-fade-in">
                <Sparkles className="text-tech-accent animate-pulse" size={24} />
                <h2 className="text-lg md:text-xl font-medium opacity-90">
                  Hello, I'm
                </h2>
              </div>
              
              {/* Name with Enhanced Typography */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-scale-pulse">
                <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  Harshith P
                </span>
                <br />
                <span className="text-tech-accent relative">
                  <span className="opacity-30">A </span>
                  <span 
                    key={currentWord}
                    className="inline-block animate-fade-in bg-gradient-to-r from-tech-accent to-white bg-clip-text text-transparent"
                  >
                    {roles[currentWord]}
                  </span>
                </span>
              </h1>
              
              {/* Enhanced Tagline */}
              <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <p className="text-xl md:text-2xl opacity-90 max-w-2xl bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent font-semibold">
                  Building the Future with Cloud & AI
                </p>
                <p className="text-lg opacity-80 max-w-xl leading-relaxed">
                  Passionate about creating scalable, intelligent solutions that make a difference. 
                  I specialize in cloud platforms, generative AI, and full-stack development.
                </p>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-3 gap-4 mt-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                  <div className="text-2xl font-bold text-tech-accent">5+</div>
                  <div className="text-sm opacity-80">Projects</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                  <div className="text-2xl font-bold text-tech-accent">3+</div>
                  <div className="text-sm opacity-80">Years Exp</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                  <div className="text-2xl font-bold text-tech-accent">10+</div>
                  <div className="text-sm opacity-80">Technologies</div>
                </div>
              </div>
            </div>

            {/* Enhanced Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.9s' }}>
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-white/90 hover:shadow-glow transition-all duration-300 group"
                onClick={() => scrollToSection('projects')}
              >
                <Sparkles className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                View My Work
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary transition-all duration-300 backdrop-blur-sm"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </Button>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex space-x-6 pt-4 animate-fade-in" style={{ animationDelay: '1.2s' }}>
              {[
                { href: "https://github.com/9harshithp", Icon: Github, label: "GitHub" },
                { href: "https://linkedin.com/in/harshithp914", Icon: Linkedin, label: "LinkedIn" },
                { href: "mailto:harshithp914@gmail.com", Icon: Mail, label: "Email" }
              ].map(({ href, Icon, label }, index) => (
                <a 
                  key={label}
                  href={href}
                  target={href.includes('mailto') ? undefined : "_blank"}
                  rel={href.includes('mailto') ? undefined : "noopener noreferrer"}
                  className="text-white hover:text-tech-accent transition-all duration-300 transform hover:scale-125 hover:-translate-y-1 group"
                  style={{ animationDelay: `${1.3 + index * 0.1}s` }}
                >
                  <div className="relative">
                    <Icon size={24} />
                    <div className="absolute inset-0 bg-tech-accent/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300 -z-10"></div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Enhanced Right Content - Profile Image */}
          <div className={`lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0 transition-all duration-1000 ${isVisible ? 'animate-slide-in-right opacity-100' : 'opacity-0'}`}>
            <div className="relative">
              {/* Main Profile Image */}
              <div className="relative group">
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-glow transition-all duration-500 group-hover:scale-105 group-hover:shadow-tech">
                  <img 
                    src={profileImage} 
                    alt="Harshith P - Cloud & AI Engineer" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                {/* Floating Ring */}
                <div className="absolute inset-0 rounded-full border-2 border-tech-accent/30 animate-pulse-glow"></div>
              </div>
              
              {/* Enhanced Floating Badges */}
              <div className="absolute -top-6 -right-6 w-28 h-28 bg-gradient-to-r from-tech-accent to-tech-secondary rounded-full flex items-center justify-center text-white font-bold text-lg animate-pulse-glow shadow-tech group cursor-pointer">
                <div className="text-center">
                  <Cpu size={20} className="mx-auto mb-1" />
                  <div className="text-sm">AI</div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-r from-white to-white/90 rounded-full flex items-center justify-center text-primary font-bold animate-bounce-gentle shadow-tech group cursor-pointer">
                <div className="text-center">
                  <Cloud size={18} className="mx-auto mb-1" />
                  <div className="text-xs">Cloud</div>
                </div>
              </div>
              
              {/* Orbiting Elements */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="relative w-full h-full">
                  <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-tech-accent rounded-full animate-orbit -translate-x-2 -translate-y-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-white hover:text-tech-accent transition-all duration-300 group"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm opacity-70 group-hover:opacity-100">Scroll down</span>
              <ArrowDown size={32} className="group-hover:scale-110 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;