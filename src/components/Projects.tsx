import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Calendar, Users, Database, MessageSquare } from 'lucide-react';
const Projects = () => {
  const projects = [{
    icon: Calendar,
    title: "PharmaSure",
    description: "Intelligent medicine expiry prediction system that alerts pharmacy staff before medications expire, reducing waste and ensuring patient safety.",
    technologies: ["Python", "Firebase", "Cloud Functions", "Machine Learning"],
    features: ["Real-time expiry tracking", "Automated alert system", "Inventory management", "Analytics dashboard"],
    color: "bg-blue-500",
    category: "Healthcare Tech"
  }, {
    icon: MessageSquare,
    title: "FemCare",
    description: "AI-powered chatbot specifically designed for women's health, providing personalized guidance and support using advanced natural language processing.",
    technologies: ["Flask", "Dialogflow", "Python", "Natural Language Processing"],
    features: ["Personalized health guidance", "24/7 AI support", "Privacy-focused design", "Multi-language support"],
    color: "bg-pink-500",
    category: "AI Healthcare"
  }, {
    icon: Users,
    title: "Cloud Chat App",
    description: "Secure, real-time messaging application built with cloud-native architecture, featuring end-to-end encryption and scalable infrastructure.",
    technologies: ["AWS", "Firebase", "React", "WebSockets"],
    features: ["Real-time messaging", "End-to-end encryption", "Cloud-based scaling", "Multi-device sync"],
    color: "bg-purple-500",
    category: "Cloud App"
  }, {
    icon: Database,
    title: "Online Voting System",
    description: "Comprehensive digital voting platform with secure authentication, transparent vote tracking, and real-time result compilation.",
    technologies: ["PHP", "MySQL", "JavaScript", "Security Protocols"],
    features: ["Secure authentication", "Anonymous voting", "Real-time results", "Audit trail system"],
    color: "bg-green-500",
    category: "Web Application"
  }];
  return <section id="projects" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            My <span className="bg-tech-gradient bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of innovative solutions I've built, from AI-powered applications to cloud-native systems
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => <Card key={index} className="border-none shadow-card-soft hover:shadow-tech transition-all duration-300 transform hover:-translate-y-2 animate-slide-up bg-card/50 backdrop-blur-sm group" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-14 h-14 ${project.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <project.icon className="text-white" size={28} />
                    </div>
                    <Badge variant="secondary" className="bg-tech-gradient-light text-primary">
                      {project.category}
                    </Badge>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3">Key Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => <div key={featureIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-tech-gradient rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>)}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => <Badge key={techIndex} variant="outline" className="border-primary/30 text-primary hover:bg-primary hover:text-white transition-colors duration-300">
                        {tech}
                      </Badge>)}
                  </div>
                </div>

              </CardContent>
            </Card>)}
        </div>

        <div className="text-center mt-16">
          <div className="bg-tech-gradient rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              More Projects Coming Soon!
            </h3>
            <p className="text-xl mb-6 leading-relaxed opacity-90">
              I'm constantly working on new innovative projects. Follow my GitHub to stay updated with my latest work.
            </p>
            <Button size="lg" variant="outline" onClick={() => window.open('https://github.com/9harshithp', '_blank')} className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:shadow-lg transition-all duration-500 group px-8 py-3 rounded-full font-semibold">
              <Github className="w-5 h-5 mr-2" />
              Follow on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Projects;