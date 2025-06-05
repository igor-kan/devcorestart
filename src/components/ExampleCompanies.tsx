
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

export const ExampleCompanies = () => {
  const companies = [
    {
      name: "GitLab",
      description: "DevOps platform, OSS to enterprise powerhouse",
      model: "Complete DevOps lifecycle",
      color: "orange"
    },
    {
      name: "Supabase",
      description: "Firebase alternative, open source with paid cloud",
      model: "Backend-as-a-Service",
      color: "green"
    },
    {
      name: "Airbyte",
      description: "Open source ELT pipelines with cloud offering",
      model: "Data integration platform",
      color: "blue"
    },
    {
      name: "Redpanda",
      description: "Kafka-compatible event streaming, commercial support",
      model: "Real-time data streaming",
      color: "red"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            🌍 Example Companies
          </h2>
          <p className="text-xl text-gray-600">
            Learn from successful commercial open source companies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {companies.map((company, index) => (
            <Card key={index} className="bg-white/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow group cursor-pointer">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-bold">{company.name}</CardTitle>
                  <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </div>
                <Badge variant="outline" className={`w-fit text-${company.color}-600 border-${company.color}-200`}>
                  {company.model}
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{company.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-gray-50 to-gray-100 border-0 shadow-lg max-w-3xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4">Common Success Patterns</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-semibold mb-2 text-blue-600">Open Source First</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Strong community adoption</li>
                    <li>• Developer-friendly approach</li>
                    <li>• Transparent development</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-purple-600">Commercial Layer</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Managed cloud offerings</li>
                    <li>• Enterprise features</li>
                    <li>• Professional support</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
