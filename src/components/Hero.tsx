import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail, Sparkles, Cpu, Cloud, Code, Zap, Star, Play, Download } from 'lucide-react';
import profileImage from '@/assets/profile-picture.jpg';
import { useState, useEffect } from 'react';
const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const roles = ['AI Engineer', 'Cloud Architect', 'Full-Stack Developer', 'Tech Innovator'];
  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentWord(prev => (prev + 1) % roles.length);
    }, 3000);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
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
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const techIcons = [{
    Icon: Cpu,
    delay: '0s',
    position: 'top-10 left-20',
    color: 'text-blue-400'
  }, {
    Icon: Cloud,
    delay: '1s',
    position: 'top-32 right-16',
    color: 'text-purple-400'
  }, {
    Icon: Code,
    delay: '2s',
    position: 'bottom-32 left-16',
    color: 'text-green-400'
  }, {
    Icon: Zap,
    delay: '0.5s',
    position: 'bottom-16 right-32',
    color: 'text-yellow-400'
  }, {
    Icon: Sparkles,
    delay: '1.5s',
    position: 'top-64 left-64',
    color: 'text-pink-400'
  }];
  return <section id="home" className="min-h-screen gradient-mesh relative overflow-hidden">
      {/* Cursor Follow Effect */}
      <div className="fixed w-6 h-6 rounded-full bg-white/20 pointer-events-none z-50 mix-blend-difference transition-transform duration-100 ease-out" style={{
      left: mousePosition.x - 12,
      top: mousePosition.y - 12,
      transform: `scale(${mousePosition.x > 0 ? 1 : 0})`
    }} />

      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Mesh Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
          backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%),
                radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 50%),
                linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.05) 50%, transparent 70%)
              `,
          backgroundSize: '100px 100px, 150px 150px, 200px 200px',
          animation: 'gradientShift 20s ease-in-out infinite'
        }} />
        </div>

        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-32 right-20 w-24 h-24 border border-white/20 rotate-45 animate-wiggle"></div>
        <div className="absolute top-64 right-64 w-16 h-16 bg-white/10 rounded-lg animate-morph"></div>

        {/* Enhanced Floating Gradient Orbs */}
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-white/20 via-tech-accent/30 to-transparent rounded-full blur-3xl animate-float opacity-60"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-tech-secondary/30 via-purple-500/20 to-transparent rounded-full blur-3xl animate-float" style={{
        animationDelay: '1s'
      }}></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-br from-pink-500/20 via-tech-primary/30 to-transparent rounded-full blur-3xl animate-float" style={{
        animationDelay: '2s'
      }}></div>
        
        {/* Animated Tech Icons */}
        {techIcons.map(({
        Icon,
        delay,
        position,
        color
      }, index) => <div key={index} className={`absolute ${position} opacity-30 animate-float ${color}`} style={{
        animationDelay: delay
      }}>
            <Icon size={28} className="animate-glow-pulse drop-shadow-lg" />
          </div>)}
      </div>

      <div className="container mx-auto px-6 py-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen gap-16">
          {/* Left Content Section */}
          <div className={`lg:w-3/5 text-white space-y-8 transition-all duration-1000 ${isVisible ? 'animate-slide-in-left opacity-100' : 'opacity-0'}`}>
            
            {/* Greeting */}
            <div className="animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-light opacity-80 mb-2">Hello, I'm</h2>
            </div>
            
            {/* Name */}
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-white to-white/90 bg-clip-text text-transparent">
                  Harshith P
                </span>
              </h1>
              
              {/* Dynamic Role */}
              <div className="relative h-12 overflow-hidden">
                <div className="absolute inset-0 flex items-center">
                  <span className="text-xl md:text-2xl font-light opacity-70">An </span>
                  <div className="relative ml-2">
                    <span key={currentWord} className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-tech-accent to-white bg-clip-text text-transparent animate-fade-in">
                      {roles[currentWord]}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4 animate-fade-in max-w-2xl" style={{ animationDelay: '0.3s' }}>
              <p className="text-lg md:text-xl leading-relaxed opacity-90">
                Crafting the future through intelligent cloud solutions and AI-powered applications.
              </p>
              <p className="text-base opacity-75 leading-relaxed">
                Specializing in scalable cloud architectures and innovative full-stack solutions that transform ideas into reality.
              </p>
            </div>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              {[{
                number: '5+',
                label: 'Projects',
                icon: Star
              }, {
                number: '5+',
                label: 'Years Experience',
                icon: Zap
              }, {
                number: '20+',
                label: 'Technologies',
                icon: Code
              }].map(({ number, label, icon: Icon }, index) => (
                <div key={label} className="text-center group">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-tech-accent to-white bg-clip-text text-transparent">
                    {number}
                  </div>
                  <div className="text-sm opacity-70 mt-1">{label}</div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.9s' }}>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:shadow-lg transition-all duration-500 group px-8 py-3 rounded-full font-semibold" 
                onClick={() => scrollToSection('projects')}
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Get Started
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-500 px-8 py-3 rounded-full group" 
                onClick={() => scrollToSection('contact')}
              >
                <Play className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Watch Intro
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 animate-fade-in" style={{ animationDelay: '1.2s' }}>
              {[{
                href: "https://github.com/9harshithp",
                Icon: Github,
                label: "GitHub"
              }, {
                href: "https://linkedin.com/in/harshithp914",
                Icon: Linkedin,
                label: "LinkedIn"
              }, {
                href: "mailto:harshithp914@gmail.com",
                Icon: Mail,
                label: "Email"
              }].map(({ href, Icon, label }, index) => (
                <a 
                  key={label} 
                  href={href} 
                  target={href.includes('mailto') ? undefined : "_blank"} 
                  rel={href.includes('mailto') ? undefined : "noopener noreferrer"} 
                  className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group"
                >
                  <Icon size={18} className="group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Profile Section */}
          <div className={`lg:w-2/5 flex justify-center lg:justify-end transition-all duration-1000 ${isVisible ? 'animate-slide-in-right opacity-100' : 'opacity-0'}`}>
            <div className="relative">
              {/* Main Profile Container */}
              <div className="relative group">
                {/* Background Elements */}
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full blur-2xl"></div>
                
                {/* Profile Image */}
                <div className="relative">
                  <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden relative group-hover:scale-105 transition-all duration-700 border-4 border-white/20">
                    <img 
                      src={profileImage} 
                      alt="Harshith Ponnaganti - AI & Cloud Engineer" 
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" 
                    />
                  </div>
                </div>
                
                {/* Experience Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-800">5+</div>
                    <div className="text-xs text-gray-600">Years Experience</div>
                  </div>
                </div>
                
                {/* Customer Rating Badge */}
                <div className="absolute bottom-8 -left-8 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold text-gray-800">Best Customer</div>
                    <div className="text-xs text-gray-600">Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={() => scrollToSection('about')} 
            className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors duration-300 group"
          >
            <span className="text-sm">Scroll Down</span>
            <ArrowDown size={20} className="group-hover:animate-bounce" />
          </button>
        </div>
      </div>
    </section>;
};
export default Hero;