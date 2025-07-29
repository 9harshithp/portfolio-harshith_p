import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, Cloud, Code, Heart } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      icon: Cloud,
      title: "Cloud Computing Intern",
      company: "Tech Company",
      period: "Apr 2025 – Jul 2025",
      type: "Internship",
      description: [
        "Deployed applications on AWS and GCP platforms",
        "Worked extensively with EC2, Lambda, and S3 services",
        "Focused on performance optimization and automation",
        "Gained hands-on experience with cloud infrastructure"
      ],
      color: "bg-blue-500"
    },
    {
      icon: Code,
      title: "Project Contributor",
      company: "Academic & Personal Projects",
      period: "2024 – 2025",
      type: "Development",
      description: [
        "Collaborated on several tech-focused academic projects",
        "Led backend development efforts in team environments",
        "Participated in national tech challenges and competitions",
        "Developed real-time and AI-powered applications"
      ],
      color: "bg-purple-500"
    },
    {
      icon: Heart,
      title: "Tech Volunteer",
      company: "NGO Community Initiative",
      period: "Current – Nov 2025",
      type: "Volunteer",
      description: [
        "Providing technical support to community organizations",
        "Contributing to community-focused digital initiatives",
        "Helping bridge the digital divide through technology",
        "Mentoring youth in programming and tech skills"
      ],
      color: "bg-green-500"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            My <span className="bg-tech-gradient bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A journey through my professional growth and contributions to the tech community
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="border-none shadow-card-soft hover:shadow-tech transition-all duration-300 transform hover:-translate-y-2 animate-slide-up bg-card/50 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  {/* Icon and Title */}
                  <div className="flex items-center gap-6 lg:w-1/3">
                    <div className={`w-16 h-16 ${exp.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <exp.icon className="text-white" size={32} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-primary font-semibold">
                        {exp.company}
                      </p>
                      <div className="flex items-center gap-3 mt-2">
                        <span className="text-muted-foreground">{exp.period}</span>
                        <span className="px-3 py-1 bg-tech-gradient-light text-primary text-sm rounded-full font-medium">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="lg:w-2/3">
                    <ul className="grid md:grid-cols-2 gap-3">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-tech-gradient rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;