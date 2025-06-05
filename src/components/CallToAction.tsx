
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Github, BookOpen, TrendingUp, Users } from "lucide-react";

export const CallToAction = () => {
  const services = [
    {
      icon: <CheckCircle className="h-5 w-5 text-green-600" />,
      title: "README & Launch Checklist",
      description: "Scaffolding your first open source project"
    },
    {
      icon: <Users className="h-5 w-5 text-blue-600" />,
      title: "Governance Models",
      description: "For long-term sustainability"
    },
    {
      icon: <TrendingUp className="h-5 w-5 text-purple-600" />,
      title: "Pitch Deck Template",
      description: "Investor/founder story in YC style"
    },
    {
      icon: <BookOpen className="h-5 w-5 text-orange-600" />,
      title: "Competitive Analysis",
      description: "Where your OSS project will stand out"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            🚀 Ready to Build?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            You have the expertise, the community is waiting — let's build something that 
            outlasts hype cycles and becomes the default choice for developers worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lg">
                  {service.icon}
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-8">
          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Start Your Journey</h3>
              <p className="text-gray-600 mb-6">
                Join the ranks of successful open source companies and build the tools 
                that developers around the world will depend on.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Github className="mr-2 h-5 w-5" />
                  Start Building
                </Button>
                <Button variant="outline" size="lg">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary">Open Source</Badge>
            <Badge variant="secondary">Developer Tools</Badge>
            <Badge variant="secondary">Commercial Success</Badge>
            <Badge variant="secondary">YC Portfolio</Badge>
          </div>

          <p className="text-lg font-medium text-gray-700 max-w-2xl mx-auto">
            🌟💻 Build something that outlasts hype cycles and becomes the default choice for developers worldwide.
          </p>
        </div>
      </div>
    </section>
  );
};
