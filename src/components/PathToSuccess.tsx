
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Rocket, Lightbulb, DollarSign } from "lucide-react";

export const PathToSuccess = () => {
  const steps = [
    {
      icon: <Lightbulb className="h-6 w-6 text-yellow-500" />,
      title: "Start with single killer feature",
      description: "That's 10x easier/better than alternatives",
      color: "yellow"
    },
    {
      icon: <Rocket className="h-6 w-6 text-blue-500" />,
      title: "Build around daily pain",
      description: "That devs complain about in Slack/Reddit",
      color: "blue"
    },
    {
      icon: <DollarSign className="h-6 w-6 text-green-500" />,
      title: "Monetize after mindshare",
      description: "Only after you've earned adoption",
      color: "green"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            6️⃣ Path to Success
          </h2>
          <p className="text-xl text-gray-600">
            A proven roadmap for building successful open source companies
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-lg h-full">
                <CardHeader className="text-center">
                  <Badge variant="secondary" className="w-fit mx-auto mb-4">
                    Step {index + 1}
                  </Badge>
                  <div className="mx-auto mb-4">
                    {step.icon}
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-gray-400 transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-0 shadow-lg max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4">The Golden Rule</h3>
              <p className="text-gray-700">
                Open source companies succeed when they become the 
                <span className="font-semibold text-blue-600"> standard choice </span>
                for software engineers.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
