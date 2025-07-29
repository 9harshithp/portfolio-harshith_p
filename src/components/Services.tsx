import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Globe, Cloud, Brain, Code } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Responsive, scalable applications with modern web stacks",
      features: [
        "Full-stack development with Python & JavaScript",
        "Responsive design for all devices",
        "Modern frameworks and libraries",
        "Performance optimization"
      ],
      color: "bg-blue-500"
    },
    {
      icon: Cloud,
      title: "Cloud Consulting",
      description: "Deployment, architecture, and optimization on cloud platforms",
      features: [
        "AWS & Google Cloud deployment",
        "Serverless architecture design",
        "Cost optimization strategies",
        "Infrastructure automation"
      ],
      color: "bg-purple-500"
    },
    {
      icon: Brain,
      title: "AI Integration",
      description: "Smart applications using generative AI and chatbot frameworks",
      features: [
        "Custom AI chatbot development",
        "Generative AI implementation",
        "Machine learning model integration",
        "AI-powered automation"
      ],
      color: "bg-green-500"
    },
    {
      icon: Code,
      title: "Project Support",
      description: "Code reviews, debugging, and mentorship for student projects",
      features: [
        "Code review and optimization",
        "Technical mentorship",
        "Problem-solving assistance",
        "Best practices guidance"
      ],
      color: "bg-orange-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            My <span className="bg-tech-gradient bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions to help bring your ideas to life with cutting-edge technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="border-none shadow-card-soft hover:shadow-tech transition-all duration-300 transform hover:-translate-y-2 animate-slide-up bg-card/50 backdrop-blur-sm group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-tech-gradient rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-tech-gradient hover:text-white hover:border-transparent transition-all duration-300"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-tech-gradient-light rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Let's collaborate to turn your ideas into reality with the latest in cloud and AI technology.
            </p>
            <Button 
              size="lg"
              className="bg-tech-gradient hover:shadow-glow transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Work Together
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;