import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail, Sparkles, Cpu, Cloud, Code, Zap, Star, Play, Download } from 'lucide-react';
import profileImage from '@/assets/harshith-profile.jpg';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const roles = ['AI Engineer', 'Cloud Architect', 'Full-Stack Developer', 'Tech Innovator'];
  
  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % roles.length);
    }, 3000);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const techIcons = [
    { Icon: Cpu, delay: '0s', position: 'top-10 left-20', color: 'text-blue-400' },
    { Icon: Cloud, delay: '1s', position: 'top-32 right-16', color: 'text-purple-400' },
    { Icon: Code, delay: '2s', position: 'bottom-32 left-16', color: 'text-green-400' },
    { Icon: Zap, delay: '0.5s', position: 'bottom-16 right-32', color: 'text-yellow-400' },
    { Icon: Sparkles, delay: '1.5s', position: 'top-64 left-64', color: 'text-pink-400' }
  ];

  return (
    <section id="home" className="min-h-screen gradient-mesh relative overflow-hidden">
      {/* Cursor Follow Effect */}
      <div 
        className="fixed w-6 h-6 rounded-full bg-white/20 pointer-events-none z-50 mix-blend-difference transition-transform duration-100 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${mousePosition.x > 0 ? 1 : 0})`
        }}
      />

      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Mesh Background */}
        <div className="absolute inset-0 opacity-30">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%),
                radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 50%),
                linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.05) 50%, transparent 70%)
              `,
              backgroundSize: '100px 100px, 150px 150px, 200px 200px',
              animation: 'gradientShift 20s ease-in-out infinite'
            }}
          />
        </div>

        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-32 right-20 w-24 h-24 border border-white/20 rotate-45 animate-wiggle"></div>
        <div className="absolute top-64 right-64 w-16 h-16 bg-white/10 rounded-lg animate-morph"></div>

        {/* Enhanced Floating Gradient Orbs */}
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-white/20 via-tech-accent/30 to-transparent rounded-full blur-3xl animate-float opacity-60"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-tech-secondary/30 via-purple-500/20 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-br from-pink-500/20 via-tech-primary/30 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Animated Tech Icons */}
        {techIcons.map(({ Icon, delay, position, color }, index) => (
          <div
            key={index}
            className={`absolute ${position} opacity-30 animate-float ${color}`}
            style={{ animationDelay: delay }}
          >
            <Icon size={28} className="animate-glow-pulse drop-shadow-lg" />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen gap-12">
          {/* Ultra-Modern Left Content */}
          <div className={`lg:w-1/2 text-white space-y-10 transition-all duration-1000 ${isVisible ? 'animate-slide-in-left opacity-100' : 'opacity-0'}`}>
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full animate-fade-in">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Available for opportunities</span>
            </div>

            <div className="space-y-8">
              {/* Modern Greeting */}
              <div className="flex items-center gap-4 animate-fade-in">
                <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center">
                  <Sparkles className="text-tech-accent animate-pulse" size={20} />
                </div>
                <div>
                  <p className="text-lg opacity-80">Hello World, I'm</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Star className="text-yellow-400" size={16} />
                    <span className="text-sm bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent font-semibold">
                      5.0 Developer Rating
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Ultra-Modern Name Display */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight animate-scale-pulse">
                  <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent block">
                    Harshith
                  </span>
                  <span className="bg-gradient-to-r from-tech-accent via-tech-secondary to-tech-primary bg-clip-text text-transparent block">
                    Ponnaganti
                  </span>
                </h1>
                
                {/* Dynamic Role with Modern Typography */}
                <div className="relative h-16 overflow-hidden">
                  <div className="absolute inset-0 flex items-center">
                    <span className="text-2xl md:text-3xl font-light opacity-60">A passionate </span>
                    <div className="relative ml-2">
                      <span 
                        key={currentWord}
                        className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-tech-accent to-white bg-clip-text text-transparent animate-fade-in"
                      >
                        {roles[currentWord]}
                      </span>
                      <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-tech-accent to-transparent animate-fade-in"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Description */}
              <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <p className="text-xl md:text-2xl font-light leading-relaxed">
                  <span className="bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
                    Crafting the future through
                  </span>
                  <span className="bg-gradient-to-r from-tech-accent to-tech-secondary bg-clip-text text-transparent font-semibold">
                    {" "}intelligent cloud solutions
                  </span>
                </p>
                <p className="text-lg opacity-80 leading-relaxed max-w-xl">
                  Specializing in AI-powered applications, scalable cloud architectures, and innovative 
                  full-stack solutions that transform ideas into reality.
                </p>
              </div>

              {/* Modern Stats Grid */}
              <div className="grid grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                {[
                  { number: '15+', label: 'Projects Delivered', icon: Star },
                  { number: '3+', label: 'Years Experience', icon: Zap },
                  { number: '20+', label: 'Technologies', icon: Code }
                ].map(({ number, label, icon: Icon }, index) => (
                  <div 
                    key={label}
                    className="glass-card p-6 rounded-2xl text-center modern-hover group"
                    style={{ animationDelay: `${0.7 + index * 0.1}s` }}
                  >
                    <Icon className="w-6 h-6 mx-auto mb-3 text-tech-accent group-hover:animate-wiggle" />
                    <div className="text-2xl font-bold bg-gradient-to-r from-tech-accent to-white bg-clip-text text-transparent">
                      {number}
                    </div>
                    <div className="text-sm opacity-70 mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Ultra-Modern Action Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.9s' }}>
              <Button 
                size="lg"
                className="glass-card border-0 bg-gradient-to-r from-white to-white/90 text-primary hover:shadow-glow transition-all duration-500 group px-8 py-4"
                onClick={() => scrollToSection('projects')}
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Explore My Work
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="glass-card border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-500 px-8 py-4 group"
                onClick={() => scrollToSection('contact')}
              >
                <Mail className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Let's Connect
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="glass-card border-tech-accent/50 text-tech-accent hover:bg-tech-accent/10 backdrop-blur-sm transition-all duration-500 px-8 py-4 group"
              >
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Resume
              </Button>
            </div>

            {/* Premium Social Links */}
            <div className="flex space-x-6 animate-fade-in" style={{ animationDelay: '1.2s' }}>
              {[
                { href: "https://github.com/9harshithp", Icon: Github, label: "GitHub", color: "hover:text-gray-400" },
                { href: "https://linkedin.com/in/harshithp914", Icon: Linkedin, label: "LinkedIn", color: "hover:text-blue-400" },
                { href: "mailto:harshithp914@gmail.com", Icon: Mail, label: "Email", color: "hover:text-red-400" }
              ].map(({ href, Icon, label, color }, index) => (
                <a 
                  key={label}
                  href={href}
                  target={href.includes('mailto') ? undefined : "_blank"}
                  rel={href.includes('mailto') ? undefined : "noopener noreferrer"}
                  className={`glass-card w-14 h-14 rounded-2xl flex items-center justify-center text-white ${color} transition-all duration-500 modern-hover group`}
                  style={{ animationDelay: `${1.3 + index * 0.1}s` }}
                >
                  <Icon size={20} className="group-hover:scale-125 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Ultra-Modern Profile Section */}
          <div className={`lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0 transition-all duration-1000 ${isVisible ? 'animate-slide-in-right opacity-100' : 'opacity-0'}`}>
            <div className="relative">
              {/* Main Profile Container */}
              <div className="relative group">
                {/* Outer Glow Ring */}
                <div className="absolute -inset-8 bg-gradient-to-r from-tech-accent via-tech-secondary to-tech-primary rounded-full opacity-20 animate-rotate-slow"></div>
                
                {/* Glass Frame */}
                <div className="relative glass-card p-4 rounded-full">
                  <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden relative group-hover:scale-105 transition-all duration-700">
                    <img 
                      src={profileImage} 
                      alt="Harshith Ponnaganti - AI & Cloud Engineer" 
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-tech-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              </div>
              
              {/* Floating Tech Badges */}
              <div className="absolute -top-8 -right-8 glass-card p-4 rounded-2xl modern-hover group">
                <div className="text-center">
                  <Cpu className="w-8 h-8 mx-auto mb-2 text-tech-accent group-hover:animate-wiggle" />
                  <div className="text-sm font-semibold">AI Expert</div>
                  <div className="text-xs opacity-70">Machine Learning</div>
                </div>
              </div>
              
              <div className="absolute -bottom-8 -left-8 glass-card p-4 rounded-2xl modern-hover group">
                <div className="text-center">
                  <Cloud className="w-8 h-8 mx-auto mb-2 text-blue-400 group-hover:animate-wiggle" />
                  <div className="text-sm font-semibold">Cloud Native</div>
                  <div className="text-xs opacity-70">AWS & Azure</div>
                </div>
              </div>

              {/* Orbiting Particles */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="relative w-full h-full">
                  {[...Array(3)].map((_, i) => (
                    <div 
                      key={i}
                      className="absolute top-1/2 left-1/2 w-3 h-3 bg-gradient-to-r from-tech-accent to-white rounded-full animate-orbit"
                      style={{ 
                        animationDelay: `${i * 2}s`,
                        animationDuration: `${10 + i * 2}s`
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modern Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={() => scrollToSection('about')}
            className="glass-card p-4 rounded-2xl text-white hover:text-tech-accent transition-all duration-500 group modern-hover"
          >
            <div className="flex flex-col items-center gap-3">
              <span className="text-sm font-medium opacity-70 group-hover:opacity-100">Discover More</span>
              <ArrowDown size={24} className="group-hover:animate-bounce" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;