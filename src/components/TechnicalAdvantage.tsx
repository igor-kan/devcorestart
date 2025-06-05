
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Users, Target } from "lucide-react";

export const TechnicalAdvantage = () => {
  const advantages = [
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Ship fast → early adopters = contributors",
      description: "Technical founders can iterate quickly based on real user feedback"
    },
    {
      icon: <Target className="h-8 w-8 text-blue-500" />,
      title: "Iterate openly → roadmap driven by real usage",
      description: "Transparent development process builds trust and community"
    },
    {
      icon: <Users className="h-8 w-8 text-green-500" />,
      title: "Sell to engineers → skip top-down enterprise sales BS",
      description: "Engineer-to-engineer communication is more natural and effective"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            5️⃣ Technical Founders' Edge
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Why technical founders have a natural advantage in the open source space
          </p>
        </div>

        <div className="space-y-6">
          {advantages.map((advantage, index) => (
            <Card key={index} className="bg-white/50 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    {advantage.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
                    <p className="text-gray-600">{advantage.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-yellow-50 via-blue-50 to-green-50 p-8 rounded-xl">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">The Natural Advantage</h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              It's more natural for technical founders to talk to users who are engineers just like them, 
              and they can iterate faster since they'll get feedback from the open source community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
