import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import profileImage from '@/assets/harshith-profile.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-hero-gradient relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-tech-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-tech-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen">
          {/* Left Content */}
          <div className="lg:w-1/2 text-white space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-lg md:text-xl font-medium opacity-90">
                Hello, I'm
              </h2>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Harshith P
                <br />
                <span className="text-tech-accent">
                  An AI & Cloud Engineer
                </span>
              </h1>
              <p className="text-xl md:text-2xl opacity-90 max-w-2xl">
                Building the Future with Cloud & AI
              </p>
              <p className="text-lg opacity-80 max-w-xl leading-relaxed">
                Passionate about creating scalable, intelligent solutions that make a difference. 
                I specialize in cloud platforms, generative AI, and full-stack development.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-white/90 hover:shadow-glow transition-all duration-300"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary transition-all duration-300"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </Button>
            </div>

            <div className="flex space-x-6 pt-4">
              <a 
                href="https://github.com/9harshithp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-tech-accent transition-colors duration-300 transform hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com/in/harshithp914" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-tech-accent transition-colors duration-300 transform hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:harshithp914@gmail.com"
                className="text-white hover:text-tech-accent transition-colors duration-300 transform hover:scale-110"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0">
            <div className="relative animate-slide-in-right">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-glow">
                <img 
                  src={profileImage} 
                  alt="Harshith P - Cloud & AI Engineer" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-tech-accent rounded-full flex items-center justify-center text-white font-bold text-lg animate-pulse-glow">
                AI
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-white rounded-full flex items-center justify-center text-primary font-bold animate-bounce-gentle">
                ☁️
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-white hover:text-tech-accent transition-colors duration-300"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;