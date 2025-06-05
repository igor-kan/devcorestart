
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, BookOpen, Users, TrendingUp } from "lucide-react";

export const CommunityFlywheel = () => {
  const strategies = [
    {
      icon: <MessageCircle className="h-6 w-6 text-blue-600" />,
      title: "Community-First",
      description: "Slack, Discord, weekly office hours",
      color: "blue"
    },
    {
      icon: <BookOpen className="h-6 w-6 text-green-600" />,
      title: "Docs as Marketing",
      description: "Dev-focused blog, real examples, transparent issues",
      color: "green"
    },
    {
      icon: <Users className="h-6 w-6 text-purple-600" />,
      title: "OSS Partnerships",
      description: "Integrations → mindshare → growth",
      color: "purple"
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-orange-600" />,
      title: "Co-marketing",
      description: "AWS Marketplace, DigitalOcean Apps",
      color: "orange"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            4️⃣ Community & GTM Flywheel
          </h2>
          <p className="text-xl text-gray-600">
            Build momentum through community engagement and strategic partnerships
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {strategies.map((strategy, index) => (
            <Card key={index} className="bg-white/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto mb-2">
                  {strategy.icon}
                </div>
                <CardTitle className="text-lg">{strategy.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 text-sm">{strategy.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-blue-100 to-purple-100 px-6 py-3 rounded-full">
            <span className="text-sm font-medium">Flywheel Effect:</span>
            <span className="text-sm text-gray-600">Community → Adoption → Contributors → Growth</span>
          </div>
        </div>
      </div>
    </section>
  );
};
