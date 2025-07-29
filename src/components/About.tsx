import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, User, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="bg-tech-gradient bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Get to know more about my journey, education, and what drives my passion for technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Bio */}
          <div className="space-y-8 animate-slide-up">
            <Card className="border-none shadow-card-soft bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-tech-gradient rounded-lg flex items-center justify-center mr-4">
                    <User className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Who I Am</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  I'm an aspiring Cloud and AI Engineer with a strong background in computer science and a genuine 
                  passion for building smart, scalable solutions. I've worked with tools like Python, HTML5, SQL, 
                  AWS, Google Cloud, and generative AI to create real-time and AI-powered applications.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-card-soft bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-tech-gradient rounded-lg flex items-center justify-center mr-4">
                    <Target className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">My Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  From leading backend efforts in team projects to participating in national tech challenges, 
                  I enjoy turning ideas into impactful solutions. My goal is to leverage cutting-edge technology 
                  to solve real-world problems and create meaningful experiences.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Education */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Card className="border-none shadow-card-soft bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-tech-gradient rounded-lg flex items-center justify-center mr-4">
                    <GraduationCap className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Education</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-6 pb-6">
                    <div className="bg-tech-gradient-light rounded-lg p-6">
                      <h4 className="text-xl font-semibold text-foreground mb-2">
                        B.E. in Computer Science Engineering
                      </h4>
                      <p className="text-primary font-medium mb-2">
                        VidyaVikas Institute of Engineering and Technology
                      </p>
                      <p className="text-muted-foreground">2022 – 2026</p>
                      <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                        Focusing on software engineering, cloud computing, artificial intelligence, 
                        and modern development practices.
                      </p>
                    </div>
                  </div>

                  <div className="border-l-4 border-secondary pl-6">
                    <div className="bg-secondary/20 rounded-lg p-6">
                      <h4 className="text-xl font-semibold text-foreground mb-2">
                        PUC in PCMB
                      </h4>
                      <p className="text-primary font-medium mb-2">
                        Expert PU College Mangalore
                      </p>
                      <p className="text-muted-foreground">Graduated 2021</p>
                      <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                        Strong foundation in Physics, Chemistry, Mathematics, and Biology 
                        with excellence in analytical thinking.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;