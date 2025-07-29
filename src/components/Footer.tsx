import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left - Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-2">Harshith P</h3>
            <p className="text-background/80">
              Cloud & AI Engineer
            </p>
            <p className="text-background/70 text-sm mt-2">
              Building the future with intelligent solutions
            </p>
          </div>

          {/* Center - Social Links */}
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/9harshithp" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-background/80 hover:text-tech-accent transition-colors duration-300 transform hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/harshithp914" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-background/80 hover:text-tech-accent transition-colors duration-300 transform hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:harshithp914@gmail.com"
              className="text-background/80 hover:text-tech-accent transition-colors duration-300 transform hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* Right - Copyright */}
          <div className="text-center md:text-right">
            <p className="text-background/80 text-sm">
              © {currentYear} Harshith P. All rights reserved.
            </p>
            <p className="text-background/70 text-xs mt-1 flex items-center justify-center md:justify-end gap-1">
              Made with <Heart size={12} className="text-red-400" /> using React & Tailwind
            </p>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/70 text-sm">
            Open to new opportunities and exciting collaborations. Let's build something amazing together!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;