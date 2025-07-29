import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Cloud, Brain, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Technical Skills",
      color: "bg-blue-500",
      skills: [
        "Python", "C", "SQL", "HTML", "CSS", 
        "Flask", "PHP", "JavaScript", "Firebase"
      ]
    },
    {
      icon: Cloud,
      title: "Cloud & Infrastructure",
      color: "bg-purple-500",
      skills: [
        "AWS", "Google Cloud", "EC2", "Lambda", 
        "S3", "Cloud Functions", "Firebase"
      ]
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      color: "bg-green-500",
      skills: [
        "Generative AI", "Dialogflow", "Machine Learning", 
        "AI Integration", "Chatbot Development"
      ]
    },
    {
      icon: Users,
      title: "Soft Skills",
      color: "bg-orange-500",
      skills: [
        "Problem Solving", "Team Collaboration", 
        "Project Management", "Communication", "Leadership"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            My <span className="bg-tech-gradient bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical expertise and professional capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="border-none shadow-card-soft hover:shadow-tech transition-all duration-300 transform hover:-translate-y-2 animate-slide-up bg-card/50 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 ${category.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <category.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="bg-tech-gradient-light text-primary hover:bg-tech-gradient hover:text-white transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technical Proficiency Bars */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Technical Proficiency
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { skill: "Python & Backend Development", level: 90 },
              { skill: "Cloud Platforms (AWS, GCP)", level: 85 },
              { skill: "Generative AI & ML", level: 80 },
              { skill: "Full-Stack Development", level: 85 },
              { skill: "Database Management", level: 82 },
              { skill: "Project Management", level: 88 }
            ].map((item, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-between mb-2">
                  <span className="text-foreground font-medium">{item.skill}</span>
                  <span className="text-primary font-bold">{item.level}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-3">
                  <div 
                    className="bg-tech-gradient h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;